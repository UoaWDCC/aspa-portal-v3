import { NextResponse } from "next/server";
import { getHomeContent, HomeContent } from "@/lib/cms-api/home-content";

/**
 * API route to fetch global home content from CMS
 */
export async function GET() {
  try {
    const content: HomeContent | null = await getHomeContent();

    if (!content) {
      return NextResponse.json(
        { error: "Home content not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(content);
  } catch (error) {
    console.error("[API] Error fetching home content:", error);
    return NextResponse.json(
      { error: "Failed to fetch home content" },
      { status: 500 }
    );
  }
}
