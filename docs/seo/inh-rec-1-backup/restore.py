#!/usr/bin/env python3
"""INH-REC-1 백업 복원: 백업 JSON 의 source.raw_entry 로 원고 파일의 같은 slug 항목을 통째 되돌린다.
usage: python3 docs/seo/inh-rec-1-backup/restore.py <백업이름(예: services-hostel)> [--repo <경로>] [--dry-run]
--dry-run: 파일을 쓰지 않고 바뀔 줄 수만 출력."""
import json, re, sys, os, difflib
args = sys.argv[1:]
name = args[0]
repo = args[args.index('--repo') + 1] if '--repo' in args else os.path.abspath(os.path.join(os.path.dirname(__file__), '../../..'))
dry = '--dry-run' in args
b = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), name + '.json')))
raw = b['source']['raw_entry']
slug = re.search(r"\n\s*slug:\s*'([^']+)'", raw).group(1)
path = os.path.join(repo, b['source']['file'])
lines = open(path, encoding='utf-8').read().split('\n')
i = next(k for k, l in enumerate(lines) if re.match(r"\s*slug:\s*'%s',?\s*$" % re.escape(slug), l))
s = i
while not re.match(r'^  \{\s*$', lines[s]): s -= 1
e = i
while not re.match(r'^  \},?\s*$', lines[e]): e += 1
cur = '\n'.join(lines[s:e + 1])
# 항목 끝의 쉼표 유무는 현재 파일 기준 유지
if cur.rstrip().endswith('},') != raw.rstrip().endswith('},'):
    raw = raw.rstrip().rstrip(',') + (',' if cur.rstrip().endswith('},') else '')
diff = list(difflib.unified_diff(cur.split('\n'), raw.split('\n'), lineterm='', n=0))
print(f'{name}: {path} 줄 {s+1}-{e+1}, 변경 줄 {sum(1 for d in diff if d[:1] in "+-" and d[:3] not in ("+++","---"))}')
if not dry:
    lines[s:e + 1] = raw.split('\n')
    open(path, 'w', encoding='utf-8').write('\n'.join(lines))
