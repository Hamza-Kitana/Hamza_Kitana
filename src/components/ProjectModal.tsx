import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-primary/30">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
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
              </div>

              <DialogTitle className="text-3xl font-bold text-gradient pe-8">{title}</DialogTitle>

              <p className="text-muted-foreground text-lg">{subtitle}</p>
            </div>
          </div>
        </DialogHeader>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="relative -mx-6 mt-2 h-48 md:h-56 overflow-hidden rounded-none md:rounded-xl md:mx-0"
        >
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          className="space-y-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">{t.projects.modal.overview}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

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
