'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark'

function getStoredTheme(): Theme | null {
  try {
    const saved = window.localStorage.getItem('atri-theme')
    return saved === 'dark' || saved === 'light' ? saved : null
  } catch {
    return null
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // The layout script sets the theme before React hydrates. Read that value
    // here so the control and the document always stay in sync.
    const current = document.documentElement.dataset.theme as Theme | undefined
    const next = current === 'dark' || current === 'light'
      ? current
      : getStoredTheme() ?? getSystemTheme()

    // This is an intentional one-time sync from the pre-hydration DOM theme;
    // the server must render a stable default to avoid a hydration mismatch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(next)
    applyTheme(next)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)

    try {
      window.localStorage.setItem('atri-theme', next)
    } catch {
      // Theme switching should still work if storage is unavailable.
    }
  }

  const target = theme === 'light' ? 'dark' : 'light'

  return (
    <button
      className="theme-toggle focus-ring"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${target} mode`}
      title={`Switch to ${target} mode`}
      aria-pressed={theme === 'dark'}
    >
      {theme === 'light' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
      <span className="theme-toggle-text">{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
