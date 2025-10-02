// lib/humanitix/transformers.ts
import type { components } from "@/app/lib/api/v1";

type HumanitixEvent = components["schemas"]["Event"];

export interface TransformedEvent {
  id: string;
  name: string;
  description: string;
  dateTime: string;
  location: string;
  price: string;
  imageUrl: string;
  lastSyncedAt: string;
}

export function transformEvent(event: HumanitixEvent): TransformedEvent {
  return {
    id: event._id,
    name: event.name || "Untitled Event",
    description: event.description || "",
    dateTime: formatDateTime(event.startDate, event.endDate),
    location: formatLocation(event.eventLocation),
    price: formatPrice(event.pricing, event.currency),
    imageUrl: getImageUrl(event),
    lastSyncedAt: new Date().toISOString(),
  };
}

function formatDateTime(startDate?: string, endDate?: string): string {
  if (!startDate) {
    return "";
  }

  const start = new Date(startDate);
  let formatted = start.toLocaleString("en-AU", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  if (endDate) {
    const end = new Date(endDate);
    const endFormatted = end.toLocaleString("en-AU", {
      hour: "2-digit",
      minute: "2-digit",
    });
    formatted += ` - ${endFormatted}`;
  }

  return formatted;
}

function formatLocation(
  eventLocation?: HumanitixEvent["eventLocation"],
): string {
  if (!eventLocation) {
    return "";
  }

  switch (eventLocation.type) {
    case "online":
      return eventLocation.onlineUrl
        ? `Online: ${eventLocation.onlineUrl}`
        : "Online Event";

    case "address": {
      const parts = [eventLocation.venueName, eventLocation.address].filter(
        Boolean,
      );
      return parts.join(", ");
    }

    case "custom": {
      const customParts = [
        eventLocation.venueName,
        eventLocation.address,
      ].filter(Boolean);
      return customParts.join(", ");
    }

    case "toBeAnnounced":
      return "Location to be announced";

    default:
      return "";
  }
}

function formatPrice(
  pricing?: HumanitixEvent["pricing"],
  currency?: string,
): string {
  if (!pricing || pricing.minimumPrice === 0) {
    return "Free";
  }

  const { minimumPrice, maximumPrice } = pricing;
  const currencySymbol = getCurrencySymbol(currency);

  if (minimumPrice === maximumPrice) {
    return `${currencySymbol}${minimumPrice}`;
  }

  return `${currencySymbol}${minimumPrice} - ${currencySymbol}${maximumPrice}`;
}

function getCurrencySymbol(currency?: string): string {
  const symbols: Record<string, string> = {
    AUD: "$",
    NZD: "$",
    USD: "$",
    CAD: "$",
    FJD: "$",
  };
  return symbols[currency || "AUD"] || "$";
}

function getImageUrl(event: HumanitixEvent): string {
  return event.featureImage?.url || event.bannerImage?.url || "";
}
