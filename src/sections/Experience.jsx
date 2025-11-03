import { motion } from 'framer-motion';
import { FaUniversity, FaBookOpen, FaMapMarkerAlt, FaCalendarAlt, FaBuilding, FaGraduationCap, FaLightbulb, FaBook } from 'react-icons/fa';
import { HiAcademicCap, HiSparkles } from 'react-icons/hi2';
import { MdSchool } from 'react-icons/md';

const educationData = [
  {
    degree: 'BE in Computer Science & Engineering',
    institution: 'P. R. Pote College of Engineering & Management, Amravati',
    location: 'Maharashtra, India',
    period: '2022 - 2026',
    icon: FaUniversity,
    iconColor: 'from-blue-400 to-blue-600',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/40',
    dotColor: 'from-blue-400 to-blue-500',
    highlightIcon: FaGraduationCap,
    highlightTitle: 'Key Courses',
    highlights: [
      'Data Structures & Algorithms, Web Development, Computer Networks',
      'Database Management, Software Engineering, Operating Systems'
    ],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'The New Era Junior Science & Arts College, Jalgaon (Jamod)',
    location: 'Maharashtra, India',
    period: '2021 - 2022',
    icon: FaBook,
    iconColor: 'from-blue-400 to-blue-600',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/40',
    dotColor: 'from-blue-400 to-blue-500',
    highlightIcon: FaLightbulb,
    highlightTitle: 'Key Highlights',
    highlights: [
      'Gained strong mathematical reasoning and scientific understanding through PCM',
      'Built a solid base for engineering with focus on logic, precision, and problem-solving'
    ],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'The New Era High School Jalgaon (Jamod)',
    location: 'Maharashtra, India',
    period: '2019 - 2020',
    icon: MdSchool,
    iconColor: 'from-blue-400 to-blue-600',
    bgGradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-500/40',
    dotColor: 'from-blue-400 to-blue-500',
    highlightIcon: HiSparkles,
    highlightTitle: 'Key Highlights',
    highlights: [
      'Strengthened core academic fundamentals and discipline',
      'Developed curiosity and a strong habit of learning'
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

export default function Education() {
  return (
    <section id="education" className="section py-12 md:py-20" aria-label="Education">
      <div className="container-lg px-4 md:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Simple Vertical Timeline Line */}
          <div className="absolute left-[26px] md:left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/40 via-blue-500/60 to-blue-500/40" />

          <motion.div 
            className="space-y-5 md:space-y-6 pl-14 md:pl-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  }}
                  className="relative"
                >
                  <div className="group relative rounded-xl overflow-hidden p-4 md:p-6 backdrop-blur-md border-2 shadow-xl transition-all duration-500"
                       style={{ 
                         background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.85) 100%)',
                         borderColor: 'rgba(56, 189, 248, 0.3)',
                         boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                       }}>
                    
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                         style={{
                           background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), transparent 70%)'
                         }} />

                    <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-5">
                      {/* Icon with Timeline Dot */}
                      <div className="flex-shrink-0 relative">
                        {/* Simple Circular Dot */}
                        <div className="absolute -left-[55px] md:-left-[59px] top-[26px] md:top-[30px] z-20">
                          {/* Outer ring */}
                          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-[3px] border-blue-500 bg-slate-900 flex items-center justify-center">
                            {/* Inner filled circle */}
                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500" />
                          </div>
                        </div>
                        
                        {/* Icon container */}
                        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border-2 border-cyan-400/30 flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-300/50 transition-all duration-500"
                             style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
                          <Icon className="w-7 h-7 md:w-8 md:h-8 text-cyan-300 group-hover:text-cyan-100 transition-colors duration-500" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Degree and Period */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-white">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 border border-cyan-400/30 backdrop-blur-sm"
                               style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' }}>
                            <FaCalendarAlt className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="text-slate-200 text-xs md:text-sm font-semibold whitespace-nowrap">{edu.period}</span>
                          </div>
                        </div>

                        {/* Institution */}
                        <div className="flex items-start gap-2.5 mb-2">
                          <FaBuilding className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-200 font-medium text-sm md:text-base leading-snug">
                            {edu.institution}
                          </p>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-4">
                          <FaMapMarkerAlt className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                          <p className="text-slate-400 text-xs md:text-sm font-medium">
                            {edu.location}
                          </p>
                        </div>

                        {/* Highlights/Courses Section */}
                        {edu.highlights && (
                          <div className="relative group/highlights">
                            <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/5 via-blue-500/10 to-purple-500/5 border border-cyan-400/20 backdrop-blur-sm group-hover/highlights:border-cyan-300/40 transition-all duration-500"
                                 style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}>
                              {/* Header with Icon */}
                              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-cyan-400/20">
                                {edu.highlightIcon && (
                                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-400/30 flex items-center justify-center">
                                    <edu.highlightIcon className="w-3.5 h-3.5 text-cyan-300" />
                                  </div>
                                )}
                                <h4 className="text-sm md:text-base font-semibold text-cyan-100">
                                  {edu.highlightTitle || 'Key Highlights'}
                                </h4>
                              </div>
                              
                              {/* Content List */}
                              <ul className="space-y-2.5">
                                {edu.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-2.5 group/item">
                                    <div className="relative flex-shrink-0 mt-1.5">
                                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400"
                                           style={{ boxShadow: '0 0 6px rgba(34, 211, 238, 0.5)' }} />
                                    </div>
                                    <span className="text-slate-300 text-xs md:text-sm leading-relaxed">
                                      {highlight}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Decorative Glow Effect */}
                    <div className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none -z-10"
                         style={{
                           background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.3), rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2))'
                         }} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
