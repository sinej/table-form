import { motion } from 'framer-motion'

export const ease = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, y = 28, className, as = 'div', ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

// 섹션 머리: 넓은 자간의 영문 제목 + 한글 보조 문장. 한글 제목이 있으면 영문은 작은 라벨이 됩니다.
export function SectionHead({ en, title, sub, align = 'center' }) {
  return (
    <div className={`section-head is-${align} ${title ? 'has-title' : ''}`}>
      {en && (
        <Reveal as="span" className="section-head__en">
          {en}
        </Reveal>
      )}
      {title && (
        <Reveal as="h2" className="section-head__title" delay={0.05}>
          {title}
        </Reveal>
      )}
      {sub && (
        <Reveal as="p" className="section-head__sub" delay={0.1}>
          {sub}
        </Reveal>
      )}
    </div>
  )
}

// 서브 페이지 상단 — 큰 영문 제목과 한 줄 소개
export function PageHead({ en, kr, desc }) {
  return (
    <section className="page-head">
      <Reveal as="span" className="page-head__kr">
        {kr}
      </Reveal>
      <Reveal as="h1" className="page-head__en" delay={0.05}>
        {en}
      </Reveal>
      {desc && (
        <Reveal as="p" className="page-head__desc" delay={0.1}>
          {desc}
        </Reveal>
      )}
    </section>
  )
}

// 모노그램 — 정사각 블록 안의 두 글자
export function Seal({ size = 56, text = ['T', 'F'] }) {
  return (
    <span className="seal" style={{ width: size, height: size }} aria-hidden="true">
      {text.map((t) => (
        <b key={t}>{t}</b>
      ))}
    </span>
  )
}
