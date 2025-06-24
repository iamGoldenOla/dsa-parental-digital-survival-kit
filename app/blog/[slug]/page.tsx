import Image from 'next/image'
import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // This would typically fetch the post data from a CMS or database
  const post = {
    title: 'Understanding Your Child's Digital World',
    content: `
      <p>In today's digital age, children are growing up surrounded by technology. As parents, it's crucial to understand the digital landscape your children navigate daily.</p>

      <h2>The Digital Landscape</h2>
      <p>From social media platforms to educational apps, children have access to a vast array of digital tools. Understanding these platforms is the first step in ensuring your child's safety online.</p>

      <h2>Popular Platforms and Apps</h2>
      <p>Here are some of the most popular platforms children use today:</p>
      <ul>
        <li>Social Media: Instagram, TikTok, Snapchat</li>
        <li>Gaming: Roblox, Minecraft, Fortnite</li>
        <li>Educational: Khan Academy, Duolingo, Quizlet</li>
      </ul>

      <h2>Safety Features and Parental Controls</h2>
      <p>Most platforms offer built-in safety features and parental controls. Here's how to use them effectively:</p>
      <ol>
        <li>Set up age-appropriate content filters</li>
        <li>Enable privacy settings</li>
        <li>Monitor screen time</li>
        <li>Use parental control apps</li>
      </ol>

      <h2>Open Communication</h2>
      <p>Maintaining open communication with your child about their digital activities is essential. Regular conversations about online safety can help build trust and awareness.</p>
    `,
    image: '/images/blog/digital-world.jpg',
    date: 'March 15, 2024',
    author: 'Dr. Sarah Johnson',
    category: 'Digital Literacy',
    readingTime: '8 min read'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-white">
              <span className="text-sm font-semibold mb-4 block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex justify-center items-center space-x-4 text-sm">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/images/team/sarah.jpg"
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{post.author}</h3>
                  <p className="text-text/70">Child Psychologist & Digital Safety Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Add related posts here */}
          </div>
        </div>
      </section>
    </div>
  )
} 