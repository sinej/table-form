import { motion } from 'framer-motion'
import { STEPS } from '../data.js'
import { SectionHead, ease } from './Reveal.jsx'

// 6단계 진행 과정 — 단계마다 기간과 결과물을 명시
export default function Process() {
  return (
    <section className="section process theme-paper">
      <SectionHead en="PROCESS" sub="모든 프로젝트는 같은 6단계로, 단계마다 결과물을 문서로 확인하며 진행합니다." />
      <ol className="process__grid">
        {STEPS.map((s, i) => (
          <motion.li
            key={s.no}
            className="step"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease }}
          >
            <div className="step__top">
              <span className="step__no">STEP {s.no}</span>
              <span className="step__period">{s.period}</span>
            </div>
            <h3>{s.title}</h3>
            <span className="step__en">{s.en}</span>
            <p>{s.desc}</p>
            <ul>
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
      <p className="process__note">메뉴·브랜드·홈페이지 전체 진행 기준 약 4~6주 · 프로젝트 범위와 진행 과정은 상담 후 조정됩니다.</p>
    </section>
  )
}
