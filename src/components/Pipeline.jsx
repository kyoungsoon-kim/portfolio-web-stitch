import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { pipeline } from '../data/portfolio'

const Pipeline = () => {
  const reduce = useReducedMotion()

  return (
    <section
      id="pipeline"
      className="scroll-mt-24 border-y border-hairline bg-surface-raised px-5 py-24 sm:px-8 md:py-32 dark:border-hairline-dark dark:bg-surface-raised-dark"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[20ch] text-3xl font-semibold leading-[1.25] text-ink md:text-4xl dark:text-ink-dark"
        >
          제조에서 조달, 재고까지 하나의 파이프라인으로
        </motion.h2>

        <div className="mt-14 flex flex-col">
          {pipeline.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: reduce ? 0 : index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid gap-6 border-t border-hairline py-10 md:grid-cols-12 md:gap-10 dark:border-hairline-dark"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-sm text-accent">{entry.stage}</p>
                <p className="mt-1 font-mono text-xs text-ink-faint dark:text-ink-faint-dark">
                  {entry.period}
                </p>
              </div>

              <div className="md:col-span-6">
                <h3 className="text-xl font-semibold text-ink md:text-2xl dark:text-ink-dark">
                  {entry.title}
                </h3>
                <p className="mt-3 max-w-[60ch] text-[0.95rem] leading-[1.8] text-ink-muted dark:text-ink-muted-dark">
                  {entry.body}
                </p>
                <p className="mt-3 text-sm text-ink-faint dark:text-ink-faint-dark">{entry.note}</p>
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={entry.imageAlt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    className="mt-6 aspect-[16/9] w-full rounded-card object-cover"
                  />
                )}
                {entry.repo && (
                  <a
                    href={entry.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent dark:text-ink-dark"
                  >
                    Repository
                    <ArrowUpRight size={14} weight="bold" />
                  </a>
                )}
              </div>

              <div className="md:col-span-3 md:text-right">
                <p className="font-mono text-3xl font-medium tabular-nums text-ink md:text-4xl dark:text-ink-dark">
                  {entry.metric.value}
                </p>
                <p className="mt-1 text-xs text-ink-faint dark:text-ink-faint-dark">
                  {entry.metric.label}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pipeline
