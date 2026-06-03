import { motion } from 'framer-motion';
import { FolderKanban, Layers, Grid3X3 } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface ProjectsStatsProps {
  total: number;
  erp: number;
  more: number;
}

export const ProjectsStats = ({ total, erp, more }: ProjectsStatsProps) => {
  const { t } = useLanguage();

  const stats = [
    {
      key: 'total',
      value: total,
      label: t.projects.statsTotal,
      icon: FolderKanban,
      accent: 'from-primary to-secondary',
      border: 'border-primary/30',
      bg: 'bg-primary/5',
    },
    {
      key: 'erp',
      value: erp,
      label: t.projects.statsErp,
      icon: Layers,
      accent: 'from-violet-400 to-purple-500',
      border: 'border-violet-400/30',
      bg: 'bg-violet-500/5',
    },
    {
      key: 'more',
      value: more,
      label: t.projects.statsMore,
      icon: Grid3X3,
      accent: 'from-secondary to-cyan-400',
      border: 'border-secondary/30',
      bg: 'bg-secondary/5',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-3 md:gap-4 mb-6 sm:mb-10 md:mb-12 max-w-lg sm:max-w-none mx-auto sm:mx-0"
    >
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.key}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className={`group relative flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 px-2 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 rounded-xl sm:rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-md sm:min-w-[7.5rem] transition-shadow duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.12)]`}
          >
            <div
              className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.accent} shadow-lg shrink-0`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-background" />
            </div>
            <div className="text-center sm:text-start min-w-0">
              <p
                className={`text-xl sm:text-2xl md:text-3xl font-bold tabular-nums leading-none bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}
              >
                {stat.value}
              </p>
              <p className="text-[9px] sm:text-[11px] md:text-xs text-muted-foreground font-medium mt-0.5 sm:mt-1 leading-tight">
                {stat.label}
              </p>
            </div>
            {stat.key === 'total' && (
              <div className="absolute -top-px inset-x-3 sm:inset-x-4 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
