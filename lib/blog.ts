import { getAnonClient } from './supabase/server'

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  content: string
}

const TABLE = 'inhega_blog_posts'

type Row = {
  slug: string
  title: string
  category: string | null
  excerpt: string | null
  image: string | null
  content: string
  post_date: string
}

function toPost(row: Row): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    date: row.post_date,
    category: row.category || '',
    excerpt: row.excerpt || '',
    image: row.image || '/slides/documents.jpg',
    content: row.content,
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const sb = getAnonClient()
  const { data, error } = await sb
    .from(TABLE)
    .select('slug')
    .eq('locale', 'ko')
    .eq('published', true)
  if (error) throw error
  return Array.from(new Set((data || []).map((r) => r.slug)))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const sb = getAnonClient()
  const { data } = await sb
    .from(TABLE)
    .select('*')
    .eq('slug', slug)
    .eq('locale', 'ko')
    .eq('published', true)
    .maybeSingle()
  return data ? toPost(data as Row) : null
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const sb = getAnonClient()
  const { data, error } = await sb
    .from(TABLE)
    .select('*')
    .eq('locale', 'ko')
    .eq('published', true)
    .order('post_date', { ascending: false })
  if (error) throw error
  return (data || []).map((r) => toPost(r as Row))
}
