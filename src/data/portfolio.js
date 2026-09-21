/*
  Single source of content for the page. Numbers here come from the project results
  in the README and the competition submissions, not from invented spec aesthetics.
*/

export const profile = {
  name: 'Kyoungsoon Kim',
  role: 'SCM & Logistics Optimization AI Engineer',
  email: 'rudtns6443@gmail.com',
  github: 'https://github.com/kyoungsoon-kim',
}

// Hero right column. Real results, each traceable to a project below.
export const headlineMetrics = [
  { value: '최우수상', unit: '', label: 'AIVLE 빅프로젝트', context: 'KT AIVLE 9기 · 2026-09 · 8인 팀 조장 겸 PM' },
  { value: '15.2', unit: '%', label: '조달 총비용 절감', context: '단일 최적 조달정책 대비' },
  { value: '0.01', unit: '%', label: '최적해 오차', context: '시뮬레이션 소요량 10배 감소' },
]

export const about = {
  lead: '현장의 휴리스틱을 넘어, 데이터가 이끄는 공급망 혁신을 향해.',
  paragraphs: [
    '어린 시절 부친의 물류 현장에서 목격한 것은 개인의 경험과 직관에 의존하는 비효율이었습니다. 이를 구조적으로 해결하겠다는 목표가 저를 수리 최적화와 AI 모델링으로 이끌었습니다.',
    '정확도 높은 모델을 만드는 데서 멈추지 않습니다. 학습이 수렴하지 않는 병목을 아키텍처 설계로 뚫고, 실시간 시연을 위해 XAI 연산 시간을 줄이는 것까지가 제 일입니다. 배포된 뒤 만들어내는 비용 절감과 생산성 향상이 최종 기준입니다.',
    '성결대학교 산업경영공학과에서 최적화 이론을, KT AIVLE School에서 AI/MLOps 실무를 다졌습니다. 단절된 공급망 밸류체인을 하나의 디지털 트윈으로 통합하는 자율제조 SCM AI 엔지니어를 목표로 합니다.',
  ],
  facts: [
    { label: '전공', value: '성결대학교 산업경영공학과' },
    { label: '교육', value: 'KT AIVLE School AI 트랙' },
    { label: '수상', value: 'AIVLE 빅프로젝트 최우수상 · 데이터분석 경진대회 대상' },
  ],
}

// Three-stage SCM narrative: manufacturing to procurement to inventory.
export const pipeline = [
  {
    id: 'manufacturing',
    stage: 'Manufacturing',
    title: 'Battery Anomaly Detection & XAI',
    period: '2025.10 - 2025.11',
    metric: { value: '208', label: '센서 채널' },
    body: 'Autoencoder 기반 이상 탐지에 SHAP을 붙여 판정 근거까지 드러냈습니다. 배경 데이터 사전 캐싱으로 XAI 연산을 줄여 실시간 시연이 가능한 수준으로 만들었습니다.',
    note: '데이터분석 경진대회 대상. 수상 이후 평가 프로토콜을 스스로 재검증해 한계를 문서로 남겼습니다.',
    image: '/battery-inspection.webp',
    imageAlt: '자동 검사 장비가 전기차 배터리 모듈을 검사하는 생산 라인',
    repo: 'https://github.com/kyoungsoon-kim/battery-anomaly-detection-xai',
  },
  {
    id: 'procurement',
    stage: 'Procurement',
    title: 'Dynamic Supplier Selection',
    period: '2025.10 - 2025.11',
    metric: { value: '15.2%', label: '총비용 절감' },
    body: '공급사 선택과 주문량을 동시에 결정해야 해 행동 공간이 K×Q로 폭발했고 강화학습이 수렴하지 않았습니다. Dual Decoder 자기회귀 구조로 행동 공간을 K+Q로 선형 축소해 학습을 통과시켰습니다.',
    note: '단일 최적 조달정책 대비 15.2% 절감.',
    repo: 'https://github.com/kyoungsoon-kim/dynamic-supplier-selection',
  },
  {
    id: 'inventory',
    stage: 'Inventory',
    title: 'Deep Controlled Learning for Inventory Control',
    period: '2025.09 - 2025.10',
    metric: { value: '+0.01%', label: '최적해 오차' },
    body: 'CBPI, Sequential Halving, CRN을 통합해 재고 운영 정책을 학습시켰습니다. 휴리스틱을 못 이기던 원인인 I_max 캡 버그를 진단·수정하고 최적해에 근접한 정책을 재현했습니다. (팀장)',
    note: '시뮬레이션 소요량 10배 이상 감소.',
    repo: 'https://github.com/kyoungsoon-kim/deep-controlled-learning-for-inventory-control',
  },
]

export const projectCategories = ['All', 'Reinforcement Learning', 'Vision & ML', 'Simulation']

export const projects = [
  {
    id: 'cvrp',
    category: 'Reinforcement Learning',
    title: 'CVRP Attention RL',
    tag: 'DRL / PyTorch',
    problem: '복잡한 제약조건이 걸린 차량 경로 탐색에서 기존 휴리스틱의 연산 시간이 지연됩니다.',
    approach: 'Transformer Attention과 강화학습을 융합한 인코더-디코더 아키텍처를 설계했습니다.',
    impact: '대규모 노드 처리 시간을 단축하고 경로 품질을 유지했습니다.',
    repo: 'https://github.com/kyoungsoon-kim/attention-learn-to-route',
    featured: true,
  },
  {
    id: 'sclsp',
    category: 'Reinforcement Learning',
    title: 'SCLSP DRL',
    tag: 'Optimization / MDP',
    problem: '확률적 캐패시티 제약 아래에서 로트-사이징 계획을 세우기 어렵습니다.',
    approach: 'MDP로 수요 불확실성을 모델링하고 DRL 에이전트를 학습시켰습니다.',
    impact: '수리 모형 대비 연산 속도를 높이고 실시간 수요 대응력을 확보했습니다.',
    repo:
      'https://github.com/kyoungsoon-kim/scalable-deep-reinforcement-learning-in-the-non-stationary',
  },
  {
    id: 'binpacking',
    category: 'Reinforcement Learning',
    title: '3D Bin Packing DRL',
    tag: 'Transformer / 3D Vision',
    problem: '규격이 제각각인 화물을 컨테이너에 적재할 때 공간이 낭비됩니다.',
    approach: 'Transformer 3D 공간 인지 모델과 PPO로 순차 적재 의사결정을 학습했습니다.',
    impact: '공간 활용률을 끌어올리고 적재 알고리즘 실행 시간을 줄였습니다.',
    repo: 'https://github.com/kyoungsoon-kim/generalized-online-3d-bin-packing',
  },
  {
    id: 'cellnex',
    category: 'Vision & ML',
    title: 'CELLNEX — 이차전지 셀 검사 플랫폼',
    tag: 'YOLOv11-seg / Spring Boot / AWS',
    problem: '결함 탐지만으로는 현장이 움직이지 않습니다. 판정 이후 어느 셀을 어떻게 처분할지가 남습니다.',
    approach: 'CT·RGB 이미지 검사 모델과 리포트 생성 LLM을 붙이고, 판정을 원인 귀속과 처분 분기로 잇는 통합 관리 플랫폼을 설계했습니다. 8인 팀의 조장 겸 PM과 인프라 파트리더를 맡아 저장소 13개를 단일 기준 문서 체계로 통제했습니다.',
    impact: 'KT AIVLE School 9기 빅프로젝트 최우수상을 받았습니다 (2026-09).',
    featured: true,
  },
  {
    id: 'donut',
    category: 'Vision & ML',
    title: 'Document AI: Donut',
    tag: 'Document AI / HuggingFace',
    problem: '중소기업 경리 부서의 수기 거래명세서 처리가 휴먼 에러와 병목을 만듭니다.',
    approach: 'End-to-End Vision-Language 모델 Donut을 파인튜닝해 OCR 없이 이미지에서 JSON을 직접 추출합니다.',
    impact: '데이터 입력 시간을 90% 이상 줄이고 ERP 연동을 자동화했습니다.',
    repo: 'https://github.com/kyoungsoon-kim/donut-document-ai',
    featured: true,
    image: '/document-ai.webp',
    imageAlt: '문서 카메라가 업무 서류를 촬영하는 자동화된 사무 환경',
  },
  {
    id: 'hanwoo',
    category: 'Vision & ML',
    title: 'Weather Hanwoo Prediction',
    tag: 'Machine Learning / scikit-learn',
    problem: '폭염 등 기상 이변이 한우의 스트레스와 등급 저하로 이어지는데 예측이 어렵습니다.',
    approach: '기상청 데이터와 혈통·사육 환경 데이터를 결합해 회귀·분류 파이프라인을 구축했습니다.',
    impact: '환경 변수에 대한 유전적 저항성을 분석해 선제적 사육 가이드라인을 도출했습니다.',
  },
  {
    id: 'jobshop',
    category: 'Simulation',
    title: 'Jobshop AnyLogic Digital Twin',
    tag: 'AnyLogic / Digital Twin',
    problem: '반도체 후공정 라인의 AGV 대수 산정 오류가 과잉 투자와 교착 상태를 부릅니다.',
    approach: 'AnyLogic으로 공정 라인 디지털 트윈을 만들고 에이전트 기반 시뮬레이션을 돌렸습니다.',
    impact: '최적 운영 대수 29대를 도출해 과잉 대비 설비 투자 비용을 35% 줄였습니다.',
  },
]

/*
  slug = simple-icons export name (without the "si" prefix, lowercased).
  Tools with no icon in Simple Icons carry a fallback glyph name instead.
*/
export const skillGroups = [
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    items: [
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'TensorFlow', slug: 'tensorflow' },
      { name: 'Hugging Face', slug: 'huggingface' },
    ],
  },
  {
    id: 'data-ml',
    name: 'Data & ML',
    items: [
      { name: 'Python', slug: 'python' },
      { name: 'pandas', slug: 'pandas' },
      { name: 'NumPy', slug: 'numpy' },
      { name: 'scikit-learn', slug: 'scikitlearn' },
    ],
  },
  {
    id: 'optimization',
    name: 'Optimization & Simulation',
    items: [
      { name: 'Operations Research', fallback: 'function' },
      { name: 'AnyLogic', fallback: 'flow' },
      { name: 'Minitab', fallback: 'chart' },
    ],
  },
  {
    id: 'mlops',
    name: 'MLOps & Tools',
    items: [
      { name: 'Docker', slug: 'docker' },
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'Vercel', slug: 'vercel' },
    ],
  },
  {
    id: 'ai-dev',
    name: 'AI Dev Tools',
    items: [
      { name: 'Claude Code', slug: 'claude' },
      { name: 'Cursor', slug: 'cursor' },
      { name: 'GitHub Copilot', slug: 'githubcopilot' },
    ],
  },
]

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#pipeline', label: 'Pipeline' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]
