import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Loader from './components/Loader.jsx'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Worries from './components/Worries.jsx'
import Services from './components/Services.jsx'
import Expertise from './components/Expertise.jsx'
import Packages from './components/Packages.jsx'
import Process from './components/Process.jsx'
import Statement from './components/Statement.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    window.__lenis = lenis
    let id
    const raf = (t) => {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = loaded ? '' : 'hidden'
  }, [loaded])

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <Cursor />
      <Nav />
      <main>
        <Hero ready={loaded} />
        <Marquee />
        <Worries />
        <Services />
        <Expertise />
        <Packages />
        <Process />
        <Statement />
        <Contact />
      </main>
    </>
  )
}
