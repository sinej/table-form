import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { REGIONS } from '../data.js'
import { scrollToId } from './Nav.jsx'

const WORD = ['T', 'A', 'B', 'L', 'E', ':', 'F', 'O', 'R', 'M']
const ease = [0.22, 1, 0.36, 1]

export default function Hero({ ready }) {
  const ref = useRef(null)
  const mx = useMotionValue(50)
  const my = useMotionValue(40)
  const smx = useSpring(mx, { stiffness: 80, damping: 20 })
  const smy = useSpring(my, { stiffness: 80, damping: 20 })
  const glow = useMotionTemplate`radial-gradient(600px circle at ${smx}% ${smy}%, rgba(var(--accent-rgb), 0.18), transparent 60%)`

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const plateRotate = useTransform(scrollYProgress, [0, 1], [0, 120])

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set(((e.clientX - r.left) / r.width) * 100)
    my.set(((e.clientY - r.top) / r.height) * 100)
  }

  return (
    <section id="top" className="hero" ref={ref} onPointerMove={onMove}>
      <motion.div className="hero__glow" style={{ background: glow }} />
      <div className="hero__grid" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0 }}
            animate={ready ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.1 * i, ease }}
          />
        ))}
      </div>

      <motion.div className="hero__meta" style={{ opacity: fade }}>
        <motion.span initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.9, duration: 0.8, ease }}>
          F&B BUSINESS PARTNER
        </motion.span>
        <motion.span initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1, duration: 0.8, ease }}>
          CONSULTING / BRANDING / DIGITAL
        </motion.span>
        <motion.span initial={{ opacity: 0, y: 12 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.1, duration: 0.8, ease }}>
          {REGIONS}
        </motion.span>
      </motion.div>

      <motion.div
        className="plate"
        aria-hidden="true"
        style={{ opacity: fade, rotate: plateRotate }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={ready ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.7, duration: 1.2, ease }}
      >
        <Plate />
      </motion.div>

      <motion.h1 className="hero__title" style={{ y: titleY, scale: titleScale }} aria-label="TABLE:FORM">
        {WORD.map((ch, i) => (
          <span className="hero__char-mask" key={i} aria-hidden="true">
            <motion.span
              className={`hero__char ${ch === ':' ? 'is-colon' : ''}`}
              initial={{ y: '110%', rotate: 8 }}
              animate={ready ? { y: '0%', rotate: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.05 * i, ease }}
              whileHover={{ y: '-8%', transition: { duration: 0.25 } }}
            >
              {ch}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.div className="hero__bottom" style={{ opacity: fade }}>
        <motion.p
          className="hero__lead"
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1, ease }}
        >
          음식의 본질부터
          <br />
          <em>브랜드의 완성까지.</em>
        </motion.p>
        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.95, duration: 1, ease }}
        >
          메뉴 개발, 원가 설계, 주방 운영, 브랜드 디자인, 디지털 구축까지.
          <br />
          외식업의 시작과 성장을 하나의 방향으로 설계합니다.
        </motion.p>
        <motion.button
          className="hero__scroll"
          onClick={() => scrollToId('about')}
          data-cursor="SCROLL"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.3 }}
        >
          <span>Scroll</span>
          <i />
        </motion.button>
      </motion.div>
    </section>
  )
}

// 접시 위 포크·나이프, 테두리를 따라 도는 서비스 키워드
function Plate() {
  return (
    <svg viewBox="0 0 200 200" fill="none">
      <defs>
        <path id="plate-ring" d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
      </defs>
      <g className="plate__ring">
        <text className="plate__text">
          <textPath href="#plate-ring">MENU · RECIPE · COST · KITCHEN · BRAND · DIGITAL ·</textPath>
        </text>
      </g>
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="52" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M86 72v18m-5-18v12a5 5 0 0 0 10 0V72M86 94v34" />
        <path d="M114 128V72c-6 4-8 14-8 24h8" />
      </g>
    </svg>
  )
}
