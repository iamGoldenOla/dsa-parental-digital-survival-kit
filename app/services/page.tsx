export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-text mb-8">
              Our Services
            </h1>
            <p className="text-xl text-text/70 mb-12 max-w-2xl mx-auto">
              Comprehensive digital safety solutions tailored to your family's needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-6">
              How We Support Your Digital Parenting Journey
            </h2>
            <p className="text-lg text-text/70 max-w-3xl mx-auto">
              From free resources to personalized consultations, we offer multiple levels of support to help you navigate the digital world with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Free Resources */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=400&q=80" 
                alt="Free Resources - Digital Safety Toolkit"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text mb-4">Free Resources</h3>
                <p className="text-text/70 mb-6 leading-relaxed">
                  Access our comprehensive toolkit, guides, and educational content at no cost to get started on your digital parenting journey.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Digital Safety Toolkit</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Educational Guides</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Safety Checklists</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Blog Articles</span>
                  </li>
                </ul>
                <a href="/toolkit" className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-center block">
                  Get Started Free
                </a>
              </div>
            </div>

            {/* Community Membership */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-primary/20 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&w=400&q=80" 
                alt="Community Membership - Supportive Network"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text mb-4">Community Membership</h3>
                <p className="text-text/70 mb-6 leading-relaxed">
                  Join our supportive community of parents and access exclusive resources, expert guidance, and peer support.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Private Facebook Group</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Monthly Webinars</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Expert Q&A Sessions</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Peer Support Network</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-center block">
                  Join Community
                </a>
              </div>
            </div>

            {/* Personal Consultation */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&w=400&q=80" 
                alt="Personal Consultation - Expert Guidance"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-text mb-4">Personal Consultation</h3>
                <p className="text-text/70 mb-6 leading-relaxed">
                  Get personalized advice from our digital safety experts with one-on-one sessions tailored to your family's needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>1-on-1 Sessions</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Custom Safety Plan</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Follow-up Support</span>
                  </li>
                  <li className="flex items-center text-text/80">
                    <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Priority Access</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors text-center block">
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-text/70 mb-8">
              Choose the service that best fits your family's needs and start your digital safety journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/toolkit" className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                Explore Toolkit
              </a>
              <a href="/contact" className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 