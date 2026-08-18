import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Play, ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { pick, pickList } from '@/lib/localized';
import { useLanguage } from '@/i18n/LanguageContext';

const erpAccents: Record<number, { bar: string; ring: string; soft: string }> = {
  30: { bar: 'from-amber-400 to-orange-500', ring: 'border-amber-400/40', soft: 'bg-amber-500/10 text-amber-300' },
  31: { bar: 'from-sky-400 to-blue-500', ring: 'border-sky-400/40', soft: 'bg-sky-500/10 text-sky-300' },
  32: { bar: 'from-emerald-400 to-teal-500', ring: 'border-emerald-400/40', soft: 'bg-emerald-500/10 text-emerald-300' },
  33: { bar: 'from-violet-400 to-purple-500', ring: 'border-violet-400/40', soft: 'bg-violet-500/10 text-violet-300' },
  34: { bar: 'from-cyan-400 to-primary', ring: 'border-cyan-400/40', soft: 'bg-cyan-500/10 text-cyan-300' },
};

interface ErpProjectsSectionProps {
  projects: Project[];
  onSelect: (project: Project) => void;
}

export const ErpProjectsSection = ({ projects, onSelect }: ErpProjectsSectionProps) => {
  const { t, locale } = useLanguage();
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const accent = erpAccents[active?.id] ?? erpAccents[30];

  if (projects.length === 0 || !active) return null;

  const fullName = active.fullName ? pick(active.fullName, locale) : pick(active.title, locale);
  const meaning = active.meaning ? pick(active.meaning, locale) : pick(active.description, locale);
  const highlights = pickList(active.details, locale).slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute -inset-px rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 opacity-60 blur-sm pointer-events-none" />

      <div className="relative rounded-2xl sm:rounded-3xl border border-primary/25 bg-gradient-to-br from-card/80 via-background/90 to-card/70 backdrop-blur-xl overflow-hidden shadow-[0_0_60px_hsl(var(--primary)/0.08)]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        <div className="px-3 py-5 sm:px-5 sm:py-8 md:px-10 md:py-10 space-y-6 sm:space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
            <div className="space-y-2 sm:space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                {t.projects.erpSuiteBadge}
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold">
                <span className="text-gradient glow-text">{t.projects.sectionErp}</span>
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                {t.projects.sectionErpSubtitle}
              </p>
            </div>
            <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-muted/30 border border-border/60 text-xs sm:text-sm text-muted-foreground">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
              <span>
                {projects.length} {t.projects.erpModules}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] sm:text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              {t.projects.erpPickModule}
            </p>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 -mx-0.5 px-0.5">
              {projects.map((project) => {
                const selected = project.id === active.id;
                const tone = erpAccents[project.id];
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    className={`shrink-0 rounded-xl border px-3.5 py-2.5 sm:px-4 sm:py-3 text-start transition-all ${
                      selected
                        ? `${tone?.ring ?? 'border-primary/50'} bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.12)]`
                        : 'border-border/60 bg-background/40 hover:border-primary/30'
                    }`}
                  >
                    <span className={`block text-[10px] font-bold uppercase tracking-wider ${selected ? 'text-primary' : 'text-muted-foreground'}`}>
                      {project.acronym ?? pick(project.title, locale)}
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-foreground mt-0.5 max-w-[7.5rem] sm:max-w-none truncate">
                      {project.fullName ? pick(project.fullName, locale) : pick(project.title, locale)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 lg:gap-8 items-start"
            >
              <div className="space-y-5">
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${accent.bar}`} />
                <div className="space-y-2">
                  <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border ${accent.ring} ${accent.soft}`}>
                    {active.acronym}
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">{fullName}</h4>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/50 p-4 sm:p-5 space-y-2">
                  <p className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                    {t.projects.erpWhatItMeans}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{meaning}</p>
                </div>

                <ul className="space-y-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${accent.bar}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onSelect(active)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {t.projects.erpViewSystem}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-muted-foreground">
                  <Play className="h-4 w-4 text-primary" />
                  {t.projects.erpWatchIntro}
                </div>
                {active.videoId ? (
                  <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.35)] aspect-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${active.videoId}`}
                      title={`${fullName} intro`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <img
                    src={active.image}
                    alt={fullName}
                    className="w-full aspect-video object-cover rounded-2xl border border-border/70"
                  />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
