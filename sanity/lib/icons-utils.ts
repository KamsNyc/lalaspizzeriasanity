import { createClient, groq } from 'next-sanity'
import {apiVersion, dataset, projectId, useCdn} from '../env'



export async function getIcons() {
    const client = createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,  
    })

    return client.fetch(
        groq`*[_type == "icon"] {
            _id,
            title,
            "mainImage": mainImage.asset->url,
            link,
            "alt": mainImage.alt
          }`
    )
}