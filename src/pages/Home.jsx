import Hero from '../components/Hero.jsx'
import Intro from '../components/Intro.jsx'
import Services from '../components/Services.jsx'
import Works from '../components/Works.jsx'
import Faq from '../components/Faq.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services more />
      <Works limit={3} more />
      <Faq />
      <Contact />
    </>
  )
}
