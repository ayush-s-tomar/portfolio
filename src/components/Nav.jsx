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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
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
        <div className="hidden md:flex items-center gap-8 font-mono text-sm text-[var(--ink-muted)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--ink)] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono hover:border-[var(--mint)] transition-colors"
        >
          let's talk
        </a>
      </div>
    </motion.nav>
  );
}
