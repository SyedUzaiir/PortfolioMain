export interface AchievementStatCard {
  title: string
  value: string
  trend: string
  description: string
  lastUpdated: string
}

export interface AchievementTimelineItem {
  year: string
  title: string
  description: string
}

export const achievementStats: AchievementStatCard[] = [
  {
    title: 'Problems Solved',
    value: '342',
    trend: '+18 this month',
    description: 'Algorithmic challenges solved across competitive coding platforms.',
    lastUpdated: 'Updated today'
  },
  {
    title: 'Projects Built',
    value: '15+',
    trend: '+2 this quarter',
    description: 'Enterprise web services, full-stack builds, and agentic AI models.',
    lastUpdated: 'Updated 1 week ago'
  },
  {
    title: 'Certifications',
    value: '10+',
    trend: '+2 new',
    description: 'Credentials validating backend, cloud, containers, and scrum.',
    lastUpdated: 'Updated yesterday'
  },
  {
    title: 'Internships',
    value: '3',
    trend: 'Completed',
    description: 'Software development, API services, and system architectures.',
    lastUpdated: 'Verified'
  },
  {
    title: 'CodeChef Rating',
    value: '1,510',
    trend: '3★ Star',
    description: 'Competitive programming contest rating and global standings.',
    lastUpdated: 'Updated last contest'
  },
  {
    title: 'GitHub Commits',
    value: '1,000+',
    trend: '+120 this week',
    description: 'Version control activity, open source repositories, and collaboration.',
    lastUpdated: 'Real-time sync'
  }
]

export const achievementTimeline: AchievementTimelineItem[] = [
  {
    year: '2022',
    title: 'Started Programming Journey',
    description: 'Mastered Java OOP principles, data structures foundations, and core software engineering design patterns.'
  },
  {
    year: '2023',
    title: 'First Software Internship',
    description: 'Built enterprise-grade relational database integrations, REST APIs, and performed application code optimization.'
  },
  {
    year: '2024',
    title: 'AI & Full-Stack Projects',
    description: 'Developed advanced AI-powered systems (e.g. PlacementPro AI) using microservices and containerized environments.'
  },
  {
    year: '2025',
    title: 'Placement Preparation & Systems Design',
    description: 'Deepening expertise in Distributed Systems, Spring Boot Microservices architectures, and advanced DSA.'
  }
]

export const recentHighlights: string[] = [
  'Oracle Certified Cloud Developer',
  'Smart Coder Diamond Level DSA Certification',
  'Developed and Scaled PlacementPro AI Landing Page',
  '342+ Verified Competitive Coding Submissions'
]
