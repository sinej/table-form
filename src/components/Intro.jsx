import { STATS } from '../data.js'
import { Reveal } from './Reveal.jsx'
import { Link } from 'react-router-dom'

export default function Intro() {
  return (
    <section className="section intro">
      <Reveal as="h2" className="intro__title">
        외식 창업의 새로운 기준
      </Reveal>
      <Reveal as="p" className="intro__desc" delay={0.08}>
        막막하고 흩어져 있던 외식 창업 준비, TABLE:FORM이 하나로 정리합니다.
        <br />
        셰프 10년의 현장 경험과 브랜드·디지털 전문성으로 메뉴부터 매장까지 체계적으로 설계합니다.
      </Reveal>
      <Reveal delay={0.14}>
        <Link className="pill pill--line" to="/story">
          MORE
        </Link>
      </Reveal>

      <div className="stats">
        {STATS.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={0.1 + i * 0.08}>
            <strong>
              {s.value}
              <small>{s.unit}</small>
            </strong>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
