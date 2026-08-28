import { motion } from 'framer-motion'
import { benefits } from '../../data/content'
import Icon from '../ui/Icon'

export default function Benefits() {
  return (
    <section className="py-14 lg:py-16 bg-forest-900">
      <div className="container-site section-pad">
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-leaf-400/40 text-leaf-300 mb-4">
                <Icon name={b.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-white">{b.title}</h3>
              <p className="mt-2 text-sm text-leaf-100/70 leading-relaxed max-w-xs">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
