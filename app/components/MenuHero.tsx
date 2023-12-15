"use client";
// Import React and useState correctly
import React, { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import DeliveryApps from "../menu/components/DeliveryApps";

// Import Image from 'next/image'
import Image from "next/image";

// Import getMenuItems from the correct path
import { getMenuItemsById } from "@/sanity/lib/menu-by-id";

// Define the MenuHeroItem interface
interface MenuHeroItem {
  _id: string;
  title: string;
  mainImage: string;
  alt: string;
  categories: { title: string }[];
}

// Correct the function name to use camelCase (setHeroImage)
function MenuHero({ itemId }) {
  // Correct the state name to use camelCase (heroImage)
  const [heroImage, setHeroImage] = useState<MenuHeroItem[]>([]);

  useEffect(() => {
    const fetchHeroImage = async () => {
      // Correct the variable name to use camelCase (fetchHeroImage)
      const fetchedHeroImage = await getMenuItemsById(itemId);
      // Correct the state update to use setHeroImage
      setHeroImage(fetchedHeroImage);
    };

    fetchHeroImage();
  }, [itemId]); // Add itemId as a dependency

  return (
    <div className="">
      {heroImage.map((item) => (
        <div key={item._id} className="flex mt-[80px]">
          {/* LEFT SIDE IMAGE */}
          <div className="w-full h-full">
            <Image
              // Use item.mainImage instead of a placeholder URL
              src={item.mainImage}
              alt={item.alt}
              width={540}
              height={480}
              className="rounded-[10px] w-[540px] h-[480px] object-cover"
            />
          </div>
          {/* RIGHT SIDE TEXT */}
          <div className="w-full h-full">
            {/* Tags */}
            <div className="">
              <Badge variant="destructive" className="yellow text-black">{item.categories[0].title}</Badge>
            </div>
            {/* h1 title */}
            <div className="pt-[16px]">
              <h1 className="text-[64px] font-bold leading-[74px]">
                {item.title}
              </h1>
            </div>
            {/* short description */}
            <div className="pt-[16px] max-w-[540px] sans text-[#1B1B1B]/75 text-[20px] leading-[32px]">
              <p>{item.alt}</p>
            </div>

            {/* DELIVERY APPS */}
            <DeliveryApps />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuHero;
