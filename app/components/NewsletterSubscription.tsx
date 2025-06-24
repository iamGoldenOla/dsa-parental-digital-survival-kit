"use client"

import { useState } from 'react'

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe')
    }
  }

  return (
    <div className="bg-background rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Subscribe to Our Newsletter
      </h3>
      <p className="text-gray-600 mb-6">
        Stay updated with the latest digital safety tips and resources for parents.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-sm">
            Thank you for subscribing! Please check your email to confirm.
          </p>
        )}

        {status === 'error' && (
          <p className="text-red-600 text-sm">{errorMessage}</p>
        )}
      </form>
    </div>
  )
} 