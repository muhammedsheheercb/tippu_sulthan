import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    console.log('📩 Event Booking Data Received:', data);

    // Validate required fields
    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.eventType ||
      !data.eventDate ||
      !data.guestCount
    ) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: 'Event booking received successfully!',
    });
  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong!' },
      { status: 500 },
    );
  }
}
