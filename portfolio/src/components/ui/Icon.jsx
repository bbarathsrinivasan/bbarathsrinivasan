import {
  Home,
  Zap,
  FileText,
  Briefcase,
  Gamepad2,
  Mail,
  Laptop,
  Brain,
  Cloud,
  Coffee,
  BookOpen,
  Bot,
  Globe,
  Search,
  MessageCircle,
  MapPin,
  Sparkles,
  PartyPopper,
  LockOpen,
  Lock,
  Check,
  ArrowRight,
  Circle,
  Cake,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  Code2,
  Atom,
  Flame,
  Database,
  Leaf,
  Container,
  Server,
} from 'lucide-react';

/**
 * Icon name -> Lucide component map.
 * Use kebab-case keys in content/data; we normalize to PascalCase for lookup.
 */
const iconMap = {
  home: Home,
  zap: Zap,
  'file-text': FileText,
  briefcase: Briefcase,
  'gamepad-2': Gamepad2,
  mail: Mail,
  laptop: Laptop,
  brain: Brain,
  cloud: Cloud,
  coffee: Coffee,
  'book-open': BookOpen,
  bot: Bot,
  globe: Globe,
  search: Search,
  'message-circle': MessageCircle,
  'map-pin': MapPin,
  sparkles: Sparkles,
  'party-popper': PartyPopper,
  'lock-open': LockOpen,
  lock: Lock,
  check: Check,
  'arrow-right': ArrowRight,
  circle: Circle,
  cake: Cake,
  phone: Phone,
  'graduation-cap': GraduationCap,
  github: Github,
  linkedin: Linkedin,
  'code-2': Code2,
  atom: Atom,
  flame: Flame,
  database: Database,
  leaf: Leaf,
  container: Container,
  server: Server,
};

/**
 * Renders a Lucide icon by name. Use for nav, skills, projects, buttons, etc.
 * @param {string} name - Icon key (e.g. 'zap', 'book-open')
 * @param {number} [size=18] - Icon size in px
 * @param {string} [className] - Optional CSS class
 */
export function Icon({ name, size = 18, className, ...props }) {
  const Component = name ? iconMap[name] : null;
  if (!Component) return null;
  return (
    <Component
      size={size}
      className={className}
      aria-hidden="true"
      {...props}
    />
  );
}

export default Icon;
