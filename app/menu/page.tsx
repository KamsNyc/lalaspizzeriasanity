'use client'
import { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';

export default function Menu() {
  const menuCategories = [
    "All",
    "By The Slice",
    "Build Your Own Pie",
    "Lala’s Specialty Pies",
    "Sandwiches",
    "Sauce",
    "Calzone and Rolls",
    "Salads",
    "Toppings",
    "Appetizers",
    "Pasta",
    "Beverages"
  ];

  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  return (
    <div className="lg:flex-row">
        <div className=" flex flex-col items-center justify-center">
        <h1 className=" text-center mt-[24px] md:mt-[48px] text-[48px] md:text-[64px] font-bold leading-[52px] md:leading-[72px] text-[#E32B2B]">
        Lala&apos;s Pizzeria Menu
          </h1>
          <p className='max-w-[625px] md:max-w-[700px] font-medium sans text-[17px] leading-6 mt-[8px] text-center'>Explore our Menu with a variety of delicious options. From classic Cheese Slice to Specialty Pies, Sandwiches, Pasta, and refreshing Beverages. Customize your pizza with a selection of premium toppings. Order now for a delightful dining experience.</p>
          </div>
      
      {/* FILTER */}
      <div className="lg:w-1/10 overflow-y-auto border-r p-4 mt-[48px] flex gap-x-2 whitespace-nowrap items-center justify-none md:justify-center">
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