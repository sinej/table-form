// 검색엔진(네이버 Yeti 등)이 JS 실행 없이도 본문을 읽을 수 있도록 페이지마다 HTML을 미리 만듭니다.
// /service → dist/service/index.html 처럼 저장되어 정적 호스팅에서 그대로 열립니다.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const { render, ROUTES, SITE } = await import(`${root}dist-server/entry-server.js`)

const template = readFileSync(`${root}dist/index.html`, 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('index.html에 <!--app-html--> 자리표시자가 없습니다.')

const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

for (const { path, title, description } of ROUTES) {
  const url = `${SITE}${path}`
  const html = template
    .replace('<!--app-html-->', render(path))
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${attr(description)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${attr(title)}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${attr(description)}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  const dir = path === '/' ? `${root}dist` : `${root}dist${path}`
  mkdirSync(dir, { recursive: true })
  writeFileSync(`${dir}/index.html`, html)
  console.log(`prerendered ${path}`)
}

rmSync(`${root}dist-server`, { recursive: true, force: true })
