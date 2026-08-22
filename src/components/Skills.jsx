import { motion } from 'framer-motion';
import { skills } from '../data';

export default function Skills() {
  return (
    <section id="stack" className="relative py-28 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm text-[var(--mint)] mb-3"
      >
        $ pip freeze | grep stack
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display font-semibold text-4xl md:text-5xl mb-14 tracking-tight"
      >
        The stack behind it.
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="rounded-2xl glass p-5 hover:border-[var(--violet)] transition-colors duration-300"
          >
            <p className="font-mono text-xs text-[var(--ink-muted)] mb-3">{category}</p>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="text-sm px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
