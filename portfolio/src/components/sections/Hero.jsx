import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { personalInfo, heroContent } from '../../data/content';
import './Hero.css';

/**
 * Hero Section Component
 * Features animated intro text, rotating titles, and CTA buttons
 */
export function Hero({ onNavigate }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const controls = useAnimation();

  // Rotate through subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => 
        (prev + 1) % personalInfo.rotatingTitles.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Start intro animation on mount
  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  return (
    <section id="hero" className="hero section" aria-label="Introduction">
      <motion.div 
        className="hero__content container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Greeting */}
        <motion.span 
          className="hero__greeting"
          variants={itemVariants}
        >
          {heroContent.greeting}
        </motion.span>

        {/* Name with glow effect */}
        <motion.h1 
          className="hero__name"
          variants={glowVariants}
        >
          <span className="hero__name-first">{personalInfo.firstName}</span>
          <span className="hero__name-last">{personalInfo.lastName}</span>
        </motion.h1>

        {/* Role */}
        <motion.h2 
          className="hero__role"
          variants={itemVariants}
        >
          {personalInfo.role}
        </motion.h2>

        {/* Rotating Tagline */}
        <motion.div 
          className="hero__tagline-wrapper"
          variants={itemVariants}
        >
          <span className="hero__tagline-bracket">&lt;</span>
          <motion.span 
            key={currentTitleIndex}
            className="hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {personalInfo.rotatingTitles[currentTitleIndex]}
          </motion.span>
          <span className="hero__tagline-bracket">/&gt;</span>
        </motion.div>

        {/* Bio */}
        <motion.p 
          className="hero__bio"
          variants={itemVariants}
        >
          {personalInfo.shortBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="hero__cta-group"
          variants={itemVariants}
        >
          <button 
            className="btn btn-primary hero__cta"
            onClick={() => onNavigate?.('projects')}
            aria-label="View my projects"
          >
            <span className="btn__icon">⚡</span>
            {heroContent.ctaPrimary}
          </button>
          <button 
            className="btn btn-secondary hero__cta"
            onClick={() => onNavigate?.('contact')}
            aria-label="Contact me"
          >
            <span className="btn__icon">💬</span>
            {heroContent.ctaSecondary}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="hero__scroll-indicator"
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <span className="hero__scroll-text">Scroll to explore</span>
          <div className="hero__scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="hero__decoration hero__decoration--left" aria-hidden="true" />
      <div className="hero__decoration hero__decoration--right" aria-hidden="true" />
    </section>
  );
}

export default Hero;
