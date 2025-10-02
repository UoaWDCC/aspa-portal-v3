import { Payload } from "payload";
import { getHumanitixClient } from "@/app/lib/humanitix/client";
import {
  transformEvent,
  type TransformedEvent,
} from "@/app/lib/humanitix/transformer";

export interface SyncResult {
  success: number;
  errors: string[];
  created: number;
  updated: number;
}

export class EventSyncService {
  constructor(private payload: Payload) {}

  async syncAllEvents(): Promise<SyncResult> {
    const result: SyncResult = {
      success: 0,
      errors: [],
      created: 0,
      updated: 0,
    };

    try {
      const client = getHumanitixClient();
      const humanitixEvents = await client.getAllEvents();

      for (const humanitixEvent of humanitixEvents) {
        try {
          const transformedEvent = transformEvent(humanitixEvent);
          const wasUpdated = await this.upsertEvent(transformedEvent);

          result.success++;
          if (wasUpdated) {
            result.updated++;
          } else {
            result.created++;
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Unknown error";
          result.errors.push(`Event "${humanitixEvent.name}": ${errorMessage}`);
        }
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      result.errors.push(`Failed to fetch events: ${errorMessage}`);
    }

    return result;
  }

  private async upsertEvent(event: TransformedEvent): Promise<boolean> {
    // Check if event exists
    const existingEvents = await this.payload.find({
      collection: "events",
      where: {
        id: {
          equals: event.id,
        },
      },
      limit: 1,
    });

    if (existingEvents.docs.length > 0) {
      // Update existing event
      if (existingEvents.docs[0]?.id) {
        await this.payload.update({
          collection: "events",
          id: existingEvents.docs[0].id,
          data: event,
        });
        return true; // Was updated
      }
    }
    // Create new event
    await this.payload.create({
      collection: "events",
      data: event,
    });
    return false; // Was created
  }
}
