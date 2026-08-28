import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-900/90 to-forest-900/70" />
        </div>
      )}
      {!image && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(82,183,136,0.2),transparent_50%)]" />
      )}
      <div className="container-site section-pad relative py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-300 mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-leaf-100/80 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
