# 🚀 Kyoungsoon Kim — Portfolio Web

> **현장의 휴리스틱을 넘어, 데이터로 공급망 밸류체인을 최적화합니다.**
> SCM·물류 최적화 AI 엔지니어 김경순의 포트폴리오 웹사이트입니다.

<p align="center">
  <a href="https://kyoungsoon-kim-portfolio.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/kyoungsoon-kim">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Motion-12-FFF?style=flat-square&logo=framer&logoColor=black" alt="Motion" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## 🔗 Live Demo

**👉 [kyoungsoon-kim-portfolio.vercel.app](https://kyoungsoon-kim-portfolio.vercel.app/)**

`main` 브랜치에 push하면 Vercel이 자동으로 빌드·배포합니다.

---

## ✨ Features

- 🌗 **라이트/다크 듀얼 테마** - 첫 방문은 라이트 모드이며, 토글 선택은 `localStorage`에 남습니다. 첫 페인트 전에 테마를 확정해 화면 깜빡임이 없습니다.
- ♿ **WCAG AA 대비 통과** — 액센트를 테마별로 분리해(라이트 `#047857` 5.25:1, 다크 `#34D399` 10:1) 모든 버튼과 텍스트가 명암비 기준을 만족합니다.
- 🎬 **의도된 모션** — Motion 기반 진입 스태거·스크롤 리빌·필터 레이아웃 전환만 사용하며, `prefers-reduced-motion`에서 전부 정지합니다.
- 🗂️ **프로젝트 필터링** — 강화학습 / Vision & ML / Simulation 카테고리 탭으로 프로젝트를 분류해 보여줍니다.
- 🏗️ **Problem–Approach–Impact 구조** — 각 프로젝트를 문제·접근·임팩트 3단으로 정리해 성과를 직관적으로 전달합니다.

---

## 🧩 Sections

| 섹션 | 설명 |
|------|------|
| **Hero** | 핵심 메시지와 대표 성과 지표 3종(F1 0.9956 · 15.2% 절감 · 최적해 오차 0.01%)을 제시합니다. |
| **About** | 물류 현장 경험에서 최적화·AI로 이어진 커리어 스토리를 담았습니다. |
| **Pipeline** | 제조 → 조달 → 재고로 이어지는 End-to-End SCM AI 프로젝트 3편을 서사로 연결합니다. |
| **Projects** | CVRP·SCLSP·3D Bin Packing 등 6개 프로젝트를 카테고리별로 소개합니다. |
| **Skills** | Deep Learning · Data & ML · Optimization · MLOps · AI Dev Tools 스택을 정리했습니다. |
| **Contact** | 메일·GitHub 연결 지점을 제공합니다. |

---

## 🧠 Featured Projects

| 프로젝트 | 분야 | 핵심 성과 |
|----------|------|-----------|
| **Battery Anomaly Detection & XAI** | Autoencoder / SHAP | F1-Score 0.9956으로 경진대회 1위 대상을 수상했습니다. |
| **Dynamic Supplier Selection** | DRL / Dual Decoder | 행동 공간을 K×Q에서 K+Q로 축소해 조달 총비용을 15.2% 절감합니다. |
| **Deep Controlled Learning Inventory** | CBPI / Sequential Halving | 시뮬레이션 소요량을 10배 이상 줄이며 최적해 오차 0.01%를 재현합니다. |
| **CVRP Attention RL** | DRL / PyTorch | Transformer Attention과 강화학습으로 대규모 차량 경로 탐색 시간을 단축합니다. |
| **Document AI: Donut** | Document AI / HuggingFace | OCR 없이 이미지→JSON 추출로 입력 시간을 90% 이상 단축합니다. |
| **Jobshop AnyLogic Digital Twin** | AnyLogic / Digital Twin | AGV 최적 대수 29대를 산정해 설비 투자 비용을 35% 절감합니다. |

---

## 🛠️ Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Motion-000000?style=for-the-badge&logo=framer&logoColor=white" alt="Motion" />
  <img src="https://img.shields.io/badge/Phosphor_Icons-1B1B1D?style=for-the-badge&logo=phosphoricons&logoColor=white" alt="Phosphor Icons" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

- **스타일** — Tailwind CSS v4 (`@theme` 토큰, `dark:` 배리언트). 별도 설정 파일 없이 `src/index.css`가 디자인 시스템의 단일 출처입니다.
- **모션** — Motion (`motion/react`). 스크롤 리스너 대신 `useScroll`·`whileInView`·`IntersectionObserver`만 사용합니다.
- **아이콘** — Phosphor Icons(UI) + Simple Icons(브랜드 로고, `currentColor` 인라인 SVG).
- **폰트** — Pretendard Variable(본문), JetBrains Mono(수치). 전부 self-host라 외부 폰트 요청이 없습니다.

---

## ⚙️ Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 📁 Project Structure

```
portfolio-web/
├── public/                # 정적 자산 (favicon, CV PDF)
├── src/
│   ├── components/        # Navbar, Hero, About, Pipeline, Projects, Skills, Contact
│   ├── data/portfolio.js  # 모든 문구·수치·링크의 단일 출처
│   ├── hooks/             # useTheme(테마 잠금), useActiveSection(네비 활성화)
│   ├── index.css          # 디자인 토큰 + Tailwind v4 진입점
│   ├── App.jsx            # 루트 컴포넌트
│   └── main.jsx           # 엔트리 포인트
├── index.html
└── vite.config.js
```

---

## 📬 Contact

- **GitHub** — [kyoungsoon-kim](https://github.com/kyoungsoon-kim)
- **Email** — rudtns6443@gmail.com
