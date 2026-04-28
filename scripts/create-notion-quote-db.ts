// Creates the 견적문의 Notion database under a given parent page.
// Usage: npx tsx scripts/create-notion-quote-db.ts <parent_page_id>
import { config as loadEnv } from "dotenv"
loadEnv({ path: ".env.vercel" })
loadEnv({ path: ".env.local" })
loadEnv()

const TOKEN = process.env.NOTION_API_KEY || ""
if (!TOKEN) {
  console.error("Missing NOTION_API_KEY (tried .env.vercel and .env.local)")
  process.exit(1)
}

const PARENT_PAGE_ID = process.argv[2] || "3435bd7c-ac5a-807f-b4ce-c89a71d92ebc"

const selectOptions = (names: string[]) => ({
  select: {
    options: names.map((name) => ({ name })),
  },
})

const CATEGORY_OPTIONS = [
  "국제물류주선업",
  "환전업 등록",
  "외국인도시민박업",
  "호스텔업",
  "한옥체험업",
  "건축물 용도변경",
  "식품제조가공업",
  "여성기업인증",
  "비영리사단법인",
  "담배수입판매업 등록",
  "기업 인증(벤처/이노비즈)",
  "식품 인허가 & HACCP",
  "의약외품/화장품 허가",
  "조달청 나라장터 등록",
  "기업부설연구소 설립",
  "전자담배 수입허가",
  "사회적기업 인증",
  "기타 (위에 해당 없음)",
]

const STATUS_OPTIONS = ["신규", "검토중", "연락완료", "보류", "종료"]

const STAGE_OPTIONS = [
  "처음 알아보는 단계",
  "준비 중",
  "장소/사무실은 확보함",
  "서류 준비 중",
  "최대한 빨리 진행 원함",
]

const BIZ_TYPE_OPTIONS = [
  "개인사업자",
  "법인사업자",
  "법인 설립 예정",
  "외국법인/외국인",
  "아직 미정",
]

const PLACE_OPTIONS = [
  "이미 확보함",
  "계약 예정",
  "후보지 검토 중",
  "아직 없음",
  "해당 없음",
]

const SCOPE_OPTIONS = [
  "서류 안내만 받기",
  "일부 대행 원함",
  "처음부터 끝까지 전체 대행 원함",
  "상담 후 결정",
]

async function main() {
  const body = {
    parent: { type: "page_id", page_id: PARENT_PAGE_ID },
    icon: { type: "emoji", emoji: "📋" },
    title: [{ type: "text", text: { content: "인허가 견적문의 접수" } }],
    properties: {
      "01고객명": { title: {} },
      "02카테고리": selectOptions(CATEGORY_OPTIONS),
      "03현재상황": selectOptions(STATUS_OPTIONS),
      "04접수일": { date: {} },
      "05이메일": { email: {} },
      "06연락처": { phone_number: {} },
      "07SNS": { rich_text: {} },
      "08회사명": { rich_text: {} },
      "09주소": { rich_text: {} },
      "10메시지": { rich_text: {} },
      "11진행단계": selectOptions(STAGE_OPTIONS),
      "12사업형태": selectOptions(BIZ_TYPE_OPTIONS),
      "13장소확보": selectOptions(PLACE_OPTIONS),
      "14희망진행방식": selectOptions(SCOPE_OPTIONS),
      "15세부Q1라벨": { rich_text: {} },
      "16세부Q1답변": { rich_text: {} },
      "17세부Q2라벨": { rich_text: {} },
      "18세부Q2답변": { rich_text: {} },
      "19세부Q3라벨": { rich_text: {} },
      "20세부Q3답변": { rich_text: {} },
      "21세부Q4라벨": { rich_text: {} },
      "22세부Q4답변": { rich_text: {} },
      "23세부Q5라벨": { rich_text: {} },
      "24세부Q5답변": { rich_text: {} },
      "25담당자": { rich_text: {} },
      "26메모": { rich_text: {} },
    },
  }

  const res = await fetch("https://api.notion.com/v1/databases", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + TOKEN,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  if (!res.ok) {
    console.error("FAIL:", res.status, data)
    process.exit(1)
  }
  console.log("OK — database created")
  console.log("  id:    ", data.id)
  console.log("  url:   ", data.url)
  console.log("  title: ", data.title?.[0]?.plain_text)
}

main().catch((e) => {
  console.error("FAIL:", e?.message || e)
  process.exit(1)
})
