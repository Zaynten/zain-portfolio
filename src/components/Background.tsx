import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

/** Fixed pastel gradient blobs that drift and parallax with scroll — ties every section together. */
export function Background() {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -260])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 320])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -180])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{ opacity: 'var(--blob-opacity)' }}>
      <motion.div style={{ y: y1 }} className="absolute -left-40 -top-32">
        <div className="h-[520px] w-[520px] animate-drift rounded-full bg-lavender blur-[110px]" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute -right-32 top-[28%]">
        <div className="h-[460px] w-[460px] animate-drift rounded-full bg-sky blur-[110px]" style={{ animationDelay: '-5s' }} />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute -left-24 top-[62%]">
        <div className="h-[440px] w-[440px] animate-drift rounded-full bg-mint blur-[110px]" style={{ animationDelay: '-9s' }} />
      </motion.div>
    </div>
  )
}
