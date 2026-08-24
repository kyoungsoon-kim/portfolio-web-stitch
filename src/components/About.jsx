import { motion, useReducedMotion } from 'motion/react'
import { about } from '../data/portfolio'

const About = () => {
  const reduce = useReducedMotion()

  const reveal = {
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }

  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.h2
            {...reveal}
            className="max-w-[18ch] text-3xl font-semibold leading-[1.25] text-ink md:text-4xl lg:col-span-5 lg:text-5xl dark:text-ink-dark"
          >
            {about.lead}
          </motion.h2>

          <motion.div
            {...reveal}
            transition={{ ...reveal.transition, delay: reduce ? 0 : 0.1 }}
            className="flex flex-col gap-6 lg:col-span-7 lg:pt-2"
          >
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 12)}
                className={`max-w-[62ch] leading-[1.85] ${
                  index === 0
                    ? 'text-lg font-medium text-ink dark:text-ink-dark'
                    : 'text-[0.95rem] text-ink-muted dark:text-ink-muted-dark'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        <motion.dl
          {...reveal}
          transition={{ ...reveal.transition, delay: reduce ? 0 : 0.15 }}
          className="mt-16 grid gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-3 dark:border-hairline-dark dark:bg-hairline-dark"
        >
          {about.facts.map((fact) => (
            <div
              key={fact.label}
              className="bg-surface-raised px-6 py-6 dark:bg-surface-raised-dark"
            >
              <dt className="text-xs text-ink-faint dark:text-ink-faint-dark">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm font-medium text-ink dark:text-ink-dark">{fact.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}

export default About
