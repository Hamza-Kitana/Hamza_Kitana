import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { FloatingNav } from '@/components/FloatingNav';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <FloatingNav onSectionChange={handleSectionChange} activeSection={activeSection} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
          {activeSection === 'home' && (
            <section id="home">
              <Hero />
            </section>
          )}
          
          {activeSection === 'about' && (
            <section id="about">
              <AboutMe />
            </section>
          )}
          
          {activeSection === 'skills' && (
            <section id="skills">
              <Skills />
            </section>
          )}
          
          {activeSection === 'experience' && (
            <section id="experience">
              <Experience />
            </section>
          )}

          {activeSection === 'projects' && (
            <section id="projects" className="py-20 px-4 bg-muted/20">
              <div className="container mx-auto max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16 space-y-4"
                >
                  <h2 className="text-4xl md:text-6xl font-bold">
                    <span className="text-gradient glow-text">Featured Projects</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Explore my portfolio of innovative solutions across web development, 
                    AI integration, and enterprise systems
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      onClick={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === 'contact' && (
            <section id="contact" className="py-20 px-4 border-t border-border">
              <div className="container mx-auto max-w-4xl text-center space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl md:text-5xl font-bold text-gradient glow-text">
                    Let's Build Something Amazing
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Available for freelance projects and full-time opportunities
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <a
                    href="mailto:hamzanael@hotmail.com"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="tel:+971588822401"
                    className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    +971 588 822 401
                  </a>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground"
                >
                  Based in Dubai, UAE • Available Worldwide
                </motion.p>
              </div>
            </section>
          )}
          </motion.div>
        </AnimatePresence>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <footer className="border-t border-border py-8 px-4">
        <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
          <p>© 2025 Hamza Kitana. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
