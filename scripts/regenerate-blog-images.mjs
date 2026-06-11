// 인허가 블로그 포스트 주제별 Pexels 이미지 생성·교체 (보스 16453, 2026-06-11).

import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = "/Users/chloe/inhega-renewal-site";
const CONTENT = join(ROOT, "content/blog");
const PUBLIC_BLOG = join(ROOT, "public/blog");
const PEXELS_KEY = readFileSync("/Users/chloe/secrets/pexels_api_key.txt", "utf-8").trim();

if (!existsSync(PUBLIC_BLOG)) mkdirSync(PUBLIC_BLOG, { recursive: true });

const TOPIC_KEYWORDS = [
  { match: /숙박|게스트하우스|에어비앤비|호스텔|모텔|여관/, q: "hotel reception modern korea" },
  { match: /음식점|식당|위생|식품/, q: "restaurant kitchen chef korean" },
  { match: /노래방|단란주점|유흥|주류/, q: "karaoke neon city night" },
  { match: /게임|오락실/, q: "arcade game center modern" },
  { match: /화장품|cosmetic/, q: "cosmetics laboratory beauty" },
  { match: /건축|건축물|용도변경/, q: "modern korean building architecture" },
  { match: /소방|fire safety|fire/, q: "fire safety equipment building" },
  { match: /학원|교육시설|academy|하건|hagwon/, q: "education classroom modern asian" },
  { match: /통신판매|쇼핑몰|이커머스|온라인/, q: "ecommerce online shopping office" },
  { match: /동물|반려|pet/, q: "veterinary pet clinic" },
  { match: /이미용|미용실|beauty|salon/, q: "beauty salon hairdresser" },
  { match: /자동차|정비|차량/, q: "car repair garage mechanic" },
  { match: /의료|병원|클리닉|medical/, q: "medical clinic hospital korea" },
  { match: /약국|pharmacy|약사/, q: "pharmacy drugstore modern" },
  { match: /수입|수출|무역|trade/, q: "shipping container trade port" },
  { match: /건설|시공|construction/, q: "construction site building" },
  { match: /부동산|중개|realtor/, q: "real estate office korea" },
  { match: /제조|공장|factory/, q: "factory manufacturing industry" },
  { match: /물류|운송|배송|logistics/, q: "logistics warehouse delivery" },
  { match: /도소매|유통/, q: "retail store warehouse" },
  { match: /청소|위생|환경/, q: "cleaning service uniform" },
  { match: /세탁|laundry/, q: "laundry service uniform" },
  { match: /방역|소독/, q: "disinfection sanitation worker" },
  { match: /수영장|swimming/, q: "swimming pool modern" },
  { match: /체육|fitness|헬스/, q: "fitness gym modern asian" },
  { match: /보육|어린이집|키즈/, q: "kindergarten daycare children" },
  { match: /요양|노인|복지/, q: "elderly care nursing home" },
  { match: /콜라텍|무도장|dance/, q: "dance studio ballroom" },
  { match: /펜션|pension/, q: "pension countryside vacation" },
  { match: /카페|coffee|커피/, q: "modern cafe coffee korea" },
  { match: /제과|bakery|빵/, q: "bakery bread pastry shop" },
  { match: /수상|레저|마리나/, q: "marina water leisure" },
  { match: /목욕|찜질|sauna/, q: "korean spa sauna wellness" },
  { match: /폐기물|쓰레기|환경/, q: "recycling waste management facility" },
  { match: /목공|가구|furniture/, q: "carpenter wood workshop" },
  { match: /도장|페인트|paint/, q: "paint construction worker" },
  { match: /인테리어|interior/, q: "interior design office modern" },
  { match: /행정사|법무|상담/, q: "consultation office meeting korean" },
  { match: /휴게|rest|rest-restaurant/, q: "korean cafe restaurant interior" },
  { match: /허가|신고|등록|개시|영업/, q: "office paperwork document signing" },
  { match: /.*/, q: "office business korea modern" },
];

function pickKeyword(title) {
  for (const r of TOPIC_KEYWORDS) {
    if (r.match.test(title)) return r.q;
  }
  return "office business korea modern";
}

async function pexelsSearch(query, page = 1) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${page}&orientation=landscape`;
  const r = await fetch(url, { headers: { Authorization: PEXELS_KEY } });
  if (!r.ok) throw new Error(`Pexels HTTP ${r.status}`);
  const j = await r.json();
  return j.photos || [];
}

async function downloadImage(url, path) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`download HTTP ${r.status}`);
  const buf = await r.arrayBuffer();
  writeFileSync(path, Buffer.from(buf));
}

function updateFrontmatter(content, newImage) {
  const lines = content.split("\n");
  let inFm = false;
  let fmEnd = -1;
  let imgIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.trim() === "---") {
      if (!inFm) inFm = true;
      else { fmEnd = i; break; }
    } else if (inFm && /^image:\s*/.test(l)) {
      imgIdx = i;
    }
  }
  if (imgIdx >= 0) lines[imgIdx] = `image: "${newImage}"`;
  else if (fmEnd > 0) lines.splice(fmEnd, 0, `image: "${newImage}"`);
  return lines.join("\n");
}

const files = readdirSync(CONTENT).filter((f) => f.endsWith(".md"));
console.log(`Found ${files.length} blog posts`);

const usedPhotoIds = new Set();
const results = [];

for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const filePath = join(CONTENT, file);
  const slug = file.replace(/\.md$/, "");
  const targetPath = join(PUBLIC_BLOG, `${slug}.jpg`);
  const webPath = `/blog/${slug}.jpg`;

  try {
    const content = readFileSync(filePath, "utf-8");
    const titleMatch = content.match(/^title:\s*"?(.+?)"?\s*$/m);
    const title = titleMatch ? titleMatch[1] : slug;
    const query = pickKeyword(title);

    let chosen = null;
    for (let page = 1; page <= 3 && !chosen; page++) {
      const photos = await pexelsSearch(query, page);
      for (const p of photos) {
        if (!usedPhotoIds.has(p.id)) {
          chosen = p;
          usedPhotoIds.add(p.id);
          break;
        }
      }
    }
    if (!chosen) {
      const photos = await pexelsSearch(query, 1);
      chosen = photos[0];
      if (!chosen) throw new Error("No Pexels result");
    }

    const dlUrl = chosen.src.large || chosen.src.original;
    await downloadImage(dlUrl, targetPath);

    const newContent = updateFrontmatter(content, webPath);
    writeFileSync(filePath, newContent, "utf-8");

    console.log(`[${i + 1}/${files.length}] ${slug} → ${query} (${chosen.id})`);
    results.push({ slug, query, photoId: chosen.id, ok: true });
  } catch (e) {
    console.error(`[${i + 1}/${files.length}] ${slug} FAIL: ${e.message}`);
    results.push({ slug, ok: false, error: e.message });
  }
  await new Promise((r) => setTimeout(r, 300));
}

const ok = results.filter((r) => r.ok).length;
console.log(`\nDone: ${ok}/${files.length} updated, ${results.length - ok} failed`);
writeFileSync(join(ROOT, "blog-image-regen-report.json"), JSON.stringify(results, null, 2));
