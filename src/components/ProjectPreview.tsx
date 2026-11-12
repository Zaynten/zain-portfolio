import { motion } from 'framer-motion'
import type { PreviewKind } from '../data/site'

/** Lightweight, image-free UI mockups used as project preview placeholders.
 *  Swap for real screenshots by passing an `image` to <ProjectCard> (see Projects.tsx). */

const bar = 'rounded-full bg-primary/20'
const tile = 'rounded-xl bg-white/70 dark:bg-white/10'

function Dashboard() {
  return (
    <div className="grid h-full grid-cols-[22%_1fr] gap-2.5">
      <div className={`${tile} space-y-2 p-2.5`}>
        {[70, 50, 60, 40].map((w, i) => (
          <div key={i} className={`h-2 ${bar}`} style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="space-y-2.5">
        <div className="grid grid-cols-3 gap-2.5">
          {['bg-primary/25', 'bg-secondary/30', 'bg-sky'].map((c, i) => (
            <div key={i} className={`${tile} p-2.5`}>
              <div className={`mb-2 h-2 w-1/2 rounded-full ${c}`} />
              <div className="h-3 w-2/3 rounded-full bg-ink/15" />
            </div>
          ))}
        </div>
        <div className={`${tile} flex h-[52%] items-end gap-1.5 p-3`}>
          {[40, 65, 50, 80, 55, 90, 70, 100, 60].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: '0%' }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-primary/60 to-primary/20 transition-colors duration-300 group-hover:from-primary/80"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Budget() {
  return (
    <div className="grid h-full grid-cols-2 gap-2.5">
      <div className={`${tile} grid place-items-center`}>
        <motion.div
          initial={{ rotate: -120, scale: 0.6, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-24 w-24 place-items-center rounded-full"
          style={{ background: 'conic-gradient(rgb(var(--primary)) 0 38%, rgb(var(--secondary)) 0 66%, rgb(var(--sky)) 0 100%)' }}
        >
          <div className="h-14 w-14 rounded-full bg-bg" />
        </motion.div>
      </div>
      <div className="space-y-2.5">
        {[80, 55, 68, 40].map((w, i) => (
          <div key={i} className={`${tile} p-2.5`}>
            <div className="mb-1.5 h-2 w-1/3 rounded-full bg-ink/15" />
            <div className="h-2 rounded-full bg-primary/10">
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.25 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-2 rounded-full bg-secondary/70"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Table() {
  return (
    <div className={`${tile} h-full space-y-2.5 p-3`}>
      <div className="h-3 w-1/3 rounded-full bg-ink/15" />
      {[0, 1, 2, 3, 4].map((r) => (
        <div key={r} className="flex items-center gap-2.5">
          <div className="h-5 w-5 rounded-full bg-primary/25" />
          <div className="h-2 w-1/4 rounded-full bg-ink/15" />
          <div className="h-2 flex-1 rounded-full bg-ink/10" />
          <div className={`h-4 w-10 rounded-full ${r % 2 ? 'bg-secondary/30' : 'bg-primary/25'}`} />
        </div>
      ))}
    </div>
  )
}

function Shop() {
  return (
    <div className="grid h-full grid-cols-3 gap-2.5">
      {['bg-lavender', 'bg-mint', 'bg-sky', 'bg-mint', 'bg-sky', 'bg-lavender'].map((c, i) => (
        <div key={i} className={`${tile} flex flex-col gap-1.5 p-2`}>
          <div className={`flex-1 rounded-lg ${c}`} />
          <div className="h-2 w-3/4 rounded-full bg-ink/15" />
          <div className="h-2 w-1/3 rounded-full bg-primary/40" />
        </div>
      ))}
    </div>
  )
}

function Kanban() {
  return (
    <div className="grid h-full grid-cols-3 gap-2.5">
      {[3, 2, 2].map((n, c) => (
        <div key={c} className={`${tile} space-y-2 p-2`}>
          <div className={`h-2 w-1/2 rounded-full ${['bg-primary/40', 'bg-secondary/50', 'bg-ink/20'][c]}`} />
          {Array.from({ length: n }).map((_, i) => (
            <div key={i} className="space-y-1.5 rounded-lg bg-bg/80 p-2 shadow-sm">
              <div className="h-2 w-5/6 rounded-full bg-ink/15" />
              <div className="h-2 w-1/2 rounded-full bg-ink/10" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function Portfolio() {
  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className={`${tile} flex flex-1 items-center gap-3 p-3`}>
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/50 to-secondary/50" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-2/3 rounded-full bg-ink/20" />
          <div className="h-2 w-full rounded-full bg-ink/10" />
          <div className="h-2 w-3/4 rounded-full bg-ink/10" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {['bg-lavender', 'bg-sky', 'bg-mint'].map((c, i) => (
          <div key={i} className={`h-12 rounded-xl ${c}`} />
        ))}
      </div>
    </div>
  )
}

const views: Record<PreviewKind, () => JSX.Element> = {
  dashboard: Dashboard,
  budget: Budget,
  table: Table,
  shop: Shop,
  kanban: Kanban,
  portfolio: Portfolio,
}

export function ProjectPreview({ kind, label }: { kind: PreviewKind; label: string }) {
  const View = views[kind]
  return (
    <div
      role="img"
      aria-label={`Preview of ${label}`}
      className="aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-lavender via-sky to-mint p-4 sm:p-5"
    >
      <div className="glass flex h-full flex-col overflow-hidden rounded-2xl">
        <div className="flex items-center gap-1.5 border-b border-primary/10 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-primary/30" />
          <span className="h-2 w-2 rounded-full bg-secondary/40" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="ml-3 h-2 w-1/3 rounded-full bg-ink/10" />
        </div>
        <div className="min-h-0 flex-1 p-3">
          <View />
        </div>
      </div>
    </div>
  )
}
