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
  const [isActive, setIsActive] = useState(false);

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
    const handleDown = () => setIsActive(true);
    const handleUp = () => setIsActive(false);

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mousedown', handleDown);
    document.addEventListener('mouseup', handleUp);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mousedown', handleDown);
      document.removeEventListener('mouseup', handleUp);
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
      className={`custom-cursor ${visible ? 'custom-cursor--visible' : ''} ${isHover ? 'custom-cursor--hover' : ''} ${isActive ? 'custom-cursor--active' : ''}`}
      style={{ '--cursor-x': `${position.x}px`, '--cursor-y': `${position.y}px` }}
      aria-hidden="true"
    >
      <svg
        className="custom-cursor__rocket"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    </div>
  );
}

export default CustomCursor;
