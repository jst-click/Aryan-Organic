import { company, featureBar, servicesList, configDetails } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import SectionHeading from '../components/ui/SectionHeading'

export default function TerraceGarden() {
  return (
    <>
      <PageHero
        eyebrow="Our Service"
        title="Terrace Garden Setup"
        subtitle={`${company.kannada.service} — Professionally designed, fully automated organic terrace systems for apartments, villas and independent homes.`}
        image="/images/lifestyle/rooftop-sunset-living.png"
      />

      <section className="py-16 lg:py-20">
        <div className="container-site section-pad">
          <div className="mb-8">
            <span className="inline-flex rounded-full bg-leaf-100 px-4 py-1.5 text-xs font-semibold text-forest-800">
              Terrace Garden Setup
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Terrace Garden"
                title="ARYAN Terrace Garden Setup"
                subtitle="We install automated organic terrace gardens for apartments, villas, schools and offices — planned for your space, sunlight and family."
              />
              <ul className="mt-8 space-y-4">
                {servicesList.map((s) => (
                  <li key={s.title} className="flex items-start gap-3 text-forest-800">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf-100 text-forest-700">
                      <Icon name="Check" className="w-3.5 h-3.5" />
                    </span>
                    <span>
                      <span className="font-semibold block">{s.title}</span>
                      <span className="text-sm text-forest-700/70 leading-relaxed">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl bg-forest-800 text-white p-5">
                <p className="font-semibold">{company.kannada.terrace}</p>
                <p className="mt-2 text-leaf-200 text-sm">{company.kannada.responsibility}</p>
                <p className="mt-2 text-leaf-300 font-medium">{company.kannada.everyDrop}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {featureBar.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-forest-800/8 bg-leaf-50/60 p-5 flex flex-col items-start gap-3"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-forest-700 shadow-sm">
                    <Icon name={f.icon} className="w-5 h-5" />
                  </span>
                  <p className="text-sm font-semibold text-forest-900">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-site section-pad">
          <SectionHeading
            title="System and materials we install"
            subtitle="A durable, water-efficient configuration — specified for Indian terraces and long harvest seasons."
            className="mb-10"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {configDetails.map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-xl border border-forest-800/8 p-5 flex gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-forest-800 text-leaf-300">
                  <Icon name={c.icon} className="w-5 h-5" />
                </span>
                <div className="pt-0.5">
                  <p className="text-sm font-medium text-forest-800">{c.label}</p>
                  {c.desc && <p className="mt-0.5 text-xs text-forest-600/75">{c.desc}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button to="/book-visit">Book Free Visit</Button>
            <Button to="/services/land-plot" variant="secondary">
              Land & Plot Gardens
            </Button>
            <Button to="/how-it-works" variant="outline">
              How It Works
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
