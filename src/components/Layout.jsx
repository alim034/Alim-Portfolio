import { lazy, Suspense } from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Menu } from './Menu.jsx'

const ParticlesBg = lazy(() => import('./ParticlesBg.jsx'))

export function Layout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-50 transition-all">
        <nav className="container-lg flex items-center justify-center py-4">
          <Menu />
        </nav>
      </header>

      <main id="home" className="relative flex-1">
        <Suspense fallback={null}>
          <ParticlesBg />
        </Suspense>
        {children}
      </main>

      <footer className="mt-16">
        {/* Thin gradient divider for separation */}
        <div className="h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-purple-500/0" />
        <div className="container-lg py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_12px_rgba(56,189,248,0.15)]">
              Mohammad Alim
            </h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/mohammad-alim-7a8a52289/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="text-gray-600 dark:text-slate-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/alim034"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.instagram.com/_justalim__?igsh=bmtpdG9zcGd2ZjBw"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="text-gray-600 dark:text-slate-300 hover:text-pink-400 dark:hover:text-pink-400 transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
              <span className="hidden md:block h-5 w-px bg-white/10" />
              <p className="text-sm text-slate-400">© 2025 Mohammad Alim</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
