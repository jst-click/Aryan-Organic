import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-forest-800 text-white hover:bg-forest-700 shadow-sm shadow-forest-900/20',
  secondary:
    'bg-white text-forest-800 border-2 border-forest-800 hover:bg-leaf-50',
  outline:
    'bg-transparent text-forest-800 border border-forest-700/30 hover:border-forest-700 hover:bg-leaf-50',
  light:
    'bg-white text-forest-800 hover:bg-leaf-100',
  offer:
    'bg-offer text-white hover:bg-orange-600',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  onClick,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-leaf-500 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
