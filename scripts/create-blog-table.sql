-- inhega_blog_posts 테이블 생성
-- Supabase SQL Editor에서 실행하세요

CREATE TABLE IF NOT EXISTS public.inhega_blog_posts (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  category text,
  excerpt text,
  content text,
  cover_image text,
  meta_title text,
  meta_description text,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- RLS 정책 (anon 읽기 허용)
ALTER TABLE public.inhega_blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access" ON public.inhega_blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Service role full access" ON public.inhega_blog_posts
  USING (auth.role() = 'service_role');

-- 인덱스
CREATE INDEX IF NOT EXISTS inhega_blog_posts_slug_idx ON public.inhega_blog_posts (slug);
CREATE INDEX IF NOT EXISTS inhega_blog_posts_created_at_idx ON public.inhega_blog_posts (created_at DESC);
CREATE INDEX IF NOT EXISTS inhega_blog_posts_category_idx ON public.inhega_blog_posts (category);
