import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  return NextResponse.json(
    { messgae: 'Welcome To CrossPost Api' },
    { status: 200 },
  );
};
