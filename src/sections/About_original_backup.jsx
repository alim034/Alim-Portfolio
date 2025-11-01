import React from 'react';

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
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
  };

  return (
    // Outer div for gradient border (Unchanged)
    <div className="rounded-lg p-[2px] bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-blue-500/50 shadow-xl backdrop-blur-sm">
      {/* Inner div for background and content (Unchanged) */}
      <div className="bg-slate-900 rounded-[7px] overflow-hidden">
        {/* Code Editor Header (Unchanged) */}
        <div className="flex items-center px-4 py-2 bg-slate-800/50 border-b border-slate-700">
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <span className="ml-4 text-xs text-slate-400">AboutMe.js</span>
        </div>
        {/* Code Content (Unchanged) */}
        <pre className="p-6 text-sm md:text-base text-slate-300 font-mono overflow-x-auto">
          <code>
            <Keyword>const</Keyword> <Variable>mohammadAlim</Variable> = {'{\n'}
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
            {'      '}<Keyword>this</Keyword>.traits.hardWorker <Operator>&&</Operator>{'\n'}
            {'      '}<Keyword>this</Keyword>.traits.quickLearner <Operator>&&</Operator>{'\n'}
            {'      '}<Keyword>this</Keyword>.traits.problemSolver <Operator>&&</Operator>{'\n'}
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
    <section id="about" className="section py-16 md:py-24" aria-label="About Me">
      <div className="container-lg">
        {/* Grid Layout (Unchanged structure) */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* --- Left Column: Text Content --- */}
          {/* MODIFICATION: Applied prose-lg, explicit text color */}
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none md:mt-4 text-neutral-300">
            {/* MODIFICATION: Increased heading size and margin */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400 tracking-wider uppercase !leading-tight"> {/* Use !leading-tight to override prose */}
              WHO I AM?
            </h2>

            {/* Paragraphs (Content Unchanged) */}
            <p>
              Hello! I’m Mohammad Alim, a final-year Computer Science Engineering student passionate about crafting modern, high-performance web applications. My expertise lies in the MERN stack, Java, and database management, enabling me to build scalable and efficient solutions.
            </p>
            <p>
              I enjoy working across the full development cycle, from planning and API design to creating seamless front-end experiences. I’m deeply motivated by problem-solving, optimization, and exploring how technology can simplify real-world challenges.
            </p>
            <p>
              Whether developing backend systems, architecting web platforms, or experimenting with new frameworks, I’m always eager to grow, learn, and contribute to meaningful projects.
            </p>
          </div>

          {/* --- Right Column: Code Block (Unchanged structure) --- */}
          <div className="w-full max-w-3xl mx-auto md:mx-0">
             <AboutCodeBlock />
          </div>

        </div>
      </div>
    </section>
  );
}

