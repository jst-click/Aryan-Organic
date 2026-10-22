import { landGarden, company } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import SectionHeading from '../components/ui/SectionHeading'

export default function LandPlotGardens() {
  const {
    eyebrow,
    title,
    subtitle,
    body,
    kannada,
    cta,
    ctaTo,
    image,
    imageAlt,
    overlay,
    points,
  } = landGarden

  return (
    <>
      <PageHero
        eyebrow="Our Service"
        title="Land & Plot Gardens"
        subtitle="Turn unused land into a working organic garden — raised beds, grow bags, trellis crops and drip irrigation across Bangalore & Kolar."
        image={image}
      />

      <section className="py-16 lg:py-20">
        <div className="container-site section-pad">
          <div className="mb-8">
            <span className="inline-flex rounded-full bg-leaf-100 px-4 py-1.5 text-xs font-semibold text-forest-800">
              Land & Plot Gardens
            </span>
          </div>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-forest-900/15 ring-1 ring-forest-800/10">
                <img src={image} alt={imageAlt} className="w-full aspect-[16/10] object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/75 via-forest-950/25 to-transparent p-5 sm:p-6">
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-leaf-200">
                    {overlay}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <SectionHeading align="left" eyebrow={eyebrow} title={title} className="mb-0" />
              <p className="mt-4 text-base sm:text-lg text-forest-700/75 leading-relaxed">{subtitle}</p>
              <p className="mt-3 text-forest-700/75 leading-relaxed">{body}</p>
              <p className="mt-3 text-sm font-medium text-forest-600">{kannada}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button to={ctaTo}>{cta}</Button>
                <Button to="/services/terrace" variant="secondary">
                  Terrace Garden Setup
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-14 grid md:grid-cols-3 gap-5">
            {points.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-mist border border-forest-800/8 p-6 shadow-sm"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest-700">
                  <Icon name={item.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-forest-900">{item.title}</h3>
                <p className="mt-2 text-sm text-forest-700/70 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-forest-800 text-white">
        <div className="container-site section-pad flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-display text-2xl font-semibold">Have a blank plot ready to grow?</p>
            <p className="mt-1 text-leaf-200/90 text-sm">
              WhatsApp / Call {company.contact.phoneDisplay} · Free land visit
            </p>
          </div>
          <Button to="/book-visit" variant="light" size="lg">
            Book a Land Visit
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </>
  )
}
