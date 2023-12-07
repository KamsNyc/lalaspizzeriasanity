'use client'
import { useState } from 'react';
import MenuItemCard from './MenuItemCard';
import category from '@/sanity/schemas/category';

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
        <h1 className=" text-center mt-[24px] md:mt-[30px] text-[48px] md:text-[64px] font-bold leading-[52px] md:leading-[72px]">
            Our Menu
          </h1>
          <p className='max-w-[600px] text-center'>Lacus lobortis nullam nam consectetur fermentum mattis pellentesque id nulla. Risus convallis iaculis risus ac aliquam sit ultricies. Adipiscing adipiscing pellentesque tincidunt vitae. Aliquam dolor egestas nam congue elit dolor.</p>
          </div>
      
      {/* FILTER */}
      <div className="lg:w-1/10 overflow-y-auto border-r p-4 mt-[32px] flex gap-x-2 whitespace-nowrap">
      {menuCategories.map((menuCategory) => (
  <div
    key={menuCategory}
    onClick={() => setActiveCategory(menuCategory)}
    className={`cursor-pointer px-4 py-1 rounded-[10px] ${
      menuCategory === activeCategory ? 'red text-white' : ''
    }`}
  >
    {menuCategory}
  </div>
))}
This way, you
      </div>

      {/* MENU ITEMS */}
      <div className="w-full">
        <MenuItemCard category={activeCategory} />
      </div>
    </div>
  );
}