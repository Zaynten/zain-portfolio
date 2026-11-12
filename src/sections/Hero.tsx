import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { heroBadges, site } from '../data/site'
import { LinkButton } from '../components/ui/Button'
import { Magnetic } from '../components/ui/Magnetic'
import { SplitText } from '../components/ui/SplitText'
import { Tilt } from '../components/ui/Tilt'
import { SocialLinks } from '../components/SocialLinks'

const ease = [0.22, 1, 0.36, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

export function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const frameY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 90])
  const shapeY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -140])
  const textY = useTransform(scrollY, [0, 700], [0, reduce ? 0 : -50])
  const textOpacity = useTransform(scrollY, [0, 550], [1, reduce ? 1 : 0.15])

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pb-10 pt-32 md:pt-28" aria-label="Introduction">
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-0" />

      {/* floating decorative shapes */}
      <motion.div aria-hidden style={{ y: shapeY }} className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glass absolute left-[3%] top-[18%] hidden h-20 w-20 animate-float-slow rounded-[1.6rem] md:block" />
        <div className="absolute bottom-[12%] left-[44%] h-12 w-12 animate-float rounded-full bg-secondary/20 blur-[1px]" />
        <div className="glass absolute right-[4%] top-[70%] hidden h-14 w-14 animate-float-slow rounded-full lg:block" style={{ animationDelay: '-3s' }} />
      </motion.div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div style={{ y: textY, opacity: textOpacity }}>
          <motion.div {...rise(0.05)} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="glass inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              {site.eyebrow}
            </span>
            {site.available && (
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-ink">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-secondary opacity-70" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                </span>
                Available for work
              </span>
            )}
          </motion.div>

          <h1 className="text-ink">
            <SplitText
              onView={false}
              delay={0.15}
              text={`Hi, I'm ${site.name}`}
              className="block font-serif text-3xl italic text-primary sm:text-[2.6rem]"
            />
            <SplitText
              onView={false}
              delay={0.35}
              stagger={0.07}
              text={site.tagline}
              accentClass="font-serif font-normal italic text-primary text-[1.12em] leading-[0.9]"
              className="mt-3 block text-[2.55rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-6xl lg:text-[4.4rem]"
            />
          </h1>

          <motion.p {...rise(0.95)} className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.intro}
          </motion.p>

          <motion.div {...rise(1.05)} className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
              <LinkButton href="#projects" size="lg" className="group">
                Explore My Work
                <ArrowRight size={17} aria-hidden className="transition-transform duration-300 group-hover:translate-x-1" />
              </LinkButton>
            </Magnetic>
            <Magnetic>
              <LinkButton href={site.resume} download={site.resumeFileName} variant="glass" size="lg" className="group">
                <Download size={17} aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5" />
                Download Resume
              </LinkButton>
            </Magnetic>
          </motion.div>

          <motion.div {...rise(1.15)} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
          style={{ y: frameY }}
          className="relative mx-auto hidden w-full max-w-[19rem] sm:max-w-sm lg:block"
        >
          {/* rotating aura */}
          <div aria-hidden className="absolute -inset-6 sm:-inset-10">
            <div
              className="h-full w-full animate-spin-slow rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  'conic-gradient(from 0deg, rgb(var(--primary) / 0.55), rgb(var(--secondary) / 0.45), rgb(var(--sky)), rgb(var(--lavender)), rgb(var(--primary) / 0.55))',
              }}
            />
          </div>
          {/* orbit ring */}
          <div aria-hidden className="absolute left-1/2 top-1/2 hidden aspect-square w-[128%] -translate-x-1/2 -translate-y-1/2 sm:block">
            <div className="relative h-full w-full animate-spin-slower rounded-full border border-dashed border-primary/25">
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary shadow-[0_0_18px_rgb(var(--secondary))]" />
              <span className="absolute bottom-[14%] left-[3%] h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_rgb(var(--primary))]" />
            </div>
          </div>

          <Tilt max={10} className="relative">
            <div className="glass spot rounded-[2.5rem] p-3">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-lavender">
                <img
                  src={site.profileImage}
                  alt={`Portrait of ${site.name}`}
                  width={600}
                  height={720}
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </Tilt>

          {heroBadges.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.12, type: 'spring', stiffness: 260, damping: 16 }}
              className={`absolute ${b.pos} z-10 hidden sm:block`}
            >
              <div
                style={{ animationDelay: b.delay }}
                className="glass glass-strong flex animate-float items-center gap-2 rounded-2xl px-3.5 py-2.5 text-xs font-semibold text-ink"
              >
                <b.icon size={16} color={b.color} aria-hidden />
                {b.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted transition hover:text-primary lg:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border-2 border-current pt-1.5 opacity-60">
          <span className="h-2 w-1 animate-scrolldot rounded-full bg-primary" />
        </span>
        Scroll
      </a>
    </section>
  )
}
