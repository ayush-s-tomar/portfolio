import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#work', label: 'work' },
  { href: '#about', label: 'about' },
  { href: '#stack', label: 'stack' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-lg tracking-tight flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--mint)] pulse-dot" />
          ayush.tomar
        </a>
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative transition-colors" style={{ color: active === l.href ? 'var(--mint)' : 'var(--ink-muted)' }}>
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--mint)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono group overflow-hidden relative"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)] group-hover:animate-ping absolute" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)]" />
          let's talk
        </motion.a>
      </div>
    </motion.nav>
  );
}