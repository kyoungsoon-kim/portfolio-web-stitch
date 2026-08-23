import { motion, useReducedMotion } from 'motion/react'
import { skillGroups } from '../data/portfolio'
import BrandIcon from './BrandIcon'

const Skills = () => {
  const reduce = useReducedMotion()

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-hairline px-5 py-24 sm:px-8 md:py-32 dark:border-hairline-dark"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl font-semibold text-ink md:text-4xl dark:text-ink-dark"
        >
          기술 스택
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-0 lg:divide-x lg:divide-hairline lg:dark:divide-hairline-dark">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.55,
                delay: reduce ? 0 : index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <h3 className="text-xs font-semibold text-ink-faint dark:text-ink-faint-dark">
                {group.name}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2.5 text-sm text-ink-muted transition-colors hover:text-ink dark:text-ink-muted-dark dark:hover:text-ink-dark"
                  >
                    <BrandIcon
                      slug={item.slug}
                      fallback={item.fallback}
                      size={18}
                      className="shrink-0 text-ink dark:text-ink-dark"
                    />
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
