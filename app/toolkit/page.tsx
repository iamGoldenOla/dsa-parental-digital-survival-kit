import Link from 'next/link'

export default function ToolkitPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Complete Digital Safety Toolkit
            </h1>
            <p className="text-lg text-text/80 mb-8">
              Your comprehensive resource for protecting and guiding your children in the digital world. 
              Everything you need in one complete package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#download" className="btn-primary">
                Download Complete Toolkit
            </Link>
              <Link href="#components" className="btn-secondary">
                View All Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Toolkit Components</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-xl font-semibold mb-2">1. Welcome Letter & Device Agreements</h3>
              <p className="text-text/70">Start your digital safety journey with essential device agreements.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-xl font-semibold mb-2">2. Screen Time Guide</h3>
              <p className="text-text/70">Comprehensive guidelines for managing screen time.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">3. Social Media Safety Check</h3>
              <p className="text-text/70">Essential safety protocols for social media platforms.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">💝</div>
              <h3 className="text-xl font-semibold mb-2">4. Digital Memory Verse Cards</h3>
              <p className="text-text/70">Printable cards with digital safety principles.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="text-xl font-semibold mb-2">5. Offline Bonding Activities</h3>
              <p className="text-text/70">Two versions: neutral and faith-based activities.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">🚩</div>
              <h3 className="text-xl font-semibold mb-2">6. Spotting Online Red Flags</h3>
              <p className="text-text/70">Video guide for recognizing warning signs.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">7. Conversation Starters</h3>
              <p className="text-text/70">Questions to facilitate digital safety discussions.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">🧘</div>
              <h3 className="text-xl font-semibold mb-2">8. Mindfulness & Emotional Check-ins</h3>
              <p className="text-text/70">Tools for monitoring emotional well-being.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-xl font-semibold mb-2">9. Digital Detox Challenge</h3>
              <p className="text-text/70">30-day program to reduce screen time.</p>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-xl font-semibold mb-2">10. Faith-Based Prayers</h3>
              <p className="text-text/70">Spiritual resources for online protection. (BONUS)</p>
                </div>
            <div className="bg-background p-6 rounded-xl">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-xl font-semibold mb-2">11. 30-Day Parenting Devotional</h3>
              <p className="text-text/70">Daily devotional for digital parenting. (BONUS)</p>
              </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Get Your Complete Digital Safety Toolkit Today
          </h2>
          <p className="text-lg text-text/80 mb-8 max-w-3xl mx-auto">
            Download all 11 components including the bonus faith-based resources. 
            Choose between our neutral version or faith-based version to match your family's values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#download" className="btn-primary">
              Download Complete Toolkit
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us for Support
          </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 