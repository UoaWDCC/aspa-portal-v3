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

    const { gameId, winner } = await request.json();

    const game = await payload.findByID({
      collection: "games",
      id: gameId,
    });

    if (
      game.player1 !== authResult.user.id &&
      game.player2 !== authResult.user.id
    ) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    }

    if (game.status !== "accepted") {
      return NextResponse.json(
        { error: "Game is not in accepted state" },
        { status: 400 },
      );
    }

    const isPlayer1 = game.player1 === authResult.user.id;
    const confirmationField = isPlayer1
      ? "player1Confirmation"
      : "player2Confirmation";

    await payload.update({
      collection: "games",
      id: gameId,
      data: {
        [confirmationField]: winner,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error confirming result:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
