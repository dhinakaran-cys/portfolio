import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

const bootLogs = [
  { text: "> INITIALIZING SECURE BOOT SEQUENCE [KERNEL V9.2.1]...", threshold: 0 },
  { text: "> VERIFYING CRYPTOGRAPHIC SIGNATURES: [OK]", threshold: 12 },
  { text: "> ALLOCATING MEMORY RESOURCES [16TB HBM3]...", threshold: 25 },
  { text: "> LOADING ENCRYPTION MODULES [AES-256-GCM]...", threshold: 35 },
  { text: "> MOUNTING SECURE DRIVE VOLUMES [ZFS/ENCRYPTED]...", threshold: 48 },
  { text: "> INITIATING HYPER-THREADED NETWORK PROTOCOLS...", threshold: 62 },
  { text: "> RUNNING ZERO-DAY VULNERABILITY SCANNERS...", threshold: 75 },
  { text: "> ESTABLISHING DIRECT UPLINK TO MAINFRAME...", threshold: 85 },
  { text: "> OVERRIDING FIREWALL PROTOCOLS...", threshold: 92 },
  { text: "> SYSTEM IDENTIFICATION MATRICES MATCHED.", threshold: 98 },
  { text: "> SYSTEM ACCESS: GRANTED", threshold: 100 }
];

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 700); // Wait 0.7s at 100% so the user reads GRANTED
          return 100;
        }
        // Consistent speed to hit 100% in around 2.5 seconds (100 / 3 = ~33 ticks * 80ms = 2.6s)
        const jump = Math.floor(Math.random() * 4) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 70); 

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  // Filter logs whose threshold has been reached by current progress
  const visibleLogs = bootLogs.filter(log => progress >= log.threshold);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[100] bg-[var(--color-surface)] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Deep grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PHBvbHlsaW5lIHBvaW50cz0iNTAsMCAwLDAgMCw1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDI0MCwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-30 z-0 pointer-events-none mask-image-radial-gradient"></div>

        <div className="w-full max-w-3xl px-6 relative z-10 flex flex-col items-center">
          
          {/* Main Glitch Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 font-display font-black text-5xl md:text-7xl tracking-tighter uppercase relative select-none flex items-center justify-center gap-6"
          >
            <span className="glitch text-glow-pink text-[var(--color-neon-pink)] drop-shadow-[0_0_15px_rgba(255,0,60,0.8)]" data-text="">CYBER</span>
            <span className="text-[var(--color-outline)] font-light">|</span>
            <span className="glitch text-glow-cyan text-[var(--color-neon-cyan)] drop-shadow-[0_0_15px_rgba(0,240,255,0.8)]" data-text="">LINK</span>
          </motion.div>

          {/* Elaborate HUD Progress Bar */}
          <div className="w-full relative max-w-2xl">
            {/* L-Brackets for HUD effect */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[var(--color-neon-cyan)]"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[var(--color-neon-cyan)]"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[var(--color-neon-cyan)]"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[var(--color-neon-cyan)]"></div>

            <div className="w-full h-3 bg-black/50 border border-[var(--color-outline)] cyber-clip-reverse overflow-hidden relative backdrop-blur-md">
              <motion.div 
                 className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[var(--color-neon-purple)] via-[var(--color-neon-pink)] to-[var(--color-neon-cyan)] shadow-[0_0_20px_rgba(0,240,255,1)]"
                 initial={{ width: '0%' }}
                 animate={{ width: `${progress}%` }}
                 transition={{ ease: "linear", duration: 0.1 }}
              />
              {/* Overlay grid on the progress bar itself */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjQiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4yKSIvPjwvc3ZnPg==')] opacity-50 z-10 pointer-events-none mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 font-mono font-black text-xl text-[var(--color-neon-yellow)] drop-shadow-[0_0_10px_rgba(252,238,10,0.8)]">
               {progress}%
            </div>
          </div>

          <div className="w-full max-w-2xl flex justify-between mt-6 font-mono text-[var(--color-on-surface-variant)] text-xs md:text-sm uppercase tracking-widest font-bold border-b border-dashed border-[var(--color-outline)] pb-2 mb-4">
             <span>SYS_OPS // AUTHENTICATING</span>
             <span className="text-[var(--color-neon-cyan)]">SECURE_CHANNEL: 0x8F9A</span>
          </div>

          {/* Sync'd Terminal Logs Output */}
          <div className="w-full max-w-2xl h-40 overflow-hidden font-mono text-xs md:text-sm text-[var(--color-outline)] text-left flex flex-col justify-end relative">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--color-neon-purple)] to-transparent opacity-50"></div>
             
             <div className="pl-6 flex flex-col justify-end">
               {visibleLogs.map((log, index) => {
                 const isLast = index === bootLogs.length - 1;
                 const isGranted = log.threshold === 100;
                 return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`mb-1 ${isLast ? 'text-white' : ''} ${isGranted ? 'text-[#00ff41] font-bold drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] text-base' : ''}`}
                  >
                    {log.text}
                  </motion.div>
                 )
               })}
               
               {/* Blinking Cursor */}
               {progress < 100 && (
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.5 }}
                    className="w-2.5 h-4 bg-[var(--color-neon-cyan)] mt-1 ml-1"
                  />
               )}
             </div>
          </div>
          
        </div>
        
        {/* Massive Scanning Line overlay */}
        <motion.div 
           animate={{ y: ["-10vh", "110vh"] }}
           transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
           className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[var(--color-neon-cyan)]/10 to-transparent pointer-events-none opacity-50 z-20 mix-blend-screen"
        />
        
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
