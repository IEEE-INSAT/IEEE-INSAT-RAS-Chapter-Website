import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "zntmhfyl";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-12-15";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true // Set to false if statically generating pages, using ISR or tag-based revalidation
});
