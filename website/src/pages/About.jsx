import { company, pitchPoints } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import BrandLogo from '../components/ui/BrandLogo'
import SectionHeading from '../components/ui/SectionHeading'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About ARYAN ORGANICS"
        title="Every family deserves organic. Every bite deserves healthy."
        subtitle="We turn terraces into productive organic gardens across Bangalore — so you grow what you eat."
        image="/images/hero-brand.png"
      />

      <section className="py-16 lg:py-24">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Mission"
                title="Coming soon all over Bangalore"
                subtitle="ARYAN ORGANICS is building a full company around how families grow vegetables — not just selling produce, but installing the way to grow."
              />
              <p className="mt-6 text-forest-700/75 leading-relaxed">
                Hi, I&apos;m {company.ceo.name}, {company.ceo.title}. Right now we grow chemical-free
                veggies and install automated terrace gardens. Our belief is simple: every family
                should eat organic and healthy food. From the soil to the water — every drop is
                organic. No pesticides, no chemicals. Just fresh, homegrown taste.
              </p>
              <p className="mt-4 text-forest-600 font-medium text-lg">
                {company.kannada.responsibility}
              </p>
              <div className="mt-8 rounded-2xl bg-leaf-50 border border-leaf-300/40 p-6">
                <p className="text-sm uppercase tracking-wider text-forest-600 font-semibold mb-2">
                  Customer intro
                </p>
                <p className="text-forest-800 leading-relaxed italic">
                  &ldquo;Instead of buying vegetables, why not grow your own? We will install a
                  complete organic terrace garden in your home. No chemicals. No tension. We set it
                  up + teach you. You just harvest and eat. {company.kannada.everyDrop}&rdquo;
                </p>
              </div>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="rounded-3xl bg-black p-6 sm:p-8 shadow-xl w-full max-w-md flex justify-center">
                <BrandLogo to={null} variant="plain" size="full" className="max-w-[260px]" />
              </div>
              <p className="mt-4 text-center text-sm text-forest-600 tracking-wide uppercase">
                {company.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-site section-pad">
          <SectionHeading
            title="Why families say yes"
            subtitle="Health, convenience, and personal support from the CEO."
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {pitchPoints.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-forest-800/8 p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-semibold text-forest-900">{p.title}</h3>
                <p className="mt-2 text-forest-700/70">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/book-visit" size="lg">
              Book Free Terrace Inspection
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
