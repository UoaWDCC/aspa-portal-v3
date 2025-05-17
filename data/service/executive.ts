import { createDirectus, rest, readItems } from "@directus/sdk";
import { ExecutiveResponse, ExecutiveSchema } from "../types/executive";
import { URL } from "../config";
import { get } from "http";

const client = createDirectus<ExecutiveSchema>(URL).with(rest());

export async function getExecutives(): Promise<ExecutiveResponse[]> {
  const executives = await client.request(
    readItems("Executive", {
      fields: ["description", "name", "title"],
      filter: {
        status: { _eq: "published" },
      },
    }),
  );

  return executives;
}
