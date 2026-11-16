// 페이지별 주소와 검색 노출용 제목·설명. 앱(탭 제목)과 빌드 시 프리렌더 양쪽에서 사용합니다.
export const SITE = 'https://table-form.com'

export const ROUTES = [
  {
    path: '/',
    title: 'TABLE:FORM 테이블폼 | 외식업 창업 컨설팅',
    description: '셰프 경력 10년의 외식업 창업 컨설팅. 메뉴 개발·원가 설계·주방 운영부터 브랜딩·홈페이지까지 함께 준비합니다.',
  },
  {
    path: '/service',
    title: '서비스 소개 | TABLE:FORM 테이블폼',
    description: '메뉴 개발, 원가 설계, 주방 운영, 브랜드 디자인, 홈페이지까지. 6단계로 진행하는 외식업 창업 컨설팅.',
  },
  {
    path: '/portfolio',
    title: '포트폴리오 | TABLE:FORM 테이블폼',
    description: '코스 메뉴, 레시피 표준서, 원가표, 주방 동선, 브랜드, 홈페이지까지 TABLE:FORM이 납품하는 결과물.',
  },
  {
    path: '/story',
    title: '스토리 | TABLE:FORM 테이블폼',
    description: '현장을 아는 셰프와 브랜드·기술을 만드는 디렉터가 함께하는 F&B 컨설팅 스튜디오 이야기.',
  },
  {
    path: '/contact',
    title: '상담 신청 | TABLE:FORM 테이블폼',
    description: '인스타그램 DM·전화·이메일로 외식업 창업 상담을 신청하세요. 평일 09:00~18:00, 서울·경기·인천.',
  },
]

export const routeMeta = (path) => ROUTES.find((r) => r.path === path) ?? ROUTES[0]
