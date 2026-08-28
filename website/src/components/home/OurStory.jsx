import { motion } from 'framer-motion'
import { company, pitchPoints } from '../../data/content'
import Button from '../ui/Button'
import BrandLogo from '../ui/BrandLogo'
import SectionHeading from '../ui/SectionHeading'

export default function OurStory() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-site section-pad">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=700&fit=crop"
                alt="Family terrace garden"
                className="rounded-2xl object-cover h-64 sm:h-80 w-full mt-8"
              />
              <div className="space-y-4">
                <div className="rounded-2xl bg-black p-3 h-40 sm:h-48 flex items-center justify-center overflow-hidden">
                  <BrandLogo to={null} variant="plain" size="full" className="max-w-[140px]" />
                </div>
                <img
                  src="/images/hero-brand.png"
                  alt="Nature's nurture"
                  className="rounded-2xl object-cover h-40 sm:h-48 w-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="We sell the way to grow veggies"
              subtitle=""
            />
            <p className="mt-4 text-forest-700/75 leading-relaxed">
              Hi, I&apos;m {company.ceo.name} from ARYAN ORGANICS. Instead of buying vegetables, why
              not grow your own? We install a complete organic terrace garden in your home. No
              chemicals. No tension. We set it up and teach you — you just harvest and eat.
            </p>
            <p className="mt-3 text-forest-600 font-medium">{company.kannada.everyDrop}</p>
            <p className="mt-3 text-sm text-forest-700/70 italic">
              &ldquo;{company.mission}&rdquo; — Coming soon all over Bangalore.
            </p>

            <ul className="mt-8 space-y-4">
              {pitchPoints.map((p) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-forest-800/8 bg-leaf-50/50 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-forest-900">{p.title}</p>
                  <p className="text-sm text-forest-700/70 mt-0.5">{p.text}</p>
                </li>
              ))}
            </ul>

            <Button to="/about" className="mt-8">
              Know More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
