'use client'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  useEffect(() => {
    const saved = window.localStorage.getItem('atri-theme')
    const next = saved === 'dark' || saved === 'light' ? saved : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(next)
    document.documentElement.dataset.theme = next
  }, [])
  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    window.localStorage.setItem('atri-theme', next)
  }
  return <button className="theme-toggle focus-ring" type="button" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} aria-pressed={theme === 'dark'}>{theme === 'light' ? <Moon size={18} aria-hidden="true"/> : <Sun size={18} aria-hidden="true"/>}<span className="theme-toggle-text">{theme === 'light' ? 'Dark' : 'Light'}</span></button>
}
