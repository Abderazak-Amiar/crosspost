import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const welcome = 'Welcome to the API ⚡️';
  return NextResponse.json({ welcome }, { status: 200 });
};
