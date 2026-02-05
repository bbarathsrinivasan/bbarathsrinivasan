import { useCallback } from 'react';
import { Scene } from './components/three/Scene';
import { Navigation } from './components/ui/Navigation';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { FunSection } from './components/sections/FunSection';
import { Contact } from './components/sections/Contact';
import { useScrollProgress } from './hooks/useScrollProgress';
import './styles/global.css';

/**
 * Main App Component
 * 
 * Neo-Orange Portfolio - A futuristic, interactive portfolio website
 * 
 * ANIMATION SYSTEM NOTES:
 * =======================
 * 
 * 1. SCROLL-BASED ANIMATIONS (Framer Motion):
 *    - Each section uses `whileInView` for entrance animations
 *    - viewport={{ once: true }} ensures animations only play once
 *    - Staggered children animations create cascading effects
 * 
 * 2. THREE.JS BACKGROUND:
 *    - ParticleField: 600 floating particles with additive blending
 *    - FloatingGeometry: Glass-effect geometric shapes with Float helper
 *    - GridFloor: Custom shader for animated grid perspective
 *    - Camera responds to mouse movement and scroll progress
 *    - Post-processing: Bloom, ChromaticAberration, Vignette
 * 
 * 3. HOVER INTERACTIONS:
 *    - Project cards scale and glow on hover
 *    - Buttons have ripple effects and glow states
 *    - Social links lift and scale
 * 
 * 4. MICRO-INTERACTIONS:
 *    - Rotating taglines in hero section
 *    - Filter chips with animated indicator
 *    - Token collection game with progress tracking
 *    - Guide character responds to user progress
 * 
 * CUSTOMIZATION:
 * ==============
 * - Update src/data/content.js for all text content
 * - Update src/data/projects.js for project data
 * - Modify src/styles/design-tokens.css for colors/typography
 * - Each component has its own CSS file for styling
 */
function App() {
  const { scrollProgress, activeSection } = useScrollProgress([
    'hero',
    'projects', 
    'fun',
    'contact'
  ]);

  // Scroll to section handler
  const handleNavigate = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="app">
      {/* Three.js Background Scene */}
      <Scene scrollProgress={scrollProgress} />
      
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
      />
      
      {/* Main Content */}
      <main>
        {/* Hero / Intro Section */}
        <Hero onNavigate={handleNavigate} />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Interactive Fun Section */}
        <FunSection />
        
        {/* Contact / Footer */}
        <Contact />
      </main>
      
      {/* Skip to content link for accessibility */}
      <a href="#hero" className="visually-hidden">
        Skip to main content
      </a>
    </div>
  );
}

export default App;
