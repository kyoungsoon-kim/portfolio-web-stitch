import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, EnvelopeSimple, GithubLogo } from '@phosphor-icons/react'
import { profile } from '../data/portfolio'

const Contact = () => {
  const reduce = useReducedMotion()

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-hairline bg-surface-raised px-5 py-24 sm:px-8 md:py-32 dark:border-hairline-dark dark:bg-surface-raised-dark"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h2 className="max-w-[16ch] text-3xl font-semibold leading-[1.25] text-ink md:text-4xl dark:text-ink-dark">
            공급망 문제, 같이 풀어볼까요
          </h2>
          <p className="mt-4 max-w-[46ch] text-[0.95rem] text-ink-muted dark:text-ink-muted-dark">
            SCM·물류 최적화, 강화학습 기반 의사결정 자동화 관련 제안은 메일로 보내주세요.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-on transition-[transform,background-color] hover:bg-accent-hover active:translate-y-px"
          >
            <EnvelopeSimple size={18} weight="bold" />
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-hairline px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent active:translate-y-px dark:border-hairline-dark dark:text-ink-dark"
          >
            <GithubLogo size={18} weight="bold" />
            GitHub
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
