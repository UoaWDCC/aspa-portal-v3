import { getPayload } from "payload";
import configPromise from "@payload-config";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
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

    const { gameId } = await request.json();

    const game = await payload.findByID({
      collection: "games",
      id: gameId,
    });

    if (game.player2 !== authResult.user.id) {
      return NextResponse.json(
        { error: "Not authorized to accept this game" },
        { status: 403 },
      );
    }

    if (game.status !== "pending") {
      return NextResponse.json(
        { error: "Game is not pending" },
        { status: 400 },
      );
    }

    await payload.update({
      collection: "games",
      id: gameId,
      data: {
        status: "accepted",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error accepting game:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
