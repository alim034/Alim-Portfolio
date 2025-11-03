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
                            className="group relative rounded-2xl overflow-hidden p-7 md:p-8
                                       backdrop-blur-md
                                       border-2 shadow-lg shadow-black/30
                                       hover:shadow-2xl
                                       transition-all duration-500 ease-out"
                            style={{ 
                                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)',
                                borderColor: 'rgba(56, 189, 248, 0.3)',
                            }}
                        >
                            {/* Animated Background Gradient Overlay */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none"
                                 style={{
                                     background: 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15), transparent 70%)'
                                 }} />
                            
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
                                            className={`group/item relative flex items-center gap-2.5 px-4 py-3 rounded-xl
                                                       backdrop-blur-md border-2
                                                       transition-all duration-300 ease-out cursor-default
                                                       ${g.title === 'Professional Skills' ? '' : 'max-w-max'}`}
                                            style={{ 
                                                background: isHovered 
                                                    ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.35) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(99, 102, 241, 0.35) 100%)'
                                                    : 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 58, 138, 0.6) 50%, rgba(37, 99, 235, 0.4) 100%)',
                                                borderColor: isHovered ? 'rgba(34, 211, 238, 0.8)' : 'rgba(100, 116, 139, 0.3)',
                                                boxShadow: isHovered ? '0 8px 32px rgba(6, 182, 212, 0.3), 0 0 0 1px rgba(34, 211, 238, 0.2) inset' : 'none',
                                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                            }}
                                        >
                                            <Icon
                                                className={`w-5 h-5 ${item.color} flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110`}
                                                style={{ filter: `drop-shadow(0 0 4px currentColor)` }}
                                            />
                                            {/* Removed whitespace-nowrap to allow wrapping */}
                                            <span className="text-sm font-medium text-slate-200 group-hover/item:text-white transition-colors duration-300">
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Decorative Glow Effect - Enhanced */}
                            <div className="absolute -inset-[2px] rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl
                                            transition-all duration-700 pointer-events-none -z-10"
                                 style={{
                                     background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4), rgba(147, 51, 234, 0.3))'
                                 }} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

