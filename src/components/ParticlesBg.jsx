import { motion } from 'framer-motion'

// Deep navy gradient with animated glow blobs, soft particles, subtle grid and outline shapes
export default function ParticlesBg() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />

      {/* Primary animated glow (blue) */}
      <motion.div
        animate={{ x: ['-25%', '25%', '-25%'], y: ['-15%', '15%', '-15%'], scale: [1, 1.3, 1], rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.3) 40%, rgba(59,130,246,0.1) 70%, transparent 100%)',
          filter: 'blur(60px)'
        }}
      />

      {/* Secondary animated glow (purple) */}
      <motion.div
        animate={{ x: ['25%', '-25%', '25%'], y: ['15%', '-15%', '15%'], scale: [1.2, 0.8, 1.2], rotate: [360, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-20%] right-[-20%] w-[400px] h-[400px] rounded-full opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.7) 0%, rgba(139,92,246,0.4) 40%, rgba(139,92,246,0.1) 70%, transparent 100%)',
          filter: 'blur(50px)'
        }}
      />

      {/* Teal glow mover */}
      <motion.div
        animate={{ x: [0, 200, -150, 0], y: [0, -100, 150, 0], scale: [1, 1.5, 0.7, 1], opacity: [0.3, 0.6, 0.1, 0.3], rotate: [0, 180, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[20%] left-[30%] w-80 h-80 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(6,182,212,0.5) 0%, rgba(6,182,212,0.2) 50%, rgba(6,182,212,0.05) 80%, transparent 100%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Purple glow mover */}
      <motion.div
        animate={{ x: [0, -150, 100, 0], y: [0, 120, -80, 0], scale: [0.8, 1.6, 0.9, 0.8], opacity: [0.2, 0.5, 0.1, 0.2], rotate: [360, 180, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-[25%] right-[25%] w-72 h-72 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(168,85,247,0.3) 50%, rgba(168,85,247,0.1) 80%, transparent 100%)',
          filter: 'blur(45px)'
        }}
      />

      {/* Soft floating particles */}
      {Array.from({ length: 15 }).map((_, i) => {
        const randomDelay = Math.random() * 10
        const randomDuration = 10 + Math.random() * 15
        const randomSize = 30 + Math.random() * 60
        return (
          <motion.div
            key={`particle-${i}`}
            animate={{
              x: [Math.random() * 300 - 150, Math.random() * 300 - 150, Math.random() * 300 - 150, Math.random() * 300 - 150],
              y: [Math.random() * 300 - 150, Math.random() * 300 - 150, Math.random() * 300 - 150, Math.random() * 300 - 150],
              scale: [0.3, 2, 1, 0.3],
              opacity: [0, 0.8, 0.4, 0],
              rotate: [0, 360, 180, 0]
            }}
            transition={{ duration: randomDuration, delay: randomDelay, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 6}%`,
              top: `${5 + i * 7}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              background:
                i % 4 === 0
                  ? 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.2) 50%, transparent 80%)'
                  : i % 4 === 1
                  ? 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0.2) 50%, transparent 80%)'
                  : i % 4 === 2
                  ? 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(6,182,212,0.2) 50%, transparent 80%)'
                  : 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, rgba(168,85,247,0.2) 50%, transparent 80%)',
              filter: 'blur(3px)'
            }}
          />
        )
      })}

      {/* Subtle grid overlay */}
      <motion.div
        animate={{ opacity: [0.01, 0.15, 0.05, 0.01], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px),\n            linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Outline shapes for depth */}
      <motion.div
        animate={{ rotate: [0, 360], x: [0, 100, -50, 0], y: [0, -50, 100, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[10%] left-[10%] w-20 h-20 border-2 border-blue-400/20 rounded-lg"
        style={{ filter: 'blur(1px)' }}
      />
      <motion.div
        animate={{ rotate: [360, 0], x: [0, -80, 120, 0], y: [0, 80, -60, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[15%] right-[15%] w-16 h-16 border-2 border-purple-400/20 rounded-full"
        style={{ filter: 'blur(1px)' }}
      />

      {/* Soft edge vignettes */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20" />
    </div>
  )
}
