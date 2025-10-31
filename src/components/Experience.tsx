import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { Badge } from './ui/badge';
import { experiences } from '@/data/experience';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient glow-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across multiple industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-[50%] md:pl-0' : 'md:pl-[50%] md:pr-0'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_20px_hsl(var(--primary))] z-10" />

                <SpotlightCard className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-500 relative overflow-hidden group" spotlightColor="rgba(0, 229, 255, 0.12)">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Building2 className="w-5 h-5 text-primary" />
                          <h3 className="text-2xl font-bold text-gradient">{exp.company}</h3>
                          {exp.current && (
                            <Badge className="bg-primary/10 text-primary border-primary/30">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-xl font-semibold text-foreground">{exp.position}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achievementIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
