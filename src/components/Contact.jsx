import { useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import { INSTAGRAM, REGIONS } from '../data.js'
import { ArrowIcon, InstagramIcon } from './Icons.jsx'
import { Reveal, ease, maskUp } from './Reveal.jsx'
import { scrollToId } from './Nav.jsx'

const LINES = ["LET'S BUILD", 'YOUR TABLE.']

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <Reveal className="eyebrow">06 — CONTACT</Reveal>
        <h2 className="contact__title">
          {LINES.map((l, i) => (
            <motion.span className="mask" key={l} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.span variants={maskUp} transition={{ duration: 1.1, delay: i * 0.1, ease }} className={i === 1 ? 'is-accent' : ''}>
                {l}
              </motion.span>
            </motion.span>
          ))}
        </h2>

        <div className="contact__row">
          <Reveal className="contact__info">
            <p>
              창업 및 컨설팅 상담 문의는 <strong>인스타그램 DM</strong>으로 남겨주세요.
              <br />
              상담 후 프로젝트에 필요한 서비스와 진행 범위, 개별 견적을 안내드립니다.
            </p>
            <dl>
              <div>
                <dt>INSTAGRAM</dt>
                <dd>
                  <a href={INSTAGRAM.url} target="_blank" rel="noreferrer" className="link-underline">
                    {INSTAGRAM.handle}
                  </a>
                </dd>
              </div>
              <div>
                <dt>AREA</dt>
                <dd>{REGIONS}</dd>
              </div>
              <div>
                <dt>SERVICE</dt>
                <dd>F&B Consulting · Branding · Digital</dd>
              </div>
            </dl>
          </Reveal>
          <Magnetic>
            <a className="contact__cta" href={INSTAGRAM.url} target="_blank" rel="noreferrer" data-cursor="">
              <InstagramIcon size={28} />
              <span>
                DM으로
                <br />
                상담하기
              </span>
              <ArrowIcon size={22} />
            </a>
          </Magnetic>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__logo">
          TABLE<span className="colon">:</span>FORM
        </div>
        <div className="footer__meta">
          <span>F&B BUSINESS PARTNER</span>
          <span>© {new Date().getFullYear()} TABLE:FORM</span>
          <button onClick={() => scrollToId('top')} className="link-underline">
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </section>
  )
}

// 마우스를 가까이 가져가면 끌려오는 버튼
function Magnetic({ children }) {
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 200, damping: 15 })
  const y = useSpring(0, { stiffness: 200, damping: 15 })
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }
  return (
    <motion.div ref={ref} className="magnetic" style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset}>
      {children}
    </motion.div>
  )
}
