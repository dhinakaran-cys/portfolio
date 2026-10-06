import { motion } from 'framer-motion';
import { Shield, Code, Terminal } from 'lucide-react';

const Skills = () => {
  const cybersecurity = ['Ethical Hacking & Testing Skills', 'Security Analysis Skills', 'Security Frameworks', 'Phishing Detection & Awareness', 'Threat Detection & Incident Response'];
  const languages = ['Python','C','C++','Java'];
  const frameworks = ['Linux', 'Networking Fundamentals'];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t-4 border-dashed border-[var(--color-outline)]">
      
      {/* Glitch textual background */}
      <div className="absolute left-[-5%] top-[50%] -translate-y-1/2 font-display font-black text-[15vw] text-white opacity-[0.03] select-none pointer-events-none rotate-90 md:rotate-0 tracking-tighter">
        ARSENAL
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-right mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center bg-[var(--color-neon-cyan)] text-black px-4 py-1 cyber-clip font-display font-bold uppercase tracking-widest text-xs mb-4 shadow-[0_0_15px_rgba(0,240,255,0.6)]">
            WEAPONRY LOADOUT
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase">
             <span className="text-[var(--color-neon-cyan)]">SKILLS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cyber Module */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="p-8 cyber-clip-reverse bg-[var(--color-surface-container-low)] border-2 border-[var(--color-neon-pink)] hover:bg-[var(--color-neon-pink)]/10 transition-all duration-300 relative group min-h-[350px]"
          >
            <div className="absolute top-4 left-4 w-12 h-12 bg-[var(--color-neon-pink)] cyber-clip flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <Shield className="w-5 h-5" />
            </div>
            
            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-8 text-right group-hover:text-[var(--color-neon-pink)]">Cyber</h3>

            <div className="flex flex-col gap-2">
              {cybersecurity.map(skill => (
                <div key={skill} className="font-mono text-sm text-[var(--color-on-surface-variant)] flex items-center justify-between border-b border-[var(--color-outline)] pb-1 group/skill">
                  <span className="group-hover/skill:text-white transition-colors">{skill}</span>
                  <span className="w-2 h-2 bg-[var(--color-neon-pink)] opacity-0 group-hover/skill:opacity-100 transition-opacity"></span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Module */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="p-8 cyber-clip bg-[var(--color-surface-container-low)] border-2 border-[var(--color-neon-yellow)] hover:bg-[var(--color-neon-yellow)]/10 transition-all duration-300 relative group min-h-[350px]"
          >
            <div className="absolute top-4 left-4 w-12 h-12 bg-[var(--color-neon-yellow)] cyber-clip-reverse flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <Code className="w-5 h-5" />
            </div>
            
            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-8 text-right group-hover:text-[var(--color-neon-yellow)]">PROGRAMMING Languages</h3>

            <div className="flex flex-col gap-2">
              {languages.map(skill => (
                <div key={skill} className="font-mono text-sm text-[var(--color-on-surface-variant)] flex items-center justify-between border-b border-[var(--color-outline)] pb-1 group/skill">
                  <span className="group-hover/skill:text-white transition-colors">{skill}</span>
                  <span className="w-2 h-2 bg-[var(--color-neon-yellow)] opacity-0 group-hover/skill:opacity-100 transition-opacity"></span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools Module */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="p-8 cyber-clip-reverse bg-[var(--color-surface-container-low)] border-2 border-[var(--color-neon-cyan)] hover:bg-[var(--color-neon-cyan)]/10 transition-all duration-300 relative group min-h-[350px]"
          >
            <div className="absolute top-4 left-4 w-12 h-12 bg-[var(--color-neon-cyan)] cyber-clip flex items-center justify-center text-black group-hover:scale-110 transition-transform">
              <Terminal className="w-5 h-5" />
            </div>
            
            <h3 className="text-2xl font-display font-black text-white tracking-widest uppercase mt-16 mb-8 text-right group-hover:text-[var(--color-neon-cyan)]">Tools</h3>

            <div className="flex flex-col gap-2">
              {frameworks.map(skill => (
                <div key={skill} className="font-mono text-sm text-[var(--color-on-surface-variant)] flex items-center justify-between border-b border-[var(--color-outline)] pb-1 group/skill">
                  <span className="group-hover/skill:text-white transition-colors">{skill}</span>
                  <span className="w-2 h-2 bg-[var(--color-neon-cyan)] opacity-0 group-hover/skill:opacity-100 transition-opacity"></span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
