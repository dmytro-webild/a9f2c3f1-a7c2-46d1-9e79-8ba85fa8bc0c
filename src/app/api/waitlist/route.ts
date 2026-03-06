import { NextRequest, NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, instagram, tiktok } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Supabase credentials are configured
    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      console.error('Supabase credentials not configured');
      // Still return success to user, but log the error
      return NextResponse.json(
        { message: 'Submission received (database pending)' },
        { status: 202 }
      );
    }

    // Insert into Supabase
    const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        email,
        instagram: instagram || null,
        tiktok: tiktok || null,
        created_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      console.error('Supabase error:', await response.text());
      // Check if it's a duplicate entry error
      const errorText = await response.text();
      if (errorText.includes('duplicate') || errorText.includes('unique')) {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }
      throw new Error(`Supabase error: ${response.status}`);
    }

    return NextResponse.json(
      { message: 'Successfully joined the waitlist' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'Failed to process waitlist submission' },
      { status: 500 }
    );
  }
}
