import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  text: string
  className?: string
  /** Classes applied to the last word (e.g. serif italic accent). */
  accentClass?: string
  delay?: number
  stagger?: number
  /** true = animate when scrolled into view, false = animate on mount */
  onView?: boolean
}

/** Word-by-word masked reveal. Screen readers get the plain sentence. */
export function SplitText({ text, className = '', accentClass, delay = 0, stagger = 0.06, onView = true }: Props) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  const to = { y: '0%', rotate: 0, opacity: 1 }
  const trigger = onView ? { whileInView: to, viewport: { once: true, margin: '-40px' } } : { animate: to }

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, i) => {
          const accent = accentClass && i === words.length - 1
          return (
            <span key={i}>
              <span className={`-mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-bottom ${accent ? 'pr-[0.08em]' : ''}`}>
                <motion.span
                  className={`inline-block ${accent ? accentClass : ''}`}
                  style={{ transformOrigin: '0% 100%' }}
                  initial={reduce ? false : { y: '110%', rotate: 5, opacity: 0 }}
                  {...trigger}
                  transition={{ duration: 0.9, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
              {i < words.length - 1 ? ' ' : ''}
            </span>
          )
        })}
      </span>
    </span>
  )
}
