#!/usr/bin/env python3
"""inhega I5b 블로그 102 URL 보강 패치 (맥7 2026-10-03 0420 지시, 맥3 patches-b.jsonl 759행).

깨끗한 소스(c388876 = I2+I4+I5 프로덕션)에서 한 번만 실행한다.

  python3 scripts/apply-i5b.py

입력
  NAS team-relay/seo-keywords/20261002/inhega-I5/patches-b.jsonl
  scripts/data/i5b-bodies.json — 신설 H2 본문. 현재 글·I5b FAQ 답변·근거 글·같은 업종 I4 원고의
                                 문장을 그대로 인용(문장 단위 원문 대조 통과분, 새 문장 0)

보류·정정 (law.go.kr 현행 원문 대조, 2026-10-03)
  HOLD  : 법령과 어긋나는 사실을 제목·첫 문단·FAQ 로 새로 내세우는 행은 반영하지 않는다(기존 문구 유지).
  FIX   : 같은 사이트에서 이미 법령 대조로 정정한 사실과 어긋나는 숫자만 바로잡는다.
"""
import html
import importlib.util
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
spec = importlib.util.spec_from_file_location('i5', os.path.join(ROOT, 'scripts/apply-i5-i4.py'))
i5 = importlib.util.module_from_spec(spec)
spec.loader.exec_module(i5)

PATCHES = f'{i5.NAS}/inhega-I5/patches-b.jsonl'
BODIES = os.path.join(ROOT, 'scripts/data/i5b-bodies.json')
ABOUT = os.path.join(ROOT, 'app/(ko)/about/page.tsx')

# 담배수입판매업 = 시·도지사 등록(담배사업법 제13조①), 기재부 면허 아님 → 글 전제 자체가 틀려 링크만 반영
HOLD_URL = {'/blog/tobacco-license-tax-bond', '/blog/tobacco-import-documents'}
HOLD = [
    ('/blog/tobacco-customs-hs-code', 'first_paragraph', '면허'),            # 담배사업법 제13조① 등록
    ('/blog/tobacco-customs-hs-code', 'faq_add', '기획재정부 장관의 허가'),
    ('/blog/e-cigarette-liquid-regulation', 'first_paragraph', '면허'),
    ('/blog/e-cigarette-liquid-regulation', 'faq_add', '기획재정부의 담배수입판매업 면허'),
    ('/blog/e-cigarette-liquid-regulation', 'faq_add', '성인 인증 시스템'),  # 담배사업법 제12조④ 우편·전자거래 판매 금지
    ('/blog/hostel-vs-guesthouse', 'first_paragraph', '시·도지사'),          # 관광진흥법 제4조① 시장·군수·구청장, 제6조의2 오인용
    ('/blog/hostel-vs-guesthouse', 'faq_add', '시·도지사'),
    ('/blog/hostel-room-fire-standards', 'first_paragraph', '시·도지사'),
    ('/blog/hostel-room-fire-standards', 'faq_add', '시·도지사'),
    ('/blog/venture-renewal-procedure', 'first_paragraph', '2년'),           # 벤처기업법 시행령 제18조의4 3년
    ('/blog/international-logistics-capital-funding-guide', 'h1', '공제조합'),  # 물류정책기본법 시행령 제30조의2 면제 4호, 공제조합 없음
    ('/blog/international-logistics-capital-funding-guide', 'first_paragraph', '제45조'),
    ('/blog/international-logistics-capital-funding-guide', 'faq_add', '면제 규정은'),
    ('/blog/international-logistics-capital-funding-guide', 'h2_add', '공제조합'),
    ('/blog/currency-exchange-compliance', 'faq_add', '5,000만 원'),          # /services/currency-exchange: 법정 최소자본 없음
    ('/blog/online-shopping-mall-notification', 'faq_add', '수수료는 무료'),  # 근거 없음
]
FIX = [
    # 여성기업지원법 시행령 제16조① 3년 — 같은 글 본문은 I5 에서 이미 3년
    ('/blog/women-business-renewal', 'first_paragraph', '유효기간은 2년이며', '유효기간은 3년이며'),
    ('/blog/women-business-renewal', 'faq_add', '유효 기간은 2년이며', '유효 기간은 3년이며'),
    # 화장품법 제36조①1호(제3조① 전단 위반) 3년/3천만
    ('/blog/cosmetics-import-sales-registration-guide', 'first_paragraph',
     '1년 이하 징역 또는 1천만 원 이하 벌금', '3년 이하 징역 또는 3천만 원 이하 벌금'),
]
BODY_FIX = []  # 화장품 벌칙 문구는 첫 문단에만 있어 FIX 로 끝난다


def held(r):
    if r['field'] == 'content_flag':
        return True
    if r['url'] in HOLD_URL and r['field'] != 'internal_link':
        return True
    return any(r['url'] == u and r['field'] == f and s in r['after'] for u, f, s in HOLD)


def fixed(r):
    for u, f, a, b in FIX:
        if r['url'] == u and r['field'] == f and a in r['after']:
            r = dict(r, after=r['after'].replace(a, b))
    return r


def resolve_anchor(content, anchor):
    """맥3 앵커가 번호 없이 또는 잘린 채 적힌 경우 실제 H2 문자열로 맞춘다."""
    h2s = [i5.strip(m) for m in re.findall(r'<h2[^>]*>(.*?)</h2>', content, re.S)]
    if anchor in h2s:
        return anchor
    bare = lambda s: re.sub(r'^\d+\.\s*', '', s)
    c = [h for h in h2s if bare(h) == bare(anchor)] or [h for h in h2s if bare(h).startswith(bare(anchor))]
    assert len(c) == 1, (anchor, h2s)
    return c[0]


def blog_insert_section(c, anchor, h2, body, after_map):
    """apply-i5-i4 판은 같은 앵커 두 번째 삽입 때 저장된 오프셋을 쓰는데, 그 사이 목차(<li>) 삽입으로
    오프셋이 밀려 문장 중간에 끼어든다. 여기서는 직전에 넣은 H2 를 새 앵커로 삼아 매번 다시 찾는다."""
    real = after_map.get(anchor, anchor)
    m = next((mm for mm in re.finditer(r'<h2[^>]*>(.*?)</h2>', c, re.S) if i5.strip(mm.group(1)) == real), None)
    assert m, (anchor, real)
    nxt = [p for p in (c.find('<h2', m.end()), c.find('<div class="faq-section">', m.end()),
                       c.find('<div class="cta-box">', m.end())) if p >= 0]
    ins = min(nxt) if nxt else len(c)
    chunk = f'<h2>{i5.tl(h2)}</h2>\n{i5.tl(body)}\n'
    if not c[:ins].endswith('\n'):
        chunk = '\n' + chunk
    c = c[:ins] + chunk + c[ins:]
    after_map[anchor] = h2
    # 목차: 앵커(또는 직전 삽입) 항목 뒤
    for lab in (i5.toc_label(real), real):
        for tag in ('<li>', '<li data-i5>'):
            k = c.find(f'{tag}{lab}</li>')
            if k >= 0:
                pos = k + len(f'{tag}{lab}</li>')
                c = c[:pos] + f'<li data-i5>{i5.tl(h2)}</li>' + c[pos:]
                return c
    return c


i5.blog_insert_section = blog_insert_section


def normalize_quotes(src, slug):
    """일부 글(15편)은 필드가 큰따옴표다. 패치 대상 글만 작은따옴표 리터럴로 바꿔 공용 함수가 읽게 한다."""
    key = f'    slug: "{slug}",\n'
    if key not in src:
        return src
    i = src.index(key)
    start = src.rindex('\n  {\n', 0, i) + 1
    end = src.index('    content: `', i)
    head = src[start:end]
    head = re.sub(r'^(    \w+): ("(?:[^"\\]|\\.)*"),$',
                  lambda m: f"{m.group(1)}: '{i5.sq(json.loads(m.group(2)))}',", head, flags=re.M)
    return src[:start] + head + src[end:]


def patch_about(rows, bodies):
    t = open(ABOUT, encoding='utf-8').read()
    for r in rows:
        f, a = r['field'], r['after']
        if f == 'title':
            assert t.count(f"'{r['before']}'") == 3
            t = t.replace(f"'{r['before']}'", f"'{a}'")
        elif f == 'h1':
            old = '인허가 전문,<br />유선행정사사무소'
            assert old in t and a == '외국인 사업 인허가 전문, 유선행정사사무소'
            t = t.replace(old, '외국인 사업 인허가 전문,<br />유선행정사사무소', 1)
        elif f == 'first_paragraph':
            assert r['before'] in t
            t = t.replace(r['before'], a, 1)
    faqs = [i5.qa(r['after']) for r in rows if r['field'] == 'faq_add']
    sec = bodies['/about'][0]
    links = [u for r in rows if r['field'] == 'internal_link' for u in re.findall(r'/(?:services|blog)(?:/[a-z0-9-]+)?', r['after'])]
    block = (
        "\n      {/* I5b 외국인 사업 인허가 — 문장은 기존 글·FAQ 인용 (2026-10-03) */}\n"
        "      <section className=\"section\" style={{ background: 'var(--white)' }}>\n"
        "        <div className=\"container\" style={{ maxWidth: '860px' }}>\n"
        f"          <h2 className=\"text-h2\">{sec['h2']}</h2>\n"
        f"          <div className=\"about-i5b\" dangerouslySetInnerHTML={{{{ __html: {json.dumps(sec['html'], ensure_ascii=False)} }}}} />\n"
        "          <p style={{ marginTop: '1rem' }}>함께 보기: "
        + ' · '.join(f"<a href=\"{u}\">{'업종별 인허가 서비스' if u == '/services' else '인허가 행정사 선택 가이드'}</a>" for u in links)
        + "</p>\n"
        "          <h2 className=\"text-h2\" style={{ marginTop: '2.5rem' }}>자주 묻는 질문</h2>\n"
        + ''.join(f"          <div className=\"faq-item\" style={{{{ padding: '1rem 0', borderBottom: '1px solid var(--border)' }}}}><p className=\"faq-q\"><strong>Q. {q}</strong></p><p className=\"faq-a\">A. {a}</p></div>\n" for q, a in faqs)
        + "          <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_FAQ_LD) }} />\n"
        "        </div>\n      </section>\n")
    # 6대 핵심 전문 분야 섹션 닫힘 뒤에 삽입
    i = t.index('6대 핵심 전문 분야')
    j = t.index('</section>', i) + len('</section>')
    t = t[:j] + block + t[j:]
    ld = {'@context': 'https://schema.org', '@type': 'FAQPage',
          'mainEntity': [{'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in faqs]}
    k = t.index('\nconst team')
    t = t[:k] + f"\nconst ABOUT_FAQ_LD = {json.dumps(ld, ensure_ascii=False, indent=2)}\n" + t[k:]
    open(ABOUT, 'w', encoding='utf-8').write(t)


def main():
    rows = [json.loads(l) for l in open(PATCHES, encoding='utf-8') if l.strip()]
    bodies_raw = json.load(open(BODIES, encoding='utf-8'))
    bodies = {(u, s['h2']): s['html'] for u, secs in bodies_raw.items() for s in secs}
    blog = open(i5.BLOG, encoding='utf-8').read()
    svc = open(i5.SVC, encoding='utf-8').read()
    if 'data-i5b' in blog or 'ABOUT_FAQ_LD' in open(ABOUT, encoding='utf-8').read():
        sys.exit('이미 적용됨')
    for u in {r['url'] for r in rows if r['url'].startswith('/blog/')}:
        blog = normalize_quotes(blog, u.split('/')[2])
    titles = {f'/services/{k}': v.replace("\\'", "'") for k, v in
              re.findall(r"\n    slug: '([^']+)',\n    title: '((?:[^'\\]|\\.)*)',", svc)}
    for m in re.finditer(r"\n    slug: '([^']+)',", blog):
        a, b = i5.block_span(blog, m.group(1))
        titles[f'/blog/{m.group(1)}'] = i5.get_field(blog[a:b], 'title')

    by_url, n_held, n_fix, n_dup = {}, [], 0, []
    for r in rows:
        if held(r):
            if r['field'] != 'content_flag':
                n_held.append(r)
            continue
        if r['field'] == 'faq_add' and r['url'].startswith('/blog/'):
            q = i5.qa(r['after'])[0]
            a, b = i5.block_span(blog, r['url'].split('/')[2]) if f"    slug: '{r['url'].split('/')[2]}',\n" in blog else (0, 0)
            if b and re.search(r'class="faq-q">(?:<strong>)?Q\.\s*' + re.escape(html.escape(q, False)) + r'\s*(?:</strong>)?</p>', blog[a:b]):
                n_dup.append(r)  # 같은 질문이 이미 화면 FAQ 에 있다 — 기존 문항 유지
                continue
        r2 = fixed(r)
        n_fix += r2 is not r
        by_url.setdefault(r['url'], []).append(r2)

    for url, rs in by_url.items():
        if url == '/about':
            patch_about(rs, bodies_raw)
            continue
        slug = url.split('/')[2]
        a, b = i5.block_span(blog, slug)
        content = blog[a:b]
        for r in rs:
            if r['field'] == 'h2_add':
                anc = re.search(r'"(.*)"', r['before']).group(1)
                real = resolve_anchor(content, anc)
                r['before'] = r['before'].replace(f'"{anc}"', f'"{real}"')
        blog = i5.patch_blog(blog, slug, rs, bodies, titles)

    for slug, old, new in BODY_FIX:
        a, b = i5.block_span(blog, slug)
        blk = blog[a:b]
        assert blk.count(old) == 1, (slug, old)
        blog = blog[:a] + blk.replace(old, new) + blog[b:]
    open(i5.BLOG, 'w', encoding='utf-8').write(blog)
    applied = sum(len(v) for v in by_url.values())
    print(f'반영 {applied}행 / {len(by_url)} URL, 보류 {len(n_held)}행, 중복 FAQ 생략 {len(n_dup)}행, 정정 {n_fix}행')
    for r in n_held:
        print('  HOLD', r['url'], r['field'], r['after'][:50].replace('\n', ' '))


if __name__ == '__main__':
    main()
