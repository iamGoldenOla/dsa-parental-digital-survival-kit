# DSA Parental Digital Survival Kit

A comprehensive web application designed to empower parents in protecting their children online. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🛡️ Comprehensive digital safety guides
- 📋 Practical checklists and resources
- 🔍 Interactive tools and assessments
- 📱 Mobile-responsive design
- 📧 Contact form with email notifications
- 📰 Newsletter subscription
- 🔎 Site-wide search functionality

## Prerequisites

- Node.js 18.x or later
- npm 9.x or later

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dsa-parental-digital-survival-kit.git
   cd dsa-parental-digital-survival-kit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # SMTP Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-specific-password
   SMTP_FROM=your-email@gmail.com

   # Contact Form
   CONTACT_EMAIL=your-email@gmail.com

   # Next.js Configuration
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── components/        # React components
│   ├── about/            # About page
│   ├── blog/             # Blog pages
│   ├── contact/          # Contact page
│   ├── faq/              # FAQ page
│   ├── resources/        # Resources page
│   └── toolkit/          # Toolkit page
├── public/               # Static files
│   └── images/          # Image assets
├── styles/              # Global styles
└── types/              # TypeScript types
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@dsaparentkit.com or visit our [contact page](http://localhost:3000/contact). 