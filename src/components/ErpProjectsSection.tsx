import { motion } from 'framer-motion';
import { Layers, Sparkles } from 'lucide-react';
import type { Project } from '@/data/projects';
import { pick } from '@/lib/localized';
import { useLanguage } from '@/i18n/LanguageContext';

interface ErpProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  accent?: string;
}

const erpAccents: Record<number, string> = {
  30: 'from-amber-400 to-orange-500',
  31: 'from-sky-400 to-blue-500',
  32: 'from-emerald-400 to-teal-500',
  33: 'from-violet-400 to-purple-500',
  34: 'from-cyan-400 to-primary',
};

export const ErpProjectCard = ({ project, index, onClick }: ErpProjectCardProps) => {
  const { locale } = useLanguage();
  const title = pick(project.title, locale);
  const accent = erpAccents[project.id] ?? 'from-primary to-secondary';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="group relative w-full aspect-[4/5] text-start cursor-pointer rounded-xl overflow-hidden border border-primary/25 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]"
    >
      <div className={`absolute top-0 inset-x-0 h-1 z-10 bg-gradient-to-r ${accent}`} />

      <img
        src={project.image}
        alt={title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5 pt-16">
        <h4 className="text-sm md:text-base font-bold text-white leading-snug line-clamp-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>
      </div>
    </motion.button>
  );
};

interface ErpProjectsSectionProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ErpProjectsSection = ({ projects, onSelect }: ErpProjectsSectionProps) => {
  const { t } = useLanguage();

  if (projects.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 opacity-60 blur-sm pointer-events-none" />

      <div className="relative rounded-3xl border border-primary/25 bg-gradient-to-br from-card/80 via-background/90 to-card/70 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.08)]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

        <div className="px-5 py-8 md:px-10 md:py-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                {t.projects.erpSuiteBadge}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient glow-text">{t.projects.sectionErp}</span>
              </h3>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
                {t.projects.sectionErpSubtitle}
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/30 border border-border/60 text-sm text-muted-foreground">
              <Layers className="w-4 h-4 text-primary" />
              <span>
                {projects.length} {t.projects.erpModules}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
            {projects.map((project, index) => (
              <ErpProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={() => onSelect(project)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
