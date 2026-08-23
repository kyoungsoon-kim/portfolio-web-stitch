import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pipeline from './components/Pipeline'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { profile } from './data/portfolio'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-[100dvh] bg-surface text-ink dark:bg-surface-dark dark:text-ink-dark">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Pipeline />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-hairline px-5 py-10 sm:px-8 dark:border-hairline-dark">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between dark:text-ink-muted-dark">
          <p className="font-medium text-ink dark:text-ink-dark">{profile.name}</p>
          <p className="text-xs text-ink-faint dark:text-ink-faint-dark">
            {profile.role} · © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
