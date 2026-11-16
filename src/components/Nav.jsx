import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from 'framer-motion'
import { INSTAGRAM } from '../data.js'
import { InstagramIcon } from './Icons.jsx'

const LINKS = [
  ['about', 'About'],
  ['services', 'Services'],
  ['expertise', 'Expertise'],
  ['packages', 'Packages'],
  ['process', 'Process'],
  ['contact', 'Contact'],
]

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -20 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(v > prev && v > 400 && !open)
    setSolid(v > 40)
  })

  const go = (id) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <>
      <motion.header
        className={`nav ${solid ? 'is-solid' : ''}`}
        animate={{ y: hidden ? '-110%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <button className="nav__logo" onClick={() => go('top')}>
          TABLE<span className="colon">:</span>FORM
        </button>
        <nav className="nav__links">
          {LINKS.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>
              <span data-text={label}>{label}</span>
            </button>
          ))}
        </nav>
        <a className="nav__insta" href={INSTAGRAM.url} target="_blank" rel="noreferrer" data-cursor="DM">
          <InstagramIcon />
          <span>{INSTAGRAM.handle}</span>
        </a>
        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="메뉴">
          <span />
          <span />
        </button>
        <motion.div className="nav__progress" style={{ scaleX: scrollYProgress }} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {LINKS.map(([id, label], i) => (
              <motion.button
                key={id}
                onClick={() => go(id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
              >
                <small>0{i + 1}</small>
                {label}
              </motion.button>
            ))}
            <a href={INSTAGRAM.url} target="_blank" rel="noreferrer" className="mobile-menu__insta">
              <InstagramIcon /> {INSTAGRAM.handle}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
