import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Copy, Check, Github, Linkedin, Facebook, Instagram, HeartHandshake, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { PROFILE_CONTACT, PROFILE_NAME } from '@/data/profile';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Instagram: Instagram,
  Discord: DiscordIcon,
};

export const Contact = () => {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = PROFILE_CONTACT.emailHref;
    }
  };

  const location = locale === 'ar' ? PROFILE_CONTACT.locationAr : PROFILE_CONTACT.locationEn;

  return (
    <section className="relative py-14 sm:py-20 w-full">
      <div className="section-full">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 via-background/90 to-card/70 backdrop-blur-xl px-4 py-10 sm:px-8 sm:py-14 md:px-12">
          <div className="pointer-events-none absolute -top-24 -end-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -start-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

          <div className="relative max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary/80 font-semibold">
                {PROFILE_NAME}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gradient glow-text leading-[1.45] pt-[0.2em] pb-[0.08em]">
                {t.contact.heading}
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.contact.subheading}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto"
            >
              <a
                href={PROFILE_CONTACT.phoneTel}
                className="group relative overflow-hidden rounded-2xl px-6 py-5 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-[0_0_32px_hsl(var(--primary)/0.28)] hover:opacity-95 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-black/15">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="text-start">
                    <span className="block text-lg leading-tight">{t.contact.callNow}</span>
                    <span className="block text-xs font-medium opacity-80">{t.contact.callHint}</span>
                  </span>
                </div>
              </a>

              <a
                href={PROFILE_CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl px-6 py-5 border-2 border-[#25D366]/70 bg-[#25D366]/10 text-[#4ADE80] font-semibold hover:bg-[#25D366]/20 transition-all active:scale-[0.98]"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/20">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span className="text-start">
                    <span className="block text-lg leading-tight">{t.contact.whatsapp}</span>
                    <span className="block text-xs font-medium opacity-80">{t.contact.whatsappHint}</span>
                  </span>
                </div>
              </a>
            </motion.div>

            <motion.a
              href={PROFILE_CONTACT.donate}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="group relative mx-auto flex max-w-2xl items-center gap-4 overflow-hidden rounded-2xl border border-rose-400/30 bg-gradient-to-r from-rose-500/15 via-amber-400/10 to-primary/10 px-5 py-4 sm:px-6 sm:py-5 text-start hover:border-rose-300/50 hover:shadow-[0_0_32px_rgba(251,113,133,0.18)] transition-all active:scale-[0.99]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-500/20 text-rose-300">
                <HeartHandshake className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base sm:text-lg font-semibold text-foreground">
                  {t.contact.donate}
                </span>
                <span className="block text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {t.contact.donateHint} — creators.sa/hamzakitana
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-rose-400/20 px-3 py-1.5 text-xs sm:text-sm font-semibold text-rose-200">
                {t.contact.donateCta}
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <a
                href={PROFILE_CONTACT.phoneTel}
                className="rounded-2xl border border-border/70 bg-background/50 p-4 sm:p-5 text-start hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </span>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {t.contact.phone}
                  </p>
                </div>
                <p className="text-foreground font-semibold" dir="ltr">
                  {PROFILE_CONTACT.phoneDisplay}
                </p>
              </a>

              <div className="rounded-2xl border border-border/70 bg-background/50 p-4 sm:p-5 text-start">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </span>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                      {t.contact.email}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    aria-label={t.contact.copyEmail}
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                <a
                  href={PROFILE_CONTACT.emailHref}
                  className="text-foreground font-semibold break-all hover:text-primary transition-colors"
                >
                  {PROFILE_CONTACT.email}
                </a>
              </div>

              <div className="rounded-2xl border border-border/70 bg-background/50 p-4 sm:p-5 text-start">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {t.contact.basedIn}
                  </p>
                </div>
                <p className="text-foreground font-semibold">{location}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.contact.availableWorldwide}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="space-y-4"
            >
              <p className="text-sm text-muted-foreground">{t.contact.socials}</p>
              <div className="flex flex-wrap justify-center gap-3">
                {PROFILE_CONTACT.socials.map((social) => {
                  const Icon = socialIcons[social.label];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.18)] transition-all"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
