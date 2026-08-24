import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
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
      className="relative flex min-h-[100dvh] items-center px-5 pt-24 pb-14 sm:px-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-14"
      >
        <div className="lg:col-span-7">
          <motion.p
            variants={item}
            className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent"
          >
            SCM &amp; Logistics Optimization AI Engineer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-[1.12] text-ink md:text-5xl lg:text-6xl dark:text-ink-dark"
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
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-on transition-[transform,background-color] hover:bg-accent-hover active:translate-y-px"
            >
              <GithubLogo size={18} weight="bold" />
              GitHub
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="lg:col-span-5">
          <div className="surface-card overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/supply-chain-hero.webp"
                alt="자동 운반 로봇이 이동하는 현대식 물류 센터"
                width="1536"
                height="1024"
                fetchPriority="high"
                className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.025] motion-reduce:transition-none"
              />
            </div>
            <dl className="grid grid-cols-3 border-t border-hairline dark:border-hairline-dark">
            {headlineMetrics.map((metric) => (
              <div
                key={metric.label}
                className="border-r border-hairline px-3 py-4 last:border-r-0 dark:border-hairline-dark sm:px-4"
              >
                <dd className="font-mono text-lg font-medium tabular-nums text-accent sm:text-xl">
                  {metric.value}
                  <span className="ml-0.5 text-[0.65rem] text-ink-faint dark:text-ink-faint-dark">
                    {metric.unit}
                  </span>
                </dd>
                <dt className="mt-1 text-[0.7rem] leading-snug text-ink-muted dark:text-ink-muted-dark">
                  {metric.label}
                </dt>
              </div>
            ))}
            </dl>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
