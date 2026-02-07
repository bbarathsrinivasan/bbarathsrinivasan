import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { personalInfo, heroContent } from '../../data/content';
import { Icon } from '../ui/Icon';
import './Hero.css';

const TYPING_SPEED_MS = 18;
const CURSOR_BLINK_MS = 530;

/**
 * Hero: intro + tagline + buttons outside; terminal with about-me typing effect inside.
 */
export function Hero({ onNavigate }) {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const controls = useAnimation();

  const fullText = heroContent.terminalAbout;

  // Rotate tagline
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTitleIndex((prev) =>
        (prev + 1) % personalInfo.rotatingTitles.length
      );
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Typing effect: reveal one character at a time
  useEffect(() => {
    if (typedLength >= fullText.length) return;
    const t = setTimeout(() => setTypedLength((n) => n + 1), TYPING_SPEED_MS);
    return () => clearTimeout(t);
  }, [typedLength, fullText.length]);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => {
      setCursorVisible((v) => !v);
    }, CURSOR_BLINK_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const MotionDiv = motion.div;
  const MotionSpan = motion.span;

  return (
    <section id="hero" className="hero section" aria-label="Introduction">
      <MotionDiv
        className="hero__content container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* ----- Outside terminal: intro ----- */}
        <motion.h1
          className="hero__name hero__name--inline"
          variants={itemVariants}
        >
          <span className="hero__greeting">Hello, World! </span>
          <span className="hero__name-line">
            I'm <span className="hero__name-text">Barath</span>
          </span>
        </motion.h1>

        {/* ----- Outside terminal: tagline ----- */}
        <MotionDiv
          className="hero__tagline-wrapper"
          variants={itemVariants}
        >
          <span className="hero__tagline-bracket">&lt;</span>
          <MotionSpan
            key={currentTitleIndex}
            className="hero__tagline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {personalInfo.rotatingTitles[currentTitleIndex]}
          </MotionSpan>
          <span className="hero__tagline-bracket">/&gt;</span>
        </MotionDiv>

        {/* ----- Outside terminal: CTAs ----- */}
        <MotionDiv className="hero__cta-group" variants={itemVariants}>
          <button
            type="button"
            className="btn btn-primary hero__cta"
            onClick={() => onNavigate?.('projects')}
            aria-label="View my projects"
          >
            <span className="btn__icon"><Icon name="zap" size={18} /></span>
            {heroContent.ctaPrimary}
          </button>
          <button
            type="button"
            className="btn btn-secondary hero__cta"
            onClick={() => onNavigate?.('contact')}
            aria-label="Contact me"
          >
            <span className="btn__icon"><Icon name="message-circle" size={18} /></span>
            {heroContent.ctaSecondary}
          </button>
        </MotionDiv>

        {/* ----- Terminal: code-style about me, typing + fixed height ----- */}
        <MotionDiv className="hero__code-block hero__code-block--fixed" variants={itemVariants}>
          <div className="hero__code-header" aria-hidden="true">
            <span className="hero__code-dot" />
            <span className="hero__code-dot" />
            <span className="hero__code-dot" />
            <span className="hero__code-filename">barath.js</span>
          </div>
          <div className="hero__terminal-body">
            <div className="hero__terminal-content">
              <span className="hero__terminal-prompt">$ </span>
              <span className="hero__terminal-text hero__terminal-text--pre">
                {fullText.slice(0, typedLength)}
              </span>
              <span
                className={`hero__terminal-cursor ${cursorVisible ? 'hero__terminal-cursor--on' : ''}`}
                aria-hidden="true"
              >
                |
              </span>
            </div>
          </div>
        </MotionDiv>

        {/* Scroll hint */}
        <MotionDiv
          className="hero__scroll-indicator"
          variants={itemVariants}
          animate={{ y: [0, 8, 0] }}
          transition={{ y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <span className="hero__scroll-text">Scroll to explore</span>
          <div className="hero__scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </MotionDiv>
      </MotionDiv>

      <div className="hero__decoration hero__decoration--left" aria-hidden="true" />
      <div className="hero__decoration hero__decoration--right" aria-hidden="true" />
    </section>
  );
}

export default Hero;
