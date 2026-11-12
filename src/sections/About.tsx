import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { Briefcase, FolderCheck, Layers, Smile } from 'lucide-react'
import type { ReactNode } from 'react'
import { site, technologyCount } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { Tilt } from '../components/ui/Tilt'

/* Set `value` to your numbers. `null` shows an em dash.
   Technologies are counted automatically from src/data/site.ts. */
const stats: { label: string; value: number | null; suffix: string; icon: ReactNode }[] = [
  { label: 'Years of Experience', value: 2, suffix: '+', icon: <Briefcase size={18} /> },
  { label: 'Projects Completed', value: 10, suffix: '+', icon: <FolderCheck size={18} /> },
  { label: 'Technologies Mastered', value: technologyCount, suffix: '', icon: <Layers size={18} /> },
  { label: 'Happy Clients', value: 10, suffix: '+', icon: <Smile size={18} /> },
]

function Counter({ value, suffix }: { value: number | null; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || value === null) return
    const c = animate(0, value, { duration: 1.4, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {value === null ? '—' : n}
      {value !== null && suffix}
    </span>
  )
}

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="A Little About Me">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <Tilt max={7} className="relative mx-auto max-w-sm">
            <div aria-hidden className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-lavender to-mint opacity-80" />
            <div className="glass relative rounded-[2.25rem] p-3">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-lavender">
                <img
                  src={site.profileImage}
                  alt={`${site.name} at work`}
                  width={600}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Tilt>
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-ink/90 md:text-xl">{site.about}</p>
          </Reveal>

          <dl className="mt-10 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.07}>
                <div className="glass lift rounded-3xl p-5 sm:p-6">
                  <span className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-primary/10 text-primary">{s.icon}</span>
                  <dd className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-1 text-sm text-muted">{s.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
