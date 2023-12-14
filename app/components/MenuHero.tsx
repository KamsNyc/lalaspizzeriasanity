'use client'
// Import React and useState correctly
import React, { useEffect, useState } from 'react';

// Import Image from 'next/image'
import Image from 'next/image';

// Import getMenuItems from the correct path
import { getMenuItemsById } from '@/sanity/lib/menu-by-id';

// Define the MenuHeroItem interface
interface MenuHeroItem {
  _id: string;
  title: string;
  mainImage: string;
  alt: string;
  categories: { title: string }[];
  description: string;
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
    <div className='flex items-center mt-[80px]'>
      {heroImage.map((item) => (
        <React.Fragment key={item._id}>
          {/* LEFT SIDE IMAGE */}
          <div className=''>
            <Image
              // Use item.mainImage instead of a placeholder URL
              src={item.mainImage}
              alt={item.alt}
              width={540}
              height={480}
              className='rounded-[10px]'
            />
          </div>
          {/* RIGHT SIDE TEXT */}
          <div className=''>
            {/* Tags */}
            {/* h1 title */}
            {item.title}
            {/* paragraph */}
            {/* short description */}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MenuHero;
