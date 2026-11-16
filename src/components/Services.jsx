import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SERVICES } from '../data.js'
import { Reveal, SectionHead, ease } from './Reveal.jsx'

// 아코디언 행: 호버 시 테라코타 배경이 차오르고, 클릭하면 세부 항목이 펼쳐집니다.
export default function Services() {
  const [open, setOpen] = useState(0)
  return (
    <section id="services" className="section services is-paper">
      <SectionHead no="02" title="WHAT WE DO" sub="외식업에 필요한 핵심 영역을 함께 준비합니다." />
      <div className="services__list">
        {SERVICES.map((s, i) => {
          const isOpen = open === i
          return (
            <Reveal key={s.no} delay={i * 0.08} className={`service ${isOpen ? 'is-open' : ''}`}>
              <button className="service__row" onClick={() => setOpen(isOpen ? -1 : i)} data-cursor={isOpen ? 'CLOSE' : 'OPEN'}>
                <span className="service__no">{s.no}</span>
                <span className="service__title">{s.title}</span>
                <span className="service__lead">{s.lead}</span>
                <span className="service__toggle" aria-hidden="true">
                  <i />
                  <i />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="service__body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <ul>
                      {s.items.map((item, k) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + k * 0.05, duration: 0.5, ease }}
                        >
                          <span>{String(k + 1).padStart(2, '0')}</span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
