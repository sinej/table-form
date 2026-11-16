import { PageHead } from '../components/Reveal.jsx'
import Story from '../components/Story.jsx'
import Contact from '../components/Contact.jsx'

export default function StoryPage() {
  return (
    <>
      <PageHead kr="스토리" en="STORY" desc="음식의 본질부터 브랜드의 완성까지." />
      <Story head={false} />
      <Contact />
    </>
  )
}
