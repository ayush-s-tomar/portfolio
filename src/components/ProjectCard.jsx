import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectCard({ project, index }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: 'easeOut' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative rounded-2xl glass p-6 flex flex-col justify-between min-h-[300px] overflow-hidden transition-colors duration-300"
      style={{ borderColor: hover ? 'var(--mint)' : 'var(--glass-border)' }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(108,123,255,0.15), transparent 60%)',
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-mono text-xs text-[var(--mint)] mb-1">{project.tag}</p>
            <h3 className="font-display font-semibold text-2xl">{project.name}</h3>
          </div>
          <span className="font-mono text-right shrink-0 ml-3">
            <span className="block text-lg font-semibold text-[var(--ink)]">{project.metric.value}</span>
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
      </div>

      <div className="relative z-10 mt-5">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[var(--ink-muted)]">
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 font-mono text-xs">
          <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--mint)] transition-colors">
            <GithubIcon size={14} /> code
          </a>
          {project.links.demo && project.links.demo !== '#' && (
            <a href={project.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-[var(--mint)] transition-colors">
              <ExternalLink size={14} /> live demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
