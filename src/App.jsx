import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ChevronRight, Briefcase, Award } from 'lucide-react';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import PublicationCard from './components/PublicationCard';
import ProjectCard from './components/ProjectCard';
import SkillTag from './components/SkillTag';
import { portfolioData, publications, projects, skillCategories } from './data';

function App() {
  return (
    <div className="min-h-screen bg-dark-neutral-900 text-gray-200 font-sans selection:bg-accent-blue selection:text-white">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section id="about" className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-start min-h-[85vh] justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-neutral-800/80 border border-dark-neutral-700 text-accent-blue text-sm font-medium shadow-sm"
          >
            <Award className="w-4 h-4" />
            <span>{portfolioData.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
          >
            Hi, I'm {portfolioData.name.split(' ')[0]}.<br />
            <span className="text-gray-400">I build <span className="text-white">intelligent</span> systems.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-accent-teal font-medium mb-8 max-w-3xl"
          >
            {portfolioData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mb-12"
          >
            {portfolioData.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="mailto:hello@example.com" className="px-6 py-3 bg-accent-blue hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-accent-blue/20">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a href="#projects" className="px-6 py-3 bg-dark-neutral-800 hover:bg-dark-neutral-700 text-white font-medium rounded-lg border border-dark-neutral-700 transition-colors flex items-center gap-2">
              View Projects
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* RESEARCH PUBLICATIONS SECTION */}
        <section id="publications" className="py-24 px-6 max-w-5xl mx-auto border-t border-dark-neutral-800/50">
          <SectionTitle
            title="Research Publications"
            subtitle="Academic research and investigations into machine learning, robustness, and applied AI."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {publications.map((pub, index) => (
              <PublicationCard key={index} publication={pub} index={index} />
            ))}
          </div>
        </section>

        {/* AI & AUTOMATION PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-dark-neutral-800/50 relative">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

          <SectionTitle
            title="AI & Automation Projects"
            subtitle="Production-ready systems, RAG applications, and intelligent workflow automations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* MLOps & ENGINEERING SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-dark-neutral-800/50">
          <SectionTitle
            title="Technical Expertise"
            subtitle="Comprehensive toolkit across machine learning, engineering, and MLOps."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-dark-neutral-900 border border-dark-neutral-800 p-8 rounded-2xl relative overflow-hidden"
                >
                  {/* Category subtle background accent */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-dark-neutral-800 rounded-full blur-3xl opacity-50"></div>

                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 bg-dark-neutral-800 rounded-lg text-accent-blue">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-wide">{category.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {category.skills.map((skill, i) => (
                      <SkillTag key={i} skill={skill} delay={idx * 0.1 + i * 0.05} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-dark-neutral-800 bg-dark-neutral-900/50 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Alex Khundongbam. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <a href="#" className="hover:text-accent-blue transition-colors p-2 hover:bg-dark-neutral-800 rounded-full">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-accent-blue transition-colors p-2 hover:bg-dark-neutral-800 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-accent-blue transition-colors p-2 hover:bg-dark-neutral-800 rounded-full">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
