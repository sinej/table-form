import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal } from './Reveal.jsx'

// 스크롤하면 큰 문장의 글자 색이 채워지고 두 줄이 서로 반대 방향으로 흐릅니다.
export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x1 = useTransform(scrollYProgress, [0, 1], ['8%', '-18%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['-22%', '4%'])
  const fill = useTransform(scrollYProgress, [0.2, 0.55], ['0%', '100%'])

  return (
    <section className="statement" ref={ref}>
      <div className="statement__lines" aria-label="YOUR BUSINESS, OUR FORM.">
        <motion.div className="statement__line" style={{ x: x1 }} aria-hidden="true">
          YOUR BUSINESS, YOUR BUSINESS,
        </motion.div>
        <motion.div className="statement__line statement__line--fill" style={{ x: x2, '--fill': fill }} aria-hidden="true">
          <span data-text="OUR FORM. OUR FORM.">OUR FORM. OUR FORM.</span>
        </motion.div>
      </div>
      <div className="statement__body">
        <Reveal as="p" className="statement__lead">
          처음 시작하는 작은 식당부터
          <br />
          새로운 변화를 준비하는 기존 매장까지.
        </Reveal>
        <Reveal as="p" className="statement__desc" delay={0.1}>
          TABLE:FORM은 단순히 보기 좋은 공간이 아니라, 지속적으로 운영하고 성장할 수 있는 외식업 브랜드를 지향합니다.
        </Reveal>
        <Reveal as="p" className="statement__sign" delay={0.2}>
          음식의 본질부터 브랜드의 완성까지.
        </Reveal>
      </div>
    </section>
  )
}
