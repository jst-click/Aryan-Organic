import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { galleryImages } from '../../data/content'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 4)

  return (
    <section className="py-16 lg:py-24">
      <div className="container-site section-pad">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeading
            align="left"
            eyebrow="Garden Gallery"
            title="Pots, balconies & terrace harvests"
            className="mb-0"
          />
          <Button to="/gallery" variant="outline" size="sm">
            View Full Gallery
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
