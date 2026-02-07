import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skillsContent } from '../../data/content';
import { skills } from '../../data/skills';
import { Icon } from '../ui/Icon';
import './Skills.css';

/** Oscillating display value around level (speedometer-style "live" reading) */
function useOscillatingScore(level, intervalMs = 700) {
  const [display, setDisplay] = useState(level);
  useEffect(() => {
    const id = setInterval(() => {
      const wiggle = Math.round((Math.random() * 2 - 1) * 2); // -2 to +2
      setDisplay(() => Math.min(100, Math.max(0, level + wiggle)));
    }, intervalMs);
    return () => clearInterval(id);
  }, [level, intervalMs]);
  return display;
}

const CONFIDENCE_SUBTITLES = [
  'Still compiling…',
  'No cap.',
  'The only metric that isn’t a lie.',
  'Still leveling up.',
  'Infinite loop of improvement.',
];

function SkillCard({ skill, index, itemVariants }) {
  const displayScore = useOscillatingScore(skill.level);
  const subtitle = CONFIDENCE_SUBTITLES[index % CONFIDENCE_SUBTITLES.length];

  return (
    <motion.article
      className="skills__card"
      variants={itemVariants}
      custom={index}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    >
      <header className="skills__card-header">
        <span className="skills__card-icon" aria-hidden="true">
          <Icon name={skill.icon} size={22} className="skills__card-icon-svg" />
        </span>
        <h3 className="skills__card-title">{skill.title}</h3>
      </header>

      <div className="skills__tags">
        {skill.tags.map((tag) => (
          <span key={tag.name} className="skills__tag">
            {tag.icon && (
              <span className="skills__tag-icon" aria-hidden="true">
                <Icon name={tag.icon} size={14} className="skills__tag-icon-svg" />
              </span>
            )}
            <span className="skills__tag-name">{tag.name}</span>
          </span>
        ))}
      </div>

      <div className="skills__card-footer">
        <div className="skills__meter-wrap">
          <div
            className="skills__meter"
            style={{ '--level': displayScore }}
            aria-hidden="true"
          >
            <div className="skills__meter-inner">
              <span className="skills__percentage">{displayScore}%</span>
            </div>
          </div>
          <div className="skills__meter-label">
            <span className="skills__meter-title">Confidence Score</span>
            <span className="skills__meter-subtitle">{subtitle}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/**
 * Skills Section: section title in <code>, each card = heading + tech tags; speedometer confidence score
 */
export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
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

  return (
    <section id="skills" className="skills section section-bg" aria-label="Skills">
      <div className="container">
        <motion.div
          className="skills__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title (no subtitle) */}
          <motion.div className="section-title" variants={itemVariants}>
            <h2><code>{skillsContent.title}</code></h2>
          </motion.div>

          <div className="skills__grid">
            {skills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} itemVariants={itemVariants} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
