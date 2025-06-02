import { cmsFetch } from "./cms-api";

/**
 * Fetches a list of events from the CMS.
 * @param {number} limit - The maximum number of events to fetch.
 * @returns {Promise<any[]>} - A promise that resolves to an array of events.
 */
export async function getEvents(limit = 10) {
  const data = await cmsFetch<{ docs: any[] }>(`events?limit=${limit}`);
  return data?.docs || [];
}