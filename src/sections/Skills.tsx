import { motion } from 'framer-motion'
import { skillGroups } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      eyebrow="Skills"
      title="My Tech Stack"
      subtitle="The languages, frameworks and tools I use to bring ideas to life."
    >
      <div className="space-y-12">
        {skillGroups.map((group, gi) => (
          <div key={group.title}>
            <Reveal delay={gi * 0.03}>
              <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-xl font-bold tracking-tight text-ink">{group.title}</h3>
                <p className="text-sm text-muted">{group.blurb}</p>
              </div>
            </Reveal>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
              {group.skills.map((s, i) => (
                <li key={s.name}>
                  <Reveal delay={i * 0.04} y={16}>
                    <motion.div
                      whileHover="hover"
                      variants={{ hover: { y: -6 } }}
                      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                      className="glass spot group flex items-center gap-3.5 rounded-3xl p-4 transition-shadow duration-300 hover:shadow-lift sm:flex-col sm:gap-3 sm:p-6 sm:text-center"
                    >
                      <span className="animate-float-sm" style={{ animationDelay: `${(i % 4) * -1}s` }}>
                        <motion.span
                          variants={{ hover: { rotate: [0, -12, 10, -6, 0], scale: 1.15 } }}
                          transition={{ duration: 0.6 }}
                          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/70 shadow-sm transition-shadow duration-300 group-hover:shadow-[0_8px_24px_-6px_currentColor] sm:h-14 sm:w-14 dark:bg-white/10"
                          style={{ color: s.color }}
                        >
                          <s.icon size={26} aria-hidden />
                        </motion.span>
                      </span>
                      <span className="text-sm font-semibold text-ink">{s.name}</span>
                    </motion.div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
