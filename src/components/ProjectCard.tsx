import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import type { Project } from '@/data/projects';
import { pick } from '@/lib/localized';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const LiveBadge = ({ compact = false }: { compact?: boolean }) => {
  const { t } = useLanguage();
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/15 text-emerald-300 font-semibold uppercase tracking-wider ${
        compact ? 'text-[9px] px-1.5 py-0.5' : 'text-[10px] px-2 py-0.5'
      }`}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      {t.projects.badgeLive}
    </span>
  );
};

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const { locale } = useLanguage();
  const title = pick(project.title, locale);
  const subtitle = pick(project.subtitle, locale);
  const delay = Math.min(index * 0.04, 0.24);

  const openLive = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.liveUrl) window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <button
        type="button"
        onClick={onClick}
        className="sm:hidden group w-full flex items-center gap-3 p-2.5 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm text-start transition-all duration-300 active:scale-[0.98] hover:border-primary/40 hover:bg-card/80"
      >
        <div className="relative shrink-0 w-[4.5rem] h-[4.5rem] rounded-lg overflow-hidden ring-1 ring-border/50">
          <img
            src={project.image}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-start gap-2">
            <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1">
              {title}
            </h3>
            {project.liveUrl && <LiveBadge compact />}
          </div>
          <p className="text-[11px] text-muted-foreground line-clamp-1">{subtitle}</p>
          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-0.5">
              {project.technologies.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-1.5 py-0.5 rounded-md bg-primary/10 text-primary/90 border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <ChevronRight className="w-4 h-4 shrink-0 text-muted-foreground/60 group-hover:text-primary transition-colors rtl:rotate-180" />
      </button>

      <SpotlightCard
        className="hidden sm:block group cursor-pointer relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border/60 hover:border-primary/50 transition-all duration-500"
        onClick={onClick}
        spotlightColor="rgba(0, 229, 255, 0.12)"
      >
        <img
          src={project.image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

        {project.liveUrl && (
          <div className="absolute top-3 start-3 z-10">
            <LiveBadge />
          </div>
        )}

        {project.liveUrl && (
          <button
            type="button"
            onClick={openLive}
            className="absolute top-3 end-3 z-10 p-2 rounded-full bg-black/40 border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
            aria-label="Open live site"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        )}

        <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 pt-16">
          <h3 className="text-sm md:text-base lg:text-lg font-bold text-white leading-snug line-clamp-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      </SpotlightCard>
    </motion.div>
  );
};
