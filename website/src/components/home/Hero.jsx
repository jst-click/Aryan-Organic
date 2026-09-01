import { motion } from 'framer-motion'
import { company, heroFeatures } from '../../data/content'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[52vh] sm:min-h-[54vh] lg:min-h-[56vh] w-full overflow-hidden bg-[#e8f5e9]">
        <picture>
          <source media="(min-width: 640px)" srcSet="/images/banner.png" />
          <img
            src="/images/banner-mobile.png"
            alt="ARYAN ORGANICS — Nature's nurture, organically grown"
            className="absolute inset-0 h-full w-full object-cover object-[center_65%] sm:object-center"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/55 to-white/10 sm:bg-none pointer-events-none" />
        <div className="absolute inset-0 hidden sm:block bg-gradient-to-r from-white/90 via-white/55 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/15 via-transparent to-transparent pointer-events-none" />

        <div className="container-site section-pad relative z-10 flex min-h-[52vh] sm:min-h-[54vh] lg:min-h-[56vh] items-center py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl lg:max-w-2xl"
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-forest-600 mb-2">
              {company.serviceName}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest-900 leading-[1.1] text-balance">
              Turn Your Terrace Into a Living Organic Garden
            </h1>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-forest-600">
              {company.tagline}
            </p>
            <p className="mt-2 text-base sm:text-lg text-forest-800/80 max-w-xl">
              Professionally designed, fully automated terrace gardens — so your family harvests
              chemical-free vegetables at home.
            </p>
            <p className="mt-1.5 text-sm sm:text-base text-forest-700 font-medium">
              {company.kannada.service}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {heroFeatures.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/90 border border-forest-800/10 text-forest-700 shadow-sm backdrop-blur-sm">
                    <Icon name={f.icon} className="w-4 h-4" />
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-forest-900">{f.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/book-visit" size="md">
                Book Free Inspection
              </Button>
              <Button to="/services" variant="secondary" size="md">
                Our Service
                <Icon name="ArrowRight" className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
