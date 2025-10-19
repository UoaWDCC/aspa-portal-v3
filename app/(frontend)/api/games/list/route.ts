import { getPayload } from "payload";
import configPromise from "@payload-config";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("payload-token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const payload = await getPayload({ config: configPromise });

    const authResult = await payload.auth({
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        Cookie: `payload-token=${token}`,
      }),
    });

    if (!authResult.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const games = await payload.find({
      collection: "games",
      where: {
        or: [
          {
            player1: {
              equals: authResult.user.id,
            },
          },
          {
            player2: {
              equals: authResult.user.id,
            },
          },
        ],
      },
      depth: 2,
      sort: "-createdAt",
    });

    return NextResponse.json({ games: games.docs });
  } catch (error) {
    console.error("Error fetching games:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
