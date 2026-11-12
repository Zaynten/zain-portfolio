import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { navLinks, site } from '../data/site'
import { Logo } from './Logo'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  return (
    <footer className="relative overflow-hidden px-3 pt-8 sm:px-6">
      <div className="glass mx-auto max-w-6xl rounded-[28px] px-6 py-10 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Logo />
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-sm font-medium text-muted transition hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <SocialLinks />
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-primary/10 pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-medium text-ink transition hover:text-primary"
          >
            Back to top <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
      <motion.p
        aria-hidden
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none mx-auto -mb-6 mt-2 max-w-6xl select-none text-center text-[30vw] font-extrabold leading-[0.85] tracking-[-0.07em] text-primary/[0.08] md:text-[17rem]"
      >
        {site.name}
      </motion.p>
    </footer>
  )
}
