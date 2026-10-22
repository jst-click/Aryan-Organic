import { Link } from 'react-router-dom'
import { company } from '../../data/content'
import Button from '../ui/Button'
import BrandLogo from '../ui/BrandLogo'
import Icon from '../ui/Icon'
import SocialIcon from '../ui/SocialIcon'
import { socialLinks } from './TopBar'

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-leaf-100 overflow-hidden">
      <div className="bg-forest-800">
        <div className="container-site section-pad py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white text-balance">
              Ready to grow organic food at home?
            </h3>
            <p className="mt-2 text-leaf-200/90">
              Book a complimentary terrace inspection — we serve families across Bangalore and Kolar.
            </p>
          </div>
          <Button to="/book-visit" variant="light" size="lg">
            Book Free Visit
            <Icon name="ArrowRight" className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="container-site section-pad py-12 lg:py-14">
        <div className="grid gap-10 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <BrandLogo variant="plain" size="full" className="max-w-[150px]" />
            <p className="text-xs uppercase tracking-[0.18em] text-leaf-300">
              {company.tagline}
            </p>
            <p className="text-sm text-leaf-200/70 leading-relaxed max-w-sm">
              {company.mission}
            </p>
            <div className="flex gap-2.5 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-leaf-300 hover:bg-leaf-500 hover:text-forest-950 transition"
                >
                  <SocialIcon name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Home', '/'],
                ['About Us', '/about'],
                ['Our Service', '/services'],
                ['Gallery', '/gallery'],
                ['Blog', '/blog'],
                ['Contact', '/contact'],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-leaf-100/75 hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-300 mb-4">
              Our Service
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ['Aryan Organic Indoor & Outdoor', '/services/indoor-outdoor'],
                ['Land & Plot Gardens', '/services/land-plot'],
                ['Terrace Garden Setup', '/services/terrace'],
                ['How It Works', '/how-it-works'],
                ['Book Free Inspection', '/book-visit'],
              ].map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-leaf-100/75 hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-leaf-300/90 leading-relaxed">
              {company.kannada.terrace}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf-300 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-leaf-100/80">
              <li className="flex gap-3">
                <Icon name="Phone" className="w-4 h-4 mt-0.5 text-leaf-400 shrink-0" />
                <a href={`tel:${company.contact.phone}`} className="hover:text-white font-medium">
                  {company.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="Mail" className="w-4 h-4 mt-0.5 text-leaf-400 shrink-0" />
                <a href={`mailto:${company.contact.email}`} className="hover:text-white break-all">
                  {company.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon name="MapPin" className="w-4 h-4 mt-0.5 text-leaf-400 shrink-0" />
                <span>
                  {company.contact.address}
                  <span className="block mt-1 text-leaf-300/90">
                    Landmark: {company.contact.landmark}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-forest-950">
        <div className="container-site section-pad py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-leaf-200/60">
          <p>© {new Date().getFullYear()} ARYAN ORGANICS. All rights reserved.</p>
          <p>
            Design & developed by{' '}
            <a
              href="https://jstclick.in/"
              target="_blank"
              rel="noreferrer"
              className="text-leaf-300 hover:text-white font-medium transition"
            >
              JST CLICK
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
