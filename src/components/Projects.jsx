import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Stack, Target, TrendUp } from '@phosphor-icons/react'
import { projectCategories, projects } from '../data/portfolio'

const facets = [
  { key: 'problem', label: 'Problem', Icon: Target },
  { key: 'approach', label: 'Approach', Icon: Stack },
  { key: 'impact', label: 'Impact', Icon: TrendUp },
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const reduce = useReducedMotion()

  const visible = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-semibold text-ink md:text-4xl dark:text-ink-dark"
          >
            프로젝트
          </motion.h2>

          <div className="flex flex-wrap gap-2">
            {projectCategories.map((category) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`relative isolate overflow-hidden rounded-full border px-4 py-2 text-sm font-medium transition-colors active:scale-[0.98] ${
                    isActive
                      ? 'border-accent text-accent-on'
                      : 'border-hairline text-ink-muted hover:text-ink dark:border-hairline-dark dark:text-ink-muted-dark dark:hover:text-ink-dark'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-filter"
                      transition={
                        reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }
                      }
                      className="absolute inset-0 z-0 rounded-full bg-accent"
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              )
            })}
          </div>
        </div>

        <motion.div layout={!reduce} className="mt-12 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.article
                key={project.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.45,
                  delay: reduce ? 0 : index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduce ? undefined : { y: -4 }}
                className={`surface-card flex flex-col overflow-hidden ${
                  project.image ? 'md:col-span-2 lg:grid lg:grid-cols-12' : ''
                } ${
                  project.featured
                    ? 'border-accent-line bg-gradient-to-br from-accent-wash to-surface-raised dark:to-surface-raised-dark'
                    : ''
                }`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    className="aspect-[16/10] h-full w-full object-cover lg:col-span-5"
                  />
                )}

                <div className={`flex flex-col p-6 ${project.image ? 'lg:col-span-7 lg:p-8' : ''}`}>
                  <div className="flex items-center justify-between gap-3">
                  <span className="rounded-chip bg-surface px-2.5 py-1 font-mono text-[0.7rem] text-ink-muted dark:bg-surface-dark dark:text-ink-muted-dark">
                    {project.tag}
                  </span>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} 저장소 열기`}
                      className="text-ink-faint transition-colors hover:text-accent dark:text-ink-faint-dark"
                    >
                      <ArrowUpRight size={18} weight="bold" />
                    </a>
                  )}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-ink dark:text-ink-dark">
                    {project.title}
                  </h3>

                  <dl className="mt-5 flex flex-col gap-4">
                    {facets.map(({ key, label, Icon }) => (
                      <div key={key} className="flex gap-3">
                        <Icon
                          size={16}
                          weight="regular"
                          className="mt-0.5 shrink-0 text-accent"
                          aria-hidden="true"
                        />
                        <div>
                          <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink dark:text-ink-dark">
                            {label}
                          </dt>
                          <dd className="mt-1 text-sm leading-[1.7] text-ink-muted dark:text-ink-muted-dark">
                            {project[key]}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {visible.length === 0 && (
          <p className="mt-12 text-sm text-ink-muted dark:text-ink-muted-dark">
            이 카테고리에 공개된 프로젝트가 아직 없습니다.
          </p>
        )}
      </div>
    </section>
  )
}

export default Projects
