import React from 'react'

export const JsonLd: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Syed Uzair Mohiuddin',
    url: 'https://syeduzair.dev',
    jobTitle: 'Software Engineer',
    description: 'Software Engineer specializing in Java, Full Stack Development, Spring Boot, AI, MERN Stack and scalable software systems.',
    sameAs: [
      'https://github.com/SyedUzaiir',
      'https://linkedin.com/in/syeduzair',
      'https://leetcode.com/syeduzair'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
