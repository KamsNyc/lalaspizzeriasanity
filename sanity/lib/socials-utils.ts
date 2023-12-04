import { createClient, groq } from 'next-sanity'
import {apiVersion, dataset, projectId, useCdn} from '../../sanity/env'



export async function getSocialIcons() {
    const client = createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,  
    })

    return client.fetch(
        groq`*[_type == "socials"] {
            _id,
            title,
            "mainImage": mainImage.asset->url,
            link,
            "alt": mainImage.alt
          }`
    )
}