'use client'
import React, { useEffect, useState } from 'react'
import { getIcons } from '../../sanity/lib/icons-utils';
import Image from 'next/image';

interface Logo {
    _id: string;
  title: string;
  mainImage: string;
  alt: string;
  link: string;
}
function Logo() {
    const [logo, setLogo] = useState<Logo[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const Icons = await getIcons();
        setLogo(Icons);
      };
  
      fetchData();
    }, []);
  return (
    <div>
      {
        logo && logo.map( (logo) => (
            <div key={logo._id}>
            <Image
            src={logo.mainImage}
            alt={logo.alt}
            width={70}
            height={70}
            className='object-cover'
            priority
          />
            </div>
        ))
      }
    </div>
  )
}

export default Logo
