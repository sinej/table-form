import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HERO_SLIDES, photo } from '../data.js'
import { Link } from 'react-router-dom'
import { ease } from './Reveal.jsx'

const INTERVAL = 5500

// 전체 폭 사진 슬라이더 — 5.5초마다 교차 전환, 사진은 천천히 줌아웃
export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = HERO_SLIDES[index]
  const go = (d) => setIndex((i) => (i + d + HERO_SLIDES.length) % HERO_SLIDES.length)

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => go(1), INTERVAL)
    return () => clearTimeout(id)
  }, [index, paused])

  return (
    <section id="top" className="hero" onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <AnimatePresence initial={false}>
        <motion.img
          key={slide.id}
          className="hero__img"
          src={photo(slide.id, 2000)}
          srcSet={`${photo(slide.id, 900)} 900w, ${photo(slide.id, 1400)} 1400w, ${photo(slide.id, 2000)} 2000w`}
          sizes="100vw"
          alt=""
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: 'linear' } }}
        />
      </AnimatePresence>
      <div className="hero__shade" />

      <div className="hero__content">
        <motion.p className="hero__eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}>
          F&B CONSULTING STUDIO
        </motion.p>
        <motion.h1 className="hero__title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.1, ease }}>
          메뉴에서 매장까지,
          <br />
          외식 창업의 모든 과정.
        </motion.h1>
      </div>

      <button className="hero__arrow is-prev" onClick={() => go(-1)} aria-label="이전 사진">
        ‹
      </button>
      <button className="hero__arrow is-next" onClick={() => go(1)} aria-label="다음 사진">
        ›
      </button>

      <div className="hero__caption">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/service">
              <span>{slide.cat}</span>
              <i />
              <span>{slide.title}</span>
              <b>»</b>
            </Link>
          </motion.div>
        </AnimatePresence>
        <div className="hero__dots">
          {HERO_SLIDES.map((s, i) => (
            <button key={s.id} className={i === index ? 'is-on' : ''} onClick={() => setIndex(i)} aria-label={`${i + 1}번 사진`} />
          ))}
        </div>
      </div>
    </section>
  )
}
