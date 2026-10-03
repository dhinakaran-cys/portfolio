import { motion } from 'framer-motion';
import { Target, Diamond } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: 'Chess',
      roles: [
        {
          title: 'District Champion',
          period: '2 Time District Win',
          skills: 'Competitive Chess'
        }
      ],
      color: 'var(--color-neon-pink)'
    },
    {
      title: 'Badminton',
      roles: [
        {
          title: 'District Player',
          period: 'District Level',
          skills: 'Competitive Badminton'
        }
      ],
      color: 'var(--color-neon-cyan)'
    }
  ];

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t-2 border-[var(--color-neon-pink)]">

      {/* Background radial overlays */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-neon-pink)]/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block bg-[var(--color-neon-pink)] text-white px-6 py-2 cyber-clip-reverse font-display font-black uppercase tracking-widest text-sm mb-6 shadow-[0_0_25px_rgba(255,0,60,0.6)] animate-pulse">
            OFF-GRID OPS
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase relative select-none">
            <span className="absolute left-[50%] top-[4px] -translate-x-[50%] text-transparent opacity-50 w-full whitespace-nowrap hidden md:block" style={{ WebkitTextStroke: '2px var(--color-neon-pink)' }}>ACHIEVEMENTS</span>
            ACHIEVEMENTS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 w-full"
            >
              {/* Cyber Activity Card */}
              <div className={`cyber-clip bg-black/60 border border-[var(--color-outline)] p-8 md:p-12 hover:bg-[var(--color-surface-container-high)] transition-all duration-300 relative group h-full`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity cyber-clip"></div>

                <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-wider uppercase mb-8 pb-4 border-b border-dashed border-[var(--color-outline)] text-center md:text-left">
                  {act.title}
                </h3>

                <div className="flex flex-col gap-10">
                  {act.roles.map((role, idx) => (
                    <div key={idx} className="relative pl-4 md:pl-8">
                      {/* Timeline dot for multiple roles */}
                      {act.roles.length > 1 && (
                        <div className="absolute left-0 top-3 w-3 h-3 rounded-full" style={{ backgroundColor: act.color }}></div>
                      )}
                      {act.roles.length > 1 && idx !== act.roles.length - 1 && (
                        <div className="absolute left-[5px] top-[18px] bottom-[-45px] w-0.5" style={{ backgroundColor: act.color, opacity: 0.3 }}></div>
                      )}

                      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                        <div className="bg-[var(--color-surface-container-highest)] inline-flex items-center gap-2 px-4 py-1 cyber-clip-reverse w-auto overflow-hidden self-start shadow-[0_0_15px_rgba(255,0,60,0.3)] border border-[var(--color-neon-pink)]/50">
                          <Target className="w-4 h-4" style={{ color: act.color }} />
                          <span className="font-mono text-sm md:text-base font-bold uppercase tracking-widest whitespace-nowrap" style={{ color: act.color }}>
                            {role.title}
                          </span>
                        </div>
                        <p className="font-mono text-xs text-[var(--color-outline)] tracking-widest uppercase md:ml-auto">
                          {role.period}
                        </p>
                      </div>

                      <p className="text-[var(--color-on-surface-variant)] leading-relaxed font-body border-l-2 p-3 bg-[var(--color-surface-container-low)] text-sm flex items-start gap-2 max-w-2xl" style={{ borderColor: act.color }}>
                        <Diamond className="w-3 h-3 mt-1 shrink-0" style={{ color: act.color }} />
                        <span className="flex-1">{role.skills}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
