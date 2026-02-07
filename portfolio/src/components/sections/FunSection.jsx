import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { funSectionContent } from '../../data/content';
import { Icon } from '../ui/Icon';
import './FunSection.css';

/**
 * Interactive Fun Section with collectible tokens mini-game
 * Collect glowing orbs to reveal a secret project
 */
export function FunSection() {
  const [tokens, setTokens] = useState([]);
  const [collected, setCollected] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const containerRef = useRef(null);
  const totalTokens = 3;

  // Generate token positions
  useEffect(() => {
    const generateTokens = () => {
      const newTokens = [];
      for (let i = 0; i < totalTokens; i++) {
        newTokens.push({
          id: i,
          x: Math.random() * 80 + 10, // 10-90% to keep within bounds
          y: Math.random() * 60 + 20, // 20-80%
          collected: false,
          delay: i * 0.2,
        });
      }
      setTokens(newTokens);
    };
    
    generateTokens();
  }, []);

  // Collect token handler
  const collectToken = useCallback((id) => {
    setTokens(prev => 
      prev.map(token => 
        token.id === id ? { ...token, collected: true } : token
      )
    );
    setCollected(prev => {
      const newCount = prev + 1;
      if (newCount >= totalTokens) {
        setGameComplete(true);
        setTimeout(() => setShowSecret(true), 1000);
      }
      return newCount;
    });
  }, []);

  // Reset game
  const resetGame = () => {
    setCollected(0);
    setGameComplete(false);
    setShowSecret(false);
    setTokens(prev => prev.map(token => ({ ...token, collected: false })));
  };

  // Token component
  const Token = ({ token }) => {
    if (token.collected) return null;

    return (
      <motion.button
        className="fun-token"
        style={{ left: `${token.x}%`, top: `${token.y}%` }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: 1,
        }}
        transition={{
          scale: {
            repeat: Infinity,
            duration: 2,
            delay: token.delay,
          },
          opacity: { duration: 0.5, delay: token.delay },
        }}
        whileHover={{ scale: 1.3 }}
        onClick={() => collectToken(token.id)}
        aria-label={`Collect token ${token.id + 1}`}
      >
        <span className="fun-token__glow" />
        <span className="fun-token__core"><Icon name="sparkles" size={20} /></span>
      </motion.button>
    );
  };

  return (
    <section id="fun" className="fun-section section" aria-label="Interactive Section">
      <div className="container">
        {/* Section Header */}
        <motion.header 
          className="fun-section__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title"><code>{funSectionContent.title}</code></h2>
          <p className="section-subtitle">{funSectionContent.subtitle}</p>
        </motion.header>

        {/* Game Area */}
        <motion.div 
          ref={containerRef}
          className="fun-section__game-area"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {/* Instructions */}
          <div className="fun-section__instructions">
            <span className="fun-section__instruction-icon"><Icon name="gamepad-2" size={20} /></span>
            <span>{funSectionContent.game.instructions}</span>
          </div>

          {/* Progress bar */}
          <div className="fun-section__progress">
            <div className="fun-section__progress-bar">
              <motion.div 
                className="fun-section__progress-fill"
                initial={{ width: 0 }}
                animate={{ width: `${(collected / totalTokens) * 100}%` }}
                transition={{ type: 'spring', stiffness: 100 }}
              />
            </div>
            <span className="fun-section__progress-text">
              {collected}/{totalTokens} {funSectionContent.game.progress}
            </span>
          </div>

          {/* Token field - shows tokens, then complete overlay, then secret project in same region */}
          <div className="fun-section__token-field">
            {!showSecret && (
              <>
                <AnimatePresence>
                  {tokens.map(token => (
                    <Token key={token.id} token={token} />
                  ))}
                </AnimatePresence>

                {/* Game complete overlay */}
                <AnimatePresence>
                  {gameComplete && (
                    <motion.div 
                      className="fun-section__complete"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <span className="fun-section__complete-icon"><Icon name="party-popper" size={32} /></span>
                      <p>{funSectionContent.game.complete}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {/* Secret project revealed in this region */}
            <AnimatePresence>
              {showSecret && (
                <motion.div 
                  className="fun-section__secret fun-section__secret-inline glass-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                >
                  <div className="fun-section__secret-badge"><Icon name="lock-open" size={18} /> Secret Unlocked</div>
                  <h3 className="fun-section__secret-title">Narvyn</h3>
                  <p className="fun-section__secret-desc">
                    Your secure gateway to AI agents. Connect powerful agents to your apps with full control—email triage, meeting scheduling, trip planning, and more. End-to-end encrypted, no training on your data.
                  </p>
                  <div className="fun-section__secret-tech">
                    <span><Icon name="lock" size={14} /> Secure</span>
                    <span><Icon name="bot" size={14} /> AI Agents</span>
                    <span><Icon name="check" size={14} /> One-click revoke</span>
                  </div>
                  <a
                    href="https://narvyn-waitlist.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fun-section__secret-link"
                  >
                    Visit Narvyn <Icon name="arrow-right" size={14} />
                  </a>
                  <p className="fun-section__secret-note">
                    <em>Thanks for exploring! Early access starts March 2026.</em>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Reset button */}
          {gameComplete && (
            <motion.button
              className="btn btn-secondary fun-section__reset"
              onClick={resetGame}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Play Again
            </motion.button>
          )}
        </motion.div>

        {/* Guide Character */}
        <GuideCharacter collected={collected} totalTokens={totalTokens} />
      </div>
    </section>
  );
}

/**
 * Animated Guide Character Component
 * Provides hints and reacts to user progress
 */
function GuideCharacter({ collected, totalTokens }) {
  const [message, setMessage] = useState(funSectionContent.characterLines.intro);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (collected === 0) {
      setMessage(funSectionContent.characterLines.hint);
    } else if (collected < totalTokens) {
      setMessage(`Nice! ${totalTokens - collected} more to go. You've got this!`);
    } else {
      setMessage("🎊 You did it! Check out the secret project below!");
    }
  }, [collected, totalTokens]);

  return (
    <motion.div 
      className="guide-character"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <motion.div 
        className="guide-character__avatar"
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: 'easeInOut',
        }}
      >
        <span className="guide-character__face"><Icon name="bot" size={28} /></span>
        <span className="guide-character__glow" />
      </motion.div>
      
      <motion.div 
        className="guide-character__bubble"
        key={message}
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="guide-character__name">Pixel</span>
        <p className="guide-character__message">{message}</p>
      </motion.div>
    </motion.div>
  );
}

export default FunSection;
