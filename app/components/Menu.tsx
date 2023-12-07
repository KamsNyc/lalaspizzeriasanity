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
    <div className="flexlg:flex-row">
      {/* FILTER */}
      <div className="lg:w-1/10 overflow-y-auto border-r p-4 md:mt-[32px] flex whitespace-nowrap">
        {menuCategories.map((category) => (
          <div
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer px-4 py-1 rounded-[10px] ${
              category === activeCategory ? 'red text-white' : ''
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