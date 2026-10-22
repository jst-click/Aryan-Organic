import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  company,
  plantBenefits,
  idealSpaceCards,
  plantVarietyCards,
  premiumPotGallery,
  premiumPotFeatures,
  indoorService,
  outdoorService,
} from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import ServiceOfferingsBar from '../components/ui/ServiceOfferingsBar'

function Pill({ children }) {
  return (
    <span className="inline-flex rounded-full bg-forest-800 px-4 py-1.5 text-[0.7rem] sm:text-xs font-bold uppercase tracking-[0.14em] text-white">
      {children}
    </span>
  )
}

export default function IndoorOutdoor() {
  const { hash } = useLocation()

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
      <PageHero
        eyebrow="Bring Nature Closer to You"
        title="Premium Indoor & Outdoor Plants"
        subtitle="For a greener, healthier and happier space — plant supply, landscape design, pots, installation and maintenance across Bangalore."
        image="/images/lifestyle/rooftop-sunset-living.png"
      />

      {/* Benefits — flyer top icons */}
      <section className="py-12 lg:py-14 bg-white border-b border-forest-800/8">
        <div className="container-site section-pad">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plantBenefits.map((b) => (
              <div key={b.title} className="text-center px-2">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf-50 text-forest-800 border border-forest-800/10">
                  <Icon name={b.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-3 font-semibold text-forest-900 text-sm sm:text-base">{b.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-forest-700/70 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for Every Space */}
      <section id="ideal-spaces" className="py-12 lg:py-16 bg-mist scroll-mt-28">
        <div className="container-site section-pad">
          <div className="mb-8">
            <Pill>Ideal for Every Space</Pill>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {idealSpaceCards.map((card) => (
              <article
                key={card.label}
                className="flex flex-col overflow-hidden rounded-t-xl rounded-b-lg shadow-sm bg-forest-800"
              >
                <div className="aspect-[3/4] overflow-hidden bg-leaf-100">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="bg-forest-800 px-2 py-3 sm:py-3.5 min-h-[3.25rem] flex items-center justify-center">
                  <p className="text-center text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wide text-white leading-snug">
                    {card.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Plant Varieties + Premium Plant Pots */}
      <section className="py-12 lg:py-16">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 lg:items-stretch">
            <div id="varieties" className="rounded-2xl border-2 border-leaf-300/70 bg-leaf-50/50 p-4 sm:p-6 h-full scroll-mt-28">
              <div className="mb-5">
                <Pill>Our Plant Varieties</Pill>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {plantVarietyCards.map((card) => (
                  <article
                    key={card.label}
                    className="relative overflow-hidden rounded-xl aspect-square bg-white shadow-sm"
                  >
                    <img
                      src={card.image}
                      alt={card.label}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 flex justify-center bg-gradient-to-t from-forest-950/55 to-transparent pt-10">
                      <span className="rounded-full bg-forest-800 px-3 py-1.5 text-[0.55rem] sm:text-[0.65rem] font-bold uppercase tracking-wide text-white text-center leading-tight shadow">
                        {card.label}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div id="pots" className="rounded-2xl border-2 border-leaf-300/70 bg-leaf-50/50 p-4 sm:p-6 flex flex-col h-full scroll-mt-28">
              <div className="mb-4 shrink-0">
                <Pill>Premium Plant Pots</Pill>
              </div>
              <div className="flex-1 grid grid-cols-6 gap-2 sm:gap-3">
                {premiumPotGallery.map((src, i) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-xl bg-white shadow-sm border border-forest-800/8 aspect-[3/4] ${
                      i < 3 ? 'col-span-2' : 'col-span-3'
                    }`}
                  >
                    <img
                      src={src}
                      alt="Premium plant pot"
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-forest-800/10 grid grid-cols-2 lg:grid-cols-4 gap-3 shrink-0">
                {premiumPotFeatures.map((f, i) => (
                  <div
                    key={f.label}
                    className={`flex flex-col items-center text-center gap-1.5 px-1 ${
                      i < premiumPotFeatures.length - 1 ? 'lg:border-r lg:border-forest-800/10' : ''
                    }`}
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest-800 text-leaf-300">
                      <Icon name={f.icon} className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-wide text-forest-800 leading-snug">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indoor section */}
      <section id="indoor" className="py-14 lg:py-16 bg-mist scroll-mt-28">
        <div className="container-site section-pad">
          <div className="mb-6">
            <Pill>Indoor Plants</Pill>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900 mb-3">
            {indoorService.headline}
          </h2>
          <p className="text-forest-700/75 max-w-3xl mb-8">{indoorService.subtitle}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {indoorService.varieties.map((v) => (
              <article
                key={v.title}
                className="overflow-hidden rounded-2xl border border-forest-800/8 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={v.image} alt={v.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-forest-900 text-sm">{v.title}</h3>
                  <p className="mt-1 text-xs text-forest-700/70 leading-relaxed">{v.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-forest-800/10 bg-white p-5 sm:p-6">
            <h3 className="font-semibold text-forest-900 mb-3">{indoorService.pots.title}</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {indoorService.pots.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-forest-800">
                  <Icon name="Check" className="w-4 h-4 mt-0.5 text-forest-700 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outdoor section */}
      <section id="outdoor" className="py-14 lg:py-16 scroll-mt-28">
        <div className="container-site section-pad">
          <div className="mb-6">
            <Pill>Outdoor Plants</Pill>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-forest-900 mb-3">
            {outdoorService.headline}
          </h2>
          <p className="text-forest-700/75 max-w-3xl mb-8">{outdoorService.subtitle}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {outdoorService.varieties.map((v) => (
              <article
                key={v.title}
                className="overflow-hidden rounded-2xl border border-forest-800/8 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={v.image} alt={v.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-forest-900 text-sm">{v.title}</h3>
                  <p className="mt-1 text-xs text-forest-700/70 leading-relaxed">{v.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-forest-800/10 bg-leaf-50/50 p-5 sm:p-6">
            <h3 className="font-semibold text-forest-900 mb-3">{outdoorService.pots.title}</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {outdoorService.pots.points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-forest-800">
                  <Icon name="Check" className="w-4 h-4 mt-0.5 text-forest-700 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Flyer bottom bar */}
      <ServiceOfferingsBar />

      <section className="py-12 bg-forest-800 text-white">
        <div className="container-site section-pad flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-display text-2xl font-semibold">
              Call / WhatsApp {company.contact.phoneDisplay}
            </p>
            <p className="mt-1 text-leaf-200/90 text-sm">
              Service available across Bangalore · {company.tagline}
            </p>
          </div>
          <Button to="/book-visit" variant="light" size="lg">
            Book Free Visit
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
