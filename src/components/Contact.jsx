import { INSTAGRAM } from '../data.js'
import { ArrowIcon, InstagramIcon } from './Icons.jsx'
import { Reveal, SectionHead } from './Reveal.jsx'

const BOOKING = [
  ['01', 'DM 남기기', '창업 단계, 업종, 희망 일정을 간단히 적어 주세요.'],
  ['02', '상담 일정 확정', '내용 확인 후 상담 일정을 안내드립니다.'],
  ['03', '진단 미팅', '첫 단계인 창업 진단부터 함께 시작합니다.'],
]

// 상담 신청 안내 — 3단계 + 인스타그램 DM 버튼
export default function Contact({ head = true }) {
  return (
    <section className="section contact theme-paper">
      {head && <SectionHead en="CONTACT" title="상담 신청" sub="상담 후 프로젝트에 필요한 서비스와 진행 범위, 개별 견적을 안내드립니다." />}
      <ol className="booking">
        {BOOKING.map(([no, t, d], i) => (
          <Reveal as="li" key={no} delay={i * 0.08}>
            <span>{no}</span>
            <strong>{t}</strong>
            <p>{d}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="contact__cta" delay={0.2}>
        <a className="pill pill--dark pill--lg" href={INSTAGRAM.url} target="_blank" rel="noreferrer">
          <InstagramIcon size={18} />
          인스타그램 DM으로 상담 신청
          <ArrowIcon size={16} />
        </a>
      </Reveal>
    </section>
  )
}
