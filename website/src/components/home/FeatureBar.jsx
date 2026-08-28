import { motion } from 'framer-motion'
import { featureBar } from '../../data/content'
import Icon from '../ui/Icon'

export default function FeatureBar() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 lg:mt-0 lg:h-0">
      <div className="lg:absolute lg:inset-x-0 lg:top-0 lg:-translate-y-[35%] w-full">
        <div className="container-site section-pad">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-7xl rounded-2xl bg-white border border-forest-800/8 shadow-lg shadow-forest-900/10 px-3 py-4 sm:px-5 sm:py-4 lg:px-6 lg:py-3.5"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4 sm:gap-x-4 sm:gap-y-4">
              {featureBar.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center gap-1.5 min-w-0 px-1"
                >
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-leaf-50 text-forest-700">
                    <Icon name={item.icon} className="w-4 h-4" />
                  </span>
                  <span className="text-[0.65rem] sm:text-xs font-medium text-forest-800 leading-snug break-words hyphens-auto max-w-[9.5rem] sm:max-w-none">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
