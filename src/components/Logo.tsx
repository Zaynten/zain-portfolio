import { site } from '../data/site'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" aria-label={`${site.name} — back to top`} className={`group inline-flex items-center gap-2.5 ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-base font-extrabold text-white shadow-[0_6px_16px_-6px_rgb(var(--primary)/0.8)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105">
        {site.initials}
      </span>
      <span className="text-[15px] font-bold tracking-tight text-ink">{site.name}</span>
    </a>
  )
}
