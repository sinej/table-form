import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion'

const WORDS = ['F&B CONSULTING', 'BRANDING', 'DIGITAL', 'MENU', 'COST', 'KITCHEN', 'IDENTITY', 'WEB']

// 스크롤 속도에 따라 빨라지고 방향이 바뀌는 마키
export default function Marquee() {
  const base = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const factor = useTransform(velocity, [0, 1000], [0, 5], { clamp: false })
  const skew = useTransform(velocity, [-2000, 2000], [8, -8])
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`)
  const dir = useRef(-1)

  useAnimationFrame((_, delta) => {
    let move = dir.current * 2.2 * (delta / 1000)
    if (factor.get() < 0) dir.current = 1
    else if (factor.get() > 0) dir.current = -1
    move += dir.current * move * factor.get()
    base.set(base.get() + move)
  })

  const row = [...WORDS, ...WORDS]
  return (
    <div className="marquee" aria-hidden="true">
      <motion.div className="marquee__track" style={{ x, skewX: skew }}>
        {[0, 1].map((k) => (
          <div className="marquee__group" key={k}>
            {row.map((w, i) => (
              <span key={i} className={i % 2 ? 'is-outline' : ''}>
                {w}
                <b>✳</b>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
