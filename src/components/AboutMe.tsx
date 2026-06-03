import { motion } from 'framer-motion';
import { Code2, Briefcase, TrendingUp, Award, GraduationCap } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '@/i18n/LanguageContext';

export const AboutMe = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Code2, ...t.about.highlights.fullStack },
    { icon: Briefcase, ...t.about.highlights.enterprise },
    { icon: TrendingUp, ...t.about.highlights.marketing },
    { icon: Award, ...t.about.highlights.leadership },
    { icon: GraduationCap, ...t.about.highlights.lecturer },
  ];

  return (
    <section id="about" className="py-20 w-full">
      <div className="section-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
            <span className="text-gradient glow-text">{t.about.heading}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.about.subheading}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-12 gap-6 lg:gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="xl:col-span-5"
          >
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border h-full">
              <h3 className="text-2xl font-bold text-gradient mb-6">{t.about.summaryTitle}</h3>
              <p className="text-muted-foreground leading-relaxed space-y-4">
                <span className="block">{t.about.summary1}</span>
                <span className="block">{t.about.summary2}</span>
                <span className="block">{t.about.summary3}</span>
                <span className="block">{t.about.summary4}</span>
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 xl:col-span-7"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-6 bg-gradient-to-r from-card/80 to-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <highlight.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{highlight.title}</h4>
                      <p className="text-muted-foreground text-sm">{highlight.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
