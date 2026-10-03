#!/usr/bin/env python3
"""Q2 FAQ 추가 임포터(inhega) — 맥3 faq-add.jsonl 17건을 해당 페이지 원천에 1:1 추가.
원천 3종: lib/services-data.ts(faqs 배열) · content/industry-pages/<slug>.ko.json(faq) ·
lib/blog-posts-data.ts(content 의 faq-section). 멱등 — 같은 질문이 이미 있으면 건너뛴다.
사용: apply-q2.py <repo> [--check]"""
import json, sys, re, html, os

REPO = sys.argv[1]
CHECK = '--check' in sys.argv
SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'faq-add.jsonl')
rows = [json.loads(l) for l in open(SRC, encoding='utf-8') if l.strip()]
assert len(rows) == 17, len(rows)

def kind(url):
    p = url.replace('https://inhega.co.kr', '')
    m = re.fullmatch(r'/services/([a-z0-9-]+)', p)
    if m:
        slug = m.group(1)
        if os.path.exists(f'{REPO}/content/industry-pages/{slug}.ko.json'):
            return 'industry', slug
        return 'service', slug
    m = re.fullmatch(r'/blog/([a-z0-9-]+)', p)
    assert m, url
    return 'blog', m.group(1)

def ts_str(s):
    return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

added, skipped = [], []
svc = open(f'{REPO}/lib/services-data.ts', encoding='utf-8').read()
blog = open(f'{REPO}/lib/blog-posts-data.ts', encoding='utf-8').read()
ind = {}

for r in rows:
    k, slug = kind(r['url'])
    q, a = r['q'].strip(), r['a'].strip()
    if k == 'service':
        i = svc.find(f"\n    slug: '{slug}',")
        assert i > 0, slug
        j = svc.find('\n    faqs: [', i)
        end = svc.find('\n    ],', j)
        nxt = svc.find("\n    slug: '", i + 10)
        assert 0 < j < end and (nxt < 0 or end < nxt), slug
        if ts_str(q) in svc[j:end]:
            skipped.append((slug, q)); continue
        line = f"\n      {{ q: {ts_str(q)}, a: {ts_str(a)} }},"
        svc = svc[:end] + line + svc[end:]
    elif k == 'industry':
        if slug not in ind:
            ind[slug] = json.load(open(f'{REPO}/content/industry-pages/{slug}.ko.json', encoding='utf-8'))
        faq = ind[slug]['faq']
        if any(f['q'] == q for f in faq):
            skipped.append((slug, q)); continue
        faq.append({'q': q, 'a': a})
    else:
        i = blog.find(f"\n    slug: '{slug}',")
        assert i > 0, slug
        c0 = blog.find('content: `', i)
        c1 = blog.find('`', c0 + 10)
        assert blog[c1-1] != '\\'
        nxt = blog.find("\n    slug: '", i + 10)
        assert 0 < c0 < c1 and (nxt < 0 or c1 < nxt), slug
        content = blog[c0:c1]
        fs = content.find('<div class="faq-section">')
        assert fs > 0, slug
        # faq-section 의 마지막 faq-item 뒤(섹션 닫는 </div> 앞)에 넣는다
        last = content.rfind('<div class="faq-item">')
        item_end = content.find('</p></div>', last) + len('</p></div>')
        assert last > fs and item_end > last
        if f'<p class="faq-q">Q. {html.escape(q, quote=False)}</p>' in content:
            skipped.append((slug, q)); continue
        item = (f'\n<div class="faq-item"><p class="faq-q">Q. {html.escape(q, quote=False)}</p>'
                f'<p class="faq-a">A. {html.escape(a, quote=False)}</p></div>')
        assert '`' not in item and '${' not in item
        content = content[:item_end] + item + content[item_end:]
        blog = blog[:c0] + content + blog[c1:]
    added.append((k, slug, q))

print(f'added {len(added)} skipped {len(skipped)}')
for x in added: print(' +', *x)
for x in skipped: print(' =', *x)
if not CHECK:
    open(f'{REPO}/lib/services-data.ts', 'w', encoding='utf-8').write(svc)
    open(f'{REPO}/lib/blog-posts-data.ts', 'w', encoding='utf-8').write(blog)
    for slug, d in ind.items():
        p = f'{REPO}/content/industry-pages/{slug}.ko.json'
        orig = open(p, encoding='utf-8').read()
        indent = 2 if '\n  "' in orig else None
        out = json.dumps(d, ensure_ascii=False, indent=indent)
        if orig.endswith('\n'): out += '\n'
        open(p, 'w', encoding='utf-8').write(out)
