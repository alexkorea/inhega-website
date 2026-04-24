import { config } from 'dotenv';
config({ path: '.env.local' });
import { getServiceClient } from '../lib/supabase/server';
import { LAW_MAPPINGS } from '../lib/rag/law-mapping';
import {
  searchLaw,
  pickBestHit,
  fetchLawDetail,
  extractArticles,
  extractArticleContent,
  extractBasicInfo,
} from '../lib/rag/law-api';

async function main() {
  const sb = getServiceClient();

  const { data: cats, error: catErr } = await sb
    .from('rag_categories')
    .select('id, slug, name');
  if (catErr) throw catErr;
  const catBySlug = new Map((cats ?? []).map((c) => [c.slug, c]));

  const only = process.argv[2];
  const targets = only
    ? LAW_MAPPINGS.filter((m) => m.categorySlug === only)
    : LAW_MAPPINGS;

  for (const m of targets) {
    const cat = catBySlug.get(m.categorySlug);
    if (!cat) {
      console.error(`[skip] category not seeded: ${m.categorySlug}`);
      continue;
    }
    console.log(`\n=== ${cat.name} (${m.categorySlug}) ===`);
    for (const lawName of m.laws) {
      await ingestLaw(sb, cat.id, lawName);
      await sleep(400);
    }
  }
  console.log('\ndone.');
}

async function ingestLaw(sb: ReturnType<typeof getServiceClient>, categoryId: number, lawName: string) {
  try {
    const hits = await searchLaw(lawName);
    const hit = pickBestHit(lawName, hits);
    if (!hit) {
      console.error(`[miss] no hit: ${lawName}`);
      return;
    }

    const detail = await fetchLawDetail({
      mst: hit.법령일련번호,
      id: hit.법령ID,
      lawName: hit.법령명한글,
    });
    const basic = extractBasicInfo(detail);
    const displayName = basic.lawName ?? hit.법령명한글 ?? lawName;
    const sourceUrl = `https://www.law.go.kr/법령/${encodeURIComponent(displayName)}`;

    const { data: lawRow, error: lawErr } = await sb
      .from('rag_laws')
      .upsert(
        {
          category_id: categoryId,
          law_id: basic.lawId ?? hit.법령ID ?? null,
          mst: basic.mst ?? hit.법령일련번호 ?? null,
          law_name: displayName,
          law_type: basic.lawType ?? hit.법령구분명 ?? null,
          department: basic.department ?? hit.소관부처명 ?? null,
          promulgation_date: basic.promulgationDate ?? null,
          enforcement_date: basic.enforcementDate ?? null,
          source_url: sourceUrl,
          fetched_at: new Date().toISOString(),
        },
        { onConflict: 'category_id,law_name' }
      )
      .select('id')
      .single();
    if (lawErr) throw lawErr;

    await sb.from('rag_law_articles').delete().eq('law_id', lawRow.id);

    const articles = extractArticles(detail);
    const rows = articles
      .map((a, i) => {
        const content = extractArticleContent(a);
        if (!content) return null;
        const no = a.조문번호
          ? `제${a.조문번호}조${a.조문가지번호 && a.조문가지번호 !== '0' ? `의${a.조문가지번호}` : ''}`
          : null;
        return {
          law_id: lawRow.id,
          article_no: no,
          article_title: a.조문제목 ?? null,
          content,
          sort_order: i,
        };
      })
      .filter((x): x is NonNullable<typeof x> => !!x);

    if (rows.length) {
      const chunks = chunk(rows, 500);
      for (const c of chunks) {
        const { error } = await sb.from('rag_law_articles').insert(c);
        if (error) throw error;
      }
    }

    console.log(`[ok] ${displayName} — ${rows.length} articles`);
  } catch (e) {
    console.error(`[fail] ${lawName}:`, (e as Error).message);
  }
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
