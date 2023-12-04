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
    <main className='flex flex-col items-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 grid-rows-2">
      {items.map((item) => (
      <div className="p-[16px] lg:p-[32px] max-w-[416px] md:max-w-[360px] max-h-[520px] ">
        {/* CARD */}
          <div key={item._id} className="items-center text-center">
            {/* MENU IMAGE CONTAINER*/}
            <div className="h-[220px] w-full flex items-center justify-center overflow-hidden">
              {/* MENU IMAGE  */}
     
          <Image
             src={item.mainImage}
             alt={item.slug}
             width={296}
             height={220}
             className='rounded-[10px] object-cover'
           />
   
           </div>

           {/* HEADING CONTAINER */}
           <div className="pt-[24px]">
              {/* MENU ITEM HEADING DESCRIPTION */}
        <h1 className='text-[#090909] text-[24px] font-bold'>{item.title}</h1>
           {/* SHORT DESCRIPTION */}
           <p className='text-[14px] leading-[22px] sans pt-[12px]'>Tomato, Mozzarela, Olive, Sezame Oil, Speenach, Salami</p>
           </div>

           {/* PRICE/SIZE CONTAINER */}
           <div className="pt-[32px]">
              {/* MEDIUM SIZE/PRICE CONTAINER */}
                <div className="flex flex-1 items-center justify-between px-[24px] py-[12px]">
                  <h1 className='text-[18px] font-bold'>$12</h1>
                  <p className="sans text-[14px] text-[#090909]">14 inch <span className="text-[#1B1B1B]">pie</span></p>
                </div>
              {/* LARGE SIZE/PRICE */}
              <div className="flex flex-1 items-center justify-between px-[24px] py-[12px]">
                  <h1 className='text-[18px] font-bold'>$17</h1>
                  <p className="sans text-[14px] text-[#090909] font-[400]">16 inch <span className="text-[#1B1B1B]">pie</span></p>
                </div>
           </div>

        

          </div>
      </div>
      ))}
      </div>
    </main>
  );
}
