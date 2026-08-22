import { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ChevronDown } from 'lucide-react';
import GithubIcon from './GithubIcon';

function AnimatedMetric({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const match = String(value).match(/^(\d+)(.*)$/);

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const controls = animate(0, target, {
      duration: 1,
      ease: 'easeOut',
      onUpdate(v) {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView]);

  if (!match) {
    return <span ref={ref}>{value}</span>;
  }
  return <span ref={ref} className="tabular-nums">0{match[2] || ''}</span>;
}

export default function ProjectCard({ project, index }) {
  const [hover, setHover] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: 'easeOut' }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative rounded-2xl glass p-6 flex flex-col justify-between min-h-[300px] overflow-hidden"
      style={{
        borderColor: hover ? 'var(--mint)' : 'var(--glass-border)',
        boxShadow: hover
          ? '0 20px 40px -12px rgba(41,246,198,0.25), 0 0 0 1px rgba(41,246,198,0.15)'
          : '0 0 0 0 transparent',
        transition: 'border-color 0.3s, box-shadow 0.35s',
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(108,123,255,0.18), transparent 60%)',
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
        }}
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="pointer-events-none absolute top-4 right-4 z-10 text-[var(--mint)]"
      >
        <ArrowUpRight size={18} />
      </motion.div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-mono text-xs text-[var(--mint)] mb-1">{project.tag}</p>
            <h3 className="font-display font-semibold text-2xl">{project.name}</h3>
          </div>
          <span className="font-mono text-right shrink-0 ml-3">
            <span className="block text-lg font-semibold text-[var(--ink)]">
              <AnimatedMetric value={project.metric.value} />
            </span>
            <span className="block text-[10px] text-[var(--ink-muted)]">{project.metric.label}</span>
          </span>
        </div>

        <p className="text-sm text-[var(--ink-muted)] leading-relaxed mb-3">
          {project.blurb}
        </p>

        <motion.p
          initial={false}
          animate={{ height: hover ? 'auto' : 0, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-[var(--ink-muted)] leading-relaxed overflow-hidden"
        >
          {project.detail}
        </motion.p>

        {project.caseStudy && (
          <div className="mt-3">
            <button
              onClick={() => setCaseStudyOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--mint)] hover:opacity-80 transition-opacity"
            >
              <motion.span
                animate={{ rotate: caseStudyOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex"
              >
                <ChevronDown size={13} />
              </motion.span>
              {caseStudyOpen ? 'hide the debugging story' : 'read the debugging story'}
            </button>

            <AnimatePresence initial={false}>
              {caseStudyOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 pl-3 border-l-2 border-[var(--mint)]/30 space-y-3">
                    {project.caseStudy.split('\n\n').map((para, i) => (
                      <p key={i} className="text-xs text-[var(--ink-muted)] leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>

      <div className="relative z-10 mt-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((s) => (
            <motion.span
              key={s}
              whileHover={{ scale: 1.08, borderColor: 'var(--mint)' }}
              className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[var(--ink-muted)] cursor-default transition-colors"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <a
            href={project.links.github}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--ink-muted)] hover:text-[var(--mint)] hover:gap-2 transition-all duration-200"
          >
            <GithubIcon size={14} /> code
          </a>
          {project.links.demo && project.links.demo !== '#' && (
            <a
              href={project.links.demo}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--ink-muted)] hover:text-[var(--mint)] hover:gap-2 transition-all duration-200"
            >
              <ExternalLink size={14} /> live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}