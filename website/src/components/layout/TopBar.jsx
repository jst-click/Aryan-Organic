import { company } from '../../data/content'
import Icon from '../ui/Icon'
import SocialIcon from '../ui/SocialIcon'

export const socialLinks = [
  { icon: 'facebook', href: company.social.facebook, label: 'Facebook' },
  { icon: 'instagram', href: company.social.instagram, label: 'Instagram' },
  { icon: 'mail', href: `mailto:${company.contact.email}`, label: 'Email' },
  { icon: 'whatsapp', href: company.social.whatsapp, label: 'WhatsApp' },
  { icon: 'youtube', href: company.social.youtube, label: 'YouTube' },
]

export default function TopBar() {
  return (
    <div className="bg-forest-900 text-leaf-100 text-xs sm:text-sm">
      <div className="container-site section-pad">
        <div className="flex h-8 sm:h-9 items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <p className="hidden lg:block truncate text-leaf-200/90">
              <span className="text-leaf-300 font-medium">{company.tagline}</span>
              <span className="mx-2 text-leaf-500/40">|</span>
              Complimentary terrace inspection in Bangalore
            </p>
            <p className="lg:hidden truncate text-leaf-200/90">
              {company.slogan} — Free inspection
            </p>
            <span className="hidden xl:inline-flex items-center gap-1.5 text-leaf-200/80 truncate">
              <Icon name="MapPin" className="w-3.5 h-3.5 text-leaf-400 shrink-0" />
              Kolar · Landmark: {company.contact.landmark}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${company.contact.phone}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-leaf-300 transition"
            >
              <Icon name="Phone" className="w-3.5 h-3.5 text-leaf-400" />
              <span className="hidden xs:inline sm:inline">{company.contact.phoneDisplay}</span>
              <span className="sm:hidden">{company.contact.phone}</span>
            </a>

            <span className="hidden sm:block w-px h-4 bg-white/15" />

            <a
              href={`mailto:${company.contact.email}`}
              className="hidden md:inline-flex items-center gap-1.5 text-leaf-200/90 hover:text-white transition"
            >
              <Icon name="Mail" className="w-3.5 h-3.5 text-leaf-400" />
              {company.contact.email}
            </a>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-leaf-200 hover:bg-leaf-500 hover:text-forest-950 transition"
                >
                  <SocialIcon name={s.icon} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
