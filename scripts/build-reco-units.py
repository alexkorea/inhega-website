#!/usr/bin/env python3
"""AI-RECO-1103 12절(보스 msg 4823) — 항목별 추천 블록 원고 → lib/reco-units.generated.ts (llms.txt 는 build-services-menu.mjs 가 굽는다).

원고 정본: content/reco-units/<lang>/<slug>.json (ko 정본 → en/zh/ja 번역, id·href·개수 기계대조)
  · 화면에 싣는 키만 생성물로 옮긴다(sources·facts 는 보고서용 — 생성물·번들에 넣지 않는다).
  · 중점 6개(lib/focus-*.ts)는 이 원고를 쓰지 않는다(있으면 실패).
사용: python3 scripts/build-reco-units.py [--check]
"""
import json, os, re, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'content', 'reco-units')
OUT = os.path.join(ROOT, 'lib', 'reco-units.generated.ts')
LANGS = ['ko', 'en', 'zh', 'ja']
FOCUS = {'nonprofit', 'telecom-business', 'location-based-service', 'cosmetics', 'health-food', 'factory'}
KEEP = ['label', 'kw', 'answer', 'services', 'clients', 'glance', 'chooser', 'situations', 'glossary']
SIT_KEEP = ['id', 'q', 'conclusion', 'branches', 'docs', 'period', 'href']
PFX = {'ko': '', 'en': '/en', 'zh': '/zh', 'ja': '/ja'}

check = '--check' in sys.argv
errs = []
data = {l: {} for l in LANGS}
for l in LANGS:
    for fp in sorted(glob.glob(os.path.join(SRC, l, '*.json'))):
        slug = os.path.basename(fp)[:-5]
        d = json.load(open(fp, encoding='utf-8'))
        if d.get('slug') != slug or d.get('lang') != l:
            errs.append(f'slug/lang 불일치 {fp}')
        if slug in FOCUS:
            errs.append(f'중점 6 은 lib/focus-* 원고를 쓴다: {fp}')
        out = {k: d[k] for k in KEEP}
        out['situations'] = [{k: s[k] for k in SIT_KEEP if s.get(k)} for s in d['situations']]
        data[l][slug] = out

# 구조 대조: 번역본은 ko 와 id·href·개수가 같아야 한다
for l in LANGS[1:]:
    for slug, d in data[l].items():
        ko = data['ko'].get(slug)
        if not ko:
            errs.append(f'ko 정본 없음 {l}/{slug}'); continue
        if [s['id'] for s in d['situations']] != [s['id'] for s in ko['situations']]: errs.append(f'상황 id ≠ ko {l}/{slug}')
        if [g['id'] for g in d['glossary']] != [g['id'] for g in ko['glossary']]: errs.append(f'용어 id ≠ ko {l}/{slug}')
        if [s['href'] for s in d['services']] != [s['href'] for s in ko['services']]: errs.append(f'업무 href ≠ ko {l}/{slug}')
        if [c['target'] for c in d['chooser']] != [c['target'] for c in ko['chooser']]: errs.append(f'고르기 ≠ ko {l}/{slug}')
for l in LANGS:
    for slug, d in data[l].items():
        ids = {s['id'] for s in d['situations']} | {g['id'] for g in d['glossary']} | {'svc-glance', 'svc-situations', 'svc-services', 'svc-glossary', 'svc-office', 'svc-answer'}
        for s in d['services']:
            if s['href'][1:] not in ids: errs.append(f'앵커 없음 {l}/{slug}: {s["href"]}')
        for c in d['chooser']:
            if c['target'] not in ids: errs.append(f'앵커 없음 {l}/{slug}: {c["target"]}')

if errs:
    print('\n'.join('[reco-units] ' + e for e in errs)); sys.exit(1)

ts = ('// 자동 생성 — scripts/build-reco-units.py (AI-RECO-1103 12절). 손으로 고치지 말 것 — 원고는 content/reco-units/<lang>/<slug>.json.\n'
      '// 화면에 조문 번호·출처·확인일·가격을 싣지 않는다. 서버 전용(\'use client\' 에서 import 금지).\n'
      "import type { RecoUnit } from './reco-units'\n\n"
      'export const RECO_UNITS: Record<\'ko\' | \'en\' | \'zh\' | \'ja\', Record<string, RecoUnit>> = '
      + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + '\n')

# public/llms.txt 는 더 이상 여기서 굽지 않는다 — INHEGA-1111 B-5 부터 scripts/build-services-menu.mjs 가 전체를 굽는다(이 원고의 처리 업무 앞 3개를 설명으로 읽음).

cur = open(OUT, encoding='utf-8').read() if os.path.exists(OUT) else ''
if check:
    bad = []
    if cur != ts: bad.append('lib/reco-units.generated.ts')
    if bad:
        print('[reco-units] 원고와 생성물이 어긋난다 — python3 scripts/build-reco-units.py 를 돌릴 것: ' + ', '.join(bad)); sys.exit(1)
    print('[reco-units] OK ' + ' '.join(f'{l}:{len(data[l])}' for l in LANGS)); sys.exit(0)
open(OUT, 'w', encoding='utf-8').write(ts)
print('[reco-units] 생성 ' + ' '.join(f'{l}:{len(data[l])}' for l in LANGS) + f' — {len(ts)//1024} KB')
