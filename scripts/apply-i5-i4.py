#!/usr/bin/env python3
"""inhega I5 보강 패치 + I4 3종 세트 블로그 임포트 (맥7 2026-10-03 0335·0500 지시).

한 번만 돌리는 임포터다. 깨끗한 소스(git checkout 직후)에서 실행한다 — 이미 적용된 흔적이
있으면 중단한다.

  python3 scripts/apply-i5-i4.py            # 적용
  python3 scripts/apply-i5-i4.py --check    # 적용 후 원고 대조만

입력
  NAS team-relay/seo-keywords/20261002/inhega-I5/patches.jsonl  (333행)
  NAS team-relay/seo-keywords/20261002/inhega-I4/<item>-{select,fix}/<slug>.ko.{md,json}
  /tmp/i5/bodies/*.json  — 신설 H2 본문(기존 페이지·I5 FAQ·I4 원고 문장 그대로 인용, 문장 단위 대조 통과분)
  /tmp/i5/fix/homestay.html — foreigner-homestay-fire-tax 법령 대조 정정본

원칙
  - 원고 문장 무가감. I4 원고의 모든 줄은 출력 HTML 에 그대로 들어간다(--check 로 확인).
  - FAQPage JSON-LD 는 화면 FAQ 배열에서만 만든다(레이아웃 전역 FAQ 제거와 짝).
"""
import glob
import html
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NAS = '/Volumes/Home.mickey/NAS공유폴더ko-visas-team/team-relay/seo-keywords/20261002'
PATCHES = f'{NAS}/inhega-I5/patches.jsonl'
I4 = f'{NAS}/inhega-I4'
BODIES = '/tmp/i5/bodies'
SVC = os.path.join(ROOT, 'lib/services-data.ts')
BLOG = os.path.join(ROOT, 'lib/blog-posts-data.ts')
GUIDES = os.path.join(ROOT, 'lib/hub-guides.generated.ts')
SUFFIX = ' | 유선행정사사무소'
I4_DATE = '2026-10-03T00:00:00Z'


def sq(s):
    """TS single-quoted string literal body."""
    return s.replace('\\', '\\\\').replace("'", "\\'")


def tl(s):
    """TS template literal body."""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


def strip(h):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', h))).strip()


def load_rows():
    return [json.loads(l) for l in open(PATCHES, encoding='utf-8') if l.strip()]


def load_bodies():
    out = {}
    for f in glob.glob(f'{BODIES}/*.json'):
        key = os.path.basename(f)[:-5]
        url = '/' + key.replace('services_', 'services/').replace('blog_', 'blog/')
        for e in json.load(open(f, encoding='utf-8')):
            out[(url, e['h2'])] = e['html']
    return out


def qa(after):
    m = re.match(r'Q\.\s*(.*?)\nA\.\s*(.*)$', after, re.S)
    assert m, after
    return m.group(1).strip(), m.group(2).strip()


# ── 블록 찾기 ───────────────────────────────────────────────────────────────
def block_span(src, slug):
    i = src.index(f"    slug: '{slug}',\n")
    start = src.rindex('\n  {\n', 0, i) + 1
    m = re.compile(r'\n  \},?\n').search(src, i)
    return start, m.end()


def set_field(block, name, value):
    pat = re.compile(rf"^    {name}: '((?:[^'\\]|\\.)*)',$", re.M)
    m = pat.search(block)
    assert m, (name, block[:200])
    return block[:m.start()] + f"    {name}: '{sq(value)}'," + block[m.end():]


def get_field(block, name):
    m = re.search(rf"^    {name}: '((?:[^'\\]|\\.)*)',$", block, re.M)
    return m.group(1).replace("\\'", "'").replace('\\\\', '\\') if m else None


# ── 서비스 허브 ─────────────────────────────────────────────────────────────
def h2_section_end(ov, pos):
    """pos 다음 첫 <h2 위치(없으면 끝)."""
    n = ov.find('<h2', pos)
    return len(ov) if n < 0 else n


def patch_service(src, slug, rows, bodies, guides_note):
    a, b = block_span(src, slug)
    blk = src[a:b]
    url = f'/services/{slug}'
    title = next((r['after'] for r in rows if r['field'] == 'title'), None)
    h1 = next((r['after'] for r in rows if r['field'] == 'h1'), None)
    if h1:
        assert get_field(blk, 'title') == next(r['before'] for r in rows if r['field'] == 'h1')
        blk = set_field(blk, 'title', h1)
    if title:
        cur_h1 = h1 or get_field(blk, 'title')
        if title != cur_h1 + SUFFIX:
            blk = blk.replace(f"    title: '{sq(cur_h1)}',\n",
                              f"    title: '{sq(cur_h1)}',\n    seoTitle: '{sq(title)}',\n", 1)
    for r in rows:
        if r['field'] == 'meta_description+첫문단':
            assert html.unescape(get_field(blk, 'description')) == html.unescape(r['before']), slug
            blk = set_field(blk, 'description', r['after'])

    # overview (template literal)
    om = re.search(r'    overview: `(.*?)`,?\n', blk, re.S)
    ov = om.group(1)
    n_new = 0
    for r in rows:
        if r['field'] == 'h2':
            old, new = r['before'], r['after']
            assert re.search(rf'<h2( [^>]*)?>{re.escape(old)}</h2>', ov), (slug, old)
            ov = re.sub(rf'(<h2(?: [^>]*)?>){re.escape(old)}</h2>', lambda m: m.group(1) + tl(new) + '</h2>', ov, count=1)
            ov = ov.replace(f'>{old}</a></li>', f'>{tl(new)}</a></li>', 1)
    last_after = {}
    for r in rows:
        if r['field'] != 'h2_add':
            continue
        anchor = re.search(r'"(.*)"', r['before']).group(1)
        body = bodies[(url, r['after'])]
        n_new += 1
        hid = f'svc-i5-{n_new}'
        if anchor in last_after:
            ins = last_after[anchor]
        else:
            m = next((mm for mm in re.finditer(r'<h2(?: id="([^"]*)")?>(.*?)</h2>', ov)
                      if strip(mm.group(2)) == anchor), None)
            assert m, (slug, anchor)
            ins = h2_section_end(ov, m.end())
        chunk = f'<h2 id="{hid}">{tl(r["after"])}</h2>\n{tl(body)}\n'
        if ins < len(ov) and not ov[:ins].endswith('\n'):
            chunk = '\n' + chunk
        ov = ov[:ins] + chunk + ov[ins:]
        last_after[anchor] = ins + len(chunk)
        # 목차
        m = next((mm for mm in re.finditer(r'<li><a href="#([^"]+)">(.*?)</a></li>', ov)
                  if strip(mm.group(2)) == anchor), None)
        if m:
            prev = ov.find(f'<li><a href="#svc-i5-{n_new - 1}">', m.end()) if n_new > 1 else -1
            pos = m.end()
            # 같은 앵커 뒤에 이미 넣은 목차 항목이 있으면 그 뒤에 붙인다
            while ov.startswith('<li><a href="#svc-i5-', pos):
                pos = ov.index('</li>', pos) + 5
            ov = ov[:pos] + f'<li><a href="#{hid}">{tl(r["after"])}</a></li>' + ov[pos:]
    blk = blk[:om.start(1)] + ov + blk[om.end(1):]

    # FAQ 추가
    faqs = [qa(r['after']) for r in rows if r['field'] == 'faq_add']
    if faqs:
        fm = re.search(r'\n    faqs: \[\n(.*?)\n    \],\n', blk, re.S)
        add = ''.join(f"\n      {{ q: '{sq(q)}', a: '{sq(a)}' }}," for q, a in faqs)
        body = fm.group(1)
        if not body.rstrip().endswith(','):
            body = body.rstrip() + ','
        blk = blk[:fm.start(1)] + body + add + blk[fm.end(1):]
    return src[:a] + blk + src[b:]


# ── 블로그 ──────────────────────────────────────────────────────────────────
def blog_content_span(blk):
    m = re.search(r'    content: `(.*?)`,?\n', blk, re.S)
    return m.start(1), m.end(1)


def toc_label(h2text):
    return re.sub(r'^\d+\.\s*', '', h2text)


def blog_insert_section(c, anchor, h2, body, after_map):
    if anchor in after_map:
        ins = after_map[anchor]
    else:
        m = None
        for mm in re.finditer(r'<h2[^>]*>(.*?)</h2>', c, re.S):
            if strip(mm.group(1)) == anchor:
                m = mm
                break
        assert m, anchor
        nxt = [p for p in (c.find('<h2', m.end()), c.find('<div class="faq-section">', m.end()),
                           c.find('<div class="cta-box">', m.end())) if p >= 0]
        ins = min(nxt) if nxt else len(c)
    chunk = f'<h2>{tl(h2)}</h2>\n{tl(body)}\n'
    if not c[:ins].endswith('\n'):
        chunk = '\n' + chunk
    c = c[:ins] + chunk + c[ins:]
    after_map[anchor] = ins + len(chunk)
    # 목차: 앵커 항목 뒤에
    lab = toc_label(anchor)
    i = c.find(f'<li>{lab}</li>')
    if i < 0:
        i = c.find(f'<li>{anchor}</li>')
        lab = anchor
    if i >= 0:
        pos = i + len(f'<li>{lab}</li>')
        while c.startswith('<li data-i5>', pos):
            pos = c.index('</li>', pos) + 5
        c = c[:pos] + f'<li data-i5>{tl(h2)}</li>' + c[pos:]
    return c


def faq_html(q, a):
    return f'<div class="faq-item"><p class="faq-q">Q. {q}</p><p class="faq-a">A. {a}</p></div>'


def blog_add_faqs(c, faqs):
    if not faqs:
        return c
    items = '\n'.join(tl(faq_html(html.escape(q, False), html.escape(a, False))) for q, a in faqs)
    s = c.find('<div class="faq-section">')
    if s < 0:
        cta = c.find('<div class="cta-box">')
        blockh = f'<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>\n{items}\n</div>\n'
        return (c[:cta] + blockh + c[cta:]) if cta >= 0 else (c.rstrip() + '\n' + blockh)
    # faq-section 을 닫는 </div>: 마지막 faq-item 뒤 첫 </div>
    last = c.rfind('<div class="faq-item">', s)
    end_item = c.index('</div>', c.index('</p>', c.index('class="faq-a"', last))) + 6
    close = c.index('</div>', end_item)
    return c[:close] + '\n' + items + '\n' + c[close:]


def blog_add_links(c, links):
    if not links:
        return c
    a = ' · '.join(f'<a href="{u}">{tl(html.escape(t, False))}</a>' for u, t in links)
    p = f'<p class="related-link">함께 보기: {a}</p>\n'
    s = c.find('<div class="faq-section">')
    if s < 0:
        s = c.find('<div class="cta-box">')
    return (c[:s] + p + c[s:]) if s >= 0 else (c.rstrip() + '\n' + p)


def patch_blog(src, slug, rows, bodies, titles):
    a, b = block_span(src, slug)
    blk = src[a:b]
    url = f'/blog/{slug}'
    for r in rows:
        if r['field'] == 'title':
            assert get_field(blk, 'meta_title').strip() == r['before'].strip(), slug
            blk = set_field(blk, 'meta_title', r['after'])
        elif r['field'] == 'h1':
            assert get_field(blk, 'title').strip() == r['before'].strip(), slug
            blk = set_field(blk, 'title', r['after'])
    cs, ce = blog_content_span(blk)
    c = blk[cs:ce]
    for r in rows:
        if r['field'] == 'first_paragraph':
            done = False
            for m in re.finditer(r'<p>(.*?)</p>', c, re.S):
                if strip(m.group(1)) == strip(r['before']):
                    c = c[:m.start(1)] + tl(html.escape(r['after'], False)) + c[m.end(1):]
                    done = True
                    break
            assert done, (slug, 'first_paragraph')
        elif r['field'] == 'h2':
            old, new = r['before'], r['after']
            assert f'<h2>{old}</h2>' in c, (slug, old)
            c = c.replace(f'<h2>{old}</h2>', f'<h2>{tl(new)}</h2>', 1)
            c = c.replace(f'<li>{toc_label(old)}</li>', f'<li>{tl(toc_label(new))}</li>', 1)
    after_map = {}
    for r in rows:
        if r['field'] == 'h2_add':
            anchor = re.search(r'"(.*)"', r['before']).group(1)
            c = blog_insert_section(c, anchor, r['after'], bodies[(url, r['after'])], after_map)
    c = c.replace('<li data-i5>', '<li>')
    c = blog_add_faqs(c, [qa(r['after']) for r in rows if r['field'] == 'faq_add'])
    links = []
    for r in rows:
        if r['field'] == 'internal_link':
            for u in re.findall(r'/(?:services|blog)/[a-z0-9-]+', r['after']):
                links.append((u, titles[u]))
    c = blog_add_links(c, links)
    blk = blk[:cs] + c + blk[ce:]
    return src[:a] + blk + src[b:]


# ── I4 원고 → 블로그 글 ─────────────────────────────────────────────────────
def i4_items():
    out = []
    for d in sorted(glob.glob(f'{I4}/*/')):
        js = glob.glob(d + '*.ko.json')
        if not js:
            continue
        j = json.load(open(js[0], encoding='utf-8'))
        md = open(js[0].replace('.ko.json', '.ko.md'), encoding='utf-8').read()
        out.append((j, md))
    return out


def lead_desc(lead):
    """원고 lead 에서 문장 경계로 70~160자. 문장을 만들지 않고 자르기만 한다."""
    sents = re.findall(r'[^.]*?[.)](?=\s|$)', lead)
    acc = ''
    for s in sents:
        nxt = (acc + ' ' + s.strip()).strip() if acc else s.strip()
        if len(nxt) > 160:
            break
        acc = nxt
    if len(acc) < 70:
        acc = lead[:157].rstrip() + '…'
    return acc


def i4_html(j):
    e = lambda s: html.escape(s, False)
    toc = ''.join(f'<li>{e(s["h2"])}</li>' for s in j['sections'])
    toc += '<li>자주 묻는 질문</li><li>공식 기준 인용</li><li>관련 페이지</li><li>상담 안내</li>'
    parts = [f'<div class="toc"><p>목차</p><ol>{toc}</ol></div>',
             f'<p>{e(j["lead"])}</p>',
             '<div class="highlight-box"><p><strong>요약</strong></p><ul>'
             + ''.join(f'<li>{e(x)}</li>' for x in j['summary']) + '</ul></div>']
    for s in j['sections']:
        paras = [p for p in s['body'].split('\n') if p.strip()]
        parts.append(f'<h2>{e(s["h2"])}</h2>\n' + '\n'.join(f'<p>{e(p)}</p>' for p in paras))
    parts.append('<div class="faq-section"><h2>자주 묻는 질문</h2>\n'
                 + '\n'.join(faq_html(e(f['q']), e(f['a'])) for f in j['faq']) + '\n</div>')
    qs = []
    for q in j['quotes']:
        body, _, src = q.rpartition(' — ')
        qs.append(f'<blockquote><p>{e(body)}</p><p>— {e(src)}</p></blockquote>')
    parts.append('<h2>공식 기준 인용</h2>\n' + '\n'.join(qs))
    parts.append('<h2>관련 페이지</h2>\n<ul>' + ''.join(
        f'<li><a href="{l["url"]}">{e(l["text"])}</a></li>' for l in j['links']) + '</ul>')
    return '\n'.join(parts)


def i4_consult(md):
    m = re.search(r'## 상담 안내\n\n(.*?)\s*$', md, re.S)
    t = m.group(1).strip()
    t2 = t.replace('상담 문의: /contact', '상담 문의: <a href="/contact">/contact</a>')
    return f'<h2>상담 안내</h2>\n<p>{t2}</p>'


def i4_check(md, out_text):
    """원고 MD 의 모든 내용 줄 ⊂ 출력 텍스트."""
    body = md.split('\n---\n', 1)[1]
    miss = []
    norm_out = re.sub(r'\s+', ' ', out_text)
    for line in body.split('\n'):
        t = line.strip()
        if not t or t == '---':
            continue
        t = re.sub(r'^#+\s*', '', t)
        t = re.sub(r'^>\s*', '', t)
        t = re.sub(r'^-\s*', '', t)
        t = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', r'\1', t)
        t = t.replace('**', '').strip()
        if not t or t == '요약':
            continue
        t = re.sub(r'^— ', '', t)
        if re.sub(r'\s+', ' ', t) not in norm_out:
            miss.append(t)
    return miss


def build_i4(src, svc_cat, svc_title):
    ids = [int(x) for x in re.findall(r"\n    id: '(\d+)'", src)]
    nid = max(ids)
    entries, guides, report = [], {}, []
    for j, md in i4_items():
        slug = j['slug']
        assert f"slug: '{slug}'" not in src, slug
        nid += 1
        hubs = [l['url'] for l in j['links'] if l['url'].startswith('/services/')]
        cat = svc_cat.get(hubs[0].split('/')[2], '인허가') if hubs else '인허가'
        rel = [{'title': svc_title[h.split('/')[2]], 'href': h} for h in hubs]
        content = i4_html(j) + '\n' + i4_consult(md)
        miss = i4_check(md, strip(content.replace('</p>', ' </p>').replace('</li>', ' </li>')))
        report.append((slug, miss))
        desc = lead_desc(j['lead'])
        rel_ts = ''.join(f"\n      {{ title: '{sq(r['title'])}', href: '{r['href']}' }}," for r in rel)
        entries.append(
            "  {\n"
            f"    id: '{nid}',\n"
            f"    slug: '{slug}',\n"
            + (f"    relatedServices: [{rel_ts}\n    ],\n" if rel else '')
            + f"    title: '{sq(j['h1'])}',\n"
            f"    category: '{sq(cat)}',\n"
            f"    excerpt: '{sq(desc)}',\n"
            f"    meta_title: '{sq(j['title'])}',\n"
            f"    meta_description: '{sq(desc)}',\n"
            f"    cover_image: '',\n"
            f"    created_at: '{I4_DATE}',\n"
            f"    content: `{tl(content)}`\n"
            "  },\n")
        target = hubs if hubs else ['/services']
        for h in target:
            guides.setdefault(h, []).append({'title': j['h1'], 'href': f'/blog/{slug}'})
    return entries, guides, report


def main():
    check_only = '--check' in sys.argv
    rows = load_rows()
    svc = open(SVC, encoding='utf-8').read()
    blog = open(BLOG, encoding='utf-8').read()
    if check_only:
        bad = 0
        for j, md in i4_items():
            a, b = block_span(blog, j['slug'])
            c = blog[a:b]
            miss = i4_check(md, strip(c.replace('</p>', ' </p>').replace('</li>', ' </li>')))
            if miss:
                bad += 1
                print('MISS', j['slug'], miss[:3])
        print(f'I4 대조: {len(i4_items())}편, 누락 있는 글 {bad}')
        sys.exit(1 if bad else 0)
    if 'seoTitle' in svc or 'svc-i5-' in svc:
        sys.exit('이미 적용됨 — git checkout 후 다시 실행')
    bodies = load_bodies()
    by_url = {}
    for r in rows:
        by_url.setdefault(r['url'], []).append(r)

    # 서비스 허브
    svc = svc.replace('  title: string\n  shortTitle: string\n',
                      '  title: string\n  /** <title> 전용. 없으면 `${title} | 유선행정사사무소` (I5 2026-10-03) */\n  seoTitle?: string\n  shortTitle: string\n', 1)
    for url, rs in by_url.items():
        if url.startswith('/services/'):
            svc = patch_service(svc, url.split('/')[2], rs, bodies, None)

    # 링크 제목 사전
    svc_title = dict(re.findall(r"\n    slug: '([^']+)',\n    title: '((?:[^'\\]|\\.)*)',", svc))
    svc_cat = dict(re.findall(r"\n    slug: '([^']+)',\n(?:    (?:title|seoTitle|shortTitle|description|image): '(?:[^'\\]|\\.)*',\n)+    category: '([^']+)',", svc))
    titles = {f'/services/{k}': v.replace("\\'", "'") for k, v in svc_title.items()}
    for m in re.finditer(r"\n    slug: '([^']+)',", blog):
        a, b = block_span(blog, m.group(1))
        titles[f'/blog/{m.group(1)}'] = get_field(blog[a:b], 'title')

    # 블로그 I5 (정정 대상 2편은 별도)
    for url, rs in by_url.items():
        if url.startswith('/blog/') and url not in ('/blog/foreigner-homestay-fire-tax',
                                                    '/blog/women-enterprise-renewal-management-guide'):
            blog = patch_blog(blog, url.split('/')[2], rs, bodies, titles)

    # I4 신규 글
    entries, guides, report = build_i4(blog, svc_cat, {k: v.replace("\\'", "'") for k, v in svc_title.items()})
    end = blog.rindex('\n]')
    head = blog[:end].rstrip()
    if not head.endswith(','):
        head += ','
    blog = head + '\n' + ''.join(entries).rstrip('\n') + blog[end:]
    open(SVC, 'w', encoding='utf-8').write(svc)
    open(BLOG, 'w', encoding='utf-8').write(blog)
    g = ('// AUTO-GENERATED by scripts/apply-i5-i4.py — I4 3종 세트 글(허브 → 선택기준·문제해결 글).\n'
         '// 원본: team-relay/seo-keywords/20261002/inhega-I4. 손으로 고치지 않는다.\n'
         'export const HUB_GUIDES: Record<string, { title: string; href: string }[]> = '
         + json.dumps(guides, ensure_ascii=False, indent=2) + '\n')
    open(GUIDES, 'w', encoding='utf-8').write(g)
    bad = [(s, m) for s, m in report if m]
    print(f'서비스 허브 {sum(1 for u in by_url if u.startswith("/services/"))}곳, I4 글 {len(entries)}편, 원고 누락 {len(bad)}편')
    for s, m in bad:
        print('  MISS', s, m[:3])


if __name__ == '__main__':
    main()
