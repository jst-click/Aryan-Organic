import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from '../../data/content'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

export default function BlogPreview() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const preview = blogPosts.slice(0, 3)

  const onSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setDone(true)
  }

  return (
    <section className="py-16 lg:py-24 bg-mist">
      <div className="container-site section-pad">
        <SectionHeading
          eyebrow="From Our Blog"
          title="Apartment living & organic growth tips"
          className="mb-12"
        />

        <div className="grid lg:grid-cols-4 gap-6">
          {preview.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
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
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-forest-600">
                  {post.category}
                </span>
                <h3 className="mt-2 font-semibold text-forest-900 leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-forest-700">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-forest-700/65 flex-1">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 text-sm font-semibold text-forest-700 hover:text-forest-900"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-forest-800 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-center"
          >
            <h3 className="font-display text-2xl font-semibold">Stay Updated</h3>
            <p className="mt-2 text-sm text-leaf-200/80">
              Get notified when we install in your area of Bangalore.
            </p>
            {done ? (
              <p className="mt-6 text-leaf-300 font-medium">Thanks! We&apos;ll keep you posted.</p>
            ) : (
              <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-leaf-400"
                />
                <Button type="submit" variant="light" className="w-full">
                  Subscribe
                </Button>
              </form>
            )}
            <Link to="/blog" className="mt-4 text-sm text-leaf-300 hover:text-white font-medium">
              View all blogs →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
