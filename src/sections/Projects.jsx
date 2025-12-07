import { projects as allProjects } from '../data/projects.js'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="section py-16 md:py-24" aria-label="Projects">
      <div className="container-lg px-4 md:px-6">
        {/* Section Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {allProjects.map((p, idx) => (
            <motion.article 
              key={p.id} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: false }}
              transition={{ 
                duration: 0.7, 
                ease: [0.25, 0.1, 0.25, 1],
                delay: idx * 0.15
              }}
            >
              {/* Code Editor Style Card */}
              <div
  className="rounded-lg p-[2px] 
  bg-gradient-to-br from-cyan-500/40 via-purple-600/50 to-blue-600/40
  shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(147,51,234,0.55)]
  backdrop-blur-xl transition-all duration-500">

  <div className="rounded-[7px] overflow-hidden 
    bg-gradient-to-br from-[#0c0f1c]/95 via-[#0b0d18]/98 to-[#05060a]/95 
    backdrop-blur-xl">
                  {/* Code Editor Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/50 border-b border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="flex space-x-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{p.title.split(' ')[0]}.js</span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6 space-y-5 relative z-10">
                    {/* Project Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                      {p.title}
                    </h3>

                    {/* Tech Stack */}
                    <div className="space-y-2.5">
                      <div className="flex items-start gap-2 font-mono text-base md:text-lg">
                        <span className="text-purple-400 font-semibold">tools:</span>
                        <span className="text-slate-400">[</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-8">
                        {p.tech?.map((t, idx) => (
                          <span key={t} className="font-mono text-sm md:text-base">
                            <span className="text-green-300 font-medium">'{t}'</span>
                            {idx < p.tech.length - 1 && <span className="text-slate-400">,</span>}
                          </span>
                        ))}
                      </div>
                      <div className="font-mono text-base md:text-lg">
                        <span className="text-slate-400">]</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2.5">
                      <div className="font-mono text-base md:text-lg">
                        <span className="text-purple-400 font-semibold">description:</span>
                      </div>
                      <p className="text-cyan-100 text-sm md:text-base leading-relaxed font-light pl-4 border-l-2 border-cyan-500/40">
                        {p.description}
                      </p>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <a 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                                 bg-blue-500/10 border border-blue-500/30 
                                 text-blue-300 font-semibold text-sm
                                 hover:bg-blue-500/20 hover:border-blue-400/50
                                 transition-all duration-200" 
                        href={p.live} 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                      <a 
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                                 bg-purple-500/10 border border-purple-500/30 
                                 text-purple-300 font-semibold text-sm
                                 hover:bg-purple-500/20 hover:border-purple-400/50
                                 transition-all duration-200" 
                        href={p.github} 
                        target="_blank" 
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
