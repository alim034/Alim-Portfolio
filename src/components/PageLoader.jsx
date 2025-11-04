import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    // Track mobile viewport to tone down animations for small screens
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.('change', update);

    return () => {
      clearTimeout(timer);
      mq.removeEventListener?.('change', update);
    };
  }, []);

  // Safer window dimensions for particles
  const viewportW = typeof window !== 'undefined' ? window.innerWidth : 360;
  const viewportH = typeof window !== 'undefined' ? window.innerHeight : 640;

  // Reduce effects on mobile or when user prefers reduced motion
  const lightMode = isMobile || prefersReducedMotion;
  const particleCount = lightMode ? 8 : 20;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            opacity: { duration: 0.4, ease: "easeOut" },
            scale: { duration: 0.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900 overflow-hidden"
        >
          {/* Background for overlay (mobile gets lighter, desktop richer) */}
          <div className="absolute inset-0 overflow-hidden">
            {isMobile ? (
              <>
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.45, 0.3] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-sky-500/5 to-violet-500/10 blur-2xl"
                />
                <motion.div
                  animate={{ scale: [1.05, 1, 1.05], opacity: [0.25, 0.4, 0.25] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 blur-2xl"
                />
              </>
            ) : (
              <>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/15 md:from-cyan-500/20 via-sky-500/8 md:via-sky-500/10 to-violet-500/15 md:to-violet-500/20 blur-3xl transform-gpu"
                  style={{ willChange: 'transform' }}
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-violet-500/15 md:from-violet-500/20 via-fuchsia-500/8 md:via-fuchsia-500/10 to-cyan-500/15 md:to-cyan-500/20 blur-3xl transform-gpu"
                  style={{ willChange: 'transform' }}
                />
              </>
            )}
          </div>

          {/* Main loader content */}
          {!isMobile && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Animated rings */}
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              {/* Outer ring */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: lightMode ? 4 : 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: lightMode ? 3 : 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute inset-0 rounded-full border-3 md:border-4 border-transparent border-t-cyan-400 border-r-sky-400 will-change-transform transform-gpu"
              />
              
              {/* Middle ring */}
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  rotate: { duration: lightMode ? 3.2 : 2.5, repeat: Infinity, ease: "linear" },
                  scale: { duration: lightMode ? 3 : 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                }}
                className="absolute inset-2 rounded-full border-3 md:border-4 border-transparent border-b-violet-400 border-l-fuchsia-400 will-change-transform transform-gpu"
              />
              
              {/* Inner ring */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  rotate: { duration: lightMode ? 2.8 : 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: lightMode ? 3 : 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                }}
                className="absolute inset-4 rounded-full border-3 md:border-4 border-transparent border-t-sky-400 border-r-cyan-400 will-change-transform transform-gpu"
              />

              {/* Center glow */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: lightMode ? 2.8 : 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 m-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400 via-sky-400 to-violet-400 blur-lg md:blur-xl"
              />
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-3"
            >
              <motion.h2
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
              >
                Mohammad Alim
              </motion.h2>
              
              {/* Animated dots */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400 font-medium">Loading</span>
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400"
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="w-64 h-1 bg-slate-700/50 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: lightMode ? 2.6 : 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              />
            </motion.div>
          </motion.div>
          )}

          {/* Mobile-specific loader content (attractive & smooth) */}
          {isMobile && (
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative z-10 flex flex-col items-center gap-8"
            >
              {/* Beautiful orbital animation with floating orbs */}
              <div className="relative w-32 h-32">
                {/* Central pulsing core with logo */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(168,85,247,0.4) 70%, transparent 100%)',
                    filter: 'blur(8px)'
                  }}
                />
                
                {/* Logo in center */}
                <div className="absolute inset-0 m-auto w-10 h-10 flex items-center justify-center">
                  <img 
                    src="/assets/main-logo.svg" 
                    alt="Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Orbiting particles */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.4
                    }}
                    className="absolute inset-0"
                    style={{ transformOrigin: 'center' }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                      className="absolute top-0 left-1/2 w-3 h-3 rounded-full -ml-1.5"
                      style={{
                        background: i === 0 
                          ? 'linear-gradient(135deg, #22d3ee, #3b82f6)'
                          : i === 1
                          ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
                          : 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                        boxShadow: `0 0 20px ${i === 0 ? 'rgba(34,211,238,0.8)' : i === 1 ? 'rgba(59,130,246,0.8)' : 'rgba(168,85,247,0.8)'}`
                      }}
                    />
                  </motion.div>
                ))}

                {/* Smooth rotating halo */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full opacity-40"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(59,130,246,0.6) 25%, transparent 50%, rgba(168,85,247,0.6) 75%, transparent 100%)',
                    filter: 'blur(2px)'
                  }}
                />
              </div>

              {/* Elegant name display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.h2
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent tracking-tight"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Mohammad Alim
                </motion.h2>
                
                {/* Stylish loading indicator */}
                <div className="flex items-center gap-2">
                  <span className="text-slate-300 text-sm font-medium tracking-wide">Loading</span>
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut"
                        }}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6, #a855f7)',
                          boxShadow: '0 0 8px rgba(59,130,246,0.6)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sleek progress bar */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.8 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                className="relative w-64 h-1.5 bg-slate-800/50 rounded-full overflow-hidden backdrop-blur-sm"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 w-1/2 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.8), rgba(168,85,247,0.8), transparent)',
                    boxShadow: '0 0 15px rgba(59,130,246,0.5)'
                  }}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Floating particles */}
          {!isMobile && [...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * viewportW,
                y: Math.random() * viewportH,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: [null, Math.random() * viewportH],
                x: [null, Math.random() * viewportW],
                scale: [0, Math.random() * (lightMode ? 0.8 : 1) + 0.4, 0],
                opacity: [0, lightMode ? 0.45 : 0.6, 0],
              }}
              transition={{
                duration: (lightMode ? 3.5 : 2) + Math.random() * (lightMode ? 2.5 : 3),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 rounded-full bg-cyan-400 transform-gpu"
              style={{
                boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
