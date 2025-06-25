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
    { name: 'Instagram', href: '#', icon: '📸' },
  ]

  return (
    <footer className="footer py-10 mt-16 border-t border-gray-200 dark:border-gray-700 bg-footer text-footer-text">
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="footer-section col-span-1">
          <h3 className="text-xl font-bold mb-2">DSA Parent Kit</h3>
          <p className="mb-4">Empowering parents in the digital age.</p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} aria-label={link.name} className="text-2xl hover:text-primary transition-colors duration-200">
                <span>{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        {Object.entries(footerLinks).map(([section, links]) => (
          <div className="footer-section" key={section}>
            <h4 className="font-semibold mb-2">{section}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        &copy; 2025 DSA Parent Kit. All rights reserved.
      </div>
    </footer>
  )
} 