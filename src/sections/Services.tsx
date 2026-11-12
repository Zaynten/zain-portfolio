import { Globe, LayoutDashboard, Ruler, Server } from 'lucide-react'
import { services } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'

const icons = { globe: Globe, layout: LayoutDashboard, server: Server, ruler: Ruler }
const tones = { lavender: 'bg-lavender', sky: 'bg-sky', mint: 'bg-mint' }

export function Services() {
  return (
    <Section id="services" index="05" eyebrow="Services" title="What I Can Do">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="glass lift group h-full overflow-hidden rounded-[1.75rem] p-7">
                  <div
                    aria-hidden
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-80 blur-2xl transition-transform duration-700 ease-out group-hover:scale-[2.2] ${tones[s.tone]}`}
                  />
                  <span aria-hidden className="absolute right-6 top-5 font-serif text-2xl italic text-primary/60">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`relative mb-6 grid h-14 w-14 place-items-center rounded-2xl text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${tones[s.tone]}`}
                  >
                    <Icon size={24} aria-hidden />
                  </span>
                  <h3 className="relative text-lg font-bold tracking-tight text-ink">{s.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                </article>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
