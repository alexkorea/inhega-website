#!/usr/bin/env python3
"""
Pretendard 사이트 서브셋 생성기 — prebuild 에서 매번 돈다(맥7 0948, 2026-10-04).

왜 빌드 단계인가
  09-24 서브셋(critical/rest/widget)은 그날 라이브 HTML(사이트맵 60쪽 한정)에서 글자를 모았다.
  I2/I2c 업종 페이지·블로그 48편이 올라오며 그 집합 밖 한글 299자가 생겼고, 그 글자만
  시스템 폰트(Apple SD Gothic Neo·NanumGothic)로 그려져 한 줄 안에서 글꼴이 섞였다.
  또 서브페이지는 critical + rest 두 파일에 나눠 의존했는데, rest 는 preload 가 없어
  늦게 발견되고 font-display:optional 이라 차단 구간을 놓치면 rest 글자만 폴백으로 남았다
  (맥7 10:19 스샷의 '질 폐 태 혼 농 촌 천 권 독 론 량 웨' 는 전부 rest 소속이었다).

지금 구조
  · 'Pretendard Critical' — 홈 전용 한 파일. 09-24 critical+widget 글자 ∪ scripts/fonts/home-chars.txt.
                            home-chars.txt 는 font-gate.mjs --fix-home 이 빌드된 홈 HTML 에서 채운다
                            (홈 글자가 바뀌면 scripts/build.sh 가 서브셋을 다시 굽고 한 번 더 빌드한다).
  · 'Pretendard Site'     — 홈 외 전 페이지. 소스 전체 글자를 **한 파일**에 담는다.
                            한 파일이라 optional 의 결과가 '전부 Pretendard' 아니면 '전부 폴백' 뿐이다.
  · 'Pretendard Site' ext — KS X 1001 완성형 2,350자 중 위에 없는 글자, 4조각.
                            런타임 원고(/news KV 등)용 안전망. 쓰는 페이지만 그 조각을 받는다.
  홈/서브 구분은 components/ui/Webfonts.tsx 가 경로로 한다.

코퍼스 = app·components·lib·content·scripts/inhega-daily(bank 포함) 의 텍스트 파일 전부
       + scripts/fonts/extra-chars.txt(위젯 JS 가 꽂는 글자) + 09-24 세 파일의 글자
       + 각 글자의 대·소문자 변형(text-transform: uppercase 가 원문에 없는 글자를 그린다).
  가나·CJK 기호(U+3000–30FF)는 넣지 않는다 — 한자는 Pretendard 에 없으므로 ja 본문은
  시스템 일본어 서체로 통째 그려지는 편이 섞이지 않는다(09-24 서브셋과 같은 방침).

산출물(글자 집합이 같으면 파일명·바이트가 같다 — 해시가 파일명이다)
  public/fonts/pretendard-site-<hash>.woff2, pretendard-ext<N>-<hash>.woff2
  app/globals.css 의 'FONT-SITE:BEGIN/END' 사이 @font-face
  lib/fonts.generated.ts (preload 경로·홈 커버리지 — 게이트와 Webfonts 가 쓴다)
"""
import hashlib, json, re, subprocess, sys, unicodedata, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "public" / "fonts"
CSS = ROOT / "app" / "globals.css"
TS = ROOT / "lib" / "fonts.generated.ts"
EXTRA = ROOT / "scripts" / "fonts" / "extra-chars.txt"
HOME_EXTRA = ROOT / "scripts" / "fonts" / "home-chars.txt"

SRC_URL = ("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/"
           "packages/pretendard/dist/public/variable/PretendardVariable.ttf")
SRC_SHA = "3090ccde0442bb347aa7685d9ba8b17436a60682df6e8f92a9a670de14056e22"
SRC = Path.home() / ".cache" / "pretendard" / "PretendardVariable-1.3.9.ttf"

FROZEN = ["pretendard-critical-20260924.woff2", "pretendard-rest-20260924.woff2",
          "pretendard-widget-20260924.woff2"]
HOME_FILES = ["pretendard-critical-20260924.woff2", "pretendard-widget-20260924.woff2"]
SCAN_DIRS = ["app", "components", "lib", "content", "scripts/inhega-daily"]
SCAN_EXT = {".ts", ".tsx", ".js", ".mjs", ".json", ".md", ".mdx", ".css", ".txt", ".html"}
ALWAYS = set([chr(c) for c in range(0x20, 0x7F)] + [chr(c) for c in range(0xA0, 0x100)]
             + list("‘’“”…·–—•→←↑↓×÷±≤≥≠※○●◦■□▲▼▴▾◆★☆✓✔✕✖©®™₩€$¥£"))
EXT_CHUNKS = 4
BEGIN, END = "/* FONT-SITE:BEGIN", "/* FONT-SITE:END */"


def src_font() -> Path:
    if not SRC.exists() or hashlib.sha256(SRC.read_bytes()).hexdigest() != SRC_SHA:
        SRC.parent.mkdir(parents=True, exist_ok=True)
        tmp = Path("/tmp/font/PretendardVariable.ttf")
        if tmp.exists() and hashlib.sha256(tmp.read_bytes()).hexdigest() == SRC_SHA:
            SRC.write_bytes(tmp.read_bytes())
        else:
            print("[font-subset] Pretendard 원본 내려받는 중…", file=sys.stderr)
            urllib.request.urlretrieve(SRC_URL, SRC)
        if hashlib.sha256(SRC.read_bytes()).hexdigest() != SRC_SHA:
            sys.exit("[font-subset] 원본 sha256 불일치 — 중단")
    return SRC


def font_chars(path: Path) -> set:
    from fontTools.ttLib import TTFont
    return {chr(c) for c in TTFont(str(path)).getBestCmap()}


def corpus() -> set:
    s = set()
    for d in SCAN_DIRS:
        for p in (ROOT / d).rglob("*"):
            if p.is_file() and p.suffix in SCAN_EXT and ".bak" not in p.name and p != TS:
                s |= set(p.read_text(encoding="utf-8", errors="ignore"))
    s |= chars_file(EXTRA) | chars_file(HOME_EXTRA)
    for f in FROZEN:
        s |= font_chars(FONTS / f)
    s |= ALWAYS
    return with_case(s)


def chars_file(path: Path) -> set:
    out = set()
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            if not line.startswith("#"):
                out |= set(line)
    return out


def with_case(s: set) -> set:
    return s | {v for c in list(s) for v in (c.upper(), c.lower()) if len(v) == 1}


def ksx1001_hangul() -> set:
    out = set()
    for b1 in range(0xB0, 0xC9):
        for b2 in range(0xA1, 0xFF):
            try:
                out.add(bytes([b1, b2]).decode("euc-kr"))
            except UnicodeDecodeError:
                pass
    assert len(out) == 2350, len(out)
    return out


def ranges(cps) -> str:
    cps = sorted(cps)
    out, start, prev = [], cps[0], cps[0]
    for c in cps[1:]:
        if c == prev + 1:
            prev = c
            continue
        out.append((start, prev)); start = prev = c
    out.append((start, prev))
    return ",".join(f"U+{a:x}" if a == b else f"U+{a:x}-{b:x}" for a, b in out)


def subset(name: str, chars: set, src: Path) -> str:
    text = "".join(sorted(chars))
    h = hashlib.sha256((SRC_SHA + text).encode()).hexdigest()[:10]
    fn = f"pretendard-{name}-{h}.woff2"
    out = FONTS / fn
    if not out.exists():
        tf = Path(f"/tmp/inhega-font-{name}.txt"); tf.write_text(text, encoding="utf-8")
        subprocess.run([sys.executable, "-m", "fontTools.subset", str(src), f"--text-file={tf}",
                        "--flavor=woff2", "--no-hinting", f"--output-file={out}"], check=True)
    print(f"[font-subset] {fn}  {out.stat().st_size/1024:.1f}KB  {len(chars)}자", file=sys.stderr)
    return fn


def main():
    src = src_font()
    cmap = font_chars(src)
    keep = {c for c in corpus()
            if c in cmap and c not in {"\t", "\n", "\r"}
            and not (0x3000 <= ord(c) <= 0x30FF and c != "。")
            and (c in (" ", " ") or not unicodedata.category(c).startswith("C"))}
    # 09-24 서브셋이 이미 담고 있던 CJK 기호는 유지(그때와 화면이 같도록)
    keep |= {c for f in FROZEN for c in font_chars(FONTS / f) if c in cmap}

    home_chars = set()
    for f in HOME_FILES:
        home_chars |= font_chars(FONTS / f)
    home_chars = {c for c in with_case(home_chars | chars_file(HOME_EXTRA)) if c in cmap
                  and (c in (" ", "\u00a0") or not unicodedata.category(c).startswith("C"))}
    home = subset("home", home_chars, src)
    site = subset("site", keep, src)
    ext_chars = sorted((ksx1001_hangul() & cmap) - keep)
    n = len(ext_chars)
    ext = []
    for i in range(EXT_CHUNKS):
        part = set(ext_chars[i * n // EXT_CHUNKS:(i + 1) * n // EXT_CHUNKS])
        if part:
            ext.append((subset(f"ext{i+1}", part, src), part))

    live = set(FROZEN) | {home, site} | {f for f, _ in ext}
    for p in FONTS.glob("pretendard-*.woff2"):
        if p.name not in live and re.match(r"pretendard-(home|site|ext\d)-[0-9a-f]{10}\.woff2$", p.name):
            p.unlink(); print(f"[font-subset] 낡은 파일 삭제 {p.name}", file=sys.stderr)

    face = ("@font-face{{font-family:'{fam}';font-style:normal;font-display:optional;"
            "font-weight:45 920;src:url(/fonts/{f}) format('woff2-variations');unicode-range:{r}}}")
    block = [f"{BEGIN} — scripts/build-font-subset.py 가 prebuild 마다 다시 쓴다. 손대지 말 것. */",
             face.format(fam="Pretendard Critical", f=home, r=ranges(ord(c) for c in home_chars)),
             face.format(fam="Pretendard Site", f=site, r=ranges(ord(c) for c in keep))]
    block += [face.format(fam="Pretendard Site", f=f, r=ranges(ord(c) for c in part)) for f, part in ext]
    block.append(END)
    css = CSS.read_text(encoding="utf-8")
    i, j = css.find(BEGIN), css.find(END)
    if i < 0 or j < 0:
        sys.exit("[font-subset] globals.css 에 FONT-SITE 마커가 없다")
    new = css[:i] + "\n".join(block) + css[j + len(END):]
    if new != css:
        CSS.write_text(new, encoding="utf-8")

    home_cov = home_chars
    ts = ("// scripts/build-font-subset.py 가 생성 — 손대지 말 것.\n"
          f"export const SITE_FONT_HREF = '/fonts/{site}'\n"
          f"export const HOME_FONT_HREF = '/fonts/{home}'\n")
    if not TS.exists() or TS.read_text(encoding="utf-8") != ts:
        TS.write_text(ts, encoding="utf-8")
    # 게이트가 읽는 커버리지(코드포인트) — 빌드 산출물만, 커밋 안 함
    cov = {"site": sorted(ord(c) for c in keep) + [ord(c) for _, p in ext for c in p],
           "home": sorted(ord(c) for c in home_cov if c in cmap), "cmap": sorted(ord(c) for c in cmap)}
    (ROOT / "scripts" / "fonts" / "coverage.json").write_text(json.dumps(cov), encoding="utf-8")
    print(f"[font-subset] site {len(keep)}자 + ext {n}자 / 홈 {len(home_cov)}자", file=sys.stderr)


main()
