import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { WORKS } from '../data.js'
import { Reveal, SectionHead, Seal, ease } from './Reveal.jsx'

// 포트폴리오 — 납품 결과물의 구성 예시. 실제 고객 사례가 아니라는 안내 문구를 함께 둡니다.
// head: 섹션 제목 표시, limit: 보여줄 개수, more: 포트폴리오 페이지로 가는 버튼 (홈용)
export default function Works({ head = true, limit, more = false }) {
  return (
    <section className="section works">
      {head && <SectionHead en="PORTFOLIO" sub="말로 끝나는 컨설팅이 아니라, 매장에서 바로 쓰는 문서와 디자인으로 남깁니다." />}
      <Reveal as="p" className="works__note">
        아래는 납품 결과물의 구성 예시입니다. 실제 프로젝트 사례는 순차적으로 공개됩니다.
      </Reveal>

      <div className="works__grid">
        {WORKS.slice(0, limit).map((w, i) => (
          <motion.article
            key={w.kind}
            className={`work work--${w.kind}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 1.1, delay: (i % 3) * 0.1, ease }}
          >
            <div className="work__tray">
              <Mock kind={w.kind} />
            </div>
            <div className="work__meta">
              <span className="work__cat">{w.cat}</span>
              <div className="work__title">
                <h3>{w.title}</h3>
                <span className="work__arrow" aria-hidden="true">›</span>
              </div>
              <p>{w.desc}</p>
              <ul>
                {w.includes.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
      {more && (
        <Reveal className="section-more">
          <Link className="pill pill--line" to="/portfolio">
            VIEW MORE
          </Link>
        </Reveal>
      )}
    </section>
  )
}

function Mock({ kind }) {
  switch (kind) {
    case 'menu':
      return (
        <div className="mock mock-menu">
          <small>SEASONAL COURSE</small>
          <strong>오늘의 코스</strong>
          {[
            ['전채', '계절 채소 · 유자'],
            ['사시미', '숙성 흰살 생선'],
            ['니기리', '7점'],
            ['한우', '숯불 채끝 · 와사비'],
            ['식사', '솥밥 · 장국'],
            ['디저트', '흑임자 아이스크림'],
          ].map(([a, b]) => (
            <p key={a}>
              <b>{a}</b>
              <i />
              <span>{b}</span>
            </p>
          ))}
        </div>
      )
    case 'recipe':
      return (
        <div className="mock mock-recipe">
          <header>
            <small>RECIPE NO. 07</small>
            <strong>숯불 채끝 스테이크</strong>
          </header>
          <table>
            <tbody>
              {[
                ['한우 채끝 (1++)', '180 g'],
                ['굵은 소금', '2 g'],
                ['생와사비', '5 g'],
                ['간장 소스', '15 ml'],
              ].map(([a, b]) => (
                <tr key={a}>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ol>
            <li>상온 30분 템퍼링</li>
            <li>숯불 면당 90초, 휴지 4분</li>
            <li>1.2cm 두께로 7조각</li>
          </ol>
        </div>
      )
    case 'cost':
      return (
        <div className="mock mock-cost">
          <header>
            <small>COST RATIO</small>
            <span>목표 30%</span>
          </header>
          {[
            ['런치 코스', 27],
            ['디너 코스', 31],
            ['한우 추가', 38],
            ['주류 페어링', 22],
          ].map(([name, v], i) => (
            <div className="mock-cost__row" key={name}>
              <span>{name}</span>
              <div>
                <motion.i
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: v / 50 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3 + i * 0.12, ease }}
                  className={v > 30 ? 'is-over' : ''}
                />
              </div>
              <b>{v}%</b>
            </div>
          ))}
          <em className="mock-cost__target" />
        </div>
      )
    case 'kitchen':
      return (
        <svg className="mock mock-kitchen" viewBox="0 0 320 200" fill="none">
          <rect x="10" y="10" width="300" height="180" stroke="currentColor" strokeOpacity=".5" />
          {[
            [20, 20, 70, 50, '냉장'],
            [100, 20, 90, 50, '프렙'],
            [200, 20, 100, 50, '화구 · 숯'],
            [20, 130, 70, 50, '세척'],
            [200, 130, 100, 50, '패스'],
          ].map(([x, y, w, h, t]) => (
            <g key={t}>
              <rect x={x} y={y} width={w} height={h} fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".35" />
              <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle">
                {t}
              </text>
            </g>
          ))}
          <motion.path
            d="M55 70 V100 H145 V70 M145 100 H250 V70 M250 100 V130"
            className="mock-kitchen__flow"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          />
          <text x="110" y="160" className="mock-kitchen__note">
            8석 카운터 기준 동선
          </text>
        </svg>
      )
    case 'brand':
      return (
        <div className="mock mock-brand">
          <div className="mock-brand__mark">
            <Seal size={56} text={['S', 'B']} />
            <div>
              <strong>SUBAN</strong>
              <small>한우 오마카세 · 예시 브랜드</small>
            </div>
          </div>
          <div className="mock-brand__chips">
            {['#0a0a0a', '#3d3d3d', '#8a8a8a', '#e4e4e4', '#ffffff'].map((c) => (
              <span key={c} style={{ background: c }}>
                <small>{c}</small>
              </span>
            ))}
          </div>
          <p className="mock-brand__type">
            <span>가나다 Aa</span>
            <small>Geist · Pretendard</small>
          </p>
        </div>
      )
    case 'web':
      return (
        <div className="mock mock-web">
          <div className="mock-web__bar">
            <i />
            <i />
            <i />
            <span>suban-omakase.com</span>
          </div>
          <div className="mock-web__body">
            <small>HANWOO OMAKASE</small>
            <strong>
              숯과 칼,
              <br />
              그리고 여덟 자리.
            </strong>
            <div className="mock-web__btns">
              <span>예약하기</span>
              <span>코스 안내</span>
            </div>
            <div className="mock-web__grid">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}
