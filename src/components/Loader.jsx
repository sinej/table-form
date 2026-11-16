import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let n = 0
    const id = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 9))
      setCount(n)
      if (n >= 100) {
        clearInterval(id)
        setTimeout(() => setVisible(false), 350)
      }
    }, 45)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="loader"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader__logo">
            TABLE<span className="colon">:</span>FORM
          </div>
          <div className="loader__bar">
            <span style={{ transform: `scaleX(${count / 100})` }} />
          </div>
          <div className="loader__count">{String(count).padStart(3, '0')}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
