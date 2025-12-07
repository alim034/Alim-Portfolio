import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FiDownload, FiUserPlus } from 'react-icons/fi'

export default function Hero() {
  const roles = [
    'MERN Developer',
    'Innovative Problem Solver',
    'Backend Developer',
    'Tech Community Contributor',
  ]
  const [idx, setIdx] = useState(0)

  // Prefer external resume link via env; fallback to local file
  const resumeUrl = import.meta.env.VITE_RESUME_URL || 'https://drive.google.com/file/d/1_5EyNIl5vTnmFjsZGv7rfw8BC4jrDDye/view?usp=sharing'
  const isExternalResume = /^https?:\/\//.test(resumeUrl)

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % roles.length), 1600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <section className="section py-16 md:py-24" aria-label="Hero">
      <div className="container-lg grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* LEFT COLUMN (TEXT FIRST ON MOBILE) */}
        <div className="flex flex-col order-1 md:order-1 space-y-6 md:space-y-8 text-center md:text-left">
          {/* --- Name and Heading --- */}
          <h1 className="leading-tight">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider 
                           bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
              Hello, I'm
            </span>
            <span className="block mt-2 md:mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-serif tracking-tight 
                           bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
              Mohammad Alim
            </span>
          </h1>

          {/* --- Image (Moves Up in Mobile) --- */}
          <div className="md:hidden flex justify-center my-6">
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="group relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden
                         border-2 border-white/20 shadow-xl shadow-blue-500/20
                         cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src="/assets/me.jpg"
                alt="Mohammad Alim Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-full
                           filter grayscale brightness-[.8]
                           group-hover:filter-none
                           transition-all duration-500 ease-in-out
                           transform group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = 'https://placehold.co/400x400/020617/FFF?text=MA'
                  e.target.alt = 'Image failed to load'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full pointer-events-none" />
            </motion.div>
          </div>

          {/* --- Role Animation --- */}
          <div className="relative h-12 md:h-14 flex justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center md:justify-start"
              >
                <p className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight 
                             bg-gradient-to-r from-cyan-300 via-sky-400 to-purple-400 bg-clip-text text-transparent 
                             drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">
                  {roles[idx]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- Social Icons --- */}
          <div className="flex justify-center md:justify-start gap-3 pt-4">
            {[
              { href: 'https://www.linkedin.com/in/mohammad-alim-7a8a52289/', label: 'LinkedIn', Icon: FaLinkedin },
              { href: 'https://github.com/alim034', label: 'GitHub', Icon: FaGithub },
              { href: 'https://leetcode.com/u/mohammad_alim/', label: 'LeetCode', Icon: SiLeetcode },
              { href: 'https://www.instagram.com/_justalim__?igsh=bmtpdG9zcGd2ZjBw', label: 'Instagram', Icon: FaInstagram },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-300 
                           bg-slate-800/40 border border-white/10 backdrop-blur-sm shadow-lg shadow-black/10
                           hover:text-white hover:-translate-y-1 hover:shadow-blue-500/20
                           hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40
                           transition-all duration-200 ease-in-out"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* --- Buttons --- */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="group relative flex items-center justify-center gap-2 rounded-full font-bold text-slate-200
                         text-base px-6 py-3
                         bg-gradient-to-r from-slate-800/40 to-slate-700/30
                         border border-slate-400/40
                         shadow-lg shadow-black/20
                         backdrop-blur-sm
                         transition-all duration-300 ease-out
                         hover:text-white hover:border-cyan-300/60 hover:shadow-xl hover:shadow-cyan-500/25
                         focus:outline-none focus:ring-4 focus:ring-cyan-400/40
                         overflow-hidden"
            >
              <FiUserPlus className="w-5 h-5" strokeWidth={2.5} />
              <span>Contact Me</span>
              <span
                className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent
                           transition-transform duration-700 ease-out
                           transform -skew-x-12 group-hover:translate-x-[200%]"
              />
              {/* subtle glow */}
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.12),transparent_55%)]" />
            </motion.a>

            <motion.a
              href={resumeUrl}
              target={isExternalResume ? '_blank' : undefined}
              rel={isExternalResume ? 'noreferrer noopener' : undefined}
              download={isExternalResume ? undefined : 'Mohammad_Alim_Resume.pdf'}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="group relative flex items-center justify-center gap-2 rounded-full font-bold text-white
                         text-base px-6 py-3
                         bg-[length:200%_200%] bg-[position:0%_50%]
                         border border-white/10
                         shadow-lg shadow-black/20
                         backdrop-blur-sm
                         transition-all duration-300 ease-out
                         group-hover:bg-[position:100%_50%] hover:shadow-xl hover:shadow-purple-500/30
                         focus:outline-none focus:ring-4 focus:ring-blue-400/50
                         overflow-hidden"
                style={{ backgroundImage: 'linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #ec4899 100%)' }}
            >
              <FiDownload className="w-5 h-5" strokeWidth={2.5} />
              <span>Get Resume</span>
              <span
                className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent
                           transition-transform duration-700 ease-out
                           transform -skew-x-12 group-hover:translate-x-[200%]"
              />
              {/* subtle glow */}
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.2),transparent_55%)]" />
            </motion.a>
          </div>
        </div>

        {/* RIGHT COLUMN (IMAGE ONLY FOR DESKTOP) */}
        <div className="hidden md:flex justify-center items-center order-2 md:order-2">
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="group relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden
                       border-[3px] border-white/20 shadow-2xl shadow-blue-500/20
                       cursor-pointer
                       ring-4 ring-blue-500/10 ring-offset-4 ring-offset-transparent"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="/assets/me.jpg"
              alt="Mohammad Alim Profile"
              className="absolute inset-0 w-full h-full object-cover rounded-full
                         filter grayscale brightness-[.8]
                         group-hover:filter-none
                         transition-all duration-500 ease-in-out
                         transform group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://placehold.co/400x400/020617/FFF?text=MA'
                e.target.alt = 'Image failed to load'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
