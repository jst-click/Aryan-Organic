import { motion } from 'framer-motion'
import { rooftopOasis } from '../../data/content'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

export default function RooftopOasis() {
  const {
    eyebrow,
    title,
    subtitle,
    body,
    kannada,
    cta,
    ctaTo,
    secondaryCta,
    secondaryCtaTo,
    image,
    imageAlt,
    points,
  } = rooftopOasis

  return (
    <section className="py-16 lg:py-24 bg-mist">
      <div className="container-site section-pad">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl shadow-forest-900/15 ring-1 ring-forest-800/10">
              <img
                src={image}
                alt={imageAlt}
                className="w-full aspect-[16/10] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/70 via-forest-950/20 to-transparent p-5 sm:p-6">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-leaf-200">
                  Farm to table, a few steps from home
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <SectionHeading align="left" eyebrow={eyebrow} title={title} className="mb-0" />
            <p className="mt-4 text-base sm:text-lg text-forest-700/75 leading-relaxed">{subtitle}</p>
            <p className="mt-3 text-forest-700/75 leading-relaxed">{body}</p>
            <p className="mt-3 text-sm font-medium text-forest-600">{kannada}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to={ctaTo}>{cta}</Button>
              <Button to={secondaryCtaTo} variant="secondary">
                {secondaryCta}
                <Icon name="ArrowRight" className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 lg:mt-14 grid md:grid-cols-3 gap-5">
          {points.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-white border border-forest-800/8 p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-leaf-50 text-forest-700">
                <Icon name={item.icon} className="w-6 h-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-forest-900">{item.title}</h3>
              <p className="mt-2 text-sm text-forest-700/70 leading-relaxed">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
