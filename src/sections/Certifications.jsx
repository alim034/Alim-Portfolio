import { motion, useReducedMotion } from 'framer-motion';
import { FaCertificate, FaAward, FaCode, FaDatabase, FaPython, FaReact, FaJava, FaExternalLinkAlt } from 'react-icons/fa';
import { SiMysql, SiUdemy } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi2';
import { MdWeb } from 'react-icons/md';

const certificates = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL (Elite)',
    icon: FaJava,
    iconColor: 'text-orange-400',
    gradient: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/40',
    accentColor: 'bg-orange-500/20',
    tags: ['Java', 'Programming', 'Elite'],
    link: 'https://drive.google.com/file/d/1rpZ0lAyu_HmYFnt05Evt0geBTIgw4MD8/view?usp=sharing'
  },
  {
    title: 'Database Management System',
    issuer: 'NPTEL (Elite)',
    icon: FaDatabase,
    iconColor: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/40',
    accentColor: 'bg-blue-500/20',
    tags: ['DBMS', 'SQL', 'Elite'],
    link: 'https://drive.google.com/file/d/1ShGQSfE2RO2mBqBNNvBfBSyxuh_EDjOD/view?usp=sharing'
  },
  {
    title: 'The Joy of Computing Using Python',
    issuer: 'NPTEL (Elite)',
    icon: FaPython,
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-500/20 to-blue-500/20',
    borderColor: 'border-yellow-500/40',
    accentColor: 'bg-yellow-500/20',
    tags: ['Python', 'Computing', 'Elite'],
    link: 'https://drive.google.com/file/d/1pvpDYaxOPUP5Lsaf9gXOW42Xa6xUj-X6/view?usp=sharing'
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'Udemy',
    icon: MdWeb,
    iconColor: 'text-purple-400',
    gradient: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/40',
    accentColor: 'bg-purple-500/20',
    tags: ['Full Stack', 'Web Dev'],
    link: 'https://drive.google.com/file/d/1PGJsR8ocEAqpGG4CF-N2J4RwDLPtatpj/view?usp=sharing'
  },
  {
    title: 'The Complete MySQL Bootcamp',
    issuer: 'Udemy',
    icon: SiMysql,
    iconColor: 'text-sky-400',
    gradient: 'from-sky-500/20 to-blue-600/20',
    borderColor: 'border-sky-500/40',
    accentColor: 'bg-sky-500/20',
    tags: ['MySQL', 'Database'],
    link: 'https://drive.google.com/file/d/1b6A9mPbrxvA7Py0hy6AM0N84vXOO3Ama/view?usp=sharing'
  },
  {
    title: 'React JS Development',
    issuer: 'GeeksforGeeks',
    icon: FaReact,
    iconColor: 'text-cyan-400',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'border-cyan-500/40',
    accentColor: 'bg-cyan-500/20',
    tags: ['React', 'Frontend'],
    link: 'https://drive.google.com/file/d/1-9nElrVZuoH6NT1xf-n6Uz8sTFSMUapR/view?usp=sharing'
  }
];

// Build card variants with reduced-motion awareness for smoother, natural entrance
const makeCardVariants = (reduced) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0.35 : 0.55,
      ease: [0.22, 1, 0.36, 1], // smooth outCubic-like
    },
  },
});

// Container variants to stagger child card animations
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion();
  const cardVariants = makeCardVariants(prefersReducedMotion);
  const hoverTransition = {
    type: 'spring',
    stiffness: prefersReducedMotion ? 200 : 230,
    damping: prefersReducedMotion ? 24 : 20,
    mass: 0.6,
  };
  return (
    <section id="certifications" className="section py-16 md:py-24" aria-label="Certifications">
      <div className="container-lg px-4 md:px-6">
        {/* Section Title - Matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: prefersReducedMotion ? 0.45 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Certifications
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0.9 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: prefersReducedMotion ? 0 : -6, scale: prefersReducedMotion ? 1.005 : 1.015 }}
                whileTap={{ scale: prefersReducedMotion ? 0.995 : 0.99 }}
                transition={hoverTransition}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden p-6 backdrop-blur-md border-2 shadow-lg transition-all duration-700 ease-out h-full"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                       borderColor: 'rgba(56, 189, 248, 0.3)',
                       boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                     }}>
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none"
                       style={{
                         background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), transparent 70%)'
                       }} />

                  {/* Top Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cert.gradient}`} />

                  {/* Content */}
                  <div className="relative flex flex-col h-full">
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} border-2 ${cert.borderColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <Icon className={`w-7 h-7 ${cert.iconColor}`} 
                              style={{ filter: 'drop-shadow(0 0 8px currentColor)' }} />
                      </div>
                      <FaAward className="w-6 h-6 text-yellow-400 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
                               style={{ filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.6))' }} />
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-xl font-bold mb-2 leading-tight"
                        style={{
                          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}>
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 mb-4">
                      <HiAcademicCap className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <p className="text-slate-300 text-sm font-semibold">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-4">
                      {cert.tags.map((tag, idx) => (
                        <span key={idx} 
                              className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${cert.borderColor} ${cert.accentColor} text-slate-200 backdrop-blur-sm`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate Button */}
                    <a href={cert.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-400/40 text-blue-200 font-semibold text-sm hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-300/60 hover:text-white transition-all duration-500 group/btn">
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="w-3.5 h-3.5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>

                  {/* Decorative Glow Effect */}
                  <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 pointer-events-none -z-10"
                       style={{
                         background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.3))'
                       }} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}
