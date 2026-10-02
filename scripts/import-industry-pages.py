#!/usr/bin/env python3
"""I2 신규 업종 서비스 페이지 원고(맥3, 맥7 PASS) → content/industry-pages/<slug>.<lang>.json

원고는 NAS team-relay/seo-keywords/20261002/inhega-I2/<slug>/<slug>.<lang>.{md,json}.
본문(lead·summary·sections·faq)은 원고 JSON, 원고에만 있는 표기(요약·FAQ·인용·관련·상담
제목, 인용 출처 줄, 상담 문장)는 원고 MD 에서 그대로 가져온다. 문장을 새로 쓰지 않는다.
끝에 '원고 MD 의 모든 내용 줄이 출력에 있고, 출력의 모든 문장이 MD 에 있다'를 단언한다.

  python3 scripts/import-industry-pages.py <원고폴더>          # 쓰기
  python3 scripts/import-industry-pages.py <원고폴더> --check  # 대조만
"""
import json, os, re, sys

BATCH1 = ['restaurant-business-report', 'import-food-sales', 'travel-agency-registration',
          'liquor-import-sales-license', 'accommodation-business-report', 'mail-order-sales-report',
          'academy-establishment-registration', 'kc-radio-certification',
          'construction-business-registration', 'foreign-patient-attraction']
BATCH2 = ['hazardous-chemical-business-permit', 'pet-business-permit-registration',
          'beauty-salon-business-report', 'waste-treatment-business-permit',
          'emission-facility-permit-report', 'real-estate-development-business-registration',
          'pharmaceutical-wholesale-license', 'car-dealer-rental-business-registration',
          'long-term-care-institution-designation', 'development-act-farmland-conversion-permit']
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'content', 'industry-pages')

QA = re.compile(r'^(Q|A)[.．]\s*')


def parse_md(path):
    text = open(path, encoding='utf-8').read()
    fm, body = text.split('\n---\n', 1)
    meta = dict(l.split(': ', 1) for l in fm.strip('-\n').splitlines() if ': ' in l)
    blocks, cur = [], None
    for line in body.splitlines():
        if line.startswith('## '):
            cur = {'h2': line[3:].strip(), 'lines': []}
            blocks.append(cur)
        elif cur is not None:
            cur['lines'].append(line)
    summary_label = None
    for line in body.splitlines():
        m = re.match(r'^> \*\*(.+?)\*\*$', line)
        if m:
            summary_label = m.group(1)
            break
    return meta, blocks, summary_label, body


def tail_blocks(blocks, n_sections):
    # 본문 섹션 n개 다음: FAQ, 인용, 관련, 상담 순서
    rest = blocks[n_sections:]
    assert len(rest) == 4, [b['h2'] for b in rest]
    faq, cites, rel, cta = rest
    quotes = []
    lines = [l for l in cites['lines'] if l.startswith('> ')]
    for i in range(0, len(lines), 2):
        t = lines[i][2:].rstrip()
        s = lines[i + 1][2:].strip()
        assert s.startswith('— '), s
        quotes.append({'text': t, 'source': s[2:]})
    links = []
    for l in rel['lines']:
        m = re.match(r'^- \[(.+)\]\((/[^)]*)\)$', l)
        if m:
            links.append({'text': m.group(1), 'url': m.group(2)})
    cta_text = ' '.join(l.strip() for l in cta['lines'] if l.strip())
    return faq['h2'], cites['h2'], quotes, rel['h2'], links, cta['h2'], cta_text


def build(src, slug, lang):
    base = os.path.join(src, slug, f'{slug}.{lang}')
    d = json.load(open(base + '.json', encoding='utf-8'))
    meta, blocks, summary_label, md_body = parse_md(base + '.md')
    n = len(d['sections'])
    for i, s in enumerate(d['sections']):
        assert blocks[i]['h2'] == s['h2'], (slug, lang, i)
    faq_h, cite_h, quotes, rel_h, links, cta_h, cta = tail_blocks(blocks, n)
    page = {
        'slug': slug, 'lang': lang,
        'lawBasisDate': meta.get('law_basis_date', ''),
        'title': d['title'], 'h1': d['h1'], 'lead': d['lead'],
        'summaryLabel': summary_label, 'summary': d['summary'],
        'sections': [{'h2': s['h2'], 'body': s['body']} for s in d['sections']],
        'faqHeading': faq_h,
        'faq': [{'q': QA.sub('', f['q']), 'a': QA.sub('', f['a'])} for f in d['faq']],
        'citationsHeading': cite_h, 'citations': quotes,
        'relatedHeading': rel_h, 'related': links,
        'ctaHeading': cta_h, 'cta': cta,
    }
    assert meta['title'] == d['title'] and meta['slug'] == slug and meta['lang'] == lang
    verify(page, md_body, slug, lang)
    return page


def norm(s):
    return re.sub(r'\s+', '', s)


def verify(page, md_body, slug, lang):
    md = norm(md_body)
    # 출력 → 원고: 출력에 담긴 모든 문자열이 원고 MD 에 그대로 있어야 한다
    strings = [page['h1'], page['lead'], page['summaryLabel'], page['faqHeading'],
               page['citationsHeading'], page['relatedHeading'], page['ctaHeading'], page['cta']]
    strings += page['summary']
    for s in page['sections']:
        strings += [s['h2']] + [p for p in s['body'].split('\n') if p.strip()]
    for f in page['faq']:
        strings += [f['q'], f['a']]
    for c in page['citations']:
        strings += [c['text'], c['source']]
    for l in page['related']:
        strings += [l['text'], l['url']]
    miss = [s for s in strings if norm(s) not in md]
    assert not miss, (slug, lang, 'MD 에 없는 문자열', miss[:3])
    # 원고 → 출력: MD 의 모든 내용 줄이 출력에 있어야 한다(문장 누락 금지)
    blob = norm(json.dumps(page, ensure_ascii=False)).replace('\\"', '"')
    for line in md_body.splitlines():
        t = line.strip()
        prev = None
        while prev != t:
            prev = t
            t = re.sub(r'^(#+ |> |- )', '', t).strip()
        t = t.strip('*').strip()
        t = re.sub(r'^\*\*(.+)\*\*$', r'\1', t)
        t = QA.sub('', t)
        m = re.match(r'^\[(.+)\]\((.+)\)$', t)
        if m:
            t = m.group(1)
        if t.startswith('— '):
            t = t[2:]
        if not t:
            continue
        assert norm(t) in blob, (slug, lang, '출력에 없는 원고 줄', t[:80])


def main():
    src = sys.argv[1]
    check = '--check' in sys.argv
    count = 0
    for slug in BATCH1 + BATCH2:
        langs = ['ko', 'en', 'zh', 'ja'] if slug in BATCH1 else ['ko']
        for lang in langs:
            page = build(src, slug, lang)
            path = os.path.join(OUT, f'{slug}.{lang}.json')
            data = json.dumps(page, ensure_ascii=False, indent=2) + '\n'
            if check:
                assert open(path, encoding='utf-8').read() == data, f'{path} 가 원고와 다르다'
            else:
                open(path, 'w', encoding='utf-8').write(data)
            count += 1
    index = ['// 자동 생성 — scripts/import-industry-pages.py. 손으로 고치지 말 것.',
             "import type { IndustryPage } from './industry-pages'", '']
    names = []
    for slug in BATCH1 + BATCH2:
        for lang in (['ko', 'en', 'zh', 'ja'] if slug in BATCH1 else ['ko']):
            name = 'p' + str(len(names))
            names.append(name)
            index.append(f"import {name} from '@/content/industry-pages/{slug}.{lang}.json'")
    index += ['', 'export const INDUSTRY_PAGES: IndustryPage[] = [', *[f'  {n} as IndustryPage,' for n in names], ']', '']
    ipath = os.path.join(OUT, '..', '..', 'lib', 'industry-pages.generated.ts')
    if check:
        assert open(ipath, encoding='utf-8').read() == '\n'.join(index), f'{ipath} 가 어긋난다'
    else:
        open(ipath, 'w', encoding='utf-8').write('\n'.join(index))
    print(f'OK {count} pages ({"check" if check else "written"})')


if __name__ == '__main__':
    main()
