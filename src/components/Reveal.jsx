import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1]

export const maskUp = { hidden: { y: '105%' }, show: { y: '0%' } }

export function Reveal({ children, delay = 0, y = 40, className, as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ no, title, sub }) {
  return (
    <div className="section-head">
      <Reveal className="section-head__no">
        <span>{no}</span>
        <i />
      </Reveal>
      <h2 className="section-head__title">
        {/* 관찰 대상은 마스크(부모) — 마스크에 가려진 자식은 IntersectionObserver에 잡히지 않음 */}
        <motion.span className="mask" initial="hidden" whileInView="show" viewport={{ once: true, margin: '-10% 0px' }}>
          <motion.span variants={maskUp} transition={{ duration: 1, ease }}>
            {title}
          </motion.span>
        </motion.span>
      </h2>
      {sub && (
        <Reveal className="section-head__sub" delay={0.15}>
          {sub}
        </Reveal>
      )}
    </div>
  )
}

// 스크롤에 따라 단어가 하나씩 밝아지는 텍스트
export function ScrollText({ text, className, accent = [] }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={`scroll-text ${className ?? ''}`}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} accent={accent.includes(i)}>
          {w}
        </Word>
      ))}
    </p>
  )
}

function Word({ children, progress, range, accent }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const y = useTransform(progress, range, [8, 0])
  return (
    <span className={`scroll-text__word ${accent ? 'is-accent' : ''}`}>
      <motion.span style={{ opacity, y, display: 'inline-block' }}>{children}</motion.span>{' '}
    </span>
  )
}
