import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../../data/projects';
import { projectsContent } from '../../data/content';
import { ProjectCard } from '../ui/ProjectCard';
import { Icon } from '../ui/Icon';
import './Projects.css';

/**
 * Projects Section Component
 * Features filterable grid of project cards with animations
 */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  // Animation variants for section header
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  // Animation variants for filter chips
  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  // Grid animation
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="projects section" aria-label="Projects">
      <div className="container">
        {/* Section Header */}
        <motion.header 
          className="projects__header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="section-title"><code>{projectsContent.title}</code></h2>
          <p className="section-subtitle">{projectsContent.subtitle}</p>
        </motion.header>

        {/* Filter Chips */}
        <motion.div 
          className="projects__filters"
          variants={filterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          role="group"
          aria-label={projectsContent.filterLabel}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={chipVariants}
              className={`filter-chip ${activeFilter === category.id ? 'filter-chip--active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
              aria-pressed={activeFilter === category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-chip__icon"><Icon name={category.icon} size={18} /></span>
              <span className="filter-chip__label">{category.label}</span>
              {activeFilter === category.id && (
                <motion.span 
                  className="filter-chip__indicator"
                  layoutId="activeFilter"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project}
                  index={index}
                />
              ))
            ) : (
              <motion.div 
                className="projects__empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <span className="projects__empty-icon"><Icon name="search" size={40} /></span>
                <p>{projectsContent.emptyState}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project count indicator */}
        <motion.div 
          className="projects__count"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="projects__count-number">{filteredProjects.length}</span>
          <span className="projects__count-label">
            {filteredProjects.length === 1 ? 'project' : 'projects'} shown
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
