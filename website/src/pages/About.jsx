import {
  company,
  aboutContent,
  visionMission,
  coreValues,
  aboutStats,
  whyChooseUs,
  aboutPromise,
  pitchPoints,
} from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import SectionHeading from '../components/ui/SectionHeading'

export default function About() {
  const { vision, mission } = visionMission

  return (
    <>
      <PageHero
        eyebrow="About ARYAN ORGANICS"
        title={aboutContent.heroTitle}
        subtitle={aboutContent.heroSubtitle}
        image="/images/terrace-organic-garden.jpg"
      />

      <section className="py-10 bg-forest-800">
        <div className="container-site section-pad">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow={aboutContent.storyEyebrow}
                title={aboutContent.storyTitle}
              />
              <div className="mt-6 space-y-4 text-forest-700/80 leading-relaxed">
                {aboutContent.story.map((para, i) =>
                  i === 2 ? (
                    <p
                      key={para.slice(0, 48)}
                      className="rounded-2xl bg-leaf-50 border border-leaf-300/40 px-5 py-4 text-forest-800 font-medium"
                    >
                      {para}
                    </p>
                  ) : (
                    <p key={para.slice(0, 48)}>{para}</p>
                  ),
                )}
              </div>
              <p className="mt-5 text-forest-700 font-medium">{company.kannada.responsibility}</p>
              <p className="mt-2 text-sm text-forest-600">
                {company.ceo.name} · {company.ceo.title}
              </p>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="/images/nursery-shade-net.jpg"
                  alt="ARYAN ORGANICS nursery — seedlings under shade net"
                  className="rounded-2xl object-cover h-52 sm:h-64 w-full mt-8"
                />
                <img
                  src="/images/lifestyle/rooftop-sunset-oasis.png"
                  alt="Sunset rooftop garden with vegetables, a pergola and a seating corner"
                  className="rounded-2xl object-cover h-52 sm:h-64 w-full"
                />
              </div>
              <img
                src="/images/lifestyle/balcony-lifestyle.png"
                alt="Family watering an apartment balcony garden"
                className="mt-3 rounded-2xl object-cover h-40 sm:h-48 w-full"
              />
              <p className="mt-3 text-center text-sm text-forest-600 tracking-wide uppercase">
                {company.tagline}
              </p>
              <p className="mt-1 text-center text-forest-800 font-medium">{company.slogan}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-mist">
        <div className="container-site section-pad">
          <SectionHeading
            title="Vision & Mission"
            subtitle="The purpose that guides every garden we design — and every family we serve."
            className="mb-12"
          />
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {[vision, mission].map((item) => (
              <article
                key={item.eyebrow}
                className="rounded-3xl bg-white border border-forest-800/8 overflow-hidden shadow-sm flex flex-col"
              >
                {item.image && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.imageAlt || item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-7 sm:p-9 flex flex-col flex-1">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-800 text-leaf-300">
                  <Icon name={item.icon} className="w-7 h-7" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-forest-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-4 text-forest-700/80 leading-relaxed">{item.statement}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-forest-800">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-forest-700">
                        <Icon name="Check" className="w-3 h-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site section-pad">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Values that shape every installation"
            subtitle="Honest work, pure methods and lasting responsibility — the same principles we ask of the food on your table."
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-forest-800/8 bg-white p-6 shadow-sm hover:border-leaf-400/50 hover:shadow-md transition"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf-50 text-forest-700">
                  <Icon name={value.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-forest-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-forest-700/75 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-forest-900 text-white">
        <div className="container-site section-pad">
          <SectionHeading
            light
            eyebrow="Why Families Choose ARYAN"
            title="A garden you can trust, from people you can reach"
            subtitle="We are not a catalogue of pots. We are a complete organic growing service — designed, installed and supported for urban homes."
            className="mb-12"
          />
          <div className="grid md:grid-cols-2 gap-5">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-leaf-400/40 text-leaf-300">
                  <Icon name={item.icon} className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-leaf-100/75 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {pitchPoints.map((p) => (
              <div key={p.title} className="rounded-xl bg-forest-800/80 px-5 py-4">
                <p className="font-semibold text-leaf-200">{p.title}</p>
                <p className="mt-1.5 text-sm text-leaf-100/70 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-site section-pad">
          <div className="max-w-4xl mx-auto rounded-3xl bg-leaf-50 border border-leaf-300/40 p-8 sm:p-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
              {aboutPromise.title}
            </p>
            <blockquote className="mt-5 font-display text-xl sm:text-2xl text-forest-900 leading-relaxed">
              &ldquo;{aboutPromise.quote}&rdquo;
            </blockquote>
            <p className="mt-6 text-forest-700 font-medium">{aboutPromise.kannada}</p>
            <p className="mt-2 text-sm text-forest-600">
              — {company.ceo.name}, {company.ceo.title}
            </p>
            <Button to="/book-visit" size="lg" className="mt-8">
              Book a Complimentary Inspection
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
