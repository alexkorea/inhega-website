#!/usr/bin/env python3
"""INH-REC-1B 추가(보스 확정: 호스텔→환전소 등록) 1쪽 원본 백업(수정 없음). 라이브 HTML 원본 바이트 + 추출 필드 + 원고(소스) 항목 원문."""
import json, re, subprocess, hashlib, html as H, datetime, os, requests, warnings
warnings.filterwarnings('ignore')
REPO = os.path.expanduser('~/sites/inhega-website')
OUT = REPO + '/docs/seo/inh-rec-1-backup'
PAGES = [('/blog/currency-exchange-registration-guide', 'lib/blog-posts-data.ts')]
_OLD = [
         ('/blog/corporate-rnd-center-requirements', 'lib/blog-posts-data.ts'),
         ('/blog/urban-guesthouse-registration-guide', 'lib/blog-posts-data.ts'),
         ('/services/hostel', 'lib/services-data.ts'),
         ('/blog/building-usage-change-guide', 'lib/blog-posts-data.ts')]
head = subprocess.run(['git', '-C', REPO, 'rev-parse', '--short', 'HEAD'], capture_output=True, text=True).stdout.strip()
dirty = subprocess.run(['git', '-C', REPO, 'status', '--porcelain', '--', 'lib/blog-posts-data.ts', 'lib/services-data.ts'], capture_output=True, text=True).stdout.strip()
clean = lambda s: re.sub(r'\s+', ' ', H.unescape(re.sub(r'<[^>]+>', '', s or ''))).strip()
def entry(file, slug):
    lines = open(os.path.join(REPO, file), encoding='utf-8').read().split('\n')
    i = next(k for k, l in enumerate(lines) if re.match(r"\s*slug:\s*'%s',?\s*$" % re.escape(slug), l))
    s = i
    while not re.match(r'^  \{\s*$', lines[s]): s -= 1
    e = i
    while not re.match(r'^  \},?\s*$', lines[e]): e += 1
    return s + 1, e + 1, '\n'.join(lines[s:e + 1])
def field(raw, name):
    m = re.search(r"\n\s*%s:\s*'((?:[^'\\]|\\.)*)'" % name, raw)
    return m.group(1).replace("\\'", "'") if m else None
manifest = [m for m in json.load(open(f'{OUT}/manifest.json')) if m['path'] != '/blog/currency-exchange-registration-guide']
for path, file in PAGES:
    slug = path.rsplit('/', 1)[1]
    r = requests.get('https://inhega.co.kr' + path, timeout=40, headers={'User-Agent': 'Mozilla/5.0 (mac4 INH-REC-1B backup)'})
    raw_html = r.content
    h = r.text
    fname = (('services-' if path.startswith('/services') else '') + slug)
    open(f'{OUT}/{fname}.live.html', 'wb').write(raw_html)
    t = re.search(r'<title>(.*?)</title>', h, re.S)
    md = re.search(r'<meta name="description" content="([^"]*)"', h)
    can = re.search(r'<link rel="canonical" href="([^"]+)"', h)
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', h, re.S)
    art = re.search(r'<article[^>]*>(.*?)</article>', h, re.S) or re.search(r'<main[^>]*>(.*?)</main>', h, re.S)
    body = art.group(1) if art else ''
    after_h1 = body.split('</h1>', 1)[-1] if '</h1>' in body else (h.split('</h1>', 1)[-1] if h1 else body)
    paras = [p for p in re.findall(r'<p[^>]*>(.*?)</p>', after_h1, re.S) if len(clean(p)) >= 30]
    s, e, raw = entry(file, slug)
    src = dict(file=file, git_head=head, worktree_dirty=bool(dirty), lines=[s, e], raw_entry=raw,
               title=field(raw, 'title'), meta_title=field(raw, 'meta_title') or field(raw, 'seoTitle'),
               meta_description=field(raw, 'meta_description') or field(raw, 'description'))
    m = re.search(r"content:\s*`(.*?)`", raw, re.S)
    if m:
        src['content_first_paragraph_html'] = next((p for p in re.findall(r'<p[^>]*>(.*?)</p>', m.group(1), re.S) if len(clean(p)) >= 30), None)
    rec = dict(url='https://inhega.co.kr' + path, fetched_at=datetime.datetime.now().astimezone().isoformat(timespec='seconds'),
               live_deployment='17044f97 (CF Pages inhega-pages production, INH-REC-1A)', http_status=r.status_code,
               live=dict(title=clean(t.group(1)) if t else None, meta_description=H.unescape(md.group(1)) if md else None,
                         h1=clean(h1.group(1)) if h1 else None, canonical=can.group(1) if can else None,
                         first_paragraph_text=clean(paras[0]) if paras else None, first_paragraph_html=paras[0] if paras else None,
                         body_text=clean(body), body_html=body, html_file=f'{fname}.live.html',
                         html_sha256=hashlib.sha256(raw_html).hexdigest(), html_bytes=len(raw_html)),
               source=src)
    json.dump(rec, open(f'{OUT}/{fname}.json', 'w'), ensure_ascii=False, indent=1)
    manifest.append(dict(path=path, json=f'{fname}.json', html=f'{fname}.live.html', sha256=rec['live']['html_sha256'], title=rec['live']['title'], h1=rec['live']['h1'], canonical=rec['live']['canonical'], source=f'{file}:{s}-{e}', first_p=(rec['live']['first_paragraph_text'] or '')[:80], body_chars=len(rec['live']['body_text'])))
json.dump(manifest, open(f'{OUT}/manifest.json', 'w'), ensure_ascii=False, indent=1)
for m in manifest: print(json.dumps(m, ensure_ascii=False))
