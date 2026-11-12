import { Sparkle } from 'lucide-react'
import { skillGroups } from '../data/site'

const items = skillGroups.flatMap((g) => g.skills)

/** Tilted glass band with an endless scroll of the tech stack. Decorative. */
export function Marquee() {
  return (
    <div aria-hidden className="relative py-8 md:py-12">
      <div className="-rotate-[1.6deg] scale-x-[1.04]">
        <div className="glass overflow-hidden rounded-none border-x-0 py-4 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)] md:py-5">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[...items, ...items].map((s, i) => (
              <span key={i} className="flex items-center whitespace-nowrap pr-8 text-base font-semibold text-ink/80 md:pr-10 md:text-lg">
                <s.icon size={22} style={{ color: s.color }} className="mr-3" />
                {s.name}
                <Sparkle size={14} className="ml-8 text-primary/40 md:ml-10" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
