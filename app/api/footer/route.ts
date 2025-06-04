import { NextResponse } from "next/server";
import { getFooter, FooterData } from "@/lib/cms-api/footer";

/**
 * API route to fetch global footer data from CMS
 */
export async function GET() {
  try {
    const footer: FooterData | null = await getFooter();

    if (!footer) {
      return NextResponse.json(
        { error: "Footer not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(footer);
  } catch (error) {
    console.error("[API] Error fetching footer:", error);
    return NextResponse.json(
      { error: "Failed to fetch footer" },
      { status: 500 }
    );
  }
}
