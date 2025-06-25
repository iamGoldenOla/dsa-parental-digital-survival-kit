import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-text sm:text-6xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg leading-8 text-text/70">
              Have questions about digital safety? We're here to help. Reach out to us
              and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Send us a Message
          </h2>
          <p className="mt-2 text-lg leading-8 text-text/70">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>

          <div className="lg:col-span-4">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-text">Contact Information</h3>
                <dl className="mt-4 space-y-4">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="h-6 w-6 text-text/70" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a
                        href="mailto:digitalparentalsurvivalkit@gmail.com"
                        className="text-text/70 hover:text-primary"
                      >
                        digitalparentalsurvivalkit@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Phone</span>
                      <PhoneIcon className="h-6 w-6 text-text/70" aria-hidden="true" />
                    </dt>
                    <dd>
                      <a
                        href="tel:+1234567890"
                        className="text-text/70 hover:text-primary"
                      >
                        +1 (234) 567-890
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <MapPinIcon className="h-6 w-6 text-text/70" aria-hidden="true" />
                    </dt>
                    <dd>
                      <address className="text-text/70 not-italic">
                        123 Digital Safety Ave
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </address>
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text">Support Hours</h3>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-text/70">Monday - Friday</dt>
                    <dd className="mt-1">9:00 AM - 6:00 PM EST</dd>
                  </div>
                  <div>
                    <dt className="text-text/70">Saturday</dt>
                    <dd className="mt-1">10:00 AM - 4:00 PM EST</dd>
                  </div>
                  <div>
                    <dt className="text-text/70">Sunday</dt>
                    <dd className="mt-1">Closed</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-text">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="/faq"
                      className="text-text/70 hover:text-primary"
                    >
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/resources"
                      className="text-text/70 hover:text-primary"
                    >
                      Digital Safety Resources
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blog"
                      className="text-text/70 hover:text-primary"
                    >
                      Latest Articles
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 