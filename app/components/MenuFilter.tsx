'use client'
import { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import Link from 'next/link';

export default function MenuFilter() {
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
      {/* FILTER */}
      <div className="lg:w-1/10 overflow-y-auto border md:border-none md:border-r p-4 mt-[16px] flex gap-x-2 whitespace-nowrap">
        {menuCategories.map((category) => (
          <div
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`cursor-pointer px-2 py-1 font-medium rounded-[10px] ${
              category === activeCategory ? 'red text-white' : 'border'
            }`}
          >
            <Link href="/menu">
            {category}
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
}