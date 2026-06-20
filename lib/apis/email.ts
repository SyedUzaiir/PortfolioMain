import emailjs from '@emailjs/browser'

export interface EmailParams {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_dummy'
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_dummy'
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_dummy'

  const templateParams = {
    from_name: params.name,
    reply_to: params.email,
    subject: params.subject,
    message: params.message
  }

  if (serviceId === 'service_dummy' || publicKey === 'public_dummy') {
    // Simulated delay to verify loading/success UI states in development
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log('Simulated EmailJS success submission:', templateParams)
    return true
  }

  const response = await emailjs.send(serviceId, templateId, templateParams, publicKey)
  return response.status === 200
}
