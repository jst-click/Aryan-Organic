import { company } from '../data/content'

const WHATSAPP_NUMBER = `91${company.contact.phone.replace(/\D/g, '')}`

export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function buildContactWhatsAppMessage(data) {
  return [
    '*ARYAN ORGANICS — Contact Message*',
    '',
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Email:* ${data.email || '-'}`,
    `*Area:* ${data.area || '-'}`,
    '',
    '*Message:*',
    data.message,
  ].join('\n')
}

export function buildInspectionWhatsAppMessage(data) {
  return [
    '*ARYAN ORGANICS — Free Inspection Request*',
    '',
    `*Name:* ${data.name}`,
    `*Phone:* ${data.phone}`,
    `*Email:* ${data.email || '-'}`,
    `*Area:* ${data.area}`,
    `*Property type:* ${data.propertyType}`,
    `*Preferred visit day:* ${data.visitDay || '-'}`,
    '',
    '*Terrace notes:*',
    data.notes || '-',
  ].join('\n')
}
