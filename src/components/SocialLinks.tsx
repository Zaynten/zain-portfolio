import { Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { site } from '../data/site'

const items = [
  { label: 'GitHub', href: site.socials.github, icon: <FaGithub size={17} />, external: true },
  { label: 'LinkedIn', href: site.socials.linkedin, icon: <FaLinkedinIn size={17} />, external: true },
  { label: 'Instagram', href: site.socials.instagram, icon: <FaInstagram size={17} />, external: true },
  { label: 'Email', href: `mailto:${site.email}`, icon: <Mail size={17} />, external: false },
]

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {items.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={s.label}
            title={s.label}
            {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="glass grid h-11 w-11 place-items-center rounded-full text-ink transition duration-300 hover:-translate-y-1 hover:text-primary"
          >
            {s.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
