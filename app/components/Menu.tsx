'use client'
import { useState } from 'react';
import MenuItemCard from './MenuItemCard';

export default function Menu() {
  const menuCategories = [
    "All",
    "By The Slice",
    "Personal Cheese Pie",
    "Pan Pizza",
    "Thin Crust Pie",
    "Regular Pizza Pies",
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
        <h1 className=" text-center mt-[24px] md:mt-[100px] text-[48px] md:text-[64px] font-bold leading-[52px] md:leading-[72px]">
            Our Menu
          </h1>
          <p className='max-w-[625px] font-medium sans text-[17px] leading-6 mt-[8px] text-center'>Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla. Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.</p>
          </div>
      
      {/* FILTER */}
      <div className="lg:w-1/10 overflow-y-auto border-r p-4 mt-[32px] flex gap-x-2 whitespace-nowrap">
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