import React from 'react';
import { motion } from 'framer-motion';

// --- Syntax Highlighting Components (Unchanged) ---
const Keyword = ({ children }) => <span className="text-pink-400">{children}</span>;
const String = ({ children }) => <span className="text-green-300">'{children}'</span>;
const Boolean = ({ children }) => <span className="text-purple-400">{children}</span>;
const FunctionName = ({ children }) => <span className="text-blue-400">{children}</span>;
const Property = ({ children }) => <span className="text-purple-300">{children}</span>;
const Variable = ({ children }) => <span className="text-blue-300">{children}</span>;
const Operator = ({ children }) => <span className="text-pink-400">{children}</span>;
const NumberLiteral = ({ children }) => <span className="text-orange-400">{children}</span>;

// --- Code Block Component (Unchanged internally, structure is fine) ---
const AboutCodeBlock = () => {
  const skills = [
    'Java', 'Javascript', 'Node.js', 'Express.js', 'React.js',
    'MongoDB', 'MySQL'
  ];
  const skillsMidpoint = Math.ceil(skills.length / 2);
  const skillsLine1 = skills.slice(0, skillsMidpoint);
  const skillsLine2 = skills.slice(skillsMidpoint);

  const traits = {
    quickLearner: true,
    problemSolver: true,
    conscientious: true,
  };

  return (
    // Outer div for gradient border (Unchanged)
    <div
      className="rounded-lg p-[2px] 
      bg-gradient-to-br from-cyan-500/40 via-purple-600/50 to-blue-600/40
      shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(147,51,234,0.55)]
      backdrop-blur-xl transition-all duration-500">

    <div className="rounded-[7px] overflow-hidden 
      bg-gradient-to-br from-[#0c0f1c]/95 via-[#0b0d18]/98 to-[#05060a]/95 
      backdrop-blur-xl">

        {/* Code Editor Header (Unchanged) */}
        <div className="flex items-center px-2 md:px-4 py-1 md:py-2 bg-slate-800/50 border-b border-slate-700">
          <div className="flex space-x-1 md:space-x-2">
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500"></span>
          </div>
          <span className="ml-2 md:ml-4 text-[9px] md:text-xs text-slate-400">AboutMe.js</span>
        </div>
        {/* Code Content (Unchanged) */}
        <pre className="p-2 md:p-5 lg:p-6 text-[9px] leading-snug sm:text-xs sm:leading-relaxed md:text-sm md:leading-relaxed lg:text-base lg:leading-relaxed text-slate-300 font-mono overflow-x-auto">
          <code>
            <Keyword>const</Keyword> <Variable>MohammadAlim</Variable> = {'{\n'}
            {'  '}<Property>name</Property>: <String>Mohammad Alim</String>,{'\n'}
            {'  '}<Property>skills</Property>: {'['}
            {skillsLine1.map((skill, index) => (
              <React.Fragment key={skill}>
                <String>{skill}</String>
                {index < skillsLine1.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
            {',\n    '}
            {skillsLine2.map((skill, index) => (
              <React.Fragment key={skill}>
                <String>{skill}</String>
                {index + skillsLine1.length < skills.length - 1 ? ', ' : ''}
              </React.Fragment>
            ))}
            {'],\n'}
            {'  '}<Property>traits</Property>: {'{\n'}
            {Object.entries(traits).map(([key, value], index, arr) => (
               <span key={key}>
                 {'    '}<Property>{key}</Property>: <Boolean>{value ? 'true' : 'false'}</Boolean>{index < arr.length - 1 ? ',' : ''}{'\n'}
               </span>
            ))}
            {'  }'},{'\n'}
            {'\n  '}<FunctionName>hireable</FunctionName>: {'function() {\n'}
            {'    '}<Keyword>return</Keyword> ({'\n'}
            {'      '}<Keyword>this</Keyword>.traits.quickLearner <Operator>&&</Operator>{'\n'}
            {'      '}<Keyword>this</Keyword>.traits.problemSolver <Operator>&&</Operator>{'\n'}
            {'      '}<Keyword>this</Keyword>.traits.conscientious <Operator>&&</Operator>{'\n'}
            {'      '}<Keyword>this</Keyword>.skills.length <Operator>{'>='}</Operator> <NumberLiteral>5</NumberLiteral>{'\n'}
            {'    '});{'\n'}
            {'  }'}{'\n'}
            {'}'};
          </code>
        </pre>
      </div>
    </div>
  );
};


// --- Main About Component ---
export default function About() {
  return (
    <section id="about" className="section py-8 md:py-24 scroll-mt-24 md:scroll-mt-32" aria-label="About Me">
      <div className="container-lg px-3 md:px-6">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-start">

          {/* --- Left Column: Enhanced Text Content --- */}
          <motion.div
            className="space-y-4 md:space-y-8 md:mt-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Heading with gradient accent and decorative line */}
            <div className="space-y-2 md:space-y-4">
              <div className="inline-flex items-center gap-2 md:gap-3">
                <div className="h-[2px] md:h-[3px] w-5 md:w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 leading-tight">
                  WHO I AM?
                </h2>
              </div>
              <div className="h-[2px] md:h-1 w-12 md:w-32 rounded-full bg-gradient-to-r from-cyan-500/60 via-blue-500/40 to-transparent" />
            </div>

            {/* Content paragraphs with enhanced typography */}
            <div className="space-y-3 md:space-y-6 text-xs leading-relaxed sm:text-base md:text-lg">
              <p className="text-neutral-200 font-light tracking-wide text-justify md:text-left">
                I'm{' '}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  Mohammad Alim
                </span>
                , a final-year Computer Science Engineering student passionate about building modern, high-performance web applications. Skilled in the{' '}
                <span className="font-medium text-cyan-300">MERN stack</span>,{' '}
                <span className="font-medium text-blue-300">Java</span>, and{' '}
                <span className="font-medium text-purple-300">database management</span>, I love creating scalable, efficient solutions and crafting seamless user experiences. Driven by{' '}
                <span className="font-medium text-cyan-300">problem-solving</span>{' '}
                and{' '}
                <span className="font-medium text-blue-300">innovation</span>, I'm always exploring new technologies to turn ideas into impactful projects.
              </p>
              
              <p className="text-neutral-300 font-light tracking-wide text-justify md:text-left">
                Beyond coding, I enjoy collaborating with developer communities, leading tech initiatives, and sharing knowledge through sessions and events. My goal is to combine{' '}
                <span className="font-medium text-cyan-300">creativity</span>{' '}
                and{' '}
                <span className="font-medium text-purple-300">technology</span>{' '}
                to develop solutions that{' '}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-400">
                  inspire and make a difference
                </span>.
              </p>
            </div>

            {/* Decorative quote or highlight */}
            <div className="relative pl-2 md:pl-6 py-2 md:py-4 border-l-2 md:border-l-4 border-cyan-400 bg-white/5 backdrop-blur-sm rounded-r-lg">
              <p className="text-cyan-200 font-medium italic text-[10px] sm:text-sm md:text-lg leading-relaxed">
                "Building solutions that bridge innovation and functionality."
              </p>
            </div>
          </motion.div>

          {/* --- Right Column: Code Block (Unchanged structure) --- */}
          {/* --- Right Column: Code Block with Card-like Motion --- */}
          <motion.div
            className="w-full mx-auto md:mx-0 md:max-w-2xl lg:max-w-xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{
              scale: 1.03,
              rotateX: 2,
              rotateY: -2,
              transition: { duration: 0.35 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <AboutCodeBlock />
          </motion.div>


        </div>
      </div>
    </section>
  );
}
