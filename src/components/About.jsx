import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-sm text-[var(--mint)] mb-3">$ cat about.md</p>
          <h2 className="font-display font-semibold text-4xl tracking-tight">
            From coursework to production.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-[var(--ink-muted)] leading-relaxed text-lg"
        >
          <p>
            I'm a final-year B.Tech IT student at MITS Gwalior, but most of what
            I've learned about building AI systems came from shipping — nine-plus
            deployed projects, each one taken from an idea to a live URL.
          </p>
          <p>
            My focus is <span className="text-[var(--ink)]">multi-agent orchestration</span> —
            LangGraph and CrewAI systems that research, score, and act — paired with{' '}
            <span className="text-[var(--ink)]">RAG pipelines</span> that hold up
            under real documents, not just clean demo PDFs. I debug production
            issues (Supabase cold starts, Groq model decommissions, chunking
            accuracy) the same way I design features: methodically, with metrics.
          </p>
          <p>
            Currently freelancing on multi-agent systems and RAG builds while
            looking for a full-time AI Engineer / GenAI Developer role.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
