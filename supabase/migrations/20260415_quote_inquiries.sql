-- 견적문의 (/quote) 제출 저장용 테이블
-- 16개 카테고리 × (공통 4 + 카테고리별 5) 구조를 JSON으로 유연하게 저장한다.

create table if not exists quote_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),

  -- 연락처 / 공통
  name text not null,
  email text not null,
  phone text,
  sns_id text,
  company text,
  address text,
  message text,

  -- 카테고리 (slug) + 이름 (리네이밍 대비 둘 다 저장)
  category_slug text not null,
  category_name text not null,

  -- 공통 4문항 + 카테고리별 5문항 답변
  -- common_answers: { stage, business_type, place, scope }
  -- category_answers: { <question_id>: <선택지 텍스트>, ... }
  common_answers jsonb default '{}'::jsonb,
  category_answers jsonb default '{}'::jsonb,

  -- 접수 후 운영용
  status text default 'new'  -- new | in_review | contacted | closed
);

create index if not exists quote_inquiries_created_at_idx on quote_inquiries (created_at desc);
create index if not exists quote_inquiries_category_idx on quote_inquiries (category_slug);
create index if not exists quote_inquiries_status_idx on quote_inquiries (status);
