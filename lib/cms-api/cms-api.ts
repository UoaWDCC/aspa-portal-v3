// lib/cms-api/cms-api.ts
const CMS_URL = process.env.CMS_URL || "http://localhost:4000";

if (!CMS_URL) {
  throw new Error("Missing CMS_URL");
}

export async function cmsFetch<T = any>(
  path: string,
  options?: RequestInit
): Promise<T | null> {
  try {
    const res = await fetch(`${CMS_URL}/api/${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!res.ok) {throw new Error(`[cmsFetch] ${res.status} ${res.statusText}`);};
    return await res.json();
  } catch (err) {
    console.error(`[cmsFetch] Error fetching "${path}"`, err);
    return null;
  }
}
