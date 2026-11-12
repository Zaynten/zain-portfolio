import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Award, Briefcase, GraduationCap } from 'lucide-react'
import { timeline, type TimelineItem } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'

type Tab = TimelineItem['type']

const tabs: { id: Tab; label: string; icon: typeof Briefcase }[] = [
  { id: 'work', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
]

export function Experience() {
  const [tab, setTab] = useState<Tab>('work')
  const items = timeline.filter((t) => t.type === tab)

  const panelRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: panelRef, offset: ['start 75%', 'end 55%'] })
  const draw = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 })

  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience & Education"
      title="My Journey"
      subtitle="Where I've worked and what I've studied along the way."
    >
      <div className="mx-auto max-w-3xl">
        {/* Tabs */}
        <Reveal className="flex justify-center">
          <div role="tablist" aria-label="Show experience or education" className="glass mb-10 inline-flex rounded-full p-1.5">
            {tabs.map((t) => {
              const on = tab === t.id
              const count = timeline.filter((x) => x.type === t.id).length
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`journey-tab-${t.id}`}
                  aria-selected={on}
                  aria-controls="journey-panel"
                  onClick={() => setTab(t.id)}
                  className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-6 ${
                    on ? 'on-primary text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="journey-pill"
                      className="absolute inset-0 rounded-full bg-primary shadow-[0_8px_22px_-8px_rgb(var(--primary)/0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <t.icon size={16} aria-hidden className="relative" />
                  <span className="relative">{t.label}</span>
                  <span
                    className={`relative grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[11px] ${
                      on ? 'bg-white/25' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Timeline panel */}
        <div
          ref={panelRef}
          id="journey-panel"
          role="tabpanel"
          aria-labelledby={`journey-tab-${tab}`}
          className="relative"
        >
          <span aria-hidden className="absolute bottom-2 left-[19px] top-2 w-px bg-primary/10" />
          <motion.span
            aria-hidden
            style={{ scaleY: draw }}
            className="absolute bottom-2 left-[18px] top-2 w-[3px] origin-top rounded-full bg-gradient-to-b from-primary via-primary/70 to-secondary"
          />

          <AnimatePresence mode="wait" initial={false}>
            <motion.ol
              key={tab}
              initial={{ opacity: 0, x: tab === 'work' ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: tab === 'work' ? 24 : -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {items.map((t, i) => {
                const Icon = t.type === 'work' ? Briefcase : GraduationCap
                return (
                  <li key={`${t.org}-${i}`} className="relative pb-8 pl-14 last:pb-0 sm:pl-16">
                    <motion.span
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 + i * 0.1 }}
                      className="absolute left-0 top-5 z-10 grid h-10 w-10 place-items-center rounded-full border border-primary/25 bg-bg text-primary shadow-glass"
                    >
                      <span aria-hidden className="absolute inset-0 animate-ping2 rounded-full border border-primary/30 [animation-duration:2.8s]" />
                      <Icon size={18} aria-hidden />
                    </motion.span>
                    <Reveal delay={0.05 + i * 0.08} y={30}>
                      <article className="glass lift rounded-3xl p-6 sm:p-7">
                        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                          <div>
                            <h3 className="text-lg font-bold tracking-tight text-ink">{t.title}</h3>
                            <p className="text-sm font-medium text-primary">{t.org}</p>
                          </div>
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{t.period}</span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {t.points.map((p) => (
                            <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                              {p}
                            </li>
                          ))}
                        </ul>
                        {t.achievement && (
                          <p className="mt-5 flex gap-3 rounded-2xl bg-secondary/10 p-4 text-sm leading-relaxed text-ink">
                            <Award size={18} className="mt-0.5 shrink-0 text-secondary" aria-hidden />
                            <span>
                              <strong className="font-semibold">Achievement: </strong>
                              {t.achievement}
                            </span>
                          </p>
                        )}
                      </article>
                    </Reveal>
                  </li>
                )
              })}
            </motion.ol>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
