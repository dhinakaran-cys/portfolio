import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--color-surface)]">

      {/* Intense Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBvbHlsaW5lIHBvaW50cz0iNTAsMCAwLDAgMCw1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI0MCwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block bg-[#00ff41] text-black px-6 py-2 cyber-clip font-display font-black uppercase tracking-widest text-sm mb-6 shadow-[0_0_20px_rgba(0,255,65,0.6)] animate-pulse">
            COMMUNICATION PROTOCOL
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white tracking-tighter uppercase mb-4 relative">
            SECURE <span className="glitch text-glow-pink" data-text="">TRANSMISSION</span>
          </h2>
          <p className="text-[var(--color-on-surface-variant)] max-w-2xl mx-auto font-mono text-sm tracking-widest px-4 border-l-2 border-r-2 border-[var(--color-neon-cyan)] py-2">
            INITIALIZE CONNECTION // WAITING FOR INPUT
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Social Links Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 relative"
          >
            <div className="absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-neon-pink)] via-transparent to-[var(--color-neon-cyan)] hidden lg:block opacity-50"></div>

            {[
              { icon: <Mail className="w-5 h-5" />, label: 'EMAIL PROTOCOL', value: 'dhinakaran.cys@gmail.com', href: 'mailto:dhinakran.cys@gmail.com', color: "var(--color-neon-pink)" },
              { icon: <Phone className="w-5 h-5" />, label: 'PHONE LINE', value: '+91 63852 06097', href: 'tel:+916385206097', color: "var(--color-neon-cyan)" },
              { icon: <Github className="w-5 h-5" />, label: 'GITHUB NODE', value: 'github.com/dhinakaran-cys', href: 'https://github.com/dhinakaran-cys', color: "var(--color-neon-yellow)" },
              { icon: <MapPin className="w-5 h-5" />, label: 'PHYSICAL NODE', value: ' Chengalpattu City', color: "var(--color-neon-purple)" }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="cyber-clip bg-[var(--color-surface-container-low)] p-6 group flex items-start gap-4 hover:bg-[var(--color-surface-container-high)] border border-[var(--color-outline)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 h-1 cyber-clip opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: link.color, filter: `drop-shadow(0 0 10px ${link.color})` }}></div>
                <div className="w-12 h-12 cyber-clip-reverse bg-black border flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform" style={{ borderColor: link.color, color: link.color }}>
                  {link.icon}
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-[var(--color-on-surface-variant)] uppercase tracking-widest mb-1 group-hover:text-white transition-colors">{link.label}</h3>
                  <p className="font-display font-bold text-white text-lg group-hover:tracking-wider transition-all" style={{ textShadow: `0 0 10px ${link.color}` }}>{link.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Cyber Form Input */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="cyber-clip-reverse bg-[var(--color-surface-container-highest)] p-1 border-2 border-[var(--color-outline)] hover:border-[var(--color-neon-cyan)] transition-colors relative"
          >
            <div className="absolute top-2 right-2 flex gap-1 z-20">
              <span className="w-2 h-2 bg-[var(--color-neon-pink)] cyber-clip animate-ping shadow-[0_0_10px_var(--color-neon-pink)]"></span>
              <span className="w-2 h-2 bg-white cyber-clip"></span>
            </div>

            <form className="bg-black/90 p-8 flex flex-col gap-6 relative z-10 cyber-clip-reverse h-full">

              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="name" className="font-mono text-xs font-bold text-[var(--color-neon-cyan)] uppercase tracking-widest">
                  {"// IDENTIFIER"}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b-2 border-[var(--color-outline)] text-white p-3 font-display focus:outline-none focus:border-[var(--color-neon-cyan)] focus:bg-[var(--color-neon-cyan)]/10 transition-all text-lg placeholder:text-white/20"
                  placeholder="ENTER ALIAS"
                />
              </div>

              <div className="flex flex-col gap-2 relative group">
                <label htmlFor="email" className="font-mono text-xs font-bold text-[var(--color-neon-pink)] uppercase tracking-widest">
                  {"// RETURN_ADDRESS"}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b-2 border-[var(--color-outline)] text-white p-3 font-display focus:outline-none focus:border-[var(--color-neon-pink)] focus:bg-[var(--color-neon-pink)]/10 transition-all text-lg placeholder:text-white/20"
                  placeholder="ENTER SECURE EMAIL"
                />
              </div>

              <div className="flex flex-col gap-2 relative group flex-1">
                <label htmlFor="message" className="font-mono text-xs font-bold text-[var(--color-neon-yellow)] uppercase tracking-widest">
                  {"// PAYLOAD_DATA"}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full h-full min-h-[150px] bg-transparent border-2 border-[var(--color-outline)] text-white p-4 font-display focus:outline-none focus:border-[var(--color-neon-yellow)] focus:bg-[var(--color-neon-yellow)]/10 transition-all text-lg resize-none placeholder:text-white/20 cyber-clip"
                  placeholder="DRAFT ENCRYPTED MESSAGE HERE..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full cyber-clip bg-[var(--color-neon-cyan)] hover:bg-white text-black font-display font-black text-xl py-4 flex items-center justify-center gap-3 transition-all duration-300 mt-4 shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-white"
              >
                EXECUTE <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
