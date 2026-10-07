import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, MapPin, X, Maximize2 } from 'lucide-react';

type Certificate = {
  title: string;
  issuer: string;
  location?: string;
  date: string;
  image: string;
};

type Category = {
  id: string;
  label: string;
  color: string;
  items: Certificate[];
};

// Add new certificates to the matching category below.
// Put the image file in /public/certificates and reference it as '/certificates/<file>'.
const categories: Category[] = [
  {
    id: 'workshop',
    label: 'Workshop',
    color: 'var(--color-neon-cyan)',
    items: [
    {
      title: 'Playground of Hackers',
      issuer: "NOCTIVUS'26, Dept. of CSE (Cyber Security), Velammal Engineering College",
      location: 'Chennai',
      date: 'September 26, 2026',
      image: '/certificates/WORKSHOP-GAMKERS-NOCTIVUS26.png'
    },
    // Workshop category
    {
      title: 'Cyber Security Workshop',
      issuer: 'Hackerz — National Level Technical Symposium, Dept. of CSE, Chennai Institute of Technology',
      location: 'Chennai',
      date: 'February 9, 2026',
      image: '/certificates/cit-hackerz-cybersecurity-symposium.png'
    }
    ]
  },
  {
    id: 'hackathon',
    label: 'Hackathon',
    color: 'var(--color-neon-pink)',
    items: [
      // Hackathon category
    {
      title: 'RUSH 24 Hour Hackathon',
      issuer: 'Dept. of Computer Science and Engineering (Cyber Security), Sathyabama Institute of Science and Technology',
      location: 'Chennai',
      date: 'July 24–25, 2026',
      image: '/certificates/sathyabama-rush24-hackathon.png'
    }
    ]
  },
  {
    id: 'skills',
    label: 'Skills',
    color: 'var(--color-neon-yellow)',
    items: []
  },
  {
    id: 'events',
    label: 'Events',
    color: 'var(--color-neon-green)',
    items: [
      {
        title: 'Playground of Hackers',
        issuer: "NOCTIVUS'26, Dept. of CSE (Cyber Security), Velammal Engineering College",
        location: 'Chennai',
        date: 'September 26, 2026',
        image: '/certificates/noctivus26-playground-of-hackers.png'
      },
          // Events category
    {
      title: '0xCON Summit 2026',
      issuer: 'ExploitX, Cybersecurity Summit — Chennai Institute of Technology',
      location: 'Chennai',
      date: 'August 1, 2026',
      image: '/certificates/cit-0xcon-summit-2026.png'
   },
      // Skills category
  {
      title: 'Ai-Gnite',
      issuer: "TECFEST'2K26, National Level Technical Symposium — Tagore Engineering College",
      location: 'Rathinamangalam, Chennai',
      date: 'September 25, 2026',
      image: '/certificates/tagore-aignite-tecfest2k26.png'
  }
    ]
  }
];

const Certificates = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const [preview, setPreview] = useState<Certificate | null>(null);

  const active = categories.find((c) => c.id === activeId) ?? categories[0];

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreview(null);
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [preview]);

  return (
    <section
      id="certificates"
      className="py-24 relative overflow-hidden bg-[var(--color-surface)] border-t-2 border-[var(--color-neon-green)]"
    >
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[var(--color-neon-green)]/10 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block bg-[var(--color-neon-green)] text-black px-6 py-2 cyber-clip-reverse font-display font-black uppercase tracking-widest text-sm mb-6 shadow-[0_0_25px_rgba(0,255,65,0.5)]">
            VERIFIED RECORDS
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter uppercase">
            CERTIFICATES
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Certificate categories"
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {categories.map((cat) => {
            const selected = cat.id === activeId;
            return (
              <button
                key={cat.id}
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={selected}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className="cyber-clip px-5 md:px-7 py-3 font-display font-black uppercase tracking-widest text-xs md:text-sm border transition-all duration-200 flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{
                  color: selected ? '#000' : cat.color,
                  backgroundColor: selected ? cat.color : 'rgba(0,0,0,0.6)',
                  borderColor: cat.color,
                  boxShadow: selected ? `0 0 18px ${cat.color}` : 'none'
                }}
              >
                {cat.label}
                <span
                  className="font-mono text-[10px] px-1.5 py-0.5 min-w-[1.5rem] text-center"
                  style={{
                    backgroundColor: selected ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.08)'
                  }}
                >
                  {cat.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="min-h-[220px]"
        >
          {active.items.length === 0 ? (
            <div
              className="cyber-clip border border-dashed border-[var(--color-outline)] bg-black/40 p-10 md:p-14 text-center"
            >
              <Award className="w-8 h-8 mx-auto mb-4" style={{ color: active.color }} />
              <p className="font-display font-bold text-white text-lg mb-2">
                No {active.label.toLowerCase()} certificates yet
              </p>
              <p className="font-body text-sm text-[var(--color-on-surface-variant)]">
                New {active.label.toLowerCase()} certificates will show up here.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {active.items.map((cert) => (
                <div
                  key={cert.title}
                  className="cyber-clip bg-black/60 border border-[var(--color-outline)] flex flex-col group hover:bg-[var(--color-surface-container-high)] transition-colors"
                >
                  <button
                    onClick={() => setPreview(cert)}
                    aria-label={`View ${cert.title} certificate full size`}
                    className="relative block w-full aspect-[1.414/1] overflow-hidden border-b border-[var(--color-outline)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                  >
                    <img
                      src={cert.image}
                      alt={`Certificate for ${cert.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span
                      className="absolute bottom-3 right-3 bg-black/80 px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity"
                      style={{ color: active.color, border: `1px solid ${active.color}` }}
                    >
                      <Maximize2 size={12} /> View full size
                    </span>
                  </button>

                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-xl font-display font-black text-white tracking-wide uppercase">
                      {cert.title}
                    </h3>
                    <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                      {cert.issuer}
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-[var(--color-outline)]">
                      <span className="flex items-center gap-2">
                        <Calendar size={12} style={{ color: active.color }} /> {cert.date}
                      </span>
                      {cert.location && (
                        <span className="flex items-center gap-2">
                          <MapPin size={12} style={{ color: active.color }} /> {cert.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Full-size viewer */}
      <AnimatePresence>
        {preview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`${preview.title} certificate`}
            onClick={() => setPreview(null)}
          >
            <button
              onClick={() => setPreview(null)}
              aria-label="Close certificate viewer"
              className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-black border border-[var(--color-neon-green)] text-[var(--color-neon-green)] hover:bg-[var(--color-neon-green)] hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              autoFocus
            >
              <X size={20} />
            </button>
            <img
              src={preview.image}
              alt={`Certificate for ${preview.title}`}
              className="max-w-full max-h-full object-contain border border-[var(--color-outline)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
