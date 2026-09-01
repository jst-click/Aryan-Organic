import { visionMission } from '../../data/content'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

export default function VisionMission() {
  const { vision, mission } = visionMission

  return (
    <section className="py-16 lg:py-24 bg-mist">
      <div className="container-site section-pad">
        <SectionHeading
          eyebrow="Who We Are"
          title="Our vision and our mission"
          subtitle="We exist to put chemical-free food back on the family table — grown a few steps from the kitchen, on terraces that once sat unused."
          className="mb-12"
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {[vision, mission].map((item) => (
            <article
              key={item.eyebrow}
              className="rounded-3xl bg-white border border-forest-800/8 overflow-hidden shadow-sm"
            >
              {item.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt || item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-7 sm:p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-800 text-leaf-300">
                <Icon name={item.icon} className="w-6 h-6" />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-forest-600">
                {item.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-forest-900 leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-forest-700/75 leading-relaxed">{item.statement}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/about" variant="secondary">
            Read our full story
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
