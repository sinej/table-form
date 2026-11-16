import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { WORRIES } from '../data.js'
import { Reveal, ScrollText, SectionHead } from './Reveal.jsx'

export default function Worries() {
  return (
    <section id="about" className="section worries">
      <div className="intro">
        <Reveal className="eyebrow">ABOUT TABLE:FORM</Reveal>
        <ScrollText
          className="intro__statement"
          text="좋은 식당은 좋은 아이디어만으로 완성되지 않습니다. 메뉴의 경쟁력, 합리적인 원가, 효율적인 주방, 명확한 브랜드 콘셉트, 안정적인 운영 시스템까지."
          accent={[7, 9, 11, 13, 14]}
        />
        <Reveal className="intro__desc" delay={0.1}>
          TABLE:FORM은 외식업 창업에 필요한 요소들을 <strong>하나의 방향으로 설계</strong>하는 F&B 비즈니스 파트너입니다.
          현장 경험과 디자인·기술의 전문성을 연결합니다.
        </Reveal>
      </div>

      <div className="worries__layout">
        <div className="worries__sticky">
          <SectionHead no="01" title="이런 고민을 하고 계신가요?" />
        </div>
        <ul className="worries__list">
          {WORRIES.map((w, i) => (
            <WorryItem key={i} index={i} text={w} />
          ))}
          <Reveal as="li" className="worries__answer">
            이 모든 과정을 <em>혼자 고민할 필요는 없습니다.</em>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}

function WorryItem({ text, index }) {
  const ref = useRef(null)
  const active = useInView(ref, { margin: '-40% 0px -40% 0px' })
  const seen = useInView(ref, { once: true, margin: '-40% 0px -40% 0px' })
  return (
    <li ref={ref} className={`worries__item ${active ? 'is-active' : ''}`}>
      <span className="worries__check">
        <svg viewBox="0 0 24 24" fill="none">
          <motion.path
            d="M5 12.5l4.5 4.5L19 7.5"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: seen ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </svg>
      </span>
      <span className="worries__num">Q{String(index + 1).padStart(2, '0')}</span>
      <p>{text}</p>
    </li>
  )
}
