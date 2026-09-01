import { company } from '../data/content'

const phone = company.contact.phoneDisplay

export const quickPrompts = [
  'What do you install?',
  'Is inspection free?',
  'Which areas do you serve?',
  'How does it work?',
]

const replies = [
  {
    keys: ['price', 'cost', 'rate', 'charge', 'fees', 'how much', 'package'],
    text: `Pricing depends on your terrace size, sunlight and the layout we design. Book a complimentary inspection and we will share a clear plan — no obligation. Call ${phone} or continue on WhatsApp.`,
  },
  {
    keys: ['inspect', 'visit', 'free', 'book', 'come'],
    text: 'Yes — the terrace inspection is complimentary across Bangalore and Kolar. We check sunlight, water, load and usable space, then recommend an honest plan. You can book it from Book a Visit or ask us on WhatsApp.',
  },
  {
    keys: ['area', 'bangalore', 'bengaluru', 'kolar', 'where', 'location', 'hsr', 'whitefield'],
    text: `We serve Bangalore, Kolar and the surrounding region. Our base is ${company.contact.address}, landmark ${company.contact.landmark}.`,
  },
  {
    keys: ['include', 'install', 'what do you', 'service', 'tub', 'drip', 'soil', 'system'],
    text: 'We install a complete organic terrace garden: fibre tubs or grow bags, automated drip irrigation, plumbing, premium organic soil, seeds and plants, plus training. You do not assemble a kit — you receive a working system.',
  },
  {
    keys: ['how', 'process', 'step', 'work'],
    text: 'Five steps: complimentary inspection → custom garden plan → professional installation → training and after-care → harvest at home. From seed to harvest, it remains our responsibility.',
  },
  {
    keys: ['organic', 'chemical', 'pesticide', 'safe', 'health'],
    text: `${company.slogan}. We use chemical-free soil, bio-fertilisers and family-safe pest care. No pesticides on food your children will eat.`,
  },
  {
    keys: ['contact', 'phone', 'whatsapp', 'call', 'number', 'email'],
    text: `Call ${phone}, email ${company.contact.email}, or tap WhatsApp below. ${company.ceo.name}, ${company.ceo.title}, stays reachable.`,
  },
  {
    keys: ['vision', 'mission', 'about', 'who'],
    text: `Vision: unused terraces become living farms. Mission: make home-grown organic food simple with a complete automated garden. ${company.tagline}.`,
  },
  {
    keys: ['time', 'long', 'duration', 'days'],
    text: 'After the inspection and plan, installation is scheduled to suit your home. Most families start simple care within days of setup. We confirm the timeline during the visit.',
  },
  {
    keys: ['apartment', 'balcony', 'villa', 'terrace', 'school', 'office'],
    text: 'We design for apartments, villas, independent homes, schools and offices — balcony pots to full terrace systems, planned around your space.',
  },
  {
    keys: ['hi', 'hello', 'hey', 'namaste'],
    text: `Hello. I am the ARYAN helper. Ask about terrace gardens, inspection, areas we serve, or what is included. For a personal plan, WhatsApp or call ${phone}.`,
  },
]

export function replyToAssistant(input) {
  const q = input.toLowerCase().trim()
  if (!q) {
    return `Ask me about our terrace garden setup, or tap WhatsApp / Call. We are on ${phone}.`
  }

  const match = replies.find((item) => item.keys.some((key) => q.includes(key)))
  if (match) return match.text

  return `I can help with inspection, what we install, areas we serve, and how the process works. For a custom plan, tap WhatsApp or call ${phone} — ${company.ceo.name} will assist you.`
}
