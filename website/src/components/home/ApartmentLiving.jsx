import { motion } from 'framer-motion'
import { apartmentLiving } from '../../data/content'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function ApartmentLiving() {
  const { eyebrow, title, subtitle, points } = apartmentLiving

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-site section-pad">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} className="mb-12" />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-forest-800/8 bg-mist shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold text-forest-900">{item.title}</h3>
                <p className="mt-2 text-sm text-forest-700/75 leading-relaxed">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button to="/gallery">View Gallery</Button>
          <Button to="/book-visit" variant="secondary">
            Book Free Visit
          </Button>
        </div>
      </div>
    </section>
  )
}
