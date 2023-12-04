import { createClient, groq } from 'next-sanity'
import {apiVersion, dataset, projectId, useCdn} from '../sanity/env'



export async function getMenuItems() {
    const client = createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,  
    })

    return client.fetch(
        groq`*[_type == "post"] {
            _id,
            title,
            _createdAt,
            "slug": slug.current,
            "author": author->name,
            "mainImage": mainImage.asset->url,
            "categories": categories[]->title,
            "publishedAt": publishedAt,
            "body": body[0].children[0].text
          }`
    )
}