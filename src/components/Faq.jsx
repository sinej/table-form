import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FAQ } from '../data.js'
import { SectionHead, ease } from './Reveal.jsx'

export default function Faq() {
  const [open, setOpen] = useState(-1)
  return (
    <section className="section faq">
      <SectionHead en="FAQ" />
      <ul className="faq__list">
        {FAQ.map((f, i) => {
          const isOpen = open === i
          return (
            <li key={f.q} className={isOpen ? 'is-open' : ''}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
                <span>{f.q}</span>
                <i aria-hidden="true" />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
