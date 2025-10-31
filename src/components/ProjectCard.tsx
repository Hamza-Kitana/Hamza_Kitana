import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <SpotlightCard 
        className="group cursor-pointer relative overflow-hidden h-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-500"
        onClick={onClick}
        spotlightColor="rgba(0, 229, 255, 0.18)"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative overflow-hidden bg-card/10 rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-110 bg-card/20 p-2"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent pointer-events-none" />
        </div>
        
        <div className="relative p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              <motion.div
                className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Project {String(index + 1).padStart(2, '0')}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gradient">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {project.subtitle}
              </p>
            </div>

            <motion.div
              className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
              whileHover={{ rotate: 45, scale: 1.1 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>

          <p className="text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-secondary/20 text-secondary text-xs font-medium border border-secondary/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-3 py-1 rounded-lg bg-accent/20 text-accent text-xs font-medium">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          <div className="pt-4 flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
            View Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </SpotlightCard>
    </motion.div>
  );
};
