import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheckIcon, BookOpenIcon, ChatBubbleLeftRightIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Newsletter from './components/Newsletter'
import NewsletterSubscription from './components/NewsletterSubscription'

const features = [
  {
    name: 'Comprehensive Guides',
    description: 'Expert-written guides covering all aspects of digital safety for children.',
    icon: BookOpenIcon,
  },
  {
    name: 'Practical Checklists',
    description: 'Actionable checklists to help you implement digital safety measures.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Interactive Tools',
    description: 'Engaging tools to help you and your children learn about online safety.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Expert Advice',
    description: 'Guidance from leading experts in child psychology and digital safety.',
    icon: UserGroupIcon,
  },
]

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-text sm:text-6xl">
              Navigate the Digital World with Confidence
            </h1>
            <p className="mt-6 text-lg leading-8 text-text/70">
              Empower yourself with the tools and knowledge needed to protect your children
              in the digital age. Our comprehensive toolkit provides everything you need to
              ensure safe and responsible online experiences.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/toolkit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-text hover:text-primary"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything You Need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Comprehensive Digital Safety Toolkit
          </p>
          <p className="mt-6 text-lg leading-8 text-text/70">
            Our toolkit provides parents with all the resources they need to protect their
            children online and foster healthy digital habits.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-text">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-text/70">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href="/toolkit"
                      className="text-sm font-semibold leading-6 text-primary hover:text-primary/80"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <NewsletterSubscription />
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Take Control of Your Family's Digital Safety
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/80">
              Join thousands of parents who are already using our toolkit to create a
              safer digital environment for their children.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/toolkit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-white/80"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 