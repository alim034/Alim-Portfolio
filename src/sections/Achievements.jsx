import { motion, useReducedMotion } from 'framer-motion';
import { FaCrown, FaTrophy, FaCode, FaUsers, FaRobot, FaMedal } from 'react-icons/fa';
import { SiAndroid } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi2';

const activitiesData = {
  leadership: [
    {
      role: 'President',
      organization: 'Coding Club, PRPCEM',
      description: 'Spearheaded campus-wide tech initiatives, hackathons, and skill-building programs.'
    },
    {
      role: 'Android Development Co-Lead',
      organization: 'Google Developer Groups (On-Campus), PRPCEM',
      description: 'Mentored peers and contributed to Android-focused learning and community events.'
    }
  ],
  achievements: [
    {
      title: "Codethon'24",
      organizer: 'PRPCEM',
      status: 'Finalist'
    },
    {
      title: 'Robothon',
      organizer: 'Sant Gadge Baba Amravati University',
      status: 'Finalist'
    }
  ],
  participation: [
    {
      title: "Hackathon'25",
      organizer: 'PRPCEM & Coding Club'
    },
    {
      title: "Codethon'25",
      organizer: 'PRPCEM'
    },
    {
      title: 'Talent Battle',
      organizer: 'Coding Puzzle Competition, PRPCEM'
    }
  ]
};

// Reduced-motion aware variants for natural entrance
const makeCardVariants = (reduced) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 22, scale: reduced ? 1 : 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: reduced ? 0.35 : 0.6, ease: [0.22, 1, 0.36, 1] },
  },
});

// Stagger container for the three cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export default function Achievements() {
  const prefersReducedMotion = useReducedMotion();
  const cardVariants = makeCardVariants(prefersReducedMotion);
  return (
    <section id="achievements" className="section py-16 md:py-24" aria-label="Activities">
      <div className="container-lg px-4 md:px-6">
        {/* Section Title - Matching other sections */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: prefersReducedMotion ? 0.45 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Activities
          </h2>
          <motion.div
            initial={{ scaleX: 0, opacity: 0.9 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="origin-left h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
          />
        </motion.div>

        {/* Activities - Three Code Editor Style Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch"
        >
          {/* Card 1: Leadership */}
          <motion.div
            variants={cardVariants}
            className="rounded-lg p-[2px] bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-blue-500/50 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 h-full"
          >
            <div className="bg-slate-900 rounded-[7px] overflow-hidden h-full flex flex-col">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/50 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Activities.js</span>
                </div>
              </div>
              <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed flex-1">
                <div className="mb-3">
                  <span className="text-pink-400 font-semibold">const</span>
                  <span className="text-cyan-300"> Leadership</span>
                  <span className="text-slate-400"> = {'{'}</span>
                </div>
                <div className="space-y-4 pl-4">
                  {activitiesData.leadership.map((item, index) => (
                    <div key={index} className="space-y-1.5">
                      <div>
                        <span className="text-purple-400 font-semibold">role: </span>
                        <span className="text-green-300">'{item.role}'</span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">organization: </span>
                        <span className="text-green-300">'{item.organization}'</span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">description: </span>
                        <span className="text-cyan-100">'{item.description}'</span>
                        {index < activitiesData.leadership.length - 1 && <span className="text-slate-400">,</span>}
                      </div>
                      {index < activitiesData.leadership.length - 1 && (
                        <div className="text-slate-400 mt-2">{'}'}, {'{'}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-slate-400 mt-2">{'}'}</div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Finalist */}
          <motion.div
            variants={cardVariants}
            className="rounded-lg p-[2px] bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-blue-500/50 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 h-full"
          >
            <div className="bg-slate-900 rounded-[7px] overflow-hidden h-full flex flex-col">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/50 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Activities.js</span>
                </div>
              </div>
              <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed flex-1">
                <div className="mb-3">
                  <span className="text-pink-400 font-semibold">const</span>
                  <span className="text-cyan-300"> Finalist</span>
                  <span className="text-slate-400"> = {'{'}</span>
                </div>
                <div className="space-y-4 pl-4">
                  {activitiesData.achievements.map((item, index) => (
                    <div key={index} className="space-y-1.5">
                      <div>
                        <span className="text-purple-400 font-semibold">event: </span>
                        <span className="text-green-300">'{item.title}'</span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">organizer: </span>
                        <span className="text-green-300">'{item.organizer}'</span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">achievement: </span>
                        <span className="text-yellow-300">'{item.status}'</span>
                        {index < activitiesData.achievements.length - 1 && <span className="text-slate-400">,</span>}
                      </div>
                      {index < activitiesData.achievements.length - 1 && (
                        <div className="text-slate-400 mt-2">{'}'}, {'{'}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-slate-400 mt-2">{'}'}</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Participation */}
          <motion.div
            variants={cardVariants}
            className="rounded-lg p-[2px] bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-blue-500/50 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 h-full"
          >
            <div className="bg-slate-900 rounded-[7px] overflow-hidden h-full flex flex-col">
              {/* Code Editor Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/50 border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">Activities.js</span>
                </div>
              </div>
              <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed flex-1">
                <div className="mb-3">
                  <span className="text-pink-400 font-semibold">const</span>
                  <span className="text-cyan-300"> Participation</span>
                  <span className="text-slate-400"> = {'{'}</span>
                </div>
                <div className="space-y-4 pl-4">
                  {activitiesData.participation.map((item, index) => (
                    <div key={index} className="space-y-1.5">
                      <div>
                        <span className="text-purple-400 font-semibold">event: </span>
                        <span className="text-green-300">'{item.title}'</span>
                        <span className="text-slate-400">,</span>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">organizer: </span>
                        <span className="text-green-300">'{item.organizer}'</span>
                        {index < activitiesData.participation.length - 1 && <span className="text-slate-400">,</span>}
                      </div>
                      {index < activitiesData.participation.length - 1 && (
                        <div className="text-slate-400 mt-2">{'}'}, {'{'}</div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-slate-400 mt-2">{'}'}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
