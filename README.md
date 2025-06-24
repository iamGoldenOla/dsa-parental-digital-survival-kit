# DSA Parental Digital Survival Kit

A comprehensive web application designed to help parents navigate the digital world safely with their children. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Digital Safety Assessment Tools** - Interactive quizzes and assessments
- **Educational Resources** - Articles, guides, and expert advice
- **Parenting Toolkit** - Practical tools and checklists
- **Expert Articles** - Curated content from digital safety experts
- **Contact & Support** - Direct access to help and resources
- **Responsive Design** - Mobile-first approach for all devices
- **Dark Mode Support** - User preference-based theme switching

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamGoldenOla/dsa-parental-digital-survival-kit.git
   cd dsa-parental-digital-survival-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
dsa-parental-digital-survival-kit/
├── app/                    # Next.js 13+ app directory
│   ├── components/         # Reusable React components
│   ├── api/               # API routes
│   ├── globals.css        # Global styles with Tailwind
│   └── layout.tsx         # Root layout component
├── public/                # Static assets
├── images/                # Image assets
├── .github/               # GitHub Actions workflows
├── css/                   # Additional CSS files
└── blog/                  # Blog content
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Quality

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### Branching Strategy

- `main` - Production-ready code
- `develop` - Development integration
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Critical fixes

## 🚀 Deployment

### GitHub Pages (Automatic)

The project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - Triggers automatic deployment
2. **Access your site** - Available at `https://iamGoldenOla.github.io/dsa-parental-digital-survival-kit`

### Manual Deployment

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Upload the 'out' directory to Netlify
```

#### Traditional Hosting
```bash
npm run build
# Upload the 'out' directory to your web server
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Email Configuration (for contact forms)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Tailwind CSS

The project uses Tailwind CSS with custom configuration:
- Custom color palette
- Responsive design utilities
- Dark mode support
- Custom component classes

## 📱 Features in Detail

### Digital Safety Assessment
- Interactive quizzes for different age groups
- Personalized recommendations
- Progress tracking

### Educational Resources
- Age-appropriate content
- Expert-curated articles
- Video tutorials and guides

### Parenting Toolkit
- Digital safety checklists
- Family agreement templates
- Screen time management tools

### Expert Articles
- Regular updates from digital safety experts
- Practical parenting advice
- Latest trends and threats

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Digital safety experts who contributed content
- Parents who provided feedback and suggestions
- Open source community for the amazing tools used

## 📞 Support

- **Website**: [https://iamGoldenOla.github.io/dsa-parental-digital-survival-kit](https://iamGoldenOla.github.io/dsa-parental-digital-survival-kit)
- **Email**: [Contact through the website form]
- **Issues**: [GitHub Issues](https://github.com/iamGoldenOla/dsa-parental-digital-survival-kit/issues)

---

**Built with ❤️ for parents navigating the digital world** 