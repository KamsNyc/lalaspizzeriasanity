import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env';

export async function getHeroImage() {
    const client = createClient({
        apiVersion,
        dataset,
        projectId,
        useCdn,
    });

    return client.fetch(
        groq`*[_type == "heroImage"] {
            _id,
            title,
            "mainImage": mainImage.asset->url,
            "alt": mainImage.alt,
            _createdAt,
            _updatedAt
        }`
    );
}
