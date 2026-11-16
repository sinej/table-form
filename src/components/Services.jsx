import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SERVICES, SERVICE_PHOTOS, photo } from '../data.js'
import { Reveal, SectionHead, ease } from './Reveal.jsx'

// head: 섹션 제목 표시, more: 서비스 페이지로 가는 버튼 (홈용)
export default function Services({ head = true, more = false }) {
  return (
    <section className="section services">
      {head && <SectionHead en="SERVICES" sub="메뉴와 브랜드, 디지털이 따로 놀지 않도록 처음부터 한 팀이 함께 설계합니다." />}
      <div className="services__grid">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.no}
            className="service"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.1, ease }}
          >
            <div className="service__photo">
              <img src={photo(SERVICE_PHOTOS[i], 900)} alt="" loading="lazy" />
            </div>
            <span className="service__en">
              {s.no} {s.title}
            </span>
            <h3 className="service__kr">{s.kr}</h3>
            <p className="service__lead">{s.lead}</p>
            <ul className="service__items">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
      {more && (
        <Reveal className="section-more">
          <Link className="pill pill--line" to="/service">
            VIEW MORE
          </Link>
        </Reveal>
      )}
    </section>
  )
}
