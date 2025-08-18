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

    const { opponentUsername } = await request.json();

    // Find opponent by username
    const opponents = await payload.find({
      collection: "users",
      where: {
        username: {
          equals: opponentUsername,
        },
      },
    });

    if (opponents.docs.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const opponent = opponents.docs[0];

    if (!opponent || opponent.id === authResult.user.id) {
      return NextResponse.json(
        { error: !opponent ? "User not found" : "Cannot challenge yourself" },
        { status: !opponent ? 404 : 400 },
      );
    }

    // Create game request
    const game = await payload.create({
      collection: "games",
      data: {
        player1: authResult.user.id,
        player2: opponent.id,
        status: "pending",
      },
    });

    return NextResponse.json({ success: true, game });
  } catch (error) {
    console.error("Error creating game request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
