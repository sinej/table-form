import { PageHead } from '../components/Reveal.jsx'
import Services from '../components/Services.jsx'
import Process from '../components/Process.jsx'
import Contact from '../components/Contact.jsx'

export default function ServicePage() {
  return (
    <>
      <PageHead kr="서비스 소개" en="SERVICE" desc="메뉴와 주방, 브랜드와 디자인, 디지털까지. 외식 창업에 필요한 세 가지 분야를 한 팀이 설계합니다." />
      <Services head={false} />
      <Process />
      <Contact />
    </>
  )
}
