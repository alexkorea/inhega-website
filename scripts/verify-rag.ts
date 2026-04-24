import { config } from 'dotenv';
config({ path: '.env.local' });
import { getServiceClient } from '../lib/supabase/server';

async function main() {
  const sb = getServiceClient();
  const { data, error } = await sb
    .from('rag_categories')
    .select('slug, name, rag_laws(law_name, rag_law_articles(count))')
    .order('sort_order');
  if (error) throw error;
  let total = 0;
  for (const c of data ?? []) {
    const laws = (c as any).rag_laws ?? [];
    console.log(`\n# ${c.name} (${c.slug})`);
    for (const l of laws) {
      const cnt = l.rag_law_articles?.[0]?.count ?? 0;
      total += cnt;
      console.log(`  - ${l.law_name}: ${cnt} articles`);
    }
    if (!laws.length) console.log('  (no laws)');
  }
  console.log(`\nTOTAL articles: ${total}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
