import { useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { PACKAGES } from '../data.js'
import { Reveal, SectionHead, ease } from './Reveal.jsx'

// 데스크톱: 세로 스크롤에 맞춰 카드가 가로로 이동하는 고정 섹션 / 모바일: 세로 나열
export default function Packages() {
  const [launch, setLaunch] = useState(false)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [distance, setDistance] = useState(0)
  const [pinned, setPinned] = useState(true)

  useLayoutEffect(() => {
    const measure = () => {
      const wide = window.innerWidth > 900
      setPinned(wide)
      if (!trackRef.current) return
      setDistance(wide ? Math.max(0, trackRef.current.scrollWidth - window.innerWidth) : 0)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(trackRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] })
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -distance]), { stiffness: 120, damping: 30 })
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="packages"
      ref={sectionRef}
      className={`packages ${pinned ? 'is-pinned' : ''}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className="packages__sticky">
        <div className="packages__head">
          <SectionHead no="04" title="SERVICE PACKAGES" sub="프로젝트 상황에 맞춰 선택하는 단계별 서비스" />
          <Reveal className="price-toggle-wrap" delay={0.2}>
            <div className="price-toggle" role="tablist">
              <button role="tab" aria-selected={!launch} className={!launch ? 'is-on' : ''} onClick={() => setLaunch(false)}>
                {!launch && <motion.span layoutId="toggle-pill" className="price-toggle__pill" />}
                <em>정상가</em>
              </button>
              <button role="tab" aria-selected={launch} className={launch ? 'is-on' : ''} onClick={() => setLaunch(true)} data-cursor="OFFER">
                {launch && <motion.span layoutId="toggle-pill" className="price-toggle__pill" />}
                <em>런칭가</em>
              </button>
            </div>
            <p>
              <span className="dot" /> LAUNCH OFFER · 첫 3개 프로젝트 한정
            </p>
          </Reveal>
        </div>

        <motion.div className="packages__track" ref={trackRef} style={pinned ? { x } : undefined}>
          {PACKAGES.map((p, i) => (
            <PackageCard key={p.name} p={p} launch={launch} index={i} />
          ))}
          <div className="package package--note">
            <h4>작업 범위는 계약 전에 확정합니다.</h4>
            <ul>
              <li>메뉴 수·테스트 횟수 / 홈페이지 페이지·기능 / 디자인 수정 횟수</li>
              <li>촬영·인쇄·광고·출장·식재료·외부 서비스 이용료는 별도 협의</li>
              <li>추가 개발과 현장 지원은 사전 견적 후 진행</li>
            </ul>
            <p>* 모든 가격 VAT 별도. 본 가격은 제안안이며, 확정 견적과 계약 조건이 우선합니다.</p>
          </div>
        </motion.div>

        {pinned && (
          <div className="packages__progress">
            <motion.span style={{ scaleX: bar }} />
          </div>
        )}
      </div>
    </section>
  )
}

function PackageCard({ p, launch, index }) {
  const hasLaunch = launch && p.launch
  const value = hasLaunch ? p.launch : p.price
  return (
    <motion.article
      className={`package ${p.featured ? 'package--featured' : ''}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5% 0px' }}
      transition={{ duration: 0.9, delay: index * 0.06, ease }}
      whileHover={{ y: -10 }}
    >
      <div className="package__top">
        <span className="package__tag">{p.tag}</span>
        {p.featured && <span className="package__badge">대표 패키지</span>}
      </div>
      <h3 className="package__name">{p.name}</h3>
      <p className="package__period">{p.period}</p>

      <div className="package__price">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.strong
            key={value}
            initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: -40, opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.5, ease }}
            className={hasLaunch ? 'is-launch' : ''}
          >
            {p.monthly && <small>월 </small>}
            {value}
            <small>만 원{p.from ? '~' : ''}</small>
          </motion.strong>
        </AnimatePresence>
        <AnimatePresence>
          {hasLaunch && (
            <motion.s initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {p.price}만 원{p.from ? '~' : ''}
            </motion.s>
          )}
          {launch && !p.launch && (
            <motion.span className="package__na" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              런칭가 미적용
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <ul className="package__items">
        {p.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <span className="package__index">{String(index + 1).padStart(2, '0')}</span>
    </motion.article>
  )
}
