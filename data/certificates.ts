import { Certificate } from '@/types/portfolio'

export const certificates: Certificate[] = [
  {
    id: 'cert-oci',
    title: 'Oracle Cloud Infrastructure Certified Developer Professional',
    issuer: 'Oracle',
    issueDate: '2023',
    credentialId: 'OCI-DEV-9912',
    credentialUrl: 'https://verify.oracle.com',
    badgeImage: '/certificates/oracle-badge.png',
    category: 'Cloud & DevOps',
    skills: ['OCI', 'Docker', 'Kubernetes', 'Serverless', 'Terraform']
  },
  {
    id: 'cert-docker',
    title: 'Docker Foundations Professional Certificate',
    issuer: 'Docker',
    issueDate: '2024',
    credentialId: 'DKR-FDN-4421',
    credentialUrl: 'https://docker.com/verify',
    badgeImage: '/certificates/aws-badge.png',
    category: 'Containers & Tools',
    skills: ['Docker Engine', 'Docker Compose', 'Multi-stage Builds', 'CI/CD']
  },
  {
    id: 'cert-salesforce',
    title: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    issueDate: '2024',
    credentialId: 'SF-AGNT-8810',
    credentialUrl: 'https://trailhead.salesforce.com/en/credentials/verification',
    badgeImage: '/certificates/oracle-badge.png',
    category: 'Artificial Intelligence',
    skills: ['Agentforce', 'Prompt Design', 'Autonomous Agents', 'Einstein AI']
  },
  {
    id: 'cert-atlassian',
    title: 'Atlassian Agile Project Management',
    issuer: 'Atlassian',
    issueDate: '2023',
    credentialId: 'ATL-AGL-3091',
    credentialUrl: 'https://atlassian.com/verify',
    badgeImage: '/certificates/aws-badge.png',
    category: 'Agile & Collaboration',
    skills: ['Jira Software', 'Agile Methodologies', 'Scrum Framework', 'Sprint Planning']
  },
  {
    id: 'cert-js',
    title: 'JavaScript Foundations Professional Certificate',
    issuer: 'JavaScript Institute / W3C',
    issueDate: '2023',
    credentialId: 'JS-FND-1105',
    credentialUrl: 'https://w3.org/verify',
    badgeImage: '/certificates/oracle-badge.png',
    category: 'Frontend Development',
    skills: ['ES6+', 'Asynchronous JS', 'DOM Manipulation', 'Design Patterns']
  },
  {
    id: 'cert-nptel',
    title: 'NPTEL Python For Data Science Elite',
    issuer: 'NPTEL (IIT Madras)',
    issueDate: '2023',
    credentialId: 'NPTEL-PY-2287',
    credentialUrl: 'https://nptel.ac.in/noc',
    badgeImage: '/certificates/aws-badge.png',
    category: 'Data Science & ML',
    skills: ['Python 3', 'Pandas & NumPy', 'Data Visualization', 'Scikit-learn']
  },
  {
    id: 'cert-smartcoder',
    title: 'Smart Coder Diamond Level',
    issuer: 'Smart Coder Coding Hub',
    issueDate: '2024',
    credentialId: 'SC-DIA-7763',
    credentialUrl: 'https://smartcoder.co.in/verify',
    badgeImage: '/certificates/oracle-badge.png',
    category: 'Algorithms & DSA',
    skills: ['Advanced Graph Theory', 'Dynamic Programming', 'Competitive Programming']
  }
]
