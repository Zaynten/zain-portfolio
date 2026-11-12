import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { categories, projects, site, type Category, type Project } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { ProjectPreview } from '../components/ProjectPreview'
import { Tilt } from '../components/ui/Tilt'

function ProjectCard({ project }: { project: Project }) {
  const repo = project.repoUrl || site.socials.github
  return (
    <motion.article
      layout="position"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Tilt
        max={5}
        className="glass spot group flex h-full flex-col overflow-hidden rounded-[1.75rem] transition-shadow duration-500 hover:shadow-lift sm:rounded-[2rem]"
      >
      <div className="overflow-hidden">
        <div className="transition-transform duration-700 ease-out [@media(hover:hover)]:group-hover:scale-[1.06]">
          <ProjectPreview kind={project.preview} label={project.title} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-bold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.stack.map((t) => (
            <li key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2.5 pt-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="on-primary inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <ExternalLink size={15} aria-hidden /> Live Demo
            </a>
          ) : (
            <span
              aria-disabled="true"
              title="Add a liveUrl for this project in src/data/site.ts"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary/60"
            >
              <ExternalLink size={15} aria-hidden /> Live Demo
            </span>
          )}
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:text-primary"
          >
            <FaGithub size={15} aria-hidden /> GitHub
          </a>
        </div>
      </div>
      </Tilt>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<Category>('All')
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter],
  )

  return (
    <Section id="projects" index="03" eyebrow="Projects" title="Some Things I've Built">
      <Reveal>
        <div role="group" aria-label="Filter projects by category" className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => {
            const on = filter === c
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={on}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  on ? 'text-white on-primary' : 'glass text-muted hover:text-ink'
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-primary shadow-[0_8px_22px_-8px_rgb(var(--primary)/0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            )
          })}
        </div>
      </Reveal>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
