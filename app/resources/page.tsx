"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function ResourcesPage() {
  const [activeAgeTab, setActiveAgeTab] = useState('early')

  const ageResources = {
    early: {
      title: 'Early Years (Ages 2-5)',
      resources: [
        {
          name: 'Educational Apps Guide',
          description: 'Safe and educational apps for young children',
          icon: '📱'
        },
        {
          name: 'Screen Time Guidelines',
          description: 'Age-appropriate screen time recommendations',
          icon: '⏰'
        },
        {
          name: 'Digital Safety Basics',
          description: 'Simple rules for safe device use',
          icon: '🛡️'
        },
        {
          name: 'Interactive Learning Tools',
          description: 'Engaging educational content',
          icon: '📚'
        }
      ]
    },
    middle: {
      title: 'Middle Years (Ages 6-12)',
      resources: [
        {
          name: 'Social Media Safety',
          description: 'Guide to safe social media use',
          icon: '📘'
        },
        {
          name: 'Online Gaming Safety',
          description: 'Safe gaming practices and parental controls',
          icon: '🎮'
        },
        {
          name: 'Digital Citizenship',
          description: 'Teaching responsible online behavior',
          icon: '🎓'
        },
        {
          name: 'Safe Search Tools',
          description: 'Child-friendly search engines',
          icon: '🔍'
        }
      ]
    },
    teen: {
      title: 'Teen Years (Ages 13-18)',
      resources: [
        {
          name: 'Privacy Protection',
          description: 'Managing online privacy and data',
          icon: '🔒'
        },
        {
          name: 'Cyberbullying Prevention',
          description: 'Recognizing and addressing cyberbullying',
          icon: '🚫'
        },
        {
          name: 'Digital Footprint',
          description: 'Understanding online reputation',
          icon: '👣'
        },
        {
          name: 'Online Financial Safety',
          description: 'Protecting against scams and fraud',
          icon: '💳'
        }
      ]
    }
  }

  const resourceCategories = [
    {
      title: 'Parenting Apps',
      resources: [
        {
          name: 'Family Link',
          description: 'Google\'s parental control app for managing your child\'s digital experience.',
          link: 'https://families.google.com/familylink/',
          category: 'Parental Controls'
        },
        {
          name: 'Bark',
          description: 'AI-powered monitoring for texts, emails, and social media.',
          link: 'https://www.bark.us/',
          category: 'Monitoring'
        },
        {
          name: 'Qustodio',
          description: 'Comprehensive parental control and screen time management.',
          link: 'https://www.qustodio.com/',
          category: 'Screen Time'
        }
      ]
    },
    {
      title: 'Educational Platforms',
      resources: [
        {
          name: 'Common Sense Media',
          description: 'Reviews and ratings for movies, TV shows, books, and games.',
          link: 'https://www.commonsensemedia.org/',
          category: 'Reviews'
        },
        {
          name: 'Khan Academy Kids',
          description: 'Free educational games and activities for young children.',
          link: 'https://learn.khanacademy.org/khan-academy-kids/',
          category: 'Learning'
        },
        {
          name: 'BrainPOP',
          description: 'Animated educational content for various subjects.',
          link: 'https://www.brainpop.com/',
          category: 'Learning'
        }
      ]
    },
    {
      title: 'Safety Tools',
      resources: [
        {
          name: 'NetSmartz',
          description: 'Educational resources about online safety.',
          link: 'https://www.missingkids.org/netsmartz',
          category: 'Education'
        },
        {
          name: 'ConnectSafely',
          description: 'Tips and guides for safe social media use.',
          link: 'https://www.connectsafely.org/',
          category: 'Social Media'
        },
        {
          name: 'Cyberbullying Research Center',
          description: 'Research and resources about cyberbullying prevention.',
          link: 'https://cyberbullying.org/',
          category: 'Cyberbullying'
        }
      ]
    }
  ]

  const currentAgeData = ageResources[activeAgeTab as keyof typeof ageResources]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Digital Safety Resources
            </h1>
            <p className="text-lg text-text/80">
              Curated tools, apps, and platforms to help you protect and educate your children online
            </p>
          </div>
        </div>
      </section>

      {/* Age-Specific Resources */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Age-Specific Resources</h2>
          
          {/* Age Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {Object.entries(ageResources).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveAgeTab(key)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeAgeTab === key
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {data.title}
                </button>
              ))}
            </div>
          </div>

          {/* Age Panel Content */}
          <div className="max-w-4xl mx-auto">
            <div 
              className={`p-8 rounded-xl shadow-sm transition-all duration-300 ${
                activeAgeTab === 'early' 
                  ? 'bg-[#fffef0] transform perspective-1000 rotate-x-1 hover:rotate-x-0 hover:-translate-y-1 shadow-2xl border-2 border-[#E6E6D0]' 
                  : 'bg-white'
              }`}
              style={activeAgeTab === 'early' ? {
                transform: 'perspective(1000px) rotateX(5deg)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                backgroundColor: '#fffef0'
              } : {}}
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                activeAgeTab === 'early' 
                  ? 'text-[#4B5D3E] text-left' 
                  : ''
              }`}>
                {currentAgeData.title}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentAgeData.resources.map((resource, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 ${
                      activeAgeTab === 'early' 
                        ? 'bg-[#fffef0] border border-[#E6E6D0] hover:bg-[#fffef0] hover:border-[#4B5D3E] hover:translate-x-1 hover:shadow-lg' 
                        : 'bg-gray-50'
                    }`}
                    style={activeAgeTab === 'early' ? {
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      backgroundColor: '#fffef0'
                    } : {}}
                  >
                    <span className={`text-2xl ${activeAgeTab === 'early' ? 'text-[#4B5D3E]' : ''}`}>{resource.icon}</span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{resource.name}</h4>
                      <p className="text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          {resourceCategories.map((category) => (
            <div key={category.title} className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {category.resources.map((resource) => (
                  <div key={resource.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-sm text-primary font-semibold mb-2 block">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-left">{resource.name}</h3>
                    <p className="text-text/70 mb-4 text-left leading-relaxed">{resource.description}</p>
                    <div className="text-left">
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Visit Resource →
                    </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-background">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with New Resources
          </h2>
          <p className="text-lg text-text/80 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest tools, tips, and updates in digital safety.
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