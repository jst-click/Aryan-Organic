import { motion } from 'framer-motion'
import { natureCloser } from '../../data/content'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function NatureCloser() {
  const { title, subtitle, cta, ctaTo, pillars } = natureCloser

  return (
    <section className="relative overflow-hidden bg-forest-900">
      <div className="container-site section-pad py-14 lg:py-16">
        <div className="flex flex-col items-center text-center mb-8 max-w-2xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white">
            {title}
          </h2>
          <p className="mt-3 text-leaf-100/80">{subtitle}</p>
          <Button to={ctaTo} variant="light" size="sm" className="mt-5 uppercase tracking-wider">
            {cta}
            <Icon name="Leaf" className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {pillars.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-center hover:bg-white/10 transition"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-leaf-400/40 text-leaf-300">
                <Icon name={item.icon} className="w-5 h-5" />
              </span>
              <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-leaf-100/80 leading-relaxed">{item.text}</p>
              <p className="mt-2 text-xs text-leaf-200/60 leading-relaxed">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
