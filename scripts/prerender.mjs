// 검색엔진(네이버 Yeti 등)이 JS 실행 없이도 본문을 읽을 수 있도록 빌드된 index.html에 앱 HTML을 미리 넣습니다.
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const { render } = await import(`${root}dist-server/entry-server.js`)

const file = `${root}dist/index.html`
const html = readFileSync(file, 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('index.html에 <!--app-html--> 자리표시자가 없습니다.')

writeFileSync(file, html.replace('<!--app-html-->', render()))
rmSync(`${root}dist-server`, { recursive: true, force: true })
console.log('prerendered dist/index.html')
