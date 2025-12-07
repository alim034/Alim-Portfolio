import React from 'react';
import { motion } from 'framer-motion';
// Corrected icon imports
import {
    FaJava, FaJs, FaHtml5, FaCss3Alt, FaPython,
    FaReact, FaNode, FaGitAlt, FaGithub,
    FaLightbulb, FaClock, FaBrain, FaRocket, FaCode
} from 'react-icons/fa';
import {
    SiTailwindcss, SiFramer, SiVite, SiExpress, SiSocketdotio,
    SiMysql, SiMongodb, SiPostman, SiIntellijidea
} from 'react-icons/si';


// --- Skill Data ---
const groups = [
    {
        title: 'Programming Languages',
        items: [
            { name: 'Java', icon: FaJava, color: 'text-orange-400' },
            { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
            { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
            { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
            { name: 'Python', icon: FaPython, color: 'text-sky-400' },
        ]
    },
    {
        title: 'Libraries & Frameworks',
        items: [
            { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
            { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
            { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-400' },
            { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
        ]
    },
    {
        title: 'Backend',
        items: [
            { name: 'Node.js', icon: FaNode, color: 'text-green-500' },
            { name: 'Express.js', icon: SiExpress, color: 'text-gray-400' },
            { name: 'Socket.io', icon: SiSocketdotio, color: 'text-gray-200' },
        ]
    },
    {
        title: 'Database',
        items: [
            { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
        ]
    },
    {
        title: 'Developer Tools',
        items: [
            { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
            { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
            { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
            { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: 'text-purple-400' },
            { name: 'VS Code', icon: FaCode, color: 'text-blue-400' },
        ]
    },
    {
        title: 'Professional Skills',
        items: [
            { name: 'Quick Learning', icon: FaRocket, color: 'text-green-400' },
            { name: 'Problem Solving', icon: FaBrain, color: 'text-pink-400' },
            { name: 'Leadership', icon: FaLightbulb, color: 'text-yellow-400' },
            { name: 'Time Management', icon: FaClock, color: 'text-cyan-400' },
        ]
    },
];

// --- Animation Variants ---
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.12,
            ease: [0.25, 0.1, 0.25, 1]
        },
    },
};

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

export default function Skills() {
    return (
        <section id="skills" className="section py-16 md:py-24" aria-label="Skills">
            <div className="container-lg px-4 md:px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
                        Skills
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full" />
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                {groups.map((g) => (
                    <motion.div
                        key={g.title}
                        variants={cardVariants}
                        whileHover={{ y: -8, scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="group relative rounded-3xl overflow-hidden p-7 md:p-8
                        backdrop-blur-xl border transition-all duration-600 ease-out
                        shadow-[0_0_32px_rgba(0,0,0,0.35)]
                        hover:shadow-[0_0_55px_rgba(56,189,248,0.45)]"
                        style={{
                            background:
                            'linear-gradient(140deg, rgba(10,16,32,0.9) 0%, rgba(16,25,46,0.9) 45%, rgba(9,14,27,0.92) 100%)',
                            borderColor: 'rgba(56,189,248,0.28)',
                            boxShadow:
                            'inset 0 0 20px rgba(56,189,248,0.08), 0 0 40px rgba(0,0,0,0.65)',
                        }}

                        >
                        {/* Animated Background Gradient Overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle at 40% 0%, rgba(6, 182, 212, 0.16), rgba(59, 130, 246, 0.12), transparent 75%)'
                        }} />

                        {/* Ambient glow layer */}
                        <div className="absolute inset-0 opacity-70 blur-3xl pointer-events-none"
                             style={{
                               background: 'radial-gradient(circle at 30% 30%, rgba(6, 182, 212, 0.12), transparent 45%), radial-gradient(circle at 75% 20%, rgba(59, 130, 246, 0.1), transparent 50%), radial-gradient(circle at 50% 85%, rgba(147, 51, 234, 0.12), transparent 55%)'
                             }} />

                                                {/* Border glow overlay */}
                                                <div className="absolute inset-0 rounded-3xl border border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none"
                                                         style={{ boxShadow: '0 0 22px rgba(56,189,248,0.35)' }} />

                            
                        {/* Category Title */}
                            <h3 className="relative text-xl md:text-2xl font-bold tracking-wide mb-6 md:mb-7 transition-all duration-500"
                                style={{
                                    background: 'linear-gradient(135deg, #f0f9ff 0%, #dbeafe 50%, #bfdbfe 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}>
                                {g.title}
                            </h3>

                        {/* Skills Items Container */}
                        <div className={
                                g.title === 'Professional Skills'
                                ? "relative grid grid-cols-2 gap-x-4 gap-y-3"
                                : "relative flex flex-wrap gap-3"
                        }>
                        {g.items.map((item) => {
                                const Icon = item.icon;
                                const [isHovered, setIsHovered] = React.useState(false);
                                    return (
                                        <motion.div
                                            key={item.name}
                                            whileHover={{ scale: 1.05, y: -3 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                        className={`group/item relative flex items-center gap-2.5 px-4 py-3 rounded-xl backdrop-blur-xl border transition-all duration-400 ease-out cursor-default`}
                        style={{
                            background: isHovered
                            ? 'linear-gradient(135deg, rgba(6,182,212,0.28) 0%, rgba(59,130,246,0.32) 50%, rgba(147,51,234,0.28) 100%)'
                            : 'linear-gradient(135deg, rgba(13,20,36,0.65) 0%, rgba(24,32,52,0.6) 50%, rgba(13,20,36,0.65) 100%)',
                            borderColor: isHovered ? 'rgba(6,182,212,0.6)' : 'rgba(148,163,184,0.28)',
                            boxShadow: isHovered
                            ? '0 12px 32px rgba(6,182,212,0.22), 0 0 18px rgba(6,182,212,0.28)'
                            : 'inset 0 0 10px rgba(0,0,0,0.32)',
                        }}
                >
                <Icon
                    className={`w-5 h-5 ${item.color} transition-transform duration-300 group-hover/item:scale-125`}
                    style={{ filter: `drop-shadow(0 0 6px currentColor)` }}
                />

                <span className="text-sm font-medium text-slate-200 group-hover/item:text-white tracking-wide">
                {item.name}
                </span>

                    </motion.div>
                    );
                        })}
                </div>

                    {/* Decorative Glow Effect - Enhanced */}
                        <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 pointer-events-none -z-10"
                        style={{
                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.25))'
                                }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

