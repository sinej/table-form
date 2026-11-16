import { useRef } from 'react'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import { STEPS } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'

export default function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <section id="process" className="section process">
      <SectionHead no="05" title="HOW WE WORK" sub="프로젝트 범위와 진행 과정은 상담 후 조정됩니다." />
      <div className="process__timeline" ref={ref}>
        <div className="process__rail">
          <motion.span style={{ scaleY: line }} />
        </div>
        {STEPS.map((s) => (
          <Step key={s.no} {...s} />
        ))}
      </div>
      <Reveal className="process__note">
        <span>DISCOVER</span> → <span>PLAN</span> → <span>BUILD</span> → <span>LAUNCH</span>
      </Reveal>
    </section>
  )
}

function Step({ no, en, title, desc }) {
  const ref = useRef(null)
  const active = useInView(ref, { margin: '-45% 0px -45% 0px' })
  const passed = useInView(ref, { once: true, margin: '0px 0px -50% 0px' })
  return (
    <div ref={ref} className={`step ${passed ? 'is-passed' : ''} ${active ? 'is-active' : ''}`}>
      <span className="step__node" />
      <span className="step__no">STEP {no}</span>
      <div className="step__body">
        <span className="step__en">{en}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}
