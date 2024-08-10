import { NextRequest, NextResponse } from "next/server";
import { checkEverythingPrams } from '@/app/api/everything/everything.schema';
import { fetchEverything } from '@/services/everything.server';
import { ZodError } from 'zod';

interface NextApiResponse extends NextResponse {
  params: { videoName: string };
}

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    const searchParams = checkEverythingPrams(request.url);

    return Response.json(await fetchEverything(searchParams));
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse(error.message, { status: 400 });
    }
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 400,
      });
    }
  }
}
