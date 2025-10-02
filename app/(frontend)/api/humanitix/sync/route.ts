import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { EventSyncService } from "@/app/lib/services/eventSyncService";

export async function POST(_request: NextRequest) {
  try {
    const payload = await getPayload({ config });
    const syncService = new EventSyncService(payload);
    const result = await syncService.syncAllEvents();

    return NextResponse.json({
      message: "Sync completed",
      result,
    });
  } catch (error) {
    console.error("Sync error:", error);

    return NextResponse.json(
      {
        error: "Sync failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
