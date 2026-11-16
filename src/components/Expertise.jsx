import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { DIRECTORS } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <SectionHead no="03" title="OUR EXPERTISE" sub="현장과 기술, 두 가지 전문성의 결합" />
      <div className="expertise__grid">
        {DIRECTORS.map((d, i) => (
          <Reveal key={d.role} delay={i * 0.12}>
            <DirectorCard {...d} />
          </Reveal>
        ))}
      </div>
      <Reveal className="expertise__plus" delay={0.2}>
        <span>KITCHEN</span>
        <b>+</b>
        <span>BRAND</span>
        <b>+</b>
        <span>DIGITAL</span>
        <b>=</b>
        <em>ONE DIRECTION</em>
      </Reveal>
    </section>
  )
}

// 마우스 위치를 따라 기울어지고 테두리 빛이 움직이는 카드
function DirectorCard({ role, stats, desc, tags }) {
  const rx = useSpring(0, { stiffness: 150, damping: 18 })
  const ry = useSpring(0, { stiffness: 150, damping: 18 })
  const gx = useMotionValue(50)
  const gy = useMotionValue(50)
  const bg = useMotionTemplate`radial-gradient(420px circle at ${gx}% ${gy}%, rgba(143,227,172,0.18), transparent 55%)`

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    ry.set((px - 0.5) * 10)
    rx.set(-(py - 0.5) * 10)
    gx.set(px * 100)
    gy.set(py * 100)
  }
  const onLeave = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.article className="director" style={{ rotateX: rx, rotateY: ry }} onPointerMove={onMove} onPointerLeave={onLeave}>
      <motion.div className="director__glow" style={{ background: bg }} />
      <div className="director__role">{role}</div>
      <div className="director__stats">
        {stats.map((s) => (
          <div key={s.label} className="director__stat">
            <strong>
              <Counter to={s.value} />
              <small>년</small>
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <p className="director__desc">{desc}</p>
      <div className="director__tags">
        {tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

function Counter({ to }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{n}</span>
}
