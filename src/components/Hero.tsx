import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Instagram, Download, GraduationCap, BookOpen, Users, FolderOpen, HeartHandshake } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import profileImage from '/me.png';
import ProfileCard from './ProfileCard';
import { useLanguage } from '@/i18n/LanguageContext';
import { PROFILE_CONTACT, PROFILE_NAME } from '@/data/profile';

const DiscordIcon = () => (
  <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const Hero = ({ onViewProjects }: { onViewProjects?: () => void }) => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Hamza-Kitana', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/hamza-kitana-384339296/', label: 'LinkedIn' },
    { icon: Facebook, url: 'https://www.facebook.com/hamzanaell', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/hamza_aldaboor/', label: 'Instagram' },
    { icon: DiscordIcon, url: 'https://discord.gg/4TzcyeWR4u', label: 'Discord' },
  ];

  return (
    <section className="h-svh flex items-center justify-center py-3 sm:py-4 md:py-6 relative w-full overflow-hidden">
      <div className="section-full h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-3 sm:space-y-4 md:space-y-5 ms-2 sm:ms-4 md:ms-8 lg:ms-12 xl:ms-16"
          >
            <div className="md:hidden flex justify-start">
              <img
                src={profileImage}
                alt={PROFILE_NAME}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover object-top border border-primary/30 shadow-[0_0_24px_hsl(var(--primary)/0.25)]"
              />
            </div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gradient glow-text">{PROFILE_NAME}</span>
            </motion.h1>

            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-secondary glow-text inline-block leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t.hero.role}
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {t.hero.title}
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {t.hero.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="p-3 sm:p-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground">
                        {t.hero.lecturer}
                      </h3>
                      <span className="px-2 py-0.5 text-[10px] sm:text-xs rounded-full bg-primary/20 text-primary font-medium">
                        {t.hero.available}
                      </span>
                    </div>
                    <p className="hidden md:block text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {t.hero.lecturerDesc}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <BookOpen className="w-4 h-4 text-primary" />
                        <span>{t.hero.programming}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{t.hero.lifeDev}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-2.5 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-2.5 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-row flex-wrap gap-3"
            >
              <Button
                size="lg"
                className="flex-1 sm:flex-none bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                asChild
              >
                <a href="/Hamza.pdf" download>
                  <Download className="me-2 h-5 w-5" />
                  {t.hero.downloadCv}
                </a>
              </Button>
              {onViewProjects && (
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 sm:flex-none border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={onViewProjects}
                >
                  <FolderOpen className="me-2 h-5 w-5" />
                  {t.hero.viewProjects}
                </Button>
              )}
              <Button
                size="lg"
                variant="outline"
                className="flex-1 sm:flex-none border-2 border-rose-400/60 text-rose-300 hover:bg-rose-500/15 hover:text-rose-200 hover:border-rose-300/70 transition-all"
                asChild
              >
                <a href={PROFILE_CONTACT.donate} target="_blank" rel="noopener noreferrer">
                  <HeartHandshake className="me-2 h-5 w-5" />
                  {t.contact.donate}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            <div className="hero-profile relative w-full max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
              <ProfileCard
                className="pc-details-bottom"
                name={PROFILE_NAME}
                title={t.hero.role}
                handle="Hamza-Kitana"
                status={t.hero.online}
                contactText={t.hero.contactMe}
                avatarUrl={profileImage}
                showUserInfo={false}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  window.location.href = 'mailto:hamzanael@hotmail.com';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
