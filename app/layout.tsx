import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSA Parental Digital Survival Kit',
  description: 'Empowering parents in the digital age with tools, knowledge, and confidence to raise safe, smart, and responsible digital citizens.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background text-text">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 