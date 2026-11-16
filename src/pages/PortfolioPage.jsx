import { PageHead } from '../components/Reveal.jsx'
import Works from '../components/Works.jsx'
import Contact from '../components/Contact.jsx'

export default function PortfolioPage() {
  return (
    <>
      <PageHead kr="포트폴리오" en="PORTFOLIO" desc="말로 끝나는 컨설팅이 아니라, 매장에서 바로 쓰는 문서와 디자인으로 남깁니다." />
      <Works head={false} />
      <Contact />
    </>
  )
}
