import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/** Soft pastel light that trails the cursor across the page (desktop only). */
export function CursorGlow() {
  const reduce = useReducedMotion()
  const [enabled] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches)
  const x = useSpring(useMotionValue(-1000), { stiffness: 60, damping: 20, mass: 0.8 })
  const y = useSpring(useMotionValue(-1000), { stiffness: 60, damping: 20, mass: 0.8 })

  useEffect(() => {
    if (!enabled || reduce) return
    const on = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', on, { passive: true })
    return () => window.removeEventListener('pointermove', on)
  }, [enabled, reduce, x, y])

  if (!enabled || reduce) return null
  return (
    <motion.div
      aria-hidden
      style={{ x, y }}
      className="pointer-events-none fixed left-0 top-0 -z-[5] -ml-[300px] -mt-[300px] h-[600px] w-[600px] rounded-full opacity-70"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgb(var(--primary)/0.14),rgb(var(--secondary)/0.06)_40%,transparent_70%)]" />
    </motion.div>
  )
}
