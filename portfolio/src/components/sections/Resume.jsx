import { motion } from 'framer-motion';
import { resumeContent } from '../../data/content';
import { experience, education, publications, projects, leadershipRoles } from '../../data/resume';
import { skills } from '../../data/skills';
import { personalInfo } from '../../data/content';
import './Resume.css';

/**
 * Resume Section Component
 * Matches resume image: header, Education, Skills, Research & Work Experience, Publications, Projects, Leadership & Achievements
 */
export function Resume() {
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
    <section id="resume" className="resume section" aria-label="Resume">
      <div className="container">
        <motion.div
          className="resume__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div className="section-title" variants={itemVariants}>
            <h2><code>{resumeContent.title}</code></h2>
          </motion.div>

          {/* Header: Name, Contact Info, Links */}
          <motion.div className="resume__header" variants={itemVariants}>
            <h1 className="resume__name">{personalInfo.name.toUpperCase()}</h1>
            <div className="resume__contact">
              <span>{personalInfo.personalDetails.email}</span>
              <span>•</span>
              <span>{personalInfo.personalDetails.phone}</span>
              <span>•</span>
              <a href={personalInfo.personalDetails.website} target="_blank" rel="noopener noreferrer" className="resume__link">Portfolio</a>
              <span>•</span>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="resume__link">LinkedIn</a>
              <span>•</span>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="resume__link">GitHub</a>
            </div>
          </motion.div>

          <div className="resume__grid resume__grid--balanced">
            {/* Left Column */}
            <div className="resume__column">
              {/* Education */}
              <motion.div className="resume__section" variants={itemVariants}>
                <h3 className="resume__section-title">EDUCATION</h3>
                {education.map((edu) => (
                  <div key={edu.id} className="resume__item">
                    <h4>{edu.institution}</h4>
                    <h5>{edu.degree}</h5>
                    <p className="resume__location">{edu.location}</p>
                    <p className="resume__period">{edu.period}</p>
                    {edu.coursework && (
                      <div className="resume__coursework">
                        <p className="resume__coursework-label">Relevant Coursework:</p>
                        <p className="resume__coursework-list">{edu.coursework.join(', ')}</p>
                      </div>
                    )}
                    {edu.achievements && edu.achievements.map((achievement, idx) => (
                      <a
                        key={idx}
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume__achievement-link"
                      >
                        {achievement.title}
                      </a>
                    ))}
                  </div>
                ))}
              </motion.div>

              {/* Skills */}
              <motion.div className="resume__section" variants={itemVariants}>
                <h3 className="resume__section-title">SKILLS</h3>
                {skills.map((skill) => (
                  <div key={skill.id} className="resume__item">
                    <h4>{skill.title}</h4>
                    <p className="resume__skills-list">
                      {skill.tags.map((tag, idx) => (
                        <span key={tag.name}>
                          {tag.icon && <span className="resume__skill-icon">{tag.icon}</span>}
                          {tag.name}
                          {idx < skill.tags.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Publications */}
              <motion.div className="resume__section" variants={itemVariants}>
                <h3 className="resume__section-title">PUBLICATIONS</h3>
                {publications.map((pub) => (
                  <div key={pub.id} className="resume__item">
                    <p className="resume__publication-authors">{pub.authors}</p>
                    <h4 className="resume__publication-title">"{pub.title}"</h4>
                    <p className="resume__publication-venue">{pub.conference}</p>
                    <p className="resume__publication-venue">{pub.publisher}</p>
                    <p className="resume__period">{pub.date}</p>
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume__link"
                    >
                      {pub.doi}
                    </a>
                  </div>
                ))}
              </motion.div>

              {/* Leadership & Achievements */}
              <motion.div className="resume__section" variants={itemVariants}>
                <h3 className="resume__section-title">LEADERSHIP AND ACHIEVEMENTS</h3>
                {leadershipRoles.map((role) => (
                  <div key={role.id} className="resume__item">
                    <h4>{role.title}</h4>
                    {role.description && <p>{role.description}</p>}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="resume__column">
              {/* Research & Work Experience */}
              <motion.div className="resume__section" variants={itemVariants}>
                <h3 className="resume__section-title">RESEARCH & WORK EXPERIENCE</h3>
                {experience.map((exp) => (
                  <div key={exp.id} className="resume__item">
                    <h4>{exp.title}</h4>
                    <p className="resume__company">{exp.company}</p>
                    <p className="resume__location">{exp.location}</p>
                    <p className="resume__period">{exp.period}</p>
                    <ul>
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>

              {/* Projects */}
              <motion.div className="resume__section" variants={itemVariants}>
                <h3 className="resume__section-title">PROJECTS</h3>
                {projects.map((proj) => (
                  <div key={proj.id} className="resume__item">
                    <h4>{proj.title}</h4>
                    <p className="resume__period">{proj.date}</p>
                    <ul>
                      {proj.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume;
