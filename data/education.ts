import { Education } from '@/types/portfolio'

export const education: Education[] = [
  {
    id: 'edu-btech',
    institution: 'Vardhaman College of Engineering',
    university: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    duration: '2024 – 2027',
    showCgpa: false, // CGPA not displayed (currently pursuing)
    details: [
      'Data Structures & Algorithms',
      'Full Stack Development',
      'Java Backend Development',
      'Database Management Systems',
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Networks'
    ]
  },
  {
    id: 'edu-diploma',
    institution: 'Quli Qutub Shah Government Polytechnic',
    board: 'State Board of Technical Education and Training (SBTET)',
    degree: 'Diploma in Computer Science & Engineering',
    duration: '2021 – 2024',
    cgpa: '9.44 / 10',
    showCgpa: true,
    details: [
      'Programming Fundamentals',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Computer Networks',
      'Web Technologies',
      'Computer Fundamentals'
    ]
  }
]
