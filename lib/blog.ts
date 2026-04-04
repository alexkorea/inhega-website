import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  content: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  const files = fs.readdirSync(postsDirectory)
  return files.filter(f => f.endsWith('.md')).map(f => f.replace('.md', ''))
}

export function getPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: data.slug || slug,
    title: data.title,
    date: typeof data.date === 'string' ? data.date : new Date(data.date).toISOString().slice(0, 10),
    category: data.category,
    excerpt: data.excerpt,
    image: data.image || '/slides/documents.jpg',
    content,
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  return posts
}
