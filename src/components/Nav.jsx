import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { INSTAGRAM } from '../data.js'
import { InstagramIcon } from './Icons.jsx'
import { LogoInline } from './Logo.jsx'

const LINKS = [
  ['/service', '서비스 소개'],
  ['/portfolio', '포트폴리오'],
  ['/story', '스토리'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const { pathname } = useLocation()

  // 맨 위에서는 배경 투명, 스크롤 0~160px 동안 서서히 나타남
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 160], [0, 1])
  const [atTop, setAtTop] = useState(true)
  useMotionValueEvent(scrollY, 'change', (v) => setAtTop(v < 80))

  // 홈 히어로 사진 위에서는 글자를 흰색으로
  const onPhoto = pathname === '/' && atTop && !open

  return (
    <>
      <header className={`nav ${onPhoto ? 'is-on-photo' : ''}`}>
        <motion.div className="nav__bg" style={{ opacity: open ? 1 : bgOpacity }} aria-hidden="true" />
        <Link className="nav__logo" to="/" onClick={close} aria-label="TABLE:FORM 홈">
          <LogoInline />
        </Link>
        <nav className="nav__links">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link className="pill pill--dark nav__cta" to="/contact" onClick={close}>
          상담 신청
        </Link>
        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="메뉴">
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {[...LINKS, ['/contact', '상담 신청']].map(([to, label]) => (
              <NavLink key={to} to={to} onClick={close}>
                {label}
              </NavLink>
            ))}
            <a href={INSTAGRAM.url} target="_blank" rel="noreferrer" className="mobile-menu__insta">
              <InstagramIcon /> {INSTAGRAM.handle}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
