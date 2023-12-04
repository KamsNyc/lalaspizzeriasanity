'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getSocialIcons } from '../../sanity/lib/socials-utils';
import Link from 'next/link';

interface SocialItems {
  _id: string;
  title: string;
  mainImage: string;
  alt: string;
  link: string;
}

export default function SocialIcons() {
  const [socialItems, setsocialItems] = useState<SocialItems[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const socialIcons = await getSocialIcons();
      setsocialItems(socialIcons);
    };

    fetchData();
  }, []);

  return (
    <main className='flex items-center gap-4 w-full h-full'>
      {socialItems.map((item) => (
        <div key={item._id} className="">
            <Link target='_blank' href={item.link}>
          <Image
            src={item.mainImage}
            alt={item.alt}
            width={24}
            height={24}
            className='object-cover w-full h-full cursor-pointer'
          />
          </Link>
        </div>
      ))}
    </main>
  );
}
