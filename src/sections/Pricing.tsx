import { motion } from 'framer-motion'
import { ArrowRight, Check, Rocket, ShoppingBag, Sparkles, Store } from 'lucide-react'
import { currency, plans, type Plan } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Section } from '../components/ui/Section'

const icons = [Rocket, Store, ShoppingBag]
const tones = ['bg-lavender', 'bg-sky', 'bg-mint']

/** Pre-fills the contact form subject with the chosen plan, then scrolls there. */
function choosePlan(plan: Plan) {
  const subject = document.getElementById('subject') as HTMLInputElement | null
  const name = document.getElementById('name') as HTMLInputElement | null
  const form = name?.closest('form')
  if (subject) subject.value = `Enquiry: ${plan.name}`
  if (!name) {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    return
  }

  // Bring the form's first field to the middle of the screen, then put the cursor in it.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  name.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' })

  let last = -1
  let still = 0
  const settle = () => {
    const y = window.scrollY
    still = y === last ? still + 1 : 0
    last = y
    if (still >= 3) {
      name.focus({ preventScroll: true })
      form?.classList.add('form-flash')
      window.setTimeout(() => form?.classList.remove('form-flash'), 1600)
    } else {
      requestAnimationFrame(settle)
    }
  }
  requestAnimationFrame(settle)
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const Icon = icons[index % icons.length]
  const featured = !!plan.popular

  return (
    <article
      className={`glass lift group flex h-full flex-col overflow-hidden rounded-[2rem] p-7 sm:p-8 ${
        featured ? 'glass-strong border-primary/40 lg:-translate-y-4 lg:hover:-translate-y-6' : ''
      }`}
    >
      {featured && (
        <>
          <div aria-hidden className="absolute -right-16 -top-16 h-48 w-48 animate-drift rounded-full bg-primary/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-20 -left-10 h-40 w-40 animate-drift rounded-full bg-secondary/20 blur-3xl [animation-delay:-6s]" />
        </>
      )}

      <div className="relative flex items-start justify-between gap-4">
        <span
          className={`grid h-14 w-14 place-items-center rounded-2xl text-primary transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${tones[index % tones.length]}`}
        >
          <Icon size={24} aria-hidden />
        </span>
        {featured && (
          <span className="on-primary inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-[0_8px_20px_-8px_rgb(var(--primary)/0.8)]">
            <Sparkles size={13} aria-hidden /> Most Popular
          </span>
        )}
      </div>

      <h3 className="relative mt-6 text-xl font-bold tracking-tight text-ink">{plan.name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{plan.tagline}</p>

      <div className="relative mt-6 flex items-end gap-2 border-b border-primary/10 pb-6">
        {plan.priceNote === 'starting at' && (
          <span className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">From</span>
        )}
        <p className="text-4xl font-extrabold tracking-tight text-ink sm:text-[2.6rem]">
          <span className="mr-0.5 align-top text-2xl font-bold text-primary">{currency}</span>
          {plan.price}
        </p>
        <span className="mb-1.5 text-sm text-muted">/ {plan.priceNote === 'starting at' ? 'project' : plan.priceNote}</span>
      </div>

      <ul className="relative mt-6 flex-1 space-y-3.5">
        {plan.features.map((f, i) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.25 + i * 0.06 }}
            className="flex items-start gap-3 text-sm text-ink/90"
          >
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                featured ? 'on-primary bg-primary text-white' : 'bg-secondary/15 text-secondary'
              }`}
            >
              <Check size={12} strokeWidth={3} aria-hidden />
            </span>
            {f}
          </motion.li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => choosePlan(plan)}
        className={`relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] ${
          featured
            ? 'shine on-primary bg-primary text-white shadow-[0_12px_30px_-10px_rgb(var(--primary)/0.8)]'
            : 'border border-primary/25 bg-white/40 text-primary hover:bg-primary hover:text-white dark:bg-white/5'
        }`}
        aria-label={`Get started with the ${plan.name} plan`}
      >
        Get Started
        <ArrowRight size={16} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </article>
  )
}

export function Pricing() {
  return (
    <Section
      id="pricing"
      index="06"
      eyebrow="Pricing"
      title="Simple, Transparent Pricing"
      subtitle="Pick a starting point that fits your goals. Every project is tailored, so final quotes depend on scope."
    >
      <ul className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 lg:pt-4">
        {plans.map((p, i) => (
          <li key={p.name} className={p.popular ? 'md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:w-auto' : ''}>
            <Reveal delay={i * 0.1} y={36} className="h-full">
              <PlanCard plan={p} index={i} />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-sm text-muted">
          Need something custom?{' '}
          <a href="#contact" className="font-semibold text-primary underline-offset-4 hover:underline">
            Let's talk about your project
          </a>
        </p>
      </Reveal>
    </Section>
  )
}
