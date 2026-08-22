import { motion } from 'framer-motion';
import { Mail, ExternalLink } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl glass p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: 'radial-gradient(600px circle at 50% 0%, rgba(41,246,198,0.12), transparent 60%)' }}
        />
        <p className="font-mono text-sm text-[var(--mint)] mb-3 relative z-10">$ ./contact --send</p>
        <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight mb-5 relative z-10">
          Let's build something<br className="hidden sm:block" /> that ships.
        </h2>
        <p className="text-[var(--ink-muted)] max-w-lg mx-auto mb-9 relative z-10">
          Open to full-time AI Engineer / GenAI Developer roles and freelance
          work on agent systems and RAG pipelines.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          
            href="mailto:ayushsinghtomar22@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] font-medium text-sm hover:scale-[1.03] transition-transform"
          >
            <Mail size={16} /> say hello
          </a>
          
            href="https://github.com/ayush-s-tomar"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-mono hover:border-[var(--mint)] transition-colors"
          >
            <GithubIcon size={16} /> github
          </a>
          
            href="https://www.linkedin.com/in/ayushsinghtomar"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-mono hover:border-[var(--mint)] transition-colors"
          >
            <ExternalLink size={16} /> linkedin
          </a>
          
            href="https://dev.to/ayushsinghtomar"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-mono hover:border-[var(--mint)] transition-colors"
          >
            <ExternalLink size={16} /> dev.to
          </a>
        </div>
      </motion.div>

      <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[var(--ink-muted)]">
        <span>© {new Date().getFullYear()} Ayush Tomar. Built with React, Three.js &amp; Framer Motion.</span>
        <span>Gwalior, India</span>
      </footer>
    </section>
  );
}