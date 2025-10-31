import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { Badge } from './ui/badge';
import { softSkills, hardSkills } from '@/data/skills';
import { Brain, Code, Zap } from 'lucide-react';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient glow-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SpotlightCard className="p-8 bg-card/50 backdrop-blur-sm border border-border" spotlightColor="rgba(0, 229, 255, 0.15)">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Hard Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            {hardSkills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <SpotlightCard className="p-6 bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 h-full" spotlightColor="rgba(0, 229, 255, 0.12)">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                      {groupIndex % 2 === 0 ? <Code className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                    </div>
                    <h4 className="text-lg font-semibold text-gradient">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge 
                          className="px-3 py-1 text-xs bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
