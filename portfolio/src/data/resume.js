/**
 * RESUME DATA
 * ===========
 * Matches the resume image exactly
 */

export const experience = [
  {
    id: 'wells-fargo',
    title: 'Software Engineer',
    company: 'Wells Fargo',
    location: 'Hyderabad, India',
    period: 'Aug 2023 - Aug 2025',
    description: [
      'Automated incident resolution via Agentic AI System (FastAPI, LangGraph, MCP, React, NLP); resolved 23% of incidents',
      'Reduced Mean Time to Resolution by 70% (5h → 1.5h) using agent-powered RAG workflow (Splunk, Prometheus, BigPanda, AppDynamics, ServiceNow)',
      'Developed 5+ self-service portals and automation microservices (Spring Boot, Django, MySQL, PostgreSQL); reduced manual workload by 80%',
    ],
  },
  {
    id: 'cmu-tepper',
    title: 'Research Assistant',
    company: 'Carnegie Mellon University, Tepper School of Business',
    location: 'Pittsburgh, PA',
    period: 'Sep 2025 - Present',
    description: [
      'Curated/maintained a large-scale blockchain prediction-market dataset (Polymarket, Kalshi)',
      'Built predictive models (transformers, Bayesian inference, causal analysis); fine-tuned LLMs (Parameter-Efficient fine tuning, in-context learning); improved forecasting accuracy by ~18%',
    ],
  },
  {
    id: 'cmu-ai-safety',
    title: 'Research Fellow',
    company: 'CMU AI Safety Initiative, School of Computer Science',
    location: 'Pittsburgh, PA',
    period: 'Sep 2025 - Present',
    description: [
      'Leading research on decomposition attacks and model red-teaming; co-building a red-teaming marketplace (30+ adversarial test cases, benchmarking 10+ open-weight/proprietary models)',
      'Developing scalable AI-safety evaluation pipelines for LLMs (structured-output datasets, leakage accounting, agent-based orchestration); improved failure-mode detection by ~40%',
    ],
  },
];

export const education = [
  {
    id: 'masters',
    degree: 'Master of Computational Data Science',
    institution: 'Carnegie Mellon University',
    location: 'Pittsburgh, Pennsylvania',
    period: 'Aug 2025 - Dec 2026',
    coursework: [
      'Large Language Models and Applications',
      'Multimodal Machine Learning',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Big Data',
      'Operating Systems',
      'Cloud Computing',
    ],
  },
  {
    id: 'bachelor',
    degree: 'Bachelor of Engineering in Computer Science and Engineering, CGPA: 9.0/10',
    institution: 'Anna University - College of Engineering, Guindy',
    location: 'Chennai, India',
    period: 'July 2019 - May 2023',
    achievements: [
      {
        type: 'Scholarship',
        title: 'Prime Minister Scholarship recipient',
        link: 'https://drive.google.com/file/d/1zvXZEHz0_1NAYyVjTHEmZPCme_rb1r9o/view?usp=drive_link',
      },
    ],
  },
];

export const publications = [
  {
    id: 'agees',
    title: 'AGES: Automatic Multiple-Choice Question Generation from Extractive Summaries of Video Lectures Using BERTSum',
    authors: 'Srinivasan, B. B., & Co-authors',
    conference: 'International Conference on Smart Learning Environments (ICSLE 2023)',
    publisher: 'Lecture Notes in Computer Science, Springer',
    date: 'Aug 2023',
    doi: 'doi.org/10.1007/978-981-99-5961-7_3',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-5961-7_3',
  },
];

export const projects = [
  {
    id: 'polymarket',
    title: 'Polymarket Prediction Market Analysis using Fine-tuned LLMs',
    date: 'Dec 2025',
    description: [
      'Fine-tuned Gemma and Mistral-7B LLMs with QLORA for prediction market analysis (55-71.5% accuracy); integrated RAG evaluation',
    ],
  },
  {
    id: 'elita',
    title: 'ELITA: Enhanced Logging and Intelligent Telemetry Assistant',
    date: 'June 2025',
    description: [
      'Designed and deployed a RAG agent using Python/Django, OpenAI embeddings, and ServiceNow ITSM',
    ],
  },
];

export const leadershipRoles = [
  {
    id: 'hackathon-winner',
    title: '1st Place, Wells Fargo AI Hackathon 2025',
    description: 'Led a 4-member team to build a multi-agent AI platform, earning an executive demo',
  },
  {
    id: 'cornerink',
    title: 'Co-Founder & CTO - CornerInk',
    description: 'Scaled custom-merch platform to 8 L INR revenue (1.5K+ products sold)',
  },
];
