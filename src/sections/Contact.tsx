import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, TriangleAlert } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { site } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'
import { Button } from '../components/ui/Button'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const info = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: <Mail size={18} /> },
  { label: 'Location', value: site.location, icon: <MapPin size={18} /> },
  { label: 'LinkedIn', value: 'Connect on LinkedIn', href: site.socials.linkedin, icon: <FaLinkedinIn size={17} /> },
  { label: 'GitHub', value: 'See my code', href: site.socials.github, icon: <FaGithub size={18} /> },
  { label: 'Phone', value: '+91 9944268029', href: 'tel:+919944268029', icon: <Phone size={18} /> },
]

/**
 * Delivery order:
 *  1. VITE_WEB3FORMS_KEY  → Web3Forms
 *  2. VITE_FORM_ENDPOINT  → Formspree (or any JSON endpoint)
 *  3. neither set         → opens the visitor's email app with the message pre-filled
 */
async function deliver(data: Record<string, string>) {
  if (site.web3formsKey) {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: site.web3formsKey, ...data }),
    })
    const json = await res.json()
    if (!res.ok || json.success === false) throw new Error(json.message || 'Request failed')
    return 'sent' as const
  }
  if (site.formEndpoint) {
    const res = await fetch(site.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Request failed')
    return 'sent' as const
  }
  const body = `${data.message}\n\n— ${data.name} (${data.email})`
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`
  return 'sent' as const
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    if (fd.get('botcheck')) return // honeypot: bots fill hidden fields

    const data = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      subject: String(fd.get('subject') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
    }
    setStatus('sending')
    setError('')
    try {
      await deliver(data)
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
      setError(`Something went wrong. Please try again, or email me directly at ${site.email}.`)
    }
  }

  return (
    <Section id="contact" index="07" eyebrow="Contact" title="Let's Build Something Together" subtitle="Have an idea or project in mind? Let's connect and make it happen.">
      {/* floating glass decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="glass absolute -left-8 -top-16 hidden h-20 w-20 animate-float-slow rounded-[2rem] lg:block" />
        <div className="glass absolute right-4 top-10 hidden h-16 w-16 animate-float rounded-full lg:block" />
        <div className="glass absolute -right-8 bottom-16 hidden h-36 w-36 animate-float-slow rounded-[2.5rem] lg:block" />
      </div>

      <div className="relative grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <Reveal>
          <ul className="space-y-4">
            {info.map((it) => {
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">{it.icon}</span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{it.label}</span>
                    <span className="block truncate text-[15px] font-semibold text-ink">{it.value}</span>
                  </span>
                </>
              )
              return (
                <li key={it.label}>
                  {it.href ? (
                    <a
                      href={it.href}
                      {...(it.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="glass lift flex items-center gap-4 rounded-3xl p-4 sm:p-5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 rounded-3xl p-4 sm:p-5">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="glass glass-strong rounded-[2rem] p-6 sm:p-9" aria-describedby="form-status">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">Full Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your Name" className="field" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">Email Address</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="user@example.com" className="field" />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-ink">Subject</label>
              <input id="subject" name="subject" type="text" required placeholder="Project inquiry" className="field" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell me a little about your idea…" className="field resize-none" />
            </div>
            {/* honeypot */}
            <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" size="lg" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <>
                    <Loader2 size={17} className="animate-spin" aria-hidden /> Sending…
                  </>
                ) : (
                  <>
                    Send Message <Send size={16} aria-hidden />
                  </>
                )}
              </Button>

              <div id="form-status" role="status" aria-live="polite" className="min-h-6 text-sm">
                <AnimatePresence mode="wait">
                  {status === 'sent' && (
                    <motion.p key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-medium text-secondary">
                      <CheckCircle2 size={18} aria-hidden />
                      {site.web3formsKey || site.formEndpoint ? "Thanks! Your message has been sent." : 'Opening your email app to send it…'}
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p key="err" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 font-medium text-red-500">
                      <TriangleAlert size={18} aria-hidden /> {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
