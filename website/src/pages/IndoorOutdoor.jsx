import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  company,
  idealSpaceCards,
  plantVarietyCards,
  premiumPotGallery,
  premiumPotFeatures,
  plantServiceCards,
  aryanDifference,
  plantPageTestimonial,
  plantPageGallery,
  plantFaqs,
} from '../data/content'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'

export default function IndoorOutdoor() {
  const { hash } = useLocation()
  const [openFaq, setOpenFaq] = useState(0)

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [hash])

  return (
    <>
      {/* Banner — image only, no text / blur */}
      <section className="w-full overflow-hidden bg-[#f7faf7]">
        <img
          src="/images/plants/hero-indoor-outdoor.jpg"
          alt="Premium Indoor & Outdoor Plants — Bring Nature Closer to You"
          decoding="async"
          fetchPriority="high"
          className="w-full h-auto block"
        />
      </section>

      {/* Plants for Every Space */}
      <section id="ideal-spaces" className="py-14 lg:py-18 bg-white scroll-mt-28">
        <div className="container-site section-pad">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-600 mb-2">
                <Icon name="Leaf" className="w-3.5 h-3.5" />
                Ideal Spaces
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900">
                Plants for Every Space
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-sm font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1"
            >
              View All <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {idealSpaceCards.map((card) => (
              <article
                key={card.label}
                className="group overflow-hidden rounded-2xl bg-[#f7faf7] border border-forest-800/6 shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[4/3] overflow-hidden bg-leaf-100">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5 flex items-center justify-between gap-2">
                  <p className="text-[0.65rem] sm:text-xs font-bold text-forest-900 leading-snug">
                    {card.label}
                  </p>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-800 text-leaf-300 group-hover:bg-forest-700 transition">
                    <Icon name="ArrowRight" className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Plant Varieties — full section */}
      <section id="varieties" className="py-14 lg:py-16 bg-white scroll-mt-28">
        <div className="container-site section-pad">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900 inline-flex items-center gap-2">
                <Icon name="Leaf" className="w-5 h-5 text-forest-700" />
                Our Plant Varieties
              </h2>
              <p className="mt-1.5 text-sm text-forest-700/65">
                Choose from a wide range of healthy and beautiful plants.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {plantVarietyCards.map((card) => (
              <article
                key={card.label}
                className="group overflow-hidden rounded-2xl bg-[#fcfaf8] border border-forest-800/8 shadow-sm"
              >
                <div className="aspect-[3/4] overflow-hidden bg-leaf-50">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="px-3 py-3 flex items-center justify-between gap-2">
                  <p className="text-xs sm:text-sm font-semibold text-forest-900 leading-snug">
                    {card.label}
                  </p>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest-800 text-white">
                    <Icon name="ArrowRight" className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Plant Pots — separate full section */}
      <section id="pots" className="py-14 lg:py-16 bg-[#fcfaf8] scroll-mt-28">
        <div className="container-site section-pad">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900 inline-flex items-center gap-2">
                <Icon name="Flower2" className="w-5 h-5 text-forest-700" />
                Premium Plant Pots
              </h2>
              <p className="mt-1.5 text-sm text-forest-700/65">
                Stylish pots for every space and style.
              </p>
            </div>
            <Link
              to="/gallery"
              className="text-sm font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1"
            >
              View All <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {premiumPotGallery.map((pot) => (
              <article key={pot.label} className="text-center">
                <div className="aspect-square overflow-hidden rounded-2xl bg-white border border-forest-800/6 shadow-sm mb-3">
                  <img
                    src={pot.image}
                    alt={pot.label}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-forest-800 leading-snug">
                  {pot.label}
                </p>
              </article>
            ))}
          </div>
          {premiumPotFeatures?.length > 0 && (
            <div className="mt-8 pt-6 border-t border-forest-800/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {premiumPotFeatures.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex flex-col items-center text-center gap-2 px-2 ${
                    i < premiumPotFeatures.length - 1 ? 'sm:border-r sm:border-forest-800/10' : ''
                  }`}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-800 text-leaf-300">
                    <Icon name={f.icon} className="w-4 h-4" />
                  </span>
                  <span className="text-[0.6rem] sm:text-xs font-bold uppercase tracking-wide text-forest-800 leading-snug">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us — mockup layout */}
      <section className="py-14 lg:py-18 bg-[#f8f9f5]">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 xl:col-span-3">
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-forest-600 mb-3">
                <Icon name="Leaf" className="w-3.5 h-3.5" />
                Why Choose Us
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900 leading-tight text-balance">
                The Aryan Organic Difference
              </h2>
              <p className="mt-4 text-sm sm:text-base text-forest-700/70 leading-relaxed">
                We are committed to bringing nature closer to you with premium plants, expert
                guidance and reliable service.
              </p>
              <div className="mt-7">
                <Button to="/about" className="!rounded-full !px-6">
                  Learn More
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
              {aryanDifference.map((item) => (
                <article key={item.title} className="text-left">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f0e6] text-forest-800">
                    <Icon name={item.icon} className="w-5 h-5" />
                  </span>
                  <h3 className="mt-3 font-semibold text-forest-900 text-sm leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-forest-700/65 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services — mockup card row */}
      <section id="services" className="py-14 lg:py-16 bg-[#fcfaf8] scroll-mt-28">
        <div className="container-site section-pad">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900 inline-flex items-center gap-2">
                <Icon name="Leaf" className="w-5 h-5 text-forest-700" />
                Our Services
              </h2>
              <p className="mt-1.5 text-sm text-forest-700/65">
                Complete greenery solutions for your space.
              </p>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1"
            >
              View All Services <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {plantServiceCards.map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-[1.25rem] bg-white shadow-sm border border-forest-800/6"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-leaf-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Wavy white divider */}
                  <svg
                    className="absolute -bottom-px left-0 w-full h-8 text-white"
                    viewBox="0 0 400 40"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M0,20 C60,40 100,0 160,18 C220,36 280,4 340,20 C370,28 390,22 400,18 L400,40 L0,40 Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div className="relative px-4 pb-5 pt-1 text-center">
                  <span className="mx-auto -mt-7 mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-forest-800 text-leaf-300 shadow-md ring-4 ring-white relative z-10">
                    <Icon name={card.icon} className="w-4 h-4" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-forest-900">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-forest-700/65 leading-relaxed">{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-14 lg:py-16 bg-mist">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-lg shadow-forest-900/10">
            <div className="bg-forest-800 text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-300 mb-3">
                What Our Customers Say
              </p>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: plantPageTestimonial.rating }).map((_, i) => (
                  <Icon key={i} name="Star" className="w-4 h-4 text-leaf-300 fill-leaf-300" />
                ))}
              </div>
              <blockquote className="font-display text-xl sm:text-2xl leading-relaxed text-leaf-50">
                “{plantPageTestimonial.quote}”
              </blockquote>
              <p className="mt-6 font-semibold text-white">{plantPageTestimonial.name}</p>
              <p className="text-sm text-leaf-200/80">{plantPageTestimonial.location}</p>
            </div>
            <div className="min-h-[240px] lg:min-h-0">
              <img
                src={plantPageTestimonial.image}
                alt={plantPageTestimonial.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 lg:py-16">
        <div className="container-site section-pad">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-600 mb-2">
                Projects
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900">
                Our Green Gallery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="text-sm font-semibold text-forest-700 hover:text-forest-900 inline-flex items-center gap-1"
            >
              View Gallery <Icon name="ArrowRight" className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {plantPageGallery.map((src) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl aspect-[4/3] border border-forest-800/8 bg-leaf-50"
              >
                <img src={src} alt="Aryan Organic project" className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 lg:py-16 bg-mist">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-4 rounded-3xl bg-forest-800 text-white p-8 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-leaf-300 mb-4">
                  <Icon name="CircleHelp" className="w-6 h-6" />
                </span>
                <h2 className="font-display text-2xl font-semibold">Have Questions?</h2>
                <p className="mt-2 text-sm text-leaf-100/80 leading-relaxed">
                  Common answers about plants, pots, delivery and landscaping — or call us anytime.
                </p>
              </div>
              <div className="mt-6">
                <Button to="/contact" variant="light" size="sm">
                  View All FAQs
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h3 className="font-display text-xl font-semibold text-forest-900 mb-2">
                Frequently Asked Questions
              </h3>
              {plantFaqs.map((faq, i) => {
                const open = openFaq === i
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-forest-800/10 bg-white overflow-hidden"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                      onClick={() => setOpenFaq(open ? -1 : i)}
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-sm text-forest-900">{faq.q}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-forest-800">
                        <Icon name={open ? 'Minus' : 'Plus'} className="w-4 h-4" />
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-4 text-sm text-forest-700/75 leading-relaxed border-t border-forest-800/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-forest-800 text-white">
        <div className="container-site section-pad flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-display text-2xl font-semibold">
              Ready for greener indoor & outdoor spaces?
            </p>
            <p className="mt-1 text-leaf-200/90 text-sm">
              WhatsApp / Call {company.contact.phoneDisplay} · Service across Bangalore
            </p>
          </div>
          <Button to="/book-visit" variant="light" size="lg">
            Get a Quote
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
