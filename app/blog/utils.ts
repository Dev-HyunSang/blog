import { log } from 'console'
import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  description: string
  publishedAt: string
  summary: string 
  image?: string 
}

/* (2024.12.21 수정) 기존 방식의 경우에는 프론트매터가 null인 경우, 오류 발생하여, 없는 경우 프론트매터에 null 값을 반환하지 않고
  빈 데이터만 생성하여 반환할 수 있도록 개선하였음. */
/* (2024.12.23 수정) 로컬 상에서는 문제가 없으나, 실제로 vercel 통해서 배포하는 경우, 오류 발생. */
function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)


  if (!match) {
    return { metadata: {}, content: fileContent }
  }

  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // 따옴표 제거
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

// 한글로 하였는데, 브라우저랑 로컬에 저장되어 있는 파일명과 달라서 오류 발생.
function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    // 파일명을 한글로 하여도 불러올 수 있도록 처리함. - 박현상 2024.11.23
    let safeSlug = encodeURIComponent(path.basename(file, path.extname(file))) 
    let { metadata, content } = readMDXFile(path.join(dir, file))
    // let slug = path.basename(file, path.extname(file)) // 기존에 영어로 사용하는 경우에만 사용함.

    return {
      metadata,
      slug: safeSlug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
