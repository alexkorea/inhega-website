-- RAG schema for inhega (인허가) legal references
-- Shared Supabase project with adminpro; isolated by rag_ prefix.

create table if not exists rag_categories (
  id serial primary key,
  slug text unique not null,
  name text not null,
  description text,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table if not exists rag_laws (
  id serial primary key,
  category_id int references rag_categories(id) on delete cascade,
  law_id text,
  mst text,
  law_name text not null,
  law_type text,
  department text,
  promulgation_date date,
  enforcement_date date,
  source_url text,
  fetched_at timestamptz default now(),
  unique(category_id, law_name)
);

create table if not exists rag_law_articles (
  id serial primary key,
  law_id int references rag_laws(id) on delete cascade,
  article_no text,
  article_title text,
  content text not null,
  sort_order int,
  created_at timestamptz default now()
);

create index if not exists idx_rag_laws_category on rag_laws(category_id);
create index if not exists idx_rag_articles_law on rag_law_articles(law_id);
create index if not exists idx_rag_articles_content_search on rag_law_articles using gin (to_tsvector('simple', content));

-- Seed categories (10 inhega business lines)
insert into rag_categories (slug, name, description, sort_order) values
  ('international-freight-forwarding', '국제물류주선업', '화물운송주선업자 등록 및 국제물류 관련 인허가', 1),
  ('hostel', '호스텔업', '호스텔업 등록을 위한 시설 기준 및 인허가 절차', 2),
  ('food-manufacturing', '식품제조가공업', '식품제조가공업 영업등록 및 관련 인허가', 3),
  ('nonprofit-association', '비영리사단법인', '비영리사단법인 설립 허가 및 등기 절차', 4),
  ('tobacco-import', '담배수입판매업', '담배수입판매업 등록에 필요한 요건과 절차', 5),
  ('venture-inno-biz', '기업인증(벤처/이노비즈)', '벤처기업 확인, 이노비즈 인증 등 기업 인증', 6),
  ('food-haccp', '식품 인허가 & HACCP', '식품 관련 인허가 및 HACCP 인증 취득', 7),
  ('cosmetics-quasi-drug', '의약외품/화장품 허가', '의약외품 및 화장품 제조·수입 허가', 8),
  ('corporate-rnd-center', '기업부설연구소', '기업부설연구소 및 연구개발전담부서 설립 인정', 9),
  ('e-cigarette-import', '전자담배 수입허가', '전자담배 수입 관련 허가 및 등록', 10)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  sort_order = excluded.sort_order;
