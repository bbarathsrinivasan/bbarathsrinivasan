/**
 * SKILLS DATA
 * ===========
 * Each skill: title (heading), tags (technologies with optional icon), level
 */

export const skills = [
  {
    id: 'programming',
    title: 'Programming & Frameworks',
    level: 95,
    icon: '💻',
    tags: [
      { name: 'C' },
      { name: 'C++' },
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'SQL' },
      { name: 'Shell Scripting' },
      { name: 'Django' },
      { name: 'FastAPI' },
      { name: 'React', icon: '⚛️' },
      { name: 'Spring Boot' },
    ],
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    level: 90,
    icon: '🧠',
    tags: [
      { name: 'PyTorch', icon: '🔥' },
      { name: 'Tensorflow' },
      { name: 'NLP' },
      { name: 'CNN' },
      { name: 'LSTM' },
      { name: 'GRU' },
      { name: 'Attention Mechanisms' },
      { name: 'RLlib' },
      { name: 'LangChain/LangGraph' },
      { name: 'LLM' },
      { name: 'RAG' },
      { name: 'A2A' },
      { name: 'MCP' },
    ],
  },
  {
    id: 'data-infra',
    title: 'Data & Infrastructure',
    level: 85,
    icon: '☁️',
    tags: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'CUDA' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'OpenShift' },
      { name: 'Google Cloud Platform', icon: '☁️' },
      { name: 'Heroku' },
    ],
  },
];
