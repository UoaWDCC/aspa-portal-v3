import { getPayload } from "payload";
import configPromise from "@payload-config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise });

    const users = await payload.find({
      collection: "users",
      sort: "-elo",
      limit: 50,
    });

    return NextResponse.json({ users: users.docs });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
