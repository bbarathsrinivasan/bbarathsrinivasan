import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, contactContent } from '../../data/content';
import { Icon } from '../ui/Icon';
import './Contact.css';

/**
 * Contact / Footer Section
 * Features social links, email CTA, and closing message
 */
export function Contact() {
  const [closingLine, setClosingLine] = useState('');

  // Select random closing line on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * contactContent.closingLines.length);
    setClosingLine(contactContent.closingLines[randomIndex]);
  }, []);

  // Animation variants
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

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const socialLinks = [
    { name: 'GitHub', url: personalInfo.social.github, icon: 'github' },
    { name: 'LinkedIn', url: personalInfo.social.linkedin, icon: 'linkedin' },
  ];

  return (
    <footer id="contact" className="contact section" aria-label="Contact">
      <motion.div 
        className="container contact__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div className="contact__header" variants={itemVariants}>
          <h2 className="section-title"><code>{contactContent.title}</code></h2>
          <p className="section-subtitle">{contactContent.subtitle}</p>
        </motion.div>

        {/* Contact Info - below header */}
        <motion.div className="contact__info-grid" variants={itemVariants}>
          <div className="contact__info-item">
            <div className="contact__info-icon"><Icon name="map-pin" size={22} /></div>
            <div>
              <h4>Location:</h4>
              <p>{contactContent.location}</p>
            </div>
          </div>
          <div className="contact__info-item">
            <div className="contact__info-icon"><Icon name="mail" size={22} /></div>
            <div>
              <h4>Email:</h4>
              <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div className="contact__social" variants={itemVariants}>
          <p className="contact__social-label">{contactContent.socialCta}</p>
          <motion.div 
            className="contact__social-links"
            variants={containerVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                variants={socialVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit my ${social.name}`}
              >
                <Icon name={social.icon} size={24} className="contact__social-icon" />
                <span className="contact__social-name">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Closing line */}
        <motion.p 
          className="contact__closing"
          variants={itemVariants}
        >
          {closingLine}
        </motion.p>

        {/* Decorative gradient */}
        <div className="contact__decoration" aria-hidden="true" />
      </motion.div>

      {/* Footer credits - full width at bottom */}
      <motion.div 
        className="contact__footer" 
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <p className="contact__copyright">
          © {new Date().getFullYear()} {personalInfo.name}. Built with 
          <span className="contact__heart"><Icon name="zap" size={16} /></span>
          {' '}and lots of{' '}
          <span className="contact__coffee"><Icon name="coffee" size={16} /></span>
        </p>
        <p className="contact__tech">
          React • Three.js • Framer Motion
        </p>
      </motion.div>
    </footer>
  );
}

export default Contact;
