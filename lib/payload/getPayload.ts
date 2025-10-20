import { getPayload, type Payload } from "payload";
import config from "@payload-config";

let cached: Payload | null = null;

/**
 * Get the Payload client with caching for better performance
 */
export const getPayloadClient = async (): Promise<Payload> => {
  if (!cached) {
    cached = await getPayload({
      config,
    });
  }

  if (!cached) {
    throw new Error("Failed to initialize Payload client");
  }

  return cached;
};
