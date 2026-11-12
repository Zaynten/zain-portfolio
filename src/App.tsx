import { Background } from './components/Background'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { CursorGlow } from './components/CursorGlow'
import { Marquee } from './components/Marquee'
import { useSpotlight } from './hooks/useSpotlight'
import { useTheme } from './hooks/useTheme'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Pricing } from './sections/Pricing'
import { Projects } from './sections/Projects'
import { Services } from './sections/Services'
import { Skills } from './sections/Skills'

export default function App() {
  const { theme, toggle } = useTheme()
  useSpotlight()
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Background />
      <CursorGlow />
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
