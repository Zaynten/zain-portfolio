import { useEffect } from 'react'

/** Feeds pointer coordinates to the hovered `.spot` / `.lift` card as --mx / --my
 *  so its CSS radial spotlight and glowing border follow the cursor. */
export function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const on = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.('.spot, .lift') as HTMLElement | null
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', on, { passive: true })
    return () => window.removeEventListener('pointermove', on)
  }, [])
}
