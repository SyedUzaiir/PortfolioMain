import { Education } from '@/types/portfolio'

export const education: Education[] = [
  {
    id: 'edu-btech',
    institution: 'Jawaharlal Nehru Technological University',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    duration: '2021 – 2025',
    cgpa: '8.5 / 10',
    details: [
      'Focus Areas: Advanced Algorithms & Data Structures, Distributed Systems, Database Architectures, Artificial Intelligence.',
      'Major Build: Architected candidate screening automation pipeline with Spring Boot and NLP filters.'
    ]
  },
  {
    id: 'edu-diploma',
    institution: 'State Board of Technical Education',
    degree: 'Diploma in Computer Science & Engineering',
    duration: '2018 – 2021',
    cgpa: '9.1 / 10',
    details: [
      'Focus Areas: OOP foundations (Java, C++), Data Structures, Systems Analysis, Relational Database management.',
      'Major Build: Designed local socket chat relays and library inventory utilities.'
    ]
  }
]
