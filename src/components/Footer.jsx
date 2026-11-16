import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { INSTAGRAM, REGIONS } from '../data.js'
import { InstagramIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer theme-dark">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__motto">
            FROM
            <br />
            PLATE TO
            <br />
            PLACE
          </p>
          <a href={INSTAGRAM.url} target="_blank" rel="noreferrer" className="footer__follow">
            FOLLOW US <InstagramIcon size={16} />
          </a>
        </div>
        <div className="footer__info">
          <h4>INFO</h4>
          <p>
            <Link to="/service">서비스 소개</Link>
            <Link to="/portfolio">포트폴리오</Link>
            <Link to="/story">스토리</Link>
            <Link to="/contact">상담 신청</Link>
          </p>
          <h4>CONTACT</h4>
          <p>
            Instagram{' '}
            <a href={INSTAGRAM.url} target="_blank" rel="noreferrer">
              {INSTAGRAM.handle}
            </a>
            <br />
            {REGIONS}
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} TABLE:FORM</span>
        <span>Photos: Unsplash</span>
      </div>
    </footer>
  )
}

// 오른쪽 아래 고정 버튼 — 맨 위로 / 상담 신청
export function Floating() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  const toTop = () => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }))
  return (
    <div className="floating">
      <AnimatePresence>
        {show && (
          <motion.button
            className="floating__top"
            onClick={toTop}
            aria-label="맨 위로"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
      <Link className="floating__cta" to="/contact">
        상담
        <br />
        신청
      </Link>
    </div>
  )
}
