import { useState } from 'react'
import { company } from '../data/content'
import { buildContactWhatsAppMessage, openWhatsApp } from '../utils/whatsapp'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import BrandLogo from '../components/ui/BrandLogo'
import Icon from '../components/ui/Icon'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = {
      name: String(form.get('name') || '').trim(),
      phone: String(form.get('phone') || '').trim(),
      email: String(form.get('email') || '').trim(),
      area: String(form.get('area') || '').trim(),
      message: String(form.get('message') || '').trim(),
    }
    openWhatsApp(buildContactWhatsAppMessage(data))
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's grow organic together"
        subtitle="Apartments, villas, schools, offices — free terrace inspection this month in Bangalore."
      />

      <section className="py-16 lg:py-20">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl bg-mist border border-forest-800/8 p-6 space-y-5">
                <div className="flex gap-3">
                  <Icon name="Phone" className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-600 font-semibold">
                      Mobile
                    </p>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className="text-forest-900 font-medium hover:text-forest-700"
                    >
                      {company.contact.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="Mail" className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-600 font-semibold">
                      Email
                    </p>
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="text-forest-900 font-medium hover:text-forest-700"
                    >
                      {company.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="MapPin" className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-forest-600 font-semibold">
                      Venue
                    </p>
                    <p className="text-forest-900 font-medium leading-relaxed">
                      {company.contact.address}
                    </p>
                    <p className="text-sm text-forest-700 mt-2">
                      <span className="font-semibold">Landmark:</span> {company.contact.landmark}
                    </p>
                    <p className="text-sm text-forest-600 mt-1">{company.contact.areas}</p>
                  </div>
                </div>
              </div>

              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] text-white px-5 py-4 font-semibold hover:brightness-95 transition"
              >
                <Icon name="MessageCircle" className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <p className="text-sm text-forest-700/70 leading-relaxed">
                {company.kannada.terrace}
                <br />
                <span className="text-forest-600 font-medium">{company.kannada.everyDrop}</span>
              </p>

              <div className="rounded-2xl bg-black p-5 flex justify-center">
                <BrandLogo to={null} variant="plain" size="full" className="max-w-[180px]" />
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-forest-800/8 bg-white p-6 sm:p-8 shadow-sm">
                <h2 className="font-display text-2xl font-semibold text-forest-900">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-forest-700/70">
                  Tell us about your terrace — we&apos;ll get back within 24 hours.
                </p>

                {sent ? (
                  <div className="mt-8 rounded-xl bg-leaf-50 border border-leaf-300/50 p-6 text-forest-800">
                    <p className="font-semibold">Opening WhatsApp…</p>
                    <p className="mt-1 text-sm">
                      Your details are ready to send on WhatsApp. If it didn&apos;t open,{' '}
                      <a
                        href={company.social.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-forest-700 underline"
                      >
                        tap here
                      </a>
                      .
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => setSent(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                        Name
                      </span>
                      <input
                        required
                        name="name"
                        className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                        Phone
                      </span>
                      <input
                        required
                        name="phone"
                        type="tel"
                        className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                        placeholder="+91"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                        Email
                      </span>
                      <input
                        required
                        name="email"
                        type="email"
                        className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                        placeholder="you@email.com"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                        Area in Bangalore
                      </span>
                      <input
                        name="area"
                        className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                        placeholder="e.g. HSR Layout, Whitefield"
                      />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                        Message
                      </span>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400 resize-y"
                        placeholder="Tell us about your terrace space..."
                      />
                    </label>
                    <div className="sm:col-span-2">
                      <Button type="submit" size="lg">
                        <Icon name="MessageCircle" className="w-4 h-4" />
                        Send on WhatsApp
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
