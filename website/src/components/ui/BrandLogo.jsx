import { Link } from 'react-router-dom'

const sizes = {
  xs: 'h-9 w-9',
  sm: 'h-11 w-11',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
  xl: 'h-28 w-28',
  hero: 'h-40 w-40 sm:h-48 sm:w-48',
  full: 'w-full max-w-[220px]',
}

/**
 * Official ARYAN ORGANIC logo.
 * Variants:
 * - nav: header logo (no border, no extra text)
 * - mark: circular crop
 * - panel: full stacked logo on dark panel
 * - plain: full stacked logo as-is
 */
export default function BrandLogo({
  variant = 'mark',
  size = 'sm',
  to = '/',
  className = '',
  showWordmark = false,
  alt = 'ARYAN ORGANIC — Honest · Pure · Responsible',
}) {
  const imgClass =
    variant === 'nav'
      ? 'h-16 lg:h-[4.5rem] w-auto object-contain'
      : variant === 'mark'
        ? `${sizes[size]} rounded-full object-cover object-top ring-2 ring-leaf-400/50`
        : variant === 'panel'
          ? 'w-full h-auto object-contain'
          : `${size === 'full' ? sizes.full : sizes[size]} object-contain`

  const img = <img src="/images/logo-brand.png" alt={alt} className={imgClass} />

  const inner =
    variant === 'nav' ? (
      <span className={`inline-flex items-center ${className}`}>{img}</span>
    ) : variant === 'panel' ? (
      <div
        className={`rounded-2xl bg-black p-3 shadow-md ring-1 ring-forest-800/20 ${
          size === 'full' ? 'w-full max-w-[200px]' : ''
        } ${className}`}
      >
        {img}
      </div>
    ) : variant === 'mark' && showWordmark ? (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        {img}
        <span className="leading-tight text-left">
          <span className="block font-display text-lg sm:text-xl font-semibold text-forest-800 tracking-wide">
            ARYAN
          </span>
          <span className="block text-[0.65rem] sm:text-xs uppercase tracking-[0.22em] text-leaf-500 font-semibold">
            Organic
          </span>
        </span>
      </span>
    ) : (
      <span className={`inline-flex ${className}`}>{img}</span>
    )

  if (to) {
    return (
      <Link
        to={to}
        className="inline-flex shrink-0 items-center group"
        aria-label="ARYAN ORGANIC home"
      >
        {inner}
      </Link>
    )
  }

  return inner
}
