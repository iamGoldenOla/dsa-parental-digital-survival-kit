import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const featuredPosts = [
    {
      title: 'Understanding Your Child\'s Digital World',
      excerpt: 'A comprehensive guide to the apps, games, and platforms your children are using.',
      image: '/images/blog/digital-world.jpg',
      date: 'March 15, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Digital Literacy',
      slug: 'understanding-digital-world'
    },
    {
      title: 'Setting Healthy Screen Time Limits',
      excerpt: 'Practical strategies for managing your family\'s screen time effectively.',
      image: '/images/blog/screen-time.jpg',
      date: 'March 10, 2024',
      author: 'Michael Chen',
      category: 'Screen Time',
      slug: 'healthy-screen-time-limits'
    }
  ]

  const recentPosts = [
    {
      title: 'Protecting Your Child\'s Online Privacy',
      excerpt: 'Essential steps to safeguard your child\'s personal information online.',
      image: '/images/blog/privacy.jpg',
      date: 'March 5, 2024',
      author: 'Emma Rodriguez',
      category: 'Online Safety',
      slug: 'protecting-online-privacy'
    },
    {
      title: 'Social Media Safety Guide',
      excerpt: 'A parent\'s guide to popular social media platforms and safety features.',
      image: '/images/blog/social-media.jpg',
      date: 'February 28, 2024',
      author: 'Dr. Sarah Johnson',
      category: 'Social Media',
      slug: 'social-media-safety-guide'
    },
    {
      title: 'Building Digital Resilience',
      excerpt: 'Helping your child develop healthy coping strategies for online challenges.',
      image: '/images/blog/resilience.jpg',
      date: 'February 20, 2024',
      author: 'Michael Chen',
      category: 'Mental Health',
      slug: 'building-digital-resilience'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container-custom">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Digital Parenting Blog
            </h1>
            <p className="text-lg text-text/80">
              Expert insights, tips, and guides for raising safe and responsible digital citizens
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Video</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/pte3QoQn93g"
                title="Digital Parenting Tips - Featured Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold text-text mb-2">
                Essential Digital Parenting Tips
              </h3>
              <p className="text-text/70">
                Watch our featured video for expert advice on navigating the digital world with your children
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary font-semibold mb-2 block">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text/70 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-text/60">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Recent Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-primary font-semibold mb-2 block">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text/70 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-text/60">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights and tips on digital parenting.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
} 