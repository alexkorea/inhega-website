const BASE = process.env.LAW_API_BASE ?? 'https://www.law.go.kr/DRF';
const OC = process.env.LAW_API_OC ?? 'visionlaw';

export type LawSearchHit = {
  법령ID?: string;
  법령일련번호?: string;
  법령명한글?: string;
  법령약칭명?: string;
  법령구분명?: string;
  소관부처명?: string;
  공포일자?: string;
  시행일자?: string;
  현행연혁코드?: string;
};

export type LawArticle = {
  조문번호?: string;
  조문가지번호?: string;
  조문제목?: string;
  조문내용?: string;
  항?: unknown;
};

export async function searchLaw(query: string): Promise<LawSearchHit[]> {
  const url = `${BASE}/lawSearch.do?OC=${OC}&target=law&type=JSON&query=${encodeURIComponent(query)}&display=20`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`lawSearch ${res.status} for ${query}`);
  const raw = await res.text();
  const json = safeJson(raw);
  const payload = json?.LawSearch;
  if (!payload) return [];
  const hits = payload.law;
  if (!hits) return [];
  return Array.isArray(hits) ? hits : [hits];
}

export async function fetchLawDetail(params: {
  mst?: string;
  id?: string;
  lawName?: string;
}): Promise<any> {
  const qs = new URLSearchParams({ OC, target: 'law', type: 'JSON' });
  if (params.mst) qs.set('MST', params.mst);
  else if (params.id) qs.set('ID', params.id);
  else if (params.lawName) qs.set('LM', params.lawName);
  else throw new Error('fetchLawDetail requires mst, id, or lawName');

  const url = `${BASE}/lawService.do?${qs.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`lawService ${res.status}`);
  const raw = await res.text();
  return safeJson(raw);
}

export function pickBestHit(query: string, hits: LawSearchHit[]): LawSearchHit | null {
  if (hits.length === 0) return null;
  const normalized = query.replace(/\s/g, '');
  const exact = hits.find(
    (h) => (h.법령명한글 ?? '').replace(/\s/g, '') === normalized
  );
  if (exact) return exact;
  const currentExact = hits.find(
    (h) =>
      (h.법령명한글 ?? '').replace(/\s/g, '') === normalized &&
      h.현행연혁코드 === '현행'
  );
  if (currentExact) return currentExact;
  return hits[0];
}

export function extractArticles(detail: any): LawArticle[] {
  const law = detail?.법령;
  if (!law) return [];
  const jomun = law.조문?.조문단위;
  if (!jomun) return [];
  return Array.isArray(jomun) ? jomun : [jomun];
}

export function extractBasicInfo(detail: any): {
  lawId?: string;
  mst?: string;
  lawName?: string;
  lawType?: string;
  department?: string;
  promulgationDate?: string;
  enforcementDate?: string;
} {
  const basic = detail?.법령?.기본정보 ?? {};
  return {
    lawId: str(basic.법령ID ?? basic['법령ID']),
    mst: str(basic.법령일련번호 ?? basic['법령일련번호']),
    lawName: str(basic.법령명_한글 ?? basic.법령명한글 ?? basic['법령명_한글']),
    lawType: str(basic.법종구분?.content ?? basic.법종구분 ?? basic.법령구분명),
    department: str(basic.소관부처?.content ?? basic.소관부처 ?? basic.소관부처명),
    promulgationDate: toIsoDate(str(basic.공포일자)),
    enforcementDate: toIsoDate(str(basic.시행일자)),
  };
}

export function extractArticleContent(a: LawArticle): string {
  const parts: string[] = [];
  if (a.조문내용) parts.push(String(a.조문내용).trim());
  const hangItems = toArray((a as any).항);
  for (const h of hangItems) {
    if (h?.항내용) parts.push(String(h.항내용).trim());
    for (const ho of toArray(h?.호)) {
      if (ho?.호내용) parts.push(String(ho.호내용).trim());
      for (const mok of toArray(ho?.목)) {
        if (mok?.목내용) parts.push(String(mok.목내용).trim());
      }
    }
  }
  return parts.filter(Boolean).join('\n');
}

function toArray<T>(v: T | T[] | undefined | null): T[] {
  if (v === undefined || v === null) return [];
  return Array.isArray(v) ? v : [v];
}

function safeJson(text: string): any {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function str(v: unknown): string | undefined {
  if (v === null || v === undefined) return undefined;
  const s = String(v).trim();
  return s.length ? s : undefined;
}

function toIsoDate(s?: string): string | undefined {
  if (!s) return undefined;
  const digits = s.replace(/[^0-9]/g, '');
  if (digits.length !== 8) return undefined;
  return `${digits.slice(0, 4)}-${digits.slice(4, 6)}-${digits.slice(6, 8)}`;
}
