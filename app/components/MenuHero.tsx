"use client";
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import DeliveryApps from "../menu/components/DeliveryApps";
import Image from "next/image";
import Link from "next/link";

import { createClient, groq } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env';

interface MenuHeroItem {
  _id: string;
  title: string;
  mainImage: string;
  alt: string;
  categories: { title: string }[];
  description: string;
  Price: string;
}

async function getMenuItemsById(itemId: string) {
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

function MenuHero({ itemId }: { itemId?: string }) {
  const [heroImage, setHeroImage] = useState<MenuHeroItem[]>([]);

  useEffect(() => {
    const fetchHeroImage = async () => {
      if (itemId) {
        const fetchedHeroImage = await getMenuItemsById(itemId);
        setHeroImage(fetchedHeroImage);
      }
    };

    fetchHeroImage();
  }, [itemId]);

  return (
    <div className="">
      {heroImage.map((item) => (
        <div key={item._id} className="flex mt-[80px]">
          <div className="w-full h-full">
            <Image
              src={item.mainImage}
              alt={item.description}
              width={540}
              height={480}
              className="rounded-[10px] w-[540px] h-[480px] object-cover"
            />
          </div>
          <div className="w-full h-full">
            <div className="">
              <Link href={`/menu`}>
                <Badge variant="destructive" className="yellow text-black">{item.categories ? item.categories[0].title : "Lalas Pizzeria"}</Badge>
              </Link>
            </div>
            <div className="pt-[16px]">
              <h1 className="text-[64px] font-bold leading-[74px]">
                {item.title}
              </h1>
            </div>
            <div className="pt-[16px] max-w-[540px] sans text-[#1B1B1B]/75 text-[20px] leading-[32px]">
              <p>{item.description}</p>
            </div>
            <div className="mt-[32px]">
              <DeliveryApps />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuHero;
