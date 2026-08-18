import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { Hero } from '@/components/Hero';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { ProjectCard } from '@/components/ProjectCard';
import { ErpProjectsSection } from '@/components/ErpProjectsSection';
import { ProjectModal } from '@/components/ProjectModal';
import { FloatingNav } from '@/components/FloatingNav';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ProjectsStats } from '@/components/ProjectsStats';
import { Contact } from '@/components/Contact';
import { projects } from '@/data/projects';
import type { Project } from '@/data/projects';
import { useLanguage } from '@/i18n/LanguageContext';
import { PROFILE_NAME } from '@/data/profile';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  const featured = projects.filter((p) => p.category === 'featured');
  const erp = projects.filter((p) => p.category === 'erp');
  const other = projects.filter((p) => !p.category);
  const moreProjects = [...featured, ...other];

  const renderProjectGrid = (list: Project[], startIndex: number) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2.5 sm:gap-5 lg:gap-6">
      {list.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={startIndex + index}
          onClick={() => setSelectedProject(project)}
        />
      ))}
    </div>
  );

  return (
    <div className={`${activeSection === 'home' ? 'h-svh overflow-hidden' : 'min-h-screen'} relative`}>
      <AnimatedBackground />
      <LanguageToggle />
      <FloatingNav onSectionChange={setActiveSection} activeSection={activeSection} />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            {activeSection === 'home' && (
              <section id="home">
                <Hero onViewProjects={() => setActiveSection('projects')} />
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
              <section id="projects" className="py-10 sm:py-16 md:py-20 w-full bg-muted/20">
                <div className="section-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4"
                  >
                    <ProjectsStats
                      total={projects.length}
                      erp={erp.length}
                      more={moreProjects.length}
                    />
                    <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold px-1">
                      <span className="text-gradient glow-text">{t.projects.heading}</span>
                    </h2>
                    <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-1 leading-relaxed">
                      {t.projects.subheading}
                    </p>
                  </motion.div>

                  <div className="space-y-8 sm:space-y-12 md:space-y-16">
                    {erp.length > 0 && (
                      <ErpProjectsSection
                        projects={erp}
                        onSelect={setSelectedProject}
                      />
                    )}

                    {moreProjects.length > 0 && (
                      <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gradient">
                          {t.projects.sectionMore}
                        </h3>
                        {renderProjectGrid(moreProjects, erp.length)}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'contact' && (
              <section id="contact">
                <Contact />
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {activeSection !== 'home' && (
        <footer className="border-t border-border py-8 px-4">
          <div className="container mx-auto max-w-7xl text-center text-muted-foreground">
            <p>
              © 2025 {PROFILE_NAME}. {t.footer.rightsSuffix}
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;
