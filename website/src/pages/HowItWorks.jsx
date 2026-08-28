import { howItWorks } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import HowItWorksSection from '../components/home/HowItWorksSection'
import Benefits from '../components/home/Benefits'

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="How ARYAN Terrace Garden Setup Works"
        subtitle="Five clear steps — from free inspection to harvest. Soil, seeds, setup, training — we handle everything."
      />
      <HowItWorksSection />
      <Benefits />
      <section className="py-16">
        <div className="container-site section-pad">
          <div className="max-w-3xl mx-auto space-y-6">
            {howItWorks.map((s) => (
              <div
                key={s.step}
                className="flex gap-5 rounded-2xl border border-forest-800/8 bg-white p-5 shadow-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-800 text-white font-display font-semibold">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-semibold text-forest-900 text-lg">{s.title}</h3>
                  <p className="mt-1 text-forest-700/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/book-visit" size="lg">
              Start with Free Inspection
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
