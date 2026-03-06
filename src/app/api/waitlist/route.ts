import { NextRequest, NextResponse } from 'next/server';

interface WaitlistEntry {
  email: string;
  instagram?: string;
  tiktok?: string;
  createdAt: string;
}

// In-memory storage for demonstration
// In production, replace with actual database (MongoDB, PostgreSQL, etc.)
const waitlistEntries: WaitlistEntry[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, instagram, tiktok } = body;

    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check for duplicate email
    if (waitlistEntries.some(entry => entry.email === email)) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Create waitlist entry
    const entry: WaitlistEntry = {
      email,
      instagram: instagram || undefined,
      tiktok: tiktok || undefined,
      createdAt: new Date().toISOString()
    };

    // Add to in-memory storage
    waitlistEntries.push(entry);

    // TODO: In production, save to database here
    // Example for MongoDB:
    // await db.collection('waitlist').insertOne(entry);
    
    // TODO: Send confirmation email
    // Example:
    // await sendEmail({
    //   to: email,
    //   subject: 'Welcome to Clearance Waitlist',
    //   template: 'waitlist-confirmation'
    // });

    console.log('Waitlist entry created:', entry);

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist',
        data: entry
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Optional: Get all waitlist entries (add authentication in production)
  return NextResponse.json(
    {
      count: waitlistEntries.length,
      entries: waitlistEntries
    },
    { status: 200 }
  );
}
