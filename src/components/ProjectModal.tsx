import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import type { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-primary/30">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold"
              >
                Project {String(project.id).padStart(2, '0')}
              </motion.div>
              
              <DialogTitle className="text-3xl font-bold text-gradient pr-8">
                {project.title}
              </DialogTitle>
              
              <p className="text-muted-foreground text-lg">
                {project.subtitle}
              </p>
            </div>
          </div>
        </DialogHeader>

        <motion.div 
          className="space-y-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Technologies
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
              Technical Details
            </h3>
            <ul className="space-y-2">
              {project.details.map((detail, index) => (
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

          {project.challenges.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-accent" />
                Challenges & Solutions
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
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
              Results & Impact
            </h3>
            <ul className="space-y-2">
              {project.results.map((result, index) => (
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
