import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';

// Lazy-loaded so the Three.js scene doesn't block first paint of the hero
// text/CTA — it loads in a separate chunk and fades in once ready, instead
// of delaying First Contentful Paint / Largest Contentful Paint.
const AgentGraph = lazy(() => import('./AgentGraph'));

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <Suspense fallback={null}>
        <AgentGraph />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--bg)]/40 to-[var(--bg)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-mono text-sm text-[var(--mint)] mb-5"
        >
          <span className="text-[var(--ink-muted)]">$</span> whoami
          <span className="inline-block w-2 h-4 bg-[var(--mint)] ml-1 align-middle animate-pulse" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl"
        >
          I build AI agents<br />that <span className="text-gradient">actually ship.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 text-lg text-[var(--ink-muted)] max-w-xl leading-relaxed"
        >
          Ayush Tomar — AI Agent & RAG Developer from Gwalior, India. I design
          multi-agent systems and RAG pipelines with LangGraph, CrewAI, and FastAPI,
          then take them all the way to production.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] font-medium text-sm hover:scale-[1.03] transition-transform"
          >
            View projects <ArrowDown size={16} />
          </a>
          <a
            href="https://github.com/ayush-s-tomar"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-mono hover:border-[var(--violet)] transition-colors"
          >
            <GithubIcon size={16} /> github
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-[var(--ink-muted)]"
        >
          <span>NPTEL Elite Top 5% — IIT Kanpur</span>
          <span className="text-[var(--glass-border)]">/</span>
          <span>MITS Gwalior, 2027</span>
        </motion.div>
      </div>
    </section>
  );
}