import { PageHead } from '../components/Reveal.jsx'
import Contact from '../components/Contact.jsx'
import Faq from '../components/Faq.jsx'

export default function ContactPage() {
  return (
    <>
      <PageHead kr="상담 신청" en="CONTACT" desc="상담 후 프로젝트에 필요한 서비스와 진행 범위, 개별 견적을 안내드립니다." />
      <Contact head={false} />
      <Faq />
    </>
  )
}
