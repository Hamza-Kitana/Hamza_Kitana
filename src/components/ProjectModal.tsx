import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, TrendingUp, ExternalLink, KeyRound } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import type { Project } from '@/data/projects';
import { pick, pickList } from '@/lib/localized';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { locale, t } = useLanguage();

  if (!project) return null;

  const title = pick(project.title, locale);
  const subtitle = pick(project.subtitle, locale);
  const description = pick(project.description, locale);
  const details = pickList(project.details, locale);
  const challenges = pickList(project.challenges, locale);
  const results = pickList(project.results, locale);

  return (
    <Dialog open={!!project} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="w-[calc(100vw-1rem)] sm:w-full max-w-4xl max-h-[92dvh] overflow-y-auto bg-card/95 backdrop-blur-xl border-primary/30 p-4 sm:p-6 rounded-2xl sm:rounded-lg">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
              <div className="flex flex-wrap gap-2">
                {project.category === 'featured' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block px-4 py-1 rounded-full bg-accent/15 text-accent text-sm font-semibold border border-accent/30"
                  >
                    {t.projects.badgeFeatured}
                  </motion.div>
                )}
                {project.category === 'erp' && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-block px-4 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-semibold border border-secondary/30"
                  >
                    {t.projects.badgeErp}
                  </motion.div>
                )}
                {project.liveUrl && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-sm font-semibold border border-emerald-400/30"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {t.projects.badgeLive}
                  </motion.div>
                )}
              </div>

              <DialogTitle className="text-xl sm:text-3xl font-bold text-gradient pe-8 leading-tight">{title}</DialogTitle>

              <p className="text-muted-foreground text-sm sm:text-lg">{subtitle}</p>
            </div>
          </div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="relative -mx-4 sm:-mx-6 mt-2 h-36 sm:h-48 md:h-56 overflow-hidden rounded-xl sm:rounded-xl md:mx-0"
        >
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 end-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              {t.projects.visitLive}
            </a>
          )}
        </motion.div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-primary/30 bg-gradient-to-r from-primary/15 to-secondary/10 px-4 py-3 hover:border-primary/60 transition-colors"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">{t.projects.visitLive}</p>
              <p className="text-xs text-muted-foreground truncate">{project.liveUrl.replace(/^https?:\/\//, '')}</p>
            </div>
            <ExternalLink className="w-4 h-4 shrink-0 text-primary" />
          </a>
        )}

        {project.demoHint && (
          <div className="mt-3 flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-500/10 px-4 py-3">
            <KeyRound className="w-4 h-4 shrink-0 text-emerald-300 mt-0.5" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">{t.projects.demoAccess}</p>
              <p className="text-sm text-foreground mt-0.5">{pick(project.demoHint, locale)}</p>
            </div>
          </div>
        )}

        <motion.div
          className="space-y-4 sm:space-y-6 mt-4 sm:mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-3">
            <h3 className="text-base sm:text-xl font-semibold text-foreground">{t.projects.modal.overview}</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {project.meaning && (
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2">
              <p className="text-xs uppercase tracking-wider text-primary font-semibold">
                {project.acronym ? `${project.acronym} — ${t.projects.modal.meaning}` : t.projects.modal.meaning}
              </p>
              <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                {pick(project.meaning, locale)}
              </p>
            </div>
          )}

          {project.videoId && (
            <div className="space-y-3">
              <h3 className="text-base sm:text-xl font-semibold text-foreground">{t.projects.modal.video}</h3>
              <div className="relative overflow-hidden rounded-xl border border-border/70 bg-black aspect-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${project.videoId}`}
                  title={`${title} intro`}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
              {t.projects.modal.technologies}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border border-primary/30 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              {t.projects.modal.details}
            </h3>
            <ul className="space-y-2">
              {details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {challenges.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                {t.projects.modal.challenges}
              </h3>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="p-4 rounded-lg bg-accent/5 border border-accent/20 text-muted-foreground"
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              {t.projects.modal.results}
            </h3>
            <ul className="space-y-2">
              {results.map((result, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span>{result}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
