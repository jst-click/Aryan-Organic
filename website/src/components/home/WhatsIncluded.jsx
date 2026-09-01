import { motion } from 'framer-motion'
import { whatsIncluded } from '../../data/content'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

export default function WhatsIncluded() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-20 pb-16 lg:pb-24 bg-mist">
      <div className="container-site section-pad">
        <SectionHeading
          eyebrow="What's Included"
          title="A complete garden, not a shopping list"
          subtitle="Fibre tubs, drip irrigation, organic soil, plants and professional installation — delivered as one designed system by the ARYAN team."
          className="mb-12"
        />

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {whatsIncluded.map((item, index) => (
            <div key={item.title} className="flex items-center gap-3 sm:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex flex-col items-center gap-3 w-[7.5rem] sm:w-36"
              >
                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-4 border-leaf-100 shadow-md ring-1 ring-forest-800/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-forest-800 text-center leading-snug">
                  {item.title}
                </p>
                {item.desc && (
                  <p className="text-[0.65rem] sm:text-xs text-forest-600/80 text-center leading-snug">
                    {item.desc}
                  </p>
                )}
              </motion.div>
              {index < whatsIncluded.length - 1 && (
                <Icon
                  name="Plus"
                  className="w-5 h-5 text-forest-600/40 hidden sm:block shrink-0"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
