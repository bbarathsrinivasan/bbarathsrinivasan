import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems, personalInfo } from '../../data/content';
import './Navigation.css';

/**
 * Navigation Component
 * Floating navigation bar with scroll progress and section indicators
 */
export function Navigation({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to add background to nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on navigation
  const handleNavClick = (sectionId) => {
    onNavigate?.(sectionId);
    setIsMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav 
        className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav__container">
          {/* Logo */}
          <motion.a 
            href="#hero" 
            className="nav__logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="nav__logo-bracket">&lt;</span>
            <span className="nav__logo-text">{personalInfo.firstName}</span>
            <span className="nav__logo-bracket">/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="nav__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <motion.a
                  href={`#${item.id}`}
                  className={`nav__link ${activeSection === item.id ? 'nav__link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="nav__link-icon">{item.icon}</span>
                  <span className="nav__link-text">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.span 
                      className="nav__link-indicator"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            className={`nav__menu-btn ${isMenuOpen ? 'nav__menu-btn--open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="nav__menu-icon" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="nav__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav__mobile-links">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`nav__mobile-link ${activeSection === item.id ? 'nav__mobile-link--active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    <span className="nav__mobile-icon">{item.icon}</span>
                    <span className="nav__mobile-text">{item.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
