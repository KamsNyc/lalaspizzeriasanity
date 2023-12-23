'use client'
import { useState } from 'react';
import MenuItemCard from './MenuItemCard';

export default function Menu() {
  const menuCategories = [
    "All",
    "By The Slice",
    "Regular Pizza Pies",
    "Personal Cheese Pie",
    "Lala’s Specialty Pies",
    "Pan Pizza",
    "Thin Crust Pie",
    "Sandwiches",
    "Calzone and Rolls",
    "Salads",
    "Appetizers",
    "Pasta",
    "Beverages"
  ];

  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  return (
    <div className="lg:flex-row">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center mt-[24px] md:mt-[48px] text-[40px] md:text-[64px] 2xl:text-[72px] font-bold leading-[52px] md:leading-[72px]">
          Lala&apos;s Pizzeria Menu
        </h1>
        <p className='max-w-[625px] font-medium sans text-[17px] leading-6 mt-[8px] text-center'>Enjoy the convenience of ordering your favorite dishes from Lalas Pizzeria through popular delivery apps. Experience a seamless ordering process with Uber Eats, Grubhub, Postmates, DoorDash, Slice, and Seamless.</p>
      </div>

      {/* FILTER */}
      <div className="lg:w-1/10 overflow-y-auto border-r p-4 mt-[48px] flex gap-x-2 whitespace-nowrap">
        {menuCategories.map((category) => (
          <div
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer px-2 py-1 font-medium rounded-[10px] ${
              category === activeCategory ? 'red text-white' : 'border'
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      {/* MENU ITEMS */}
      <div className="w-full">
        <MenuItemCard category={activeCategory} />
      </div>
    </div>
  );
}