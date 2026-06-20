import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Syed Uzair Mohiuddin | Software Engineer',
    short_name: 'Uzair Mohiuddin',
    description: 'Software Engineer specializing in Java, Spring Boot, full-stack architectures, and AI systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#10b981',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
