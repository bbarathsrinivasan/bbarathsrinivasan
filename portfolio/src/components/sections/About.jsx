import { motion } from 'framer-motion';
import { personalInfo, aboutContent } from '../../data/content';
import { Icon } from '../ui/Icon';
import './About.css';

/**
 * About Section Component
 * Displays personal information and bio
 */
export function About() {
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
    <section id="about" className="about section" aria-label="About">
      <div className="container">
        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div className="section-title" variants={itemVariants}>
            <h2>{aboutContent.title}</h2>
          </motion.div>

          <div className="about__grid">
            {/* Profile Image */}
            <motion.div 
              className="about__image-wrapper"
              variants={itemVariants}
            >
              <div className="about__image-glow" />
              <img 
                src="/assets/img/profile-img.jpeg" 
                alt={personalInfo.name}
                className="about__image"
              />
            </motion.div>

            {/* Content */}
            <motion.div 
              className="about__text"
              variants={itemVariants}
            >
              <h3 className="about__subtitle">{aboutContent.subtitle}</h3>
              <p className="about__description">{aboutContent.description}</p>

              {/* Personal Details Grid */}
              <div className="about__details">
                <div className="about__details-column">
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="cake" size={20} /></span>
                    <div>
                      <strong>Birthday:</strong>
                      <span>{personalInfo.personalDetails.birthday}</span>
                    </div>
                  </div>
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="globe" size={20} /></span>
                    <div>
                      <strong>Website:</strong>
                      <a 
                        href={personalInfo.personalDetails.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {personalInfo.personalDetails.website.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="phone" size={20} /></span>
                    <div>
                      <strong>Phone:</strong>
                      <span>{personalInfo.personalDetails.phone}</span>
                    </div>
                  </div>
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="map-pin" size={20} /></span>
                    <div>
                      <strong>City:</strong>
                      <span>{personalInfo.personalDetails.city}</span>
                    </div>
                  </div>
                </div>

                <div className="about__details-column">
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="graduation-cap" size={20} /></span>
                    <div>
                      <strong>Age:</strong>
                      <span>{personalInfo.personalDetails.age}</span>
                    </div>
                  </div>
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="graduation-cap" size={20} /></span>
                    <div>
                      <strong>Degree:</strong>
                      <span>{personalInfo.personalDetails.degree}</span>
                    </div>
                  </div>
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="mail" size={20} /></span>
                    <div>
                      <strong>Email:</strong>
                      <a href={`mailto:${personalInfo.personalDetails.email}`}>
                        {personalInfo.personalDetails.email}
                      </a>
                    </div>
                  </div>
                  <div className="about__detail-item">
                    <span className="about__detail-icon"><Icon name="briefcase" size={20} /></span>
                    <div>
                      <strong>Freelance:</strong>
                      <span>{personalInfo.personalDetails.freelance}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
