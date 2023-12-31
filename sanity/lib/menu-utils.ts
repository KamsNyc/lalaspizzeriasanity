import { createClient, groq } from 'next-sanity'
import {apiVersion, dataset, projectId, useCdn} from '../../sanity/env'



export async function getMenuItems() {
    const client = createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,  
    })

    return client.fetch(
        groq`*[_type == "menu"] {
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
          
          }`
    )
}