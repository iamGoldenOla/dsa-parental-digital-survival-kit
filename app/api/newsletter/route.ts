import { NextResponse } from 'next/server'
import { sendContactEmail } from '@/app/lib/email'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Store the email in your newsletter database
    // 2. Add the subscriber to your email marketing service
    // 3. Send a welcome email

    // For now, we'll just send a welcome email
    const result = await sendContactEmail({
      name: 'Newsletter Subscriber',
      email,
      subject: 'Welcome to DSA Parent Kit Newsletter',
      message: 'Thank you for subscribing to our newsletter!',
    })

    if (!result.success) {
      throw new Error(result.error)
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter' },
      { status: 500 }
    )
  }
} 