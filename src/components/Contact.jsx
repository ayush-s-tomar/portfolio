import { motion } from 'framer-motion';
import { Mail, ExternalLink, Star } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto mb-10 text-center"
      >
        <div className="flex items-center justify-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className="fill-[var(--mint)] text-[var(--mint)]" />
          ))}
        </div>
        <p className="text-[var(--ink-muted)] italic text-sm leading-relaxed">
          "Great work from start to finish — everything was delivered as
          expected and the quality was excellent."
        </p>
        <p className="font-mono text-xs text-[var(--ink-muted)] mt-2">
          — Upwork client, AI Chatbot Development
        </p>
      </motion.div>

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
        <p className="text-[var(--ink-muted)] max-w-lg mx-auto mb-3 relative z-10">
          Open to full-time AI Engineer / GenAI Developer roles and freelance
          work on agent systems and RAG pipelines.
        </p>
        <p className="font-mono text-xs text-[var(--mint)] mb-9 relative z-10">
          Currently taking on select freelance projects — usually respond within 24h.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          <a
            href="mailto:ayushsinghtomar22@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--ink)] text-[var(--bg)] font-medium text-sm hover:scale-[1.03] transition-transform"
          >
            <Mail size={16} /> say hello
          </a>
          <a
            href="https://github.com/ayush-s-tomar"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-mono hover:border-[var(--mint)] transition-colors"
          >
            <GithubIcon size={16} /> github
          </a>
          <a
            href="https://www.linkedin.com/in/ayushsinghtomar"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-mono hover:border-[var(--mint)] transition-colors"
          >
            <ExternalLink size={16} /> linkedin
          </a>
          <a
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