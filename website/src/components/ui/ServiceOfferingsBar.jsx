import { serviceOfferings } from '../../data/content'
import Icon from './Icon'

export default function ServiceOfferingsBar() {
  return (
    <section className="bg-white border-y-2 border-forest-800/25">
      <div className="container-site section-pad">
        <div className="flex flex-wrap lg:flex-nowrap items-stretch justify-between">
          {serviceOfferings.map((item, i) => (
            <div
              key={item.label}
              className={`flex flex-1 min-w-[42%] sm:min-w-[30%] lg:min-w-0 items-center justify-center gap-2.5 py-4 sm:py-5 px-3 ${
                i > 0 ? 'lg:border-l border-forest-800/15' : ''
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center text-forest-800">
                <Icon name={item.icon} className="w-5 h-5" />
              </span>
              <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.12em] text-forest-800 leading-snug text-left">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
