import { galleryImages } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Urban gardens, thoughtfully made"
        subtitle="Our nursery, installed terrace gardens, vacant-plot layouts, balcony pots and rooftop harvests — a look at how organic growing fits Bangalore homes and unused land."
        image="/images/terrace-organic-garden.jpg"
      />
      <section className="py-16 lg:py-20">
        <div className="container-site section-pad">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img) => (
              <figure
                key={img.src}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-leaf-50"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/banner.png'
                  }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/85 to-transparent p-4 text-sm text-white opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition">
                  {img.caption || img.alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/book-visit">Plan a garden like this — book a visit</Button>
          </div>
        </div>
      </section>
    </>
  )
}
