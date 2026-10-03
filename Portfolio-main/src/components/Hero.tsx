import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

// Funky 3D Cyber Torus Background
function CyberObject() {
  const meshRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;

      // Floating effect
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[2, 0.6, 128, 32]} />
        <meshBasicMaterial color="#ff003c" wireframe={true} transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50, 20, 20]} />
        <meshBasicMaterial color="#00f0ff" wireframe={true} transparent opacity={0.15} />
      </mesh>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </group>
  );
}

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden">

      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-auto">
        <Canvas camera={{ position: [0, 2, 7], fov: 60 }}>
          <CyberObject />
        </Canvas>
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 pointer-events-none mt-16 md:mt-0">

        {/* Cyberpunk Text Content */}
        <div className="flex-1 text-left flex flex-col items-start relative pb-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 font-mono text-sm tracking-widest text-[var(--color-neon-yellow)] uppercase flex items-center gap-4 bg-black/50 p-2 cyber-clip backdrop-blur-md border border-[var(--color-neon-yellow)]/50 pointer-events-auto"
          >
            <span className="w-2 h-2 bg-[var(--color-neon-yellow)] animate-ping"></span>
            ASPIRING SOC ANALYST // V4.0
          </motion.div>

          {/* Glitch Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative font-display font-black text-6xl md:text-[5rem] lg:text-[7rem] leading-[0.9] uppercase tracking-tighter"
          >
            <div className="flex flex-col">
              <div className="glitch text-glow-pink text-[var(--color-neon-pink)]" data-text="">DHINAKARAN</div>
              <div className="glitch text-glow-cyan text-[var(--color-neon-cyan)] ml-8 md:ml-16" data-text="">K</div>
              <div className="glitch text-glow-yellow text-[var(--color-neon-yellow)] ml-16 md:ml-32" data-text="">K</div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-[var(--color-on-surface-variant)] max-w-xl font-mono mt-8 bg-black/60 p-4 border-l-4 border-[var(--color-neon-cyan)] shadow-[0_0_20px_rgba(0,240,255,0.1)] pointer-events-auto"
          >
            Aspiring SOC Analyst | Cybersecurity Enthusiast | Threat Detection & Incident Response
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex flex-wrap gap-6 pointer-events-auto"
          >
            <a href="#projects" className="cyber-clip px-6 md:px-10 py-4 bg-[var(--color-neon-yellow)] text-black font-display font-black text-sm md:text-lg tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(252,238,10,0.6)]">
              PROJECTS
            </a>

            <a href="#contact" className="cyber-clip-reverse px-6 md:px-10 py-4 bg-transparent border-2 border-[var(--color-neon-cyan)] text-[var(--color-neon-cyan)] font-display font-black text-sm md:text-lg tracking-widest uppercase hover:bg-[var(--color-neon-cyan)] hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all">
              CONTACT
            </a>

            <a
              href="mailto:kkthina470@gmail.com"
              className="cyber-clip px-6 md:px-10 py-4 bg-[var(--color-neon-pink)] text-white font-display font-black text-sm md:text-lg tracking-widest uppercase hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(255,0,60,0.6)] flex items-center justify-center"
            >
              EMAIL_ME
            </a>
          </motion.div>
        </div>

        {/* Funky Profile Visage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative max-w-[320px] md:max-w-[450px] w-full aspect-[4/5] flex items-center justify-center pointer-events-auto"
        >
          {/* Cyberpunk Frames */}
          <div className="absolute inset-0 cyber-clip bg-[var(--color-neon-pink)]/20 shadow-[0_0_30px_rgba(255,0,60,0.4)] animate-pulse"></div>
          <div className="absolute inset-2 cyber-clip-reverse border-2 border-[var(--color-neon-cyan)] z-10"></div>

          <div className="absolute inset-4 cyber-clip overflow-hidden bg-[var(--color-surface-container-high)] z-20">
            <img
              src="/Prof-Dhinakaran.jpg"
              alt="Dhinakaran K K - Cybersecurity Student Profile Photo"
              className="w-full h-full object-cover transition-all duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://picsum.photos/600/800?blur=2';
              }}
            />
            {/* Subtle Scanline overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjMiIGZpbGw9Im5vbmUiLz48cmVjdCB5PSIzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxIiBmaWxsPSJyZ2JhKDAsIDI0MCwgMjU1LCAwLjA1KSIvPjwvc3ZnPg==')] pointer-events-none mix-blend-screen opacity-30"></div>
          </div>

          {/* Neon decorative boxes */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[var(--color-neon-yellow)] cyber-clip-reverse z-30 flex items-center justify-center shadow-[0_0_20px_rgba(252,238,10,0.5)] p-1 text-center">
            <span className="font-display font-black text-black text-xs leading-tight">SRM VEC</span>
          </div>
          <div className="absolute top-10 -left-6 bg-black border border-[var(--color-neon-pink)] px-4 py-1 z-30 font-mono text-[var(--color-neon-pink)] text-xs tracking-widest uppercase">
            B.E CYBERSECURITY
          </div>
        </motion.div>

      </div>

      {/* Floor glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-neon-pink)]/20 to-transparent pointer-events-none mix-blend-screen"></div>
    </section>
  );
};

export default Hero;
