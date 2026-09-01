import { motion } from 'framer-motion'
import { urbanGreens } from '../../data/content'
import Icon from '../ui/Icon'

export default function UrbanGreens() {
  const { eyebrow, title, body, ribbon, image, imageAlt, features } = urbanGreens

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site section-pad">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-leaf-500">
              {eyebrow}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px flex-1 max-w-10 bg-leaf-400" />
              <Icon name="Leaf" className="w-4 h-4 text-forest-600" />
              <span className="h-px flex-1 max-w-10 bg-leaf-400" />
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest-900 leading-tight text-balance">
              {title}
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <span className="h-px flex-1 max-w-10 bg-leaf-400" />
              <Icon name="Leaf" className="w-4 h-4 text-forest-600" />
              <span className="h-px flex-1 max-w-10 bg-leaf-400" />
            </div>
            <p className="mt-5 text-base sm:text-lg text-forest-700/80 leading-relaxed">
              {body}
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-xl bg-forest-800 px-5 py-3 text-white">
              <Icon name="Leaf" className="w-4 h-4 text-leaf-300" />
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em]">
                {ribbon}
              </p>
              <Icon name="Leaf" className="w-4 h-4 text-leaf-300" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.75rem] shadow-xl shadow-forest-900/10 ring-1 ring-forest-800/8 aspect-[4/3] lg:aspect-[5/4]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-center sm:text-left"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-leaf-400/50 text-forest-700">
                <Icon name={item.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.12em] text-forest-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-forest-700/70 leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
