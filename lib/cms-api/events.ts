import { cmsFetch } from "./cms-api";

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: any;
}

/**
 * Fetches a list of events from the CMS.
 * @param {number} limit - The maximum number of events to fetch.
 * @returns {Promise<Event[]>} - A promise that resolves to an array of events.
 */
export async function getEvents(limit = 10): Promise<Event[]> {
  const data = await cmsFetch<{ docs: Event[] }>(`events?limit=${limit}`);
  return data?.docs || [];
}