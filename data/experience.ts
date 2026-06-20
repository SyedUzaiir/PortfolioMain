import { Experience } from '@/types/portfolio'

export const experience: Experience[] = [
  {
    id: 'exp1',
    company: 'Tech Solutions Inc.',
    role: 'Software Engineer (Java Backend & Full Stack)',
    location: 'Remote',
    duration: 'Aug 2024 – Present',
    description: [
      'Developed and optimized scalable Java backend services using Spring Boot and microservices architecture, improving system response times by 20%.',
      'Designed and integrated RESTful APIs, securing them using Spring Security and OAuth2 protocol.',
      'Collaborated on building intuitive web interfaces with Next.js, TypeScript, and Tailwind CSS, increasing user engagement by 15%.',
      'Configured CI/CD pipelines and managed dockerized deployments on AWS cloud infrastructure.'
    ],
    technologies: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'Docker', 'AWS', 'PostgreSQL']
  },
  {
    id: 'exp2',
    company: 'Innovate Tech Labs',
    role: 'Java Developer Intern',
    location: 'Hybrid',
    duration: 'Jan 2024 – Jun 2024',
    description: [
      'Built backend modules for a high-traffic web application using Spring Boot and Hibernate JPA.',
      'Optimized database queries and schemas in MySQL, reducing read latencies by 30%.',
      'Participated in daily standups and agile development cycles, contributing to core features delivery.'
    ],
    technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Git']
  }
]
