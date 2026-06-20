import { Certificate } from '@/types/portfolio'

export const certificates: Certificate[] = [
  {
    id: 'cert1',
    title: 'Oracle Certified Associate, Java SE Programmer',
    issuer: 'Oracle',
    issueDate: '2023',
    credentialUrl: 'https://verify.oracle.com/cert/123',
    badgeImage: '/certificates/oracle-badge.png'
  },
  {
    id: 'cert2',
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: '2024',
    credentialUrl: 'https://aws.amazon.com/verification',
    badgeImage: '/certificates/aws-badge.png'
  }
]
