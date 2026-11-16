import { DIRECTORS, STORY_PHOTO, WORRIES, photo } from '../data.js'
import { Reveal, SectionHead } from './Reveal.jsx'

export default function Story({ head = true }) {
  return (
    <section className="section story">
      {head && <SectionHead en="STORY" sub="음식의 본질부터 브랜드의 완성까지." />}

      <div className="story__split">
        <Reveal className="story__photo">
          <img src={photo(STORY_PHOTO, 1200)} alt="" loading="lazy" />
        </Reveal>
        <div className="story__text">
          <Reveal as="h3" className="story__lead">
            좋은 식당은 좋은 아이디어만으로
            <br />
            완성되지 않습니다.
          </Reveal>
          <Reveal as="p" delay={0.08}>
            메뉴의 경쟁력, 합리적인 원가, 효율적인 주방, 명확한 브랜드, 안정적인 운영까지. 오마카세 셰프가 한 접시씩 순서대로 내어 주듯,
            TABLE:FORM은 외식 창업에 필요한 요소들을 정해진 순서에 따라 하나의 방향으로 설계합니다.
          </Reveal>
          <Reveal as="p" delay={0.12}>
            처음 시작하는 작은 식당부터 새로운 변화를 준비하는 기존 매장까지, 보기 좋은 공간이 아니라 오래 운영하고 성장할 수 있는 외식
            브랜드를 만듭니다.
          </Reveal>
        </div>
      </div>

      <div className="directors">
        {DIRECTORS.map((d, i) => (
          <Reveal key={d.role} className="director" delay={i * 0.1}>
            <span className="director__role">{d.role}</span>
            <div className="director__stats">
              {d.stats.map((s) => (
                <div key={s.label}>
                  <strong>
                    {s.value}
                    <small>년</small>
                  </strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <p>{d.desc}</p>
            <div className="director__tags">
              {d.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="concerns">
        <Reveal as="h3" className="concerns__title">
          이런 고민, 함께 풀어갑니다.
        </Reveal>
        <ul>
          {WORRIES.map((w, i) => (
            <Reveal as="li" key={w} delay={(i % 2) * 0.06}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {w}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
