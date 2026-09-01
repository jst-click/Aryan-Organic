import { Link } from 'react-router-dom'
import { blogPosts } from '../data/content'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="From the garden journal"
        subtitle="Practical writing on apartment growing, terrace design, vacant-plot gardens and the daily rhythm of organic food at home."
      />
      <section className="py-16 lg:py-20">
        <div className="container-site section-pad">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden border border-forest-800/8 shadow-sm flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="aspect-[16/10] overflow-hidden bg-leaf-50 block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = '/images/banner.png'
                    }}
                  />
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-forest-600">
                      {post.category}
                    </span>
                    <span className="text-xs text-forest-600/70">{post.date}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold text-forest-900 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-forest-700">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-forest-700/70 flex-1">{post.excerpt}</p>
                  <Button to={`/blog/${post.slug}`} variant="outline" size="sm" className="mt-5 self-start">
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
