import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import type { Project } from '@/data/projects';
import { pick } from '@/lib/localized';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  const { locale } = useLanguage();
  const title = pick(project.title, locale);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <SpotlightCard
        className="group cursor-pointer relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-border/60 hover:border-primary/50 transition-all duration-500"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

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
