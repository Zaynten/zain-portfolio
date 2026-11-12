import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Menu, Moon, Sun, X } from 'lucide-react'
import { navLinks, sectionIds, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import type { Theme } from '../hooks/useTheme'
import { Logo } from './Logo'

interface Props {
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: Props) {
  const active = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isDark = theme === 'dark'

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4 sm:px-4">
      <nav
        aria-label="Primary"
        className={`glass relative flex w-full max-w-5xl items-center justify-between rounded-full py-2 pl-3 pr-2 transition-shadow duration-500 sm:pl-4 ${
          scrolled ? 'shadow-lift' : ''
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((l) => {
            const current = active === l.id
            return (
              <li key={l.id} className="relative">
                <a
                  href={`#${l.id}`}
                  aria-current={current ? 'page' : undefined}
                  className={`relative z-10 block rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    current ? 'text-primary' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                </a>
                {current && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <a
            href={site.resume}
            download={site.resumeFileName}
            className="on-primary hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <Download size={15} aria-hidden /> Resume
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-primary/10"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
                className="grid place-items-center"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full text-ink transition hover:bg-primary/10 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="glass glass-strong absolute left-0 right-0 top-[calc(100%+10px)] rounded-[28px] p-3 md:hidden"
            >
              <ul className="flex flex-col">
                {navLinks.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      aria-current={active === l.id ? 'page' : undefined}
                      className={`block rounded-2xl px-4 py-3 text-[15px] font-medium transition ${
                        active === l.id ? 'bg-primary/10 text-primary' : 'text-ink hover:bg-primary/5'
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={site.resume}
                download={site.resumeFileName}
                className="on-primary mt-2 flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-white"
              >
                <Download size={16} aria-hidden /> Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
