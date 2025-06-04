import { NextResponse } from "next/server";
import { getEvents, Event } from "@/lib/cms-api/events";

/**
 * API route to proxy CMS event fetching.
 * Accepts an optional `limit` query parameter.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const limit = parseInt(url.searchParams.get("limit") || "10", 10);

  try {
    const events: Event[] = await getEvents(limit);

		if (!events) {
      return NextResponse.json(
        { error: "events not found" },
        { status: 404 }
      );
    }
		
    return NextResponse.json({ docs: events });
  } catch (error) {
    console.error("[API] Error fetching events:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}