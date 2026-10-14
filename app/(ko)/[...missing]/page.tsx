import { notFound } from 'next/navigation'

// BOSSEYE-FIX-1014 #2: 어떤 경로에도 안 맞는 주소를 ko 레이아웃의 not-found(한글, 404)로 보낸다.
// 루트 app/not-found 가 없어(언어별 루트 레이아웃) 예전엔 레이아웃 없는 Next 기본 영문 화면이 나갔다.
export default function MissingPage() {
  notFound()
}
