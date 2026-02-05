import { motion } from 'framer-motion';
import './ProjectCard.css';

/**
 * Project Card Component
 * Displays project information with hover animations and glassmorphism
 */
export function ProjectCard({ 
  project, 
  index = 0,
  onView,
}) {
  const { title, date, summary, techStack, category, links, featured } = project;

  // Staggered entrance animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  // Hover animation for the whole card
  const hoverVariants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  // Glow animation
  const glowVariants = {
    rest: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.article
      className={`project-card glass-card ${featured ? 'project-card--featured' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover="hover"
      animate="rest"
      role="article"
      aria-label={`Project: ${title}`}
    >
      {/* Glow effect on hover */}
      <motion.div 
        className="project-card__glow"
        variants={glowVariants}
        aria-hidden="true"
      />

      {/* Card header */}
      <div className="project-card__header">
        <div className="project-card__meta">
          {featured && (
            <span className="project-card__badge">⭐ Featured</span>
          )}
          <span className="project-card__category">{category}</span>
        </div>
        <span className="project-card__date">{date}</span>
      </div>

      {/* Card content */}
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        
        {summary && (
          <p className="project-card__summary">{summary}</p>
        )}

        {/* Tech stack */}
        {techStack && techStack.length > 0 && (
          <div className="project-card__tech">
            {techStack.map((tech, i) => (
              <span key={i} className="project-card__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Card footer with links */}
      <div className="project-card__footer">
        {links?.github && (
          <a 
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label={`View ${title} on GitHub`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>Code</span>
          </a>
        )}
        
        {links?.demo && (
          <a 
            href={links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--primary"
            aria-label={`View ${title} demo`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            <span>Live Demo</span>
          </a>
        )}
        
        {links?.article && (
          <a 
            href={links.article}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
            aria-label={`Read about ${title}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <span>Article</span>
          </a>
        )}
      </div>

      {/* Decorative corner accents */}
      <div className="project-card__corner project-card__corner--tl" aria-hidden="true" />
      <div className="project-card__corner project-card__corner--br" aria-hidden="true" />
    </motion.article>
  );
}

export default ProjectCard;
