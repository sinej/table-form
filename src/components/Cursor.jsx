import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// 원형 커서: 링크/버튼 위에서는 커지고, data-cursor 값이 있으면 라벨을 보여줍니다.
export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })
  const [hover, setHover] = useState(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = e.target.closest?.('a, button, [data-cursor]')
      setHover(el ? el.getAttribute('data-cursor') ?? '' : null)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [x, y])

  if (!enabled) return null
  const size = hover === null ? 14 : hover ? 92 : 56

  return (
    <motion.div className="cursor" style={{ x: sx, y: sy }}>
      <motion.div
        className={`cursor__dot ${hover ? 'has-label' : ''}`}
        animate={{ width: size, height: size }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {hover && <span>{hover}</span>}
      </motion.div>
    </motion.div>
  )
}
