import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { SplitText } from './SplitText'

interface SectionProps {
  id: string
  index?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  center?: boolean
}

export function Section({ id, index, eyebrow, title, subtitle, children, className = '', center }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={`relative scroll-mt-20 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {title && (
          <div className={`mb-12 md:mb-16 ${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
            {eyebrow && (
              <Reveal y={12}>
                <p
                  className={`mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary ${
                    center ? 'justify-center' : ''
                  }`}
                >
                  {index && <span className="font-serif text-lg normal-case italic tracking-normal text-muted">{index}</span>}
                  <motion.span
                    aria-hidden
                    className="h-px bg-primary/50"
                    initial={{ width: 0 }}
                    whileInView={{ width: 40 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {eyebrow}
                </p>
              </Reveal>
            )}
            <h2 id={`${id}-title`} className="text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.6rem] md:text-[3.25rem]">
              <SplitText
                text={title}
                delay={0.1}
                accentClass="font-serif font-normal italic text-primary text-[1.12em] leading-[0.9]"
              />
            </h2>
            {subtitle && (
              <Reveal delay={0.3}>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
