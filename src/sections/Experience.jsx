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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Education() {
  return (
    <section id="education" className="section py-16 md:py-24" aria-label="Education">
      <div className="container-lg px-4 md:px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Education
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Beautiful Animated Vertical Timeline Line - Enhanced for both views */}
          <div className="absolute left-[6px] md:left-[7px] top-4 bottom-4 w-[2.5px] md:w-[3px]">
            {/* Main gradient line with stronger colors */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/40 via-blue-500/70 to-blue-600/40 rounded-full" />
            
            {/* Animated flowing gradient - smoother animation */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/80 to-transparent"
                   style={{ 
                     animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                   }} />
            </div>
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 blur-[2px] bg-gradient-to-b from-blue-400/40 via-blue-500/60 to-blue-600/40 rounded-full" />
            
            {/* Outer glow layer */}
            <div className="absolute -inset-[2px] blur-[4px] bg-gradient-to-b from-blue-400/20 via-blue-500/30 to-blue-600/20 rounded-full" />
          </div>

          <div className="space-y-5 md:space-y-6">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <div className="group relative rounded-xl overflow-hidden p-5 md:p-6 backdrop-blur-md border-2 shadow-lg transition-all duration-700 ease-out"
                       style={{ 
                         background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                         borderColor: 'rgba(56, 189, 248, 0.3)',
                         boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                       }}>
                    
                    {/* Hover Gradient Overlay - Matches Skills Section */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out pointer-events-none"
                         style={{
                           background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), transparent 70%)'
                         }} />

                    <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6">
                      {/* Icon with Timeline Dot */}
                      <div className="flex-shrink-0 relative">
                        {/* Beautiful Timeline Connection Dot - Enhanced */}
                        <div className="absolute -left-[41px] md:-left-[49px] top-1/2 -translate-y-1/2 z-10">
                          {/* Outer pulsing glow - stronger */}
                          <div className="absolute inset-0 w-6 h-6 -translate-x-1 -translate-y-1">
                            <div className="absolute inset-0 rounded-full bg-blue-400/40 animate-ping" />
                            <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" style={{ animationDelay: '1s' }} />
                          </div>
                          
                          {/* Main dot with enhanced gradient */}
                          <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-blue-300 via-blue-500 to-cyan-500 border-[3px] border-slate-900 shadow-lg group-hover:scale-110 transition-transform duration-300"
                               style={{ boxShadow: '0 0 25px rgba(59, 130, 246, 1), 0 0 50px rgba(59, 130, 246, 0.7), 0 0 75px rgba(59, 130, 246, 0.4), inset 0 0 12px rgba(191, 219, 254, 0.6)' }} />
                          
                          {/* Inner highlight - brighter */}
                          <div className="absolute inset-[5px] rounded-full bg-blue-200/50" />
                        </div>
                        
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600/30 via-blue-500/20 to-indigo-600/30 border-2 border-blue-400/50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-blue-500/50`}>
                          <Icon className={`w-7 h-7 md:w-8 md:h-8 text-blue-300 group-hover:text-blue-200 transition-colors duration-500`} 
                                style={{ filter: 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.9))' }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Degree and Period */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <h3 className="text-xl md:text-2xl font-bold"
                              style={{
                                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                              }}>
                            {edu.degree}
                          </h3>
                          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${edu.bgGradient} border ${edu.borderColor} backdrop-blur-sm`}>
                            <FaCalendarAlt className="w-3.5 h-3.5 text-blue-400" />
                            <span className="text-slate-200 text-sm font-semibold whitespace-nowrap">{edu.period}</span>
                          </div>
                        </div>

                        {/* Institution */}
                        <div className="flex items-start gap-2.5 mb-2">
                          <FaBuilding className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-100 font-semibold text-sm md:text-base">
                            {edu.institution}
                          </p>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-4">
                          <FaMapMarkerAlt className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                          <p className="text-slate-300 text-sm font-medium">
                            {edu.location}
                          </p>
                        </div>

                        {/* Highlights/Courses Section - Enhanced */}
                        {edu.highlights && (
                          <div className="relative group/highlights">
                            <div className={`p-5 rounded-xl bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-indigo-600/20 border-2 border-blue-400/40 backdrop-blur-sm shadow-lg transition-all duration-700 hover:shadow-2xl hover:border-blue-300/70`}
                                 style={{
                                   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(96, 165, 250, 0.1)',
                                 }}>
                              {/* Header with Icon */}
                              <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-blue-400/30 group-hover/highlights:border-blue-300/50 transition-colors duration-500">
                                {edu.highlightIcon && (
                                  <div className="w-8 h-8 rounded-lg bg-blue-500/30 border border-blue-400/40 flex items-center justify-center group-hover/highlights:bg-blue-400/30 group-hover/highlights:border-blue-300/60 transition-all duration-500">
                                    <edu.highlightIcon className="w-4 h-4 text-blue-300 group-hover/highlights:text-blue-200 transition-colors duration-500" />
                                  </div>
                                )}
                                <h4 className="text-base font-bold bg-gradient-to-r from-blue-200 via-blue-300 to-cyan-300 bg-clip-text text-transparent group-hover/highlights:from-blue-100 group-hover/highlights:via-blue-200 group-hover/highlights:to-cyan-200 transition-all duration-500">
                                  {edu.highlightTitle || 'Key Highlights'}
                                </h4>
                              </div>
                              
                              {/* Content List */}
                              <ul className="space-y-3">
                                {edu.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start gap-3 group/item">
                                    <div className="relative flex-shrink-0 mt-1.5">
                                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-300 via-blue-400 to-cyan-400 shadow-sm shadow-blue-400/60 group-hover/item:scale-125 group-hover/item:shadow-blue-300/80 transition-all duration-300" />
                                      <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-300/40 animate-ping" />
                                    </div>
                                    <span className="text-slate-100 text-sm md:text-base leading-relaxed font-medium group-hover/item:text-blue-50 transition-colors duration-300">
                                      {highlight}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Beautiful outer glow on hover */}
                            <div className="absolute -inset-[3px] rounded-xl opacity-0 group-hover/highlights:opacity-100 blur-2xl transition-all duration-700 -z-10"
                                 style={{
                                   background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.3) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(139, 92, 246, 0.25) 100%)'
                                 }} />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Decorative Glow Effect - Matches Skills Section */}
                    <div className="absolute -inset-[2px] rounded-xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 pointer-events-none -z-10"
                         style={{
                           background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.3))'
                         }} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
