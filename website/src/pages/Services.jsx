import { company, featureBar, servicesList, configDetails } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import SectionHeading from '../components/ui/SectionHeading'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Service"
        title="ARYAN Terrace Garden Setup"
        subtitle={`${company.kannada.service} — Grow your own organic vegetables at home. Fully automated. 100% organic.`}
        image="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1400&h=600&fit=crop"
      />

      <section className="py-16 lg:py-20">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                align="left"
                eyebrow="What We Do"
                title="Installing customer terrace gardens"
                subtitle="We target apartments, villas, schools, and offices with terrace space across Bangalore."
              />
              <ul className="mt-8 space-y-3">
                {servicesList.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-forest-800">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-leaf-100 text-forest-700">
                      <Icon name="Check" className="w-3.5 h-3.5" />
                    </span>
                    {s}
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
            title="System & materials we install"
            subtitle="Premium configuration for a durable, water-efficient organic garden."
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
                <p className="text-sm font-medium text-forest-800 pt-2">{c.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button to="/book-visit">Book Free Visit</Button>
            <Button to="/how-it-works" variant="secondary">
              How It Works
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
