import { motion } from 'framer-motion'
import { howItWorks } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

export default function HowItWorksSection() {
  return (
    <section className="py-16 lg:py-24 bg-leaf-50/60">
      <div className="container-site section-pad">
        <SectionHeading
          eyebrow="Simple Process"
          title="How It Works"
          subtitle="From free inspection to your first harvest — we make organic growing effortless."
          className="mb-14"
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[8%] right-[8%] h-px bg-forest-700/15" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-forest-800 text-white font-display text-lg font-semibold shadow-md">
                  {step.step}
                </div>
                <h3 className="mt-5 font-semibold text-forest-900">{step.title}</h3>
                <p className="mt-2 text-sm text-forest-700/70 leading-relaxed max-w-[14rem]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
