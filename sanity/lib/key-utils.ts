import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env';

export async function getKey() {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });

  const result = await client.fetch(
    groq`*[_type == "env"] {
      key
    }`
  );

  return result[0]?.key || null;
}