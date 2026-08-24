import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react'
import { List, Moon, Sun, X } from '@phosphor-icons/react'
import { navItems, profile } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = navItems.map((item) => item.href.slice(1))

const Navbar = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lifted, setLifted] = useState(false)
  const active = useActiveSection(sectionIds)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (value) => {
    const next = value > 24
    if (next !== lifted) setLifted(next)
  })

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300 ${
        lifted
          ? 'border-b border-hairline bg-surface/80 backdrop-blur-md dark:border-hairline-dark dark:bg-surface-dark/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-tight text-ink dark:text-ink-dark"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1)
            const isActive = active === id
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  className={`relative block px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-ink dark:text-ink-dark'
                      : 'text-ink-muted hover:text-ink dark:text-ink-muted-dark dark:hover:text-ink-dark'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={
                        reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 30 }
                      }
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
            className="grid size-9 place-items-center rounded-full border border-hairline text-ink-muted transition-colors hover:text-ink active:scale-[0.96] dark:border-hairline-dark dark:text-ink-muted-dark dark:hover:text-ink-dark"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="메뉴 열기"
            aria-expanded={menuOpen}
            className="grid size-9 place-items-center rounded-full border border-hairline text-ink transition-colors lg:hidden dark:border-hairline-dark dark:text-ink-dark"
          >
            {menuOpen ? <X size={16} /> : <List size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-hairline bg-surface px-5 pb-5 lg:hidden dark:border-hairline-dark dark:bg-surface-dark"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-hairline py-3 text-sm text-ink-muted last:border-b-0 dark:border-hairline-dark dark:text-ink-muted-dark"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
