'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getMenuItems } from '@/sanity/lib/menu-utils';
import Link from 'next/link';

interface MenuItem {
  _id: string;
  title: string;
  mainImage: string;
  description: string;
  alt: string;
  Price: string;
  categories: { title: string }[];
}

export default function MenuItemCard({ category }: { category: string }) {

  const [items, setItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const menuItems: MenuItem[] = await getMenuItems();
  
      // Filter items based on the category prop
      const filteredItems =
        category && category !== 'All'
          ? menuItems.filter(item =>
              item.categories && item.categories.some(cat => cat.title === category)
            )
          : menuItems;
  
      setItems(filteredItems);
    };
  
    fetchData();
  }, [category]);

  return (
    <main className='flex flex-col items-center md:mt-[32px]'>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {items && items.slice(0, 42).map((item) => (
      <div key={item._id} className="p-[16px] lg:p-[32px] max-w-[416px] md:max-w-[360px] max-h-[520px] hover:scale-110 duration-300 ease-in-out">
        {/* CARD */}
        <Link href={`/menu/${item._id}`}>
          <div  className="items-center text-center border rounded-[10px] cursor-pointer hover:scale-105 hover:shadow-sm duration-500 ease-out">
            {/* MENU IMAGE CONTAINER*/}
            <div className="h-[220px] md:h-[220px] md:w-[292px]  flex items-center  justify-center rounded-[10px] overflow-hidden">
              {/* MENU IMAGE  */}
     
          <Image
             src={item.mainImage}
             alt={item.description}
             width={296}
             height={220}
             priority
             className='rounded-[10px] object-cover w-full h-full overflow-hidden'
           />
   
           </div>

           {/* HEADING CONTAINER */}
           <div className="pt-[24px] ">
              {/* MENU ITEM HEADING DESCRIPTION */}
        <h1 className='text-[#090909] text-[24px] font-bold leading-6'>{item.title}</h1>
           {/* SHORT DESCRIPTION TAGS */}
           <p className='text-[14px] leading-[22px] sans pt-[8px] px-2 md:px-2'>{item.alt}</p>
           </div>

           {/* PRICE/SIZE CONTAINER */}
           <div className="">
              {/* MEDIUM SIZE/PRICE CONTAINER */}
                {/* <div className="flex flex-1 items-center justify-between px-[24px] py-[8px]">
                  <h1 className='text-[18px] font-bold'>$12</h1>
                  <p className="sans text-[14px] text-[#090909]">14 inch <span className="text-[#1B1B1B]">pie</span></p>
                </div> */}
              {/* LARGE SIZE/PRICE */}
              <div className="flex flex-1 items-center justify-between px-[24px] py-[8px] mt-2 border-t">
                  <p className="sans text-[14px] text-[#090909] font-semibold uppercase">Price<span className="text-[#1B1B1B]"></span></p>
                  <h1 className='text-[18px] font-bold'>${item.Price}</h1>
                </div>
           </div> 
          </div>
          </Link>
      </div>
      ))}
      </div>
    </main>
  );
}
