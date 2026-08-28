import { motion } from 'framer-motion'
import { testimonials } from '../../data/content'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-mist">
      <div className="container-site section-pad">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Bangalore families growing fresh, chemical-free food at home."
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-forest-800/8 p-6 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Icon key={idx} name="Star" className="w-4 h-4 fill-leaf-400 text-leaf-400" />
                ))}
              </div>
              <p className="text-forest-800/85 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-5 pt-4 border-t border-forest-800/8">
                <p className="font-semibold text-forest-900">{t.name}</p>
                <p className="text-xs text-forest-600 mt-0.5">{t.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
