// Migrates inhega blog posts from content/blog/*.md to Supabase inhega_blog_posts.
// Usage: npx tsx scripts/migrate-blog-to-supabase.ts [--dry]
import { config as loadEnv } from 'dotenv'
loadEnv({ path: '.env.local' })
loadEnv()

import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'
import { createClient } from '@supabase/supabase-js'

const DRY = process.argv.includes('--dry')
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')
const TABLE = 'inhega_blog_posts'

function mdToHtml(md: string): string {
  return remark().use(remarkGfm).use(html, { sanitize: false }).processSync(md).toString()
}

async function main() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SECRET_KEY
  if (!url || !key) throw new Error('Missing Supabase env')

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'))
  console.log(`found ${files.length} .md files`)

  const rows: Array<{
    slug: string; locale: string; title: string; category: string | null;
    excerpt: string | null; image: string | null; content: string;
    post_date: string; published: boolean;
  }> = []

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const slug = data.slug || file.replace('.md', '')
    const date = data.date
      ? (typeof data.date === 'string' ? data.date.slice(0, 10) : new Date(data.date).toISOString().slice(0, 10))
      : new Date().toISOString().slice(0, 10)

    rows.push({
      slug,
      locale: 'ko',
      title: String(data.title || slug),
      category: data.category || null,
      excerpt: data.excerpt || null,
      image: data.image || '/slides/documents.jpg',
      content: mdToHtml(content),
      post_date: date,
      published: true,
    })
  }

  console.log(`prepared ${rows.length} rows`)

  if (DRY) {
    console.log('DRY run — not writing')
    console.log('sample:', { ...rows[0], content: rows[0]?.content.slice(0, 100) + '...' })
    return
  }

  const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })

  for (let i = 0; i < rows.length; i += 50) {
    const chunk = rows.slice(i, i + 50)
    const { error } = await supabase.from(TABLE).upsert(chunk, { onConflict: 'slug,locale' })
    if (error) throw new Error(error.message)
    process.stdout.write(`\r  upserted ${Math.min(i + 50, rows.length)}/${rows.length}`)
  }
  console.log('\nDONE')
}

main().catch(e => { console.error('FAIL:', e?.message); process.exit(1) })
