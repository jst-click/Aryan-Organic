import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col max-w-3xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-leaf-300' : 'text-forest-600'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-balance ${
          light ? 'text-white' : 'text-forest-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-leaf-100/90' : 'text-forest-700/70'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
