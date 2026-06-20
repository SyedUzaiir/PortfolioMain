import { Experience } from '@/types/portfolio'

export const experience: Experience[] = [
  {
    id: 'exp-aws',
    company: 'SV Global Services Pvt. Ltd.',
    role: 'AWS Cloud Computing Trainee',
    mode: 'On-site',
    duration: 'Jun 2024 – Jul 2024',
    description: [
      'Completed hands-on training in AWS Cloud Computing fundamentals.',
      'Worked with core AWS services including Amazon S3 for scalable storage solutions.',
      'Learned cloud deployment fundamentals and best practices for cloud infrastructure.',
      'Gained practical understanding of cloud architecture, services, and management tools.'
    ],
    technologies: ['AWS', 'Amazon S3', 'Cloud Computing']
  },
  {
    id: 'exp-aicte-ai',
    company: 'AICTE Eduskills',
    role: 'AI Intern',
    program: 'Microsoft & SAP AI Internship',
    mode: 'Remote',
    duration: 'Oct 2024 – Dec 2024',
    description: [
      'Worked on Artificial Intelligence concepts and real-world applications under the Microsoft & SAP AI program.',
      'Explored Machine Learning fundamentals including supervised and unsupervised learning techniques.',
      'Built practical AI-based solutions and mini-projects throughout the internship.',
      'Strengthened analytical thinking and problem-solving skills through hands-on AI exercises.'
    ],
    technologies: ['Artificial Intelligence', 'Machine Learning', 'Python']
  }
]
