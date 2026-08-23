import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { projects } from '../data';

const sections = [
  { label: 'Work', href: '#work', hint: 'section' },
  { label: 'About', href: '#about', hint: 'section' },
  { label: 'Stack', href: '#stack', hint: 'section' },
  { label: 'Contact', href: '#contact', hint: 'section' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const items = [
    ...sections,
    ...projects.map((p) => ({
      label: p.name,
      href: p.links.demo && p.links.demo !== '#' ? p.links.demo : `#work`,
      hint: p.tag,
      external: !!(p.links.demo && p.links.demo !== '#'),
    })),
  ];

  const filtered = query
    ? items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()) || i.hint.toLowerCase().includes(query.toLowerCase()))
    : items;

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
    if (!open) setQuery('');
  }, [open]);

  const go = (item) => {
    setOpen(false);
    if (item.external) {
      window.open(item.href, '_blank', 'noreferrer');
    } else {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-mono text-[var(--ink-muted)] hover:border-[var(--mint)] hover:text-[var(--ink)] transition-colors fixed bottom-6 right-6 z-40"
        aria-label="Open command palette"
      >
        <Search size={13} /> <span className="opacity-70">⌘K</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="fixed top-[18%] left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-[101] rounded-2xl glass overflow-hidden"
              style={{ background: 'rgba(10,14,26,0.92)' }}
            >
              <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-[var(--glass-border)]">
                <Search size={16} className="text-[var(--mint)] shrink-0" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Jump to a section or project…"
                  className="bg-transparent outline-none text-sm w-full placeholder:text-[var(--ink-muted)] font-mono"
                />
                <kbd className="text-[10px] text-[var(--ink-muted)] font-mono border border-[var(--glass-border)] rounded px-1.5 py-0.5">esc</kbd>
              </div>
              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <p className="px-4 py-6 text-sm text-[var(--ink-muted)] text-center">No matches</p>
                )}
                {filtered.map((item, i) => (
                  <button
                    key={item.label + i}
                    onClick={() => go(item)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-left hover:bg-white/5 transition-colors"
                  >
                    <span>
                      <span className="text-sm">{item.label}</span>
                      <span className="block text-[11px] font-mono text-[var(--ink-muted)]">{item.hint}</span>
                    </span>
                    <ArrowRight size={14} className="text-[var(--mint)] opacity-0 group-hover:opacity-100 shrink-0" />
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
