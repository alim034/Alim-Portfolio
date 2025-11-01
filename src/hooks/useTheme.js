import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'theme' // 'light' | 'dark'

function getSystemPrefersDark() {
  if (typeof window === 'undefined' || !window.matchMedia) return true
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyThemeClass(isDark) {
  const root = document.documentElement
  root.classList.toggle('dark', isDark)
}

export function getInitialTheme() {
  const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  if (saved === 'light') return 'light'
  if (saved === 'dark') return 'dark'
  return getSystemPrefersDark() ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Apply on mount and when theme changes
  useEffect(() => {
    applyThemeClass(theme === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      void 0
    }
  }, [theme])

  // React to OS changes only if user never explicitly set a theme
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const onChange = () => {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) setTheme(mq.matches ? 'dark' : 'light')
    }
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return { theme, setTheme, toggle, isDark: theme === 'dark' }
}
