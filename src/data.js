export const INSTAGRAM = {
  handle: '@table_form',
  url: 'https://instagram.com/table_form',
}

export const REGIONS = '서울 · 경기 · 인천'

export const WORRIES = [
  '음식점 창업을 준비하는데 어디서부터 시작해야 할지 모르겠습니다.',
  '상가는 구했지만 메뉴와 주방 구성이 고민입니다.',
  '메뉴는 정했지만 적정 판매가격과 원가를 모르겠습니다.',
  '우리 가게만의 브랜드와 로고가 필요합니다.',
  '직원이 바뀌어도 일정한 품질을 유지하고 싶습니다.',
  '홈페이지, 온라인 홍보까지 한 번에 준비하고 싶습니다.',
]

export const SERVICES = [
  {
    no: '01',
    title: 'F&B CONSULTING',
    lead: '실제로 운영할 수 있는 식당을 설계합니다.',
    items: [
      '메뉴 기획 및 개발',
      '레시피 표준화',
      '식재료 원가 및 판매가격 설계',
      '주방 동선 및 장비 구성',
      '운영 매뉴얼 및 직원 교육',
      '오픈 준비 컨설팅',
    ],
  },
  {
    no: '02',
    title: 'BRANDING & DESIGN',
    lead: '고객에게 기억되는 브랜드를 만듭니다.',
    items: [
      '브랜드 콘셉트 기획',
      '브랜드 네이밍 및 로고 디자인',
      'BI 및 브랜드 아이덴티티',
      '메뉴판 및 패키지 디자인',
      '공간 콘셉트 방향성 기획',
    ],
  },
  {
    no: '03',
    title: 'DIGITAL SOLUTION',
    lead: '오픈 이후의 고객 경험까지 연결합니다.',
    items: [
      '홈페이지 제작',
      '예약 및 고객 접점 시스템 기획',
      '온라인 브랜드 구축',
      'SNS 콘텐츠 기획',
      '디지털 마케팅 및 운영 시스템 설계',
    ],
  },
]

export const DIRECTORS = [
  {
    role: 'F&B DIRECTOR',
    stats: [{ value: 10, label: '셰프 경력' }],
    desc: '10년간의 셰프 경력을 기반으로 메뉴 개발부터 원가, 주방 운영, 직원 교육까지 실제 현장에서 필요한 요소를 설계합니다.',
    tags: ['메뉴', '원가', '주방', '운영'],
  },
  {
    role: 'BRAND & IT DIRECTOR',
    stats: [
      { value: 5, label: '디자인 경력' },
      { value: 6, label: '개발 경력' },
    ],
    desc: '디자인과 개발의 전문성을 바탕으로 브랜드 기획부터 시각 디자인, 웹사이트 및 디지털 시스템까지 연결합니다.',
    tags: ['브랜드', 'BI', '웹사이트', '시스템'],
  },
]

export const PACKAGES = [
  {
    tag: '01 / ENTRY',
    name: 'F&B 창업 진단',
    price: 39,
    launch: 29,
    period: '상담 1회 + 분석 보고서 / 약 5~7일',
    items: ['창업 아이템·콘셉트 및 메뉴 구성 검토', '예상 원가·손익구조 / 경쟁 매장 조사', '창업 준비 우선순위 보고서'],
  },
  {
    tag: '02 / BRANDING',
    name: '브랜드 스타터',
    price: 179,
    launch: 149,
    period: '약 2~3주',
    items: ['브랜드 콘셉트 및 네이밍 방향', '로고·BI / 컬러·서체 / 메뉴판 디자인', 'SNS 기본 템플릿 / 간단한 브랜드 가이드'],
  },
  {
    tag: '03 / MAIN PRODUCT',
    name: 'RESTAURANT ALL-IN-ONE',
    price: 449,
    launch: 349,
    period: '약 4~6주',
    featured: true,
    items: [
      '브랜드 콘셉트 기획 및 BI',
      '메뉴 8~12종 개발 및 레시피 표준화',
      '원가 분석 및 판매가격 설계',
      '주방 운영·동선 자문',
      '메뉴판 디자인 및 반응형 소개 홈페이지',
      '네이버 플레이스 등록 지원 / 오픈 체크리스트',
    ],
  },
  {
    tag: '04 / PREMIUM',
    name: 'FULL BRAND LAUNCH',
    price: 699,
    launch: 549,
    from: true,
    period: '약 6~10주',
    items: [
      '올인원 패키지 전체 포함',
      '메뉴 15종 이상 개발 범위 협의',
      '현장 조리 테스트 / 직원 교육',
      '상세 운영 매뉴얼 / 오픈 마케팅 기획',
      '예약·고객관리 시스템 협의 / 오픈 현장 지원',
    ],
  },
  {
    tag: '05 / RETAINER',
    name: 'MONTHLY PARTNER',
    price: 69,
    monthly: true,
    from: true,
    period: '월 단위 계약 / 최소 기간 별도 협의',
    items: ['월간 메뉴 개선 자문 / 원가·가격 점검', '브랜드 디자인 유지보수 / SNS 콘텐츠 기획', '운영 관련 정기 미팅'],
  },
]

export const STEPS = [
  { no: '01', en: 'CONSULT', title: '상담', desc: '창업 상황·예산·일정 및 필요 서비스 확인' },
  { no: '02', en: 'PROPOSAL', title: '제안 및 계약', desc: '범위·결과물·일정·수정 조건 확정' },
  { no: '03', en: 'BUILD', title: '기획 및 제작', desc: '메뉴·브랜드·디지털 작업 진행' },
  { no: '04', en: 'REVIEW', title: '중간 검토', desc: '결과물 공유 및 약정된 수정 진행' },
  { no: '05', en: 'DELIVER', title: '최종 납품', desc: '최종 파일·문서 전달 및 사용 안내' },
  { no: '06', en: 'SUPPORT', title: '사후 지원', desc: '계약에 포함된 기간·범위 내 지원' },
]
