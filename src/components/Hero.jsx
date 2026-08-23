import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, DownloadSimple } from '@phosphor-icons/react'
import { headlineMetrics, profile } from '../data/portfolio'

const Hero = () => {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 } },
  }
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center px-5 pt-24 pb-16 sm:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-7">
          <motion.p
            variants={item}
            className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-ink-faint dark:text-ink-faint-dark"
          >
            {profile.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.15] text-ink md:text-5xl lg:text-6xl dark:text-ink-dark"
          >
            현장의 휴리스틱을
            <br />
            <span className="text-accent">데이터로 대체</span>합니다
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[52ch] text-base leading-relaxed text-ink-muted md:text-lg dark:text-ink-muted-dark"
          >
            SCM·물류 최적화 AI 엔지니어. 강화학습과 시뮬레이션으로 조달, 재고, 적재 의사결정을
            자동화합니다.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-on transition-[transform,background-color] hover:bg-accent-hover active:translate-y-px"
            >
              <DownloadSimple size={18} weight="bold" />
              {profile.ctaLabel}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-surface-raised px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent active:translate-y-px dark:border-hairline-dark dark:bg-surface-raised-dark dark:text-ink-dark"
            >
              GitHub
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </motion.div>
        </div>

        {/* TODO: 실사진 확보 시 이 패널 옆/위에 인물 또는 프로젝트 결과 이미지 배치 (1200x900) */}
        <motion.div variants={item} className="lg:col-span-5">
          <dl className="surface-card divide-y divide-hairline overflow-hidden dark:divide-hairline-dark">
            {headlineMetrics.map((metric) => (
              <div key={metric.label} className="flex items-baseline gap-5 px-6 py-6">
                <dt className="flex-1">
                  <span className="block text-sm font-medium text-ink dark:text-ink-dark">
                    {metric.label}
                  </span>
                  <span className="mt-1 block text-xs text-ink-faint dark:text-ink-faint-dark">
                    {metric.context}
                  </span>
                </dt>
                <dd className="shrink-0 font-mono text-2xl font-medium tabular-nums text-accent md:text-[1.75rem]">
                  {metric.value}
                  <span className="ml-0.5 text-sm text-ink-faint dark:text-ink-faint-dark">
                    {metric.unit}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
