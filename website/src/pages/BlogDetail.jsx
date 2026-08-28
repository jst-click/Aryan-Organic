import { Link, Navigate, useParams } from 'react-router-dom'
import { blogPosts } from '../data/content'
import Button from '../components/ui/Button'
import Icon from '../components/ui/Icon'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <section className="bg-forest-900 text-white">
        <div className="container-site section-pad py-10 lg:py-14">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-leaf-300 hover:text-white mb-6"
          >
            ← Back to Blog
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf-300">
            {post.category} · {post.date}
          </p>
          <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-leaf-100/80 max-w-2xl">{post.excerpt}</p>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="container-site section-pad">
          <div className="grid lg:grid-cols-12 gap-10">
            <article className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden border border-forest-800/8 mb-8 bg-leaf-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full max-h-[28rem] object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/banner.png'
                  }}
                />
              </div>
              <div className="prose-like space-y-5 text-forest-800/90 leading-relaxed text-base sm:text-lg">
                {post.content?.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
              <div className="mt-10 rounded-2xl bg-mist border border-forest-800/8 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="font-display text-xl font-semibold text-forest-900">
                    Want this on your terrace?
                  </p>
                  <p className="text-sm text-forest-700/70 mt-1">
                    Free inspection for apartments & homes in Bangalore.
                  </p>
                </div>
                <Button to="/book-visit">
                  Book Free Visit
                  <Icon name="ArrowRight" className="w-4 h-4" />
                </Button>
              </div>
            </article>

            <aside className="lg:col-span-4 space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-forest-600">
                More articles
              </h2>
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/blog/${item.slug}`}
                  className="flex gap-3 rounded-xl border border-forest-800/8 bg-white p-3 hover:bg-leaf-50 transition"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="h-16 w-20 rounded-lg object-cover shrink-0 bg-leaf-50"
                    onError={(e) => {
                      e.currentTarget.src = '/images/banner.png'
                    }}
                  />
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-wider text-forest-600 font-semibold">
                      {item.category}
                    </p>
                    <p className="text-sm font-semibold text-forest-900 leading-snug mt-0.5">
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
