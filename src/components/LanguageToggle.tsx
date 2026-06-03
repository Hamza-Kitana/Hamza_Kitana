import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export const LanguageToggle = () => {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <motion.button
      type="button"
      onClick={toggleLocale}
      aria-label={t.language.label}
      title={t.language.switchTo}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 end-4 z-[60] flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/90 backdrop-blur-md border border-border hover:border-primary text-foreground shadow-lg hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] transition-all duration-300"
    >
      <Languages className="w-4 h-4 text-primary shrink-0" />
      <span className="text-sm font-semibold tracking-wide">
        {locale === 'en' ? 'AR' : 'EN'}
      </span>
      <span className="hidden sm:inline text-xs text-muted-foreground border-s border-border ps-2 ms-0.5">
        {t.language.switchTo}
      </span>
    </motion.button>
  );
};
