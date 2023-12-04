'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getMenuItems } from '@/sanity/lib/menu-utils';

interface MenuItem {
  _id: string;
  title: string;
  mainImage: string;
  slug: string;
}

export default function Menu() {
  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const menuItems = await getMenuItems();
      setItems(menuItems);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main>
      <h1>Homepage</h1>
      {items.map((item) => (
        <div key={item._id}>
          {item.title}
          <Image
            src={item.mainImage}
            alt={item.slug}
            width={250}
            height={250}
            className='object-contain'
          />
        </div>
      ))}
    </main>
  );
}
