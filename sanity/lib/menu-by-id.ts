import { createClient, groq } from 'next-sanity'
import {apiVersion, dataset, projectId, useCdn} from '../env'

// NOT USING THIS QUERY: USING ON COMPONENT ITSELF

export async function getMenuItemsById(itemId: string) {
    const client = createClient({
      apiVersion,
      dataset,
      projectId,
      useCdn,
    });
  
    return client.fetch(
      groq`*[_type == "menu" && _id == $itemId] {
        _id,
        title,
        "mainImage": mainImage.asset->url,
        link,
        Price,
        description,
        "alt": mainImage.alt,
        _createdAt,
        _updatedAt,
        "categories": categories[]->{
          title
        }
      }`,
      { itemId }
    );
  }