import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      // In a real app, this would be an API call to your newsletter service
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setError('Failed to subscribe. Please try again.')
    }
  }

  return (
    <div className="bg-background rounded-2xl p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
          Stay Updated
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-lg leading-8 text-text/70">
          Subscribe to our newsletter for the latest digital safety tips, resources,
          and updates.
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-text shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="Enter your email"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-sm text-green-600">
            Thank you for subscribing! Please check your email to confirm.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  )
} 