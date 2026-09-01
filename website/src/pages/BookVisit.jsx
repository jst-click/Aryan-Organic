import { useState } from 'react'
import { company } from '../data/content'
import { buildInspectionWhatsAppMessage, openWhatsApp } from '../utils/whatsapp'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'

export default function BookVisit() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = {
      name: String(form.get('name') || '').trim(),
      phone: String(form.get('phone') || '').trim(),
      email: String(form.get('email') || '').trim(),
      area: String(form.get('area') || '').trim(),
      propertyType: String(form.get('propertyType') || '').trim(),
      visitDay: String(form.get('visitDay') || '').trim(),
      notes: String(form.get('notes') || '').trim(),
    }
    openWhatsApp(buildInspectionWhatsAppMessage(data))
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Free Inspection"
        title="Book a complimentary site inspection"
        subtitle="We visit your terrace, balcony or vacant plot, assess sunlight, water and usable space, and recommend an honest plan. There is no charge for the inspection — and no obligation to proceed."
        image="/images/terrace-organic-garden.jpg"
      />

      <section className="py-16 lg:py-20">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-2 space-y-5">
              <img
                src="/images/nursery-shade-net.jpg"
                alt="ARYAN ORGANICS nursery seedlings under shade net"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <div className="rounded-2xl bg-forest-800 text-white p-6">
                <h2 className="font-display text-xl font-semibold">What happens next?</h2>
                <ol className="mt-4 space-y-3 text-sm text-leaf-100/85 list-decimal list-inside">
                  <li>Share your details — WhatsApp opens with a prepared message</li>
                  <li>We confirm a convenient visit by phone or WhatsApp</li>
                  <li>We assess your terrace, balcony or vacant plot — sunlight, water, space and layout</li>
                  <li>If you proceed, we install, train and support your first harvests</li>
                </ol>
              </div>
              <div className="rounded-2xl border border-forest-800/8 bg-leaf-50 p-5">
                <p className="text-sm font-semibold text-offer">
                  🎁 First 10 customers in Bangalore get free 1kg organic compost
                </p>
                <p className="mt-3 text-sm text-forest-700/80">
                  Complete terrace garden setup — grow bags or FRP tubs, drip irrigation, organic
                  soil, seeds and training for families and apartments.
                </p>
              </div>
              <div className="rounded-2xl border border-forest-800/8 bg-white p-5 space-y-3">
                <a
                  href={`tel:${company.contact.phone}`}
                  className="flex items-center gap-2 text-sm font-semibold text-forest-800 hover:text-forest-600"
                >
                  <Icon name="Phone" className="w-4 h-4 text-forest-600" />
                  {company.contact.phoneDisplay}
                </a>
                <div className="flex gap-2 text-sm text-forest-700/80">
                  <Icon name="MapPin" className="w-4 h-4 text-forest-600 shrink-0 mt-0.5" />
                  <span>
                    {company.contact.address}
                    <span className="block mt-1 text-forest-600">
                      Landmark: {company.contact.landmark}
                    </span>
                  </span>
                </div>
              </div>
              <p className="text-sm text-forest-600 italic">
                &ldquo;{company.kannada.everyDrop}&rdquo; — {company.ceo.name}, CEO
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-forest-800/8 bg-white p-6 sm:p-8 shadow-sm">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 text-forest-700 mb-4">
                      <Icon name="Check" className="w-8 h-8" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-forest-900">
                      WhatsApp is ready!
                    </h2>
                    <p className="mt-3 text-forest-700/75 max-w-md mx-auto">
                      Your inspection request details were filled in WhatsApp. Send the message to
                      reach ARYAN ORGANICS on {company.contact.phoneDisplay}.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                      <Button type="button" onClick={() => setSent(false)} variant="secondary">
                        Submit another request
                      </Button>
                      <Button to="/">Back to Home</Button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-semibold text-forest-900">
                      Request free inspection
                    </h2>
                    <p className="mt-2 text-sm text-forest-700/70">
                      Fill the form and tap send — WhatsApp opens with your details to{' '}
                      {company.contact.phoneDisplay}.
                    </p>
                    <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                          Full name
                        </span>
                        <input
                          required
                          name="name"
                          className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                          placeholder="Your name"
                        />
                      </label>
                      <label className="block">
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
                          name="email"
                          type="email"
                          className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                          placeholder="you@email.com"
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                          Bangalore area
                        </span>
                        <input
                          required
                          name="area"
                          className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                          placeholder="HSR / Whitefield / Koramangala..."
                        />
                      </label>
                      <label className="block">
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                          Property type
                        </span>
                        <select
                          name="propertyType"
                          className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400 bg-white"
                          defaultValue="Apartment"
                        >
                          <option>Apartment</option>
                          <option>Villa</option>
                          <option>Independent house</option>
                          <option>Open plot / vacant land</option>
                          <option>School / Office</option>
                        </select>
                      </label>
                      <label className="block sm:col-span-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                          Preferred visit day
                        </span>
                        <input
                          name="visitDay"
                          type="date"
                          className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400"
                        />
                      </label>
                      <label className="block sm:col-span-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-forest-600">
                          Notes about your terrace or land
                        </span>
                        <textarea
                          name="notes"
                          rows={3}
                          className="mt-1.5 w-full rounded-lg border border-forest-800/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-leaf-400 resize-y"
                          placeholder="Terrace, balcony or vacant plot — size, sunlight, access..."
                        />
                      </label>
                      <div className="sm:col-span-2 flex flex-wrap gap-3">
                        <Button type="submit" size="lg">
                          <Icon name="MessageCircle" className="w-4 h-4" />
                          Send on WhatsApp
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
