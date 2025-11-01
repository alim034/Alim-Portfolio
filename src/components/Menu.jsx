import { useEffect, useState } from 'react'
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineFolder,
  HiOutlineSparkles,
  HiOutlineBriefcase,
  HiOutlineCheckBadge,
  HiOutlineTrophy,
  HiOutlineEnvelope,
} from 'react-icons/hi2'
import {
  HiHome,
  HiUser,
  HiFolder,
  HiSparkles,
  HiBriefcase,
  HiCheckBadge,
  HiTrophy,
  HiEnvelope,
} from 'react-icons/hi2'

const items = [
  { href: '#home', label: 'Home', IconOutline: HiOutlineHome, IconSolid: HiHome },
  { href: '#about', label: 'About', IconOutline: HiOutlineUser, IconSolid: HiUser },
  { href: '#projects', label: 'Projects', IconOutline: HiOutlineFolder, IconSolid: HiFolder },
  { href: '#skills', label: 'Skills', IconOutline: HiOutlineSparkles, IconSolid: HiSparkles },
  { href: '#education', label: 'Education', IconOutline: HiOutlineBriefcase, IconSolid: HiBriefcase },
  { href: '#certifications', label: 'Certifications', IconOutline: HiOutlineCheckBadge, IconSolid: HiCheckBadge },
  { href: '#achievements', label: 'Activities', IconOutline: HiOutlineTrophy, IconSolid: HiTrophy },
  { href: '#contact', label: 'Contact', IconOutline: HiOutlineEnvelope, IconSolid: HiEnvelope },
]

export function Menu() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  // Ensure page always loads at top (hero section)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Detect scroll for glass effect
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setScrolled(y > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Apply consistent glass style to header (same in light/dark)
  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) return

    const glass = 'backdrop-blur supports-[backdrop-filter]:bg-slate-900/80'

    let animationFrameId
    const updateHeaderStyles = () => {
      animationFrameId = requestAnimationFrame(() => {
        const isDesktop = window.innerWidth >= 768
        if (scrolled && isDesktop) {
          header.classList.add(...glass.split(' '))
        } else {
          header.classList.remove(...glass.split(' '))
        }
      })
    }

    window.addEventListener('resize', updateHeaderStyles)
    updateHeaderStyles()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', updateHeaderStyles)
    }
  }, [scrolled])

  // Highlight active section based on scroll position with proper section detection
  useEffect(() => {
    const ids = items.map((i) => i.href.replace('#', ''))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el) => Boolean(el))

    if (sections.length === 0) return

    const onScroll = () => {
      // If at the very top, show Home as active
      if (window.scrollY < 200) {
        setActive('#home')
        return
      }

      // Find which section is currently most visible in viewport
      const scrollPos = window.scrollY + 150 // offset for sticky header
      
      // Check sections in reverse order (bottom to top) to handle overlapping
      let found = false
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= scrollPos) {
          setActive(`#${section.id}`)
          found = true
          break
        }
      }
      
      // Default to home if no section found
      if (!found) {
        setActive('#home')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // Run once on mount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => setOpen((s) => !s)
  const close = () => setOpen(false)

  // Prevent body scroll when mobile menu open + close on Escape
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <nav role="navigation" aria-label="Primary" className="flex items-center w-full gap-3 justify-end md:justify-center">
      {/* Mobile toggle */}
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center rounded-full w-11 h-11 text-sm 
          bg-white/10 dark:bg-white/5 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/20 
          hover:ring-white/60 transition"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={toggle}
      >
        <span className="sr-only">Toggle menu</span>
        <span className="relative block w-5 h-5">
          {/* Hamburger */}
          <svg
            className={`absolute inset-0 transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
          {/* Close (X) */}
          <svg
            className={`absolute inset-0 transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </span>
      </button>

      {/* Desktop Menu (enhanced style; mobile unchanged) */}
      <ul className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4">
        {items.map((it) => {
          const isActive = active === it.href
          const { IconOutline, IconSolid } = it
          return (
            <li key={it.href}>
              <a
                href={it.href}
                aria-label={`Go to ${it.label}`}
                onClick={close}
                className={`
                  group relative flex items-center gap-2.5 rounded-full px-3 py-2 text-sm font-medium
                  transition-all duration-200 ease-in-out backdrop-blur-sm
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/80
                  ${
                    isActive
                      ? 'bg-slate-800/60 text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700 ring-1 ring-brand-500/30 shadow-sm'
                      : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                  }
                `}
              >
                <span className="relative w-5 h-5">
                  <IconOutline
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
                      isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                    }`}
                  />
                  <IconSolid
                    className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
                      isActive ? 'opacity-100 text-brand-500' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  />
                </span>
                <span>{it.label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      {/* Mobile Dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={close}
        />
        {/* Floating Panel */}
        <div
          className={`
            absolute right-4 top-16 w-64 rounded-2xl overflow-hidden ring-1 ring-brand-500/25 
            bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg shadow-2xl
            transform origin-top-right transition-all duration-200
            ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}
          role="menu"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col p-1">
            {items.map((it, idx) => {
              const isActive = active === it.href
              const { IconOutline, IconSolid } = it
              const Icon = isActive ? IconSolid : IconOutline

              return (
                <li key={it.href} style={{ transitionDelay: open ? `${idx * 25}ms` : '0ms' }}>
                  <a
                    href={it.href}
                    role="menuitem"
                    aria-label={`Go to ${it.label}`}
                    onClick={close}
                    className={`
                      group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[0.95rem] 
                      transition-colors duration-150 font-medium
                      ${
                        isActive
                          ? 'bg-black/10 dark:bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700'
                          : 'text-neutral-700 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5'
                      }
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors ${
                        isActive
                          ? 'text-brand-500'
                          : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-300'
                      }`}
                    />
                    <span>{it.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
