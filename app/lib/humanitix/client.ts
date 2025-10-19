import type { components } from "@/app/lib/api/v1";

type Event = components["schemas"]["Event"];
type PaginatedEventsResponse = components["schemas"]["PaginatedResponse"] & {
  events: Event[];
};

export class HumanitixClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey || process.env.HUMANITIX_API_KEY || "";
    this.baseUrl =
      process.env.HUMANITIX_BASE_URL || "https://api.humanitix.com";

    if (!this.apiKey) {
      throw new Error("Humanitix API key is required");
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    // Try different authentication methods based on the OpenAPI spec
    const response = await fetch(url, {
      ...options,
      headers: {
        // Option 1: Try x-api-key header (common for API keys)
        "x-api-key": this.apiKey,
        // Option 2: Also try Authorization header as backup
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Humanitix API error (${response.status}): ${errorText}`);
    }

    return response.json();
  }

  // ... rest of your methods remain the same
  async getEvents(
    params: {
      page?: number;
      pageSize?: number;
      inFutureOnly?: boolean;
    } = {},
  ): Promise<PaginatedEventsResponse> {
    const searchParams = new URLSearchParams();

    if (params.page) {
      searchParams.set("page", params.page.toString());
    }
    if (params.pageSize) {
      searchParams.set("pageSize", params.pageSize.toString());
    }
    if (params.inFutureOnly) {
      searchParams.set("inFutureOnly", "true");
    }

    const endpoint = `/v1/events${searchParams.toString() ? `?${searchParams}` : ""}`;
    return this.request<PaginatedEventsResponse>(endpoint);
  }

  async getAllEvents(): Promise<Event[]> {
    const allEvents: Event[] = [];
    let page = 1;
    const pageSize = 100;

    while (true) {
      const response = await this.getEvents({ page, pageSize });
      allEvents.push(...response.events);

      if (response.events.length < pageSize) {
        break;
      }

      page++;
    }

    return allEvents;
  }

  async getEvent(eventId: string): Promise<Event> {
    return this.request<Event>(`/v1/events/${eventId}`);
  }
}

let humanitixClient: HumanitixClient | null = null;

export function getHumanitixClient(): HumanitixClient {
  if (!humanitixClient) {
    humanitixClient = new HumanitixClient();
  }
  return humanitixClient;
}
