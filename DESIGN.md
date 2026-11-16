# TABLE:FORM 디자인 시스템 — MONO

토큰은 `src/tokens.css`에 있고, 컴포넌트 스타일(`src/styles.css`)은 이 토큰만 사용합니다.

## 원칙
- **블랙 & 화이트만** 사용합니다. 강조는 색이 아니라 크기·굵기·흑백 반전으로 합니다.
- **사진이 주인공**입니다. 히어로·서비스·스토리는 큰 사진, 나머지는 넓은 여백과 얇은 선(1px)으로 정리합니다.
- 섹션 제목은 **가운데 정렬**, 넓은 영문 제목(Archivo Expanded) + 한 줄 한글 설명입니다.

## 색
| 토큰 | 값 | 용도 |
|---|---|---|
| `--light` | `#ffffff` | 기본 바탕 |
| `--stone` | `#f2f2f2` | 교차 섹션(`.theme-paper`), 카드·사진 자리 |
| `--dark` | `#0a0a0a` | 버튼, 강조 행, 푸터(`.theme-dark`) |
| `--muted` | `#6b6b6b` | 보조 글자 |
| `--line` | 검정 10% | 구분선 |

섹션 테마: 기본(흰색) · `.theme-paper`(라이트 그레이) · `.theme-dark`(블랙) · `.theme-light`(다크 섹션 안의 흰 카드)

## 글꼴
- 본문·한글 제목: **Pretendard** (굵기 400 / 500 / 700, 자간 -0.03em)
- 영문 제목·라벨·숫자: **Archivo** `font-stretch: 125%` (Expanded)

## 요소
- 버튼: 알약형(`.pill`) — `pill--dark`(검정), `pill--line`(테두리), `pill--lg`
- 사진·카드: 모서리 각지게(radius 0)
- 헤더: 맨 위에서 투명, 스크롤 0~160px 동안 흰 배경이 서서히 나타남. 홈 히어로 위에서는 흰 글자.

## 페이지
`/` 홈 · `/service` 서비스 소개 · `/portfolio` 포트폴리오 · `/story` 스토리 · `/contact` 상담 신청
페이지별 제목·설명은 `src/routes.js`에서 관리하며, 빌드 시 페이지마다 HTML이 미리 만들어집니다.

## 사진
현재 사진은 Unsplash 무료 라이선스 무드 이미지입니다(`src/data.js`의 `HERO_SLIDES`, `SERVICE_PHOTOS`, `STORY_PHOTO`). 실제 매장·작업 사진이 생기면 교체하세요.
