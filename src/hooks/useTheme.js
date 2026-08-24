import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

const readInitialTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'light'
}

/*
  Page-level theme lock: the whole document is either light or dark.
  Light is the deliberate first-visit default. A manual choice persists locally.
*/
export const useTheme = () => {
  const [theme, setTheme] = useState(readInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
