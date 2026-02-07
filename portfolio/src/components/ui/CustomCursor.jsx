import { useState, useEffect } from 'react';
import './CustomCursor.css';

/**
 * Custom cursor - neo-orange pointer that follows the mouse.
 * Only rendered on devices with a fine pointer (mouse), not on touch.
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const hasHover = window.matchMedia('(hover: hover)').matches;
    if (!hasHover) return;

    setIsPointer(true);

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = target?.closest('a, button, [role="button"], input, select, textarea');
      setIsHover(!!interactive);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
    };
  }, [visible]);

  useEffect(() => {
    if (!isPointer) return;
    document.body.classList.add('custom-cursor-active');
    return () => document.body.classList.remove('custom-cursor-active');
  }, [isPointer]);

  if (!isPointer) return null;

  return (
    <div
      className={`custom-cursor ${visible ? 'custom-cursor--visible' : ''} ${isHover ? 'custom-cursor--hover' : ''}`}
      style={{ '--cursor-x': `${position.x}px`, '--cursor-y': `${position.y}px` }}
      aria-hidden="true"
    >
      <svg
        className="custom-cursor__rocket"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rocket like PNG: streamlined teardrop, rounded nose, porthole, outlined flame — neo-orange palette */}
        <path
          className="custom-cursor__rocket-body"
          d="M0 1 Q0 0 2 0 Q5 0 6 2 L7 10 L6 20 L4 24 L2 22 L0 18 L0 10 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.55"
          strokeLinejoin="round"
        />
        <circle
          className="custom-cursor__rocket-window"
          cx="4"
          cy="6"
          r="1.35"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        <line className="custom-cursor__rocket-window-line" x1="4" y1="5.15" x2="4" y2="5.55" stroke="currentColor" strokeWidth="0.3" />
        <line className="custom-cursor__rocket-window-line" x1="4" y1="6.25" x2="4" y2="6.9" stroke="currentColor" strokeWidth="0.3" />
        <path
          className="custom-cursor__rocket-flame"
          d="M2 22 L4 24 L6 22 L5 20 L3 20 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <path className="custom-cursor__rocket-flame-lines" d="M3 21.5 L4 23.5 M4 20.5 L4.5 22.5 M5 21.5 L4 23.5" stroke="currentColor" strokeWidth="0.28" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default CustomCursor;
