import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { company, navLinks } from '../../data/content'
import Button from '../ui/Button'
import BrandLogo from '../ui/BrandLogo'
import Icon from '../ui/Icon'
import TopBar from './TopBar'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [serviceOpen, setServiceOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServiceOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <TopBar />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-forest-800/5'
            : 'bg-white/90 backdrop-blur-sm border-b border-forest-800/5'
        }`}
      >
        <div className="container-site section-pad">
          <div className="flex h-[4.5rem] lg:h-20 items-center justify-between gap-4">
            <BrandLogo variant="nav" />

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="relative group">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition ${
                          isActive
                            ? 'text-forest-800 bg-leaf-50'
                            : 'text-forest-700/80 hover:text-forest-800 hover:bg-leaf-50/80'
                        }`
                      }
                    >
                      {link.label}
                      <Icon name="ChevronDown" className="w-3.5 h-3.5 opacity-60" />
                    </NavLink>
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute top-full left-0 pt-2">
                      <div className="min-w-[200px] rounded-xl bg-white border border-forest-800/8 shadow-lg shadow-forest-900/8 p-2">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.path}
                            className="block px-3 py-2 text-sm text-forest-700 rounded-lg hover:bg-leaf-50"
                          >
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-medium rounded-lg transition ${
                        isActive
                          ? 'text-forest-800 bg-leaf-50'
                          : 'text-forest-700/80 hover:text-forest-800 hover:bg-leaf-50/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={`tel:+91${company.contact.phone.replace(/\D/g, '')}`}
                className="hidden md:inline-flex items-center gap-1.5 rounded-lg border border-forest-800/15 px-3 py-2 text-sm font-semibold text-forest-800 hover:bg-leaf-50"
                aria-label={`Call ${company.contact.phoneDisplay}`}
              >
                <Icon name="Phone" className="w-4 h-4" />
                Call
              </a>
              <a
                href={company.social.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2 text-sm font-semibold text-white hover:brightness-95"
                aria-label="Chat on WhatsApp"
              >
                <Icon name="MessageCircle" className="w-4 h-4" />
                WhatsApp
              </a>
              <Button to="/book-visit" size="sm" className="hidden sm:inline-flex">
                Book Free Visit
              </Button>
              <button
                type="button"
                className="lg:hidden p-2 rounded-lg text-forest-800 hover:bg-leaf-50"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <Icon name={open ? 'X' : 'Menu'} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-forest-800/8 bg-white"
            >
              <div className="section-pad py-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-forest-800 rounded-lg hover:bg-leaf-50"
                        onClick={() => setServiceOpen((v) => !v)}
                      >
                        {link.label}
                        <Icon
                          name="ChevronDown"
                          className={`w-4 h-4 transition ${serviceOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {serviceOpen && (
                        <div className="pl-4 pb-2 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="block px-3 py-2 text-sm text-forest-700 rounded-lg hover:bg-leaf-50"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-3 py-3 text-sm font-medium text-forest-800 rounded-lg hover:bg-leaf-50"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <div className="pt-3 space-y-2">
                  <a
                    href={`tel:+91${company.contact.phone.replace(/\D/g, '')}`}
                    className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-forest-800 rounded-lg border border-forest-800/10 hover:bg-leaf-50"
                  >
                    <Icon name="Phone" className="w-4 h-4" />
                    Call {company.contact.phoneDisplay}
                  </a>
                  <a
                    href={company.social.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-3 text-sm font-semibold text-white rounded-lg bg-[#25D366] hover:brightness-95"
                  >
                    <Icon name="MessageCircle" className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <Button to="/book-visit" className="w-full">
                    Book Free Visit
                  </Button>
                </div>
                <p className="px-3 pt-2 text-xs text-forest-600">{company.kannada.everyDrop}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
