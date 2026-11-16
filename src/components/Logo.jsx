// TABLE:FORM BI — 얇은 선으로 겹쳐 그린 TF 모노그램 + 넓은 자간의 워드마크
// 원본 BI 이미지를 SVG로 옮긴 것입니다. 색은 currentColor를 따릅니다.

export function Mark({ size = 28, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 160 160" fill="currentColor" aria-hidden="true">
      {/* 위 가로획 (T와 F 공용) */}
      <rect x="0" y="0" width="156" height="10" />
      {/* T 세로획 — 짧게 */}
      <rect x="52" y="0" width="9" height="124" />
      {/* F 세로획 — 길게 */}
      <rect x="84" y="0" width="9" height="160" />
      {/* F 가운데 가로획 */}
      <rect x="84" y="42" width="72" height="9" />
    </svg>
  )
}

export function Wordmark({ className }) {
  return (
    <span className={`wordmark ${className ?? ''}`}>
      TABLE<span className="wordmark__colon">:</span>FORM
    </span>
  )
}

// 가로형: 모노그램 + 워드마크 (헤더)
export function LogoInline({ className }) {
  return (
    <span className={`logo-inline ${className ?? ''}`} aria-label="TABLE:FORM">
      <Mark size={22} />
      <Wordmark />
    </span>
  )
}

// 세로형: 모노그램 위, 워드마크와 태그라인 아래 (푸터 등)
export function LogoStacked({ tagline = 'F&B CONSULTING · BRANDING · DIGITAL', className }) {
  return (
    <span className={`logo-stacked ${className ?? ''}`} aria-label="TABLE:FORM">
      <Mark size={44} />
      <Wordmark />
      {tagline && <small>{tagline}</small>}
    </span>
  )
}
