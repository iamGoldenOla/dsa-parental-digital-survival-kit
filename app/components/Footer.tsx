import Link from 'next/link'

export default function Footer() {
  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Toolkit', href: '/toolkit' },
      { name: 'Resources', href: '/resources' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    'Resources': [
      { name: 'Guides', href: '/guides' },
      { name: 'Checklists', href: '/checklists' },
      { name: 'Expert Advice', href: '/expert-advice' },
      { name: 'FAQ', href: '/faq' },
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ]

  return (
    <footer className="bg-text text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">DSA Parental Digital Survival Kit</h3>
            <p className="text-white/80 mb-4">
              Empowering parents in the digital age with tools, knowledge, and confidence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-2xl hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-lg font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} DSA Parental Digital Survival Kit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 