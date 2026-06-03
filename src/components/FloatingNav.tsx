import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface FloatingNavProps {
  onSectionChange: (sectionId: string) => void;
  activeSection: string;
}

export const FloatingNav = ({ onSectionChange, activeSection }: FloatingNavProps) => {
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', icon: Home, label: t.nav.home },
    { id: 'about', icon: User, label: t.nav.about },
    { id: 'skills', icon: Code, label: t.nav.skills },
    { id: 'experience', icon: Briefcase, label: t.nav.experience },
    { id: 'projects', icon: FolderOpen, label: t.nav.projects },
    { id: 'contact', icon: Mail, label: t.nav.contact },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="fixed start-2 sm:start-4 md:start-6 lg:start-8 top-1/2 -translate-y-1/2 z-50 block"
    >
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`group relative p-2 sm:p-3 md:p-4 rounded-full transition-all duration-500 ${
              activeSection === item.id
                ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.6)] scale-105 sm:scale-110'
                : 'bg-card/80 backdrop-blur-sm text-muted-foreground hover:bg-card hover:text-foreground border border-border hover:scale-105'
            }`}
            whileHover={{
              scale: activeSection === item.id ? 1.1 : 1.05,
              rotate: activeSection === item.id ? 0 : 3,
              x: 5,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: 0,
              scale: activeSection === item.id ? 1.05 : 1,
            }}
            transition={{
              delay: 1.2 + index * 0.1,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />

            <motion.div
              className="absolute start-full ms-4 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              whileHover={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { duration: 0.2 },
              }}
            >
              {item.label}
              <div className="absolute start-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-card border-s border-b border-border rotate-45" />
            </motion.div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
