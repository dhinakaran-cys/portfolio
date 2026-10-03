import { useState, useEffect, useMemo } from 'react';
import { Shield, Activity, Cpu, Wifi, Clock } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Loader from './components/Loader';

const GlobalStatusFooter = () => {
  const [pid, setPid] = useState(1024);
  const [sessionStartTime] = useState(new Date());
  const [now, setNow] = useState(new Date());
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    const pidTimer = setInterval(() => setPid(Math.floor(Math.random() * 8000) + 1000), 8000);
    const latencyTimer = setInterval(() => setLatency(Math.floor(Math.random() * 10) + 20), 3000);
    
    return () => {
      clearInterval(timer);
      clearInterval(pidTimer);
      clearInterval(latencyTimer);
    };
  }, []);

  const sessionDuration = useMemo(() => {
    const diff = now.getTime() - sessionStartTime.getTime();
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }, [now, sessionStartTime]);

  const localTime = now.toLocaleTimeString([], { hour12: false });

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 border-t border-[#00ff41]/30 backdrop-blur-xl z-[100] px-4 md:px-8 py-2 font-mono text-[9px] md:text-[11px] text-[#00ff41]/60 flex justify-between items-center select-none uppercase tracking-[0.2em] shadow-[0_-5px_20px_rgba(0,0,0,0.8)]">
      <div className="flex gap-4 md:gap-8 items-center">
        <span className="flex items-center gap-2 text-[#00ff41] font-bold">
          <Shield size={12} className="text-[#00ff41] animate-pulse" /> 
          <span className="hidden xs:inline">SECURE_SESSION:</span> AES-256
        </span>
        <span className="hidden sm:flex items-center gap-2 border-l border-[#00ff41]/10 pl-4 text-[#00ff41]/40">
          <Wifi size={12} className="text-[#00ff41]/20" /> {latency}ms
        </span>
        <span className="hidden md:flex items-center gap-2 border-l border-[#00ff41]/10 pl-4 text-[#00ff41]/40">
          <Clock size={12} /> SYS_TIME: {localTime}
        </span>
      </div>

      <div className="flex gap-4 md:gap-10 items-center">
        <span className="hidden lg:flex items-center gap-2 text-[#00ff41]">
          <Activity size={12} className="text-[#00ff41] animate-[ping_2s_infinite]" /> 
          STATUS: <span className="text-white">OPERATIONAL</span>
        </span>
        
        <span className="text-[#00ff41] font-black border-x border-[#00ff41]/10 px-4 md:px-8 bg-[#00ff41]/5 py-0.5 shadow-[inset_0_0_10px_rgba(0,255,65,0.05)]">
          <span className="hidden sm:inline">SESSION_UPTIME:</span> {sessionDuration}
        </span>
        
        <span className="hidden lg:flex items-center gap-2 text-[#00ff41]/40">
          <Cpu size={12} /> KERNEL_PID: <span className="text-[#00ff41]">{pid}</span>
        </span>
      </div>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`min-h-screen bg-[var(--color-surface)] text-[var(--color-on-surface-variant)] selection:bg-[var(--color-primary-container)] selection:text-[var(--color-on-primary)] relative ${loading ? 'overflow-hidden h-screen' : ''}`}>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {/* Background radial overlays are handled in index.css */}

      {/* Cyber Header */}
      <div className="fixed top-0 left-0 right-0 p-4 md:p-6 z-50 pointer-events-none">
        <header className="cyber-clip bg-black/60 backdrop-blur-md border border-[var(--color-neon-cyan)]/30 max-w-7xl mx-auto px-6 py-4 flex justify-between items-center pointer-events-auto transition-all duration-500 hover:border-[var(--color-neon-cyan)] hover:bg-black/80 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 cyber-clip-reverse bg-[var(--color-neon-pink)] flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(255,0,60,0.6)]">
              <div className="w-3 h-3 bg-black cyber-clip"></div>
            </div>
            <span
              className="font-display font-black text-lg md:text-xl tracking-widest cursor-pointer text-white hover:text-[var(--color-neon-cyan)] hover:text-glow-cyan transition-colors uppercase"
              onClick={() => window.scrollTo(0, 0)}
            >
              DHINAKARAN<span className="text-[var(--color-neon-pink)]">_KK</span>
            </span>
          </div>
          
          <nav className="gap-8 hidden md:flex font-mono text-xs tracking-widest uppercase font-bold">
            <a href="#about" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-yellow)] hover:text-glow-yellow transition-all">About</a>
            <a href="#skills" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-cyan)] hover:text-glow-cyan transition-all">Skills</a>
            <a href="#projects" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-pink)] hover:text-glow-pink transition-all">PROJECTS</a>
            <a href="#activities" className="text-[var(--color-on-surface-variant)] hover:text-white transition-all">Achievements</a>
            <a href="#certificates" className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-neon-green)] transition-all">Certificates</a>
            <a href="#contact" className="text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all px-3 py-1 cyber-clip border border-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.4)]">Contact</a>
          </nav>

          {/* System Status Indicator */}
          <div className="hidden sm:block bg-[#00ff41]/10 border border-[#00ff41] px-3 py-1 rounded-sm text-[10px] animate-pulse font-mono tracking-widest text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.2)]">
            SYSTEM_STATUS: ONLINE
          </div>

        </header>
      </div>

      <main className="relative z-10 pt-20 pb-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Certificates />
        <Contact />
      </main>

      <GlobalStatusFooter />
    </div>
  );
}

export default App;
