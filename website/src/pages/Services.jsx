import { Link } from 'react-router-dom'
import { plantBenefits, idealSpaceCards } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import SectionHeading from '../components/ui/SectionHeading'
import ServiceOfferingsBar from '../components/ui/ServiceOfferingsBar'

const serviceCards = [
  {
    title: 'Indoor & Outdoor Plants',
    path: '/services/indoor-outdoor',
    image: '/images/plants/indoor-trio-table.jpg',
    text: 'Premium indoor & outdoor plants, designer pots and landscaping — all on one page.',
  },
  {
    title: 'Land & Plot Gardens',
    path: '/services/land-plot',
    image: '/images/land-site-garden.png',
    text: 'Turn unused sites into structured organic farms — raised beds, grow bags and drip.',
  },
  {
    title: 'Terrace Garden Setup',
    path: '/services/terrace',
    image: '/images/lifestyle/rooftop-growbags.png',
    text: 'Automated organic terrace gardens — drip, soil, seeds and full installation.',
  },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Service"
        title="Organic gardens for every space"
        subtitle="Indoor & outdoor plants, land & plot gardens, and complete terrace setups — each on its own dedicated page."
        image="/images/plants/promo-banner.jpg"
      />

      <ServiceOfferingsBar />

      <section className="py-14 lg:py-16">
        <div className="container-site section-pad">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {plantBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-forest-800/8 bg-leaf-50/60 p-5 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest-700 shadow-sm">
                  <Icon name={b.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-3 font-semibold text-forest-900 text-sm">{b.title}</h3>
                <p className="mt-1 text-xs text-forest-700/70">{b.text}</p>
              </div>
            ))}
          </div>

          <SectionHeading
            title="Choose your service"
            subtitle="Each option opens its own page — Land & Plot and Terrace Garden are separate."
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.title}
                to={card.path}
                className="group overflow-hidden rounded-2xl border border-forest-800/8 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-leaf-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-semibold text-forest-900 group-hover:text-forest-700">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-forest-700/75">{card.text}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-forest-700">
                    Open page <Icon name="ArrowRight" className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-mist">
        <div className="container-site section-pad">
          <div className="mb-8">
            <span className="inline-flex rounded-full bg-leaf-100 px-4 py-1.5 text-xs font-semibold text-forest-800">
              Ideal for Every Space
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {idealSpaceCards.map((card) => (
              <article
                key={card.label}
                className="group flex flex-col overflow-hidden rounded-t-xl rounded-b-lg shadow-sm bg-forest-800"
              >
                <div className="aspect-[3/4] overflow-hidden bg-leaf-100">
                  <img
                    src={card.image}
                    alt={card.label}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="bg-forest-800 px-2 py-3 min-h-[3.25rem] flex items-center justify-center">
                  <p className="text-center text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wide text-white leading-snug">
                    {card.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/book-visit">Book Free Visit</Button>
          </div>
        </div>
      </section>
    </>
  )
}
