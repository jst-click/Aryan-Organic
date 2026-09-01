import { motion } from 'framer-motion'
import { company, responsibilityBrand } from '../../data/content'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function ResponsibilityBrand() {
  const { title, subtitle, cta, ctaTo, ribbon, values } = responsibilityBrand

  return (
    <section className="relative overflow-hidden bg-[#f3f6ef]">
      <div className="container-site section-pad py-14 lg:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-forest-600">
              {company.tagline}
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-forest-900 leading-tight text-balance">
              {title}
            </h2>
            <p className="mt-3 text-lg text-earth-600 font-medium italic">{subtitle}</p>
            <p className="mt-4 text-forest-700/75 leading-relaxed">
              We nurture soil, grow health into every harvest, and enrich the lives of families who
              choose to live closer to nature — honestly, purely, and with full responsibility from
              seed to plate.
            </p>
            <Button to={ctaTo} className="mt-6 uppercase tracking-wider">
              <Icon name="Leaf" className="w-4 h-4" />
              {cta}
            </Button>
          </motion.div>
        </div>

        <div className="mt-10 lg:mt-14 grid md:grid-cols-3 gap-5">
          {values.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-forest-800/8 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-50 text-forest-700">
                <Icon name={item.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-forest-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-forest-600">{item.text}</p>
              <p className="mt-3 text-sm text-forest-700/70 leading-relaxed">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="bg-forest-900">
        <div className="container-site section-pad py-3.5 flex items-center justify-center gap-3">
          <Icon name="Leaf" className="w-4 h-4 text-leaf-400 hidden sm:block" />
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-white">
            {ribbon}
          </p>
          <Icon name="Leaf" className="w-4 h-4 text-leaf-400 hidden sm:block" />
        </div>
      </div>
    </section>
  )
}
