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
      className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12"
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
            className={`group relative flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-md min-w-[7.5rem] transition-shadow duration-300 hover:shadow-[0_0_24px_hsl(var(--primary)/0.12)]`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br ${stat.accent} shadow-lg shrink-0`}
            >
              <Icon className="w-5 h-5 text-background" />
            </div>
            <div className="text-start">
              <p
                className={`text-2xl md:text-3xl font-bold tabular-nums leading-none bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}
              >
                {stat.value}
              </p>
              <p className="text-[11px] md:text-xs text-muted-foreground font-medium mt-1 whitespace-nowrap">
                {stat.label}
              </p>
            </div>
            {stat.key === 'total' && (
              <div className="absolute -top-px inset-x-4 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
