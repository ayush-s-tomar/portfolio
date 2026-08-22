import { motion } from 'framer-motion';

const incidents = [
  {
    title: 'Groq deprecated a model mid-project',
    body: "llama-3.1-8b-instant got decommissioned while it was live in two of my projects. Migrated both chat and eval pipelines to openai/gpt-oss-20b with zero downtime, then hardened request validation so a silent model-name change couldn't do this again.",
  },
  {
    title: 'Chunking looked fine until I measured it',
    body: "AskMyDocs' chunk-match confidence was stuck at 29%. Traced it to raw character-slicing chunks with no sentence or word-boundary awareness. Rebuilt it section-aware and word-boundary-safe — confidence jumped to 62%.",
  },
  {
    title: 'A bug in the bug-catcher',
    body: 'Built an LLM-as-judge eval harness to catch RAG regressions automatically. Then found the judge itself was scoring answers against a shorter context slice than the answer model actually saw — silently penalizing correct answers as unsupported.',
  },
  {
    title: 'PowerShell writes to wherever it feels like',
    body: 'Out-File and Set-Content were silently writing to the wrong working directory and corrupting UTF-8 with BOM markers. Now I run pwd before every file write and use [System.IO.File]::WriteAllText() with explicit no-BOM encoding.',
  },
];

export default function ShippingLog() {
  return (
    <section id="shipping-log" className="relative py-28 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm text-[var(--mint)] mb-3"
      >
        $ tail -f incidents.log
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display font-semibold text-4xl md:text-5xl mb-4 tracking-tight"
      >
        How I actually ship.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-[var(--ink-muted)] max-w-2xl mb-14"
      >
        Not a highlight reel — real incidents from real projects, and what fixing them actually looked like.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-5">
        {incidents.map((incident, i) => (
          <motion.div
            key={incident.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: 'easeOut' }}
            whileHover={{ y: -4 }}
            className="rounded-2xl glass p-6 border border-[var(--glass-border)] hover:border-[var(--mint)] transition-colors duration-300"
          >
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-[var(--mint)] mt-1 shrink-0">
                [{String(i + 1).padStart(2, '0')}]
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 leading-snug">
                  {incident.title}
                </h3>
                <p className="text-sm text-[var(--ink-muted)] leading-relaxed">
                  {incident.body}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
