// 언어 선택 국기 — 국기 그림·언어 목록은 ./Flag(서버·클라이언트 공용), 링크 묶음은 ./LangFlagsClient('use client', 경로에 따라 링크가 바뀐다).
// 기존 import 경로(@/components/ui/LangFlags)를 그대로 쓰도록 여기서 다시 내보낸다. (BOSSEYE-FIX-1014 요약1)
export { Flag, LANG_LINKS, type FlagLang } from './Flag'
export { default } from './LangFlagsClient'
