import { createClient, groq } from 'next-sanity'
import {apiVersion, dataset, projectId, useCdn} from '../env'



export async function getMenuItemsById(itemId) {
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