'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getMenuItems } from '@/sanity/sanity-utils';

export default function Menu() {
  const [items, setItems] = useState([]);

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
        <div key={item.id}>
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
