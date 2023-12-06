'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getHeroImage } from '../../sanity/lib/image-utils';
import Link from 'next/link';


interface HeroImages {
  _id: string;
  title: string;
  mainImage: string;
  alt: string;
}

export default function HeroImage() {
  const [heroImage, setheroImage] = useState<HeroImages[]>([]);
  console.log(heroImage)

  useEffect(() => {
    const fetchHeroImage = async () => {
      const fetchHeroImage = await getHeroImage();
      setheroImage(fetchHeroImage);
    };

    fetchHeroImage();
  }, []);

  return (
    <section className='flex items-center w-full max-h-[480px] overflow-hidden rounded-xl'>
      {heroImage.map((item) => (
        <div key={item._id} className="">
          <Image
            src={item.mainImage}
            alt={item.alt}
            width={1000}
            height={900}
            className='object-cover w-full h-full cursor-pointer'
          />
        </div>
      ))}
    </section>
  );
}
