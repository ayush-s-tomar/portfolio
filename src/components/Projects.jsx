import { motion } from 'framer-motion';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const flagship = projects.filter((p) => p.status === 'live');
  const secondary = projects.filter((p) => p.status === 'secondary');

  return (
    <section id="work" className="relative py-28 px-6 max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-sm text-[var(--mint)] mb-3"
      >
        $ ls projects/ --deployed
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="font-display font-semibold text-4xl md:text-5xl mb-14 tracking-tight"
      >
        Shipped, not just prototyped.
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-5">
        {flagship.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs text-[var(--ink-muted)] mt-16 mb-6"
      >
        $ ls projects/ --more
      </motion.p>
      <div className="grid md:grid-cols-2 gap-5">
        {secondary.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
