'use client'
import { useState, useEffect } from 'react';
import { getMenuItems } from '@/sanity/lib/menu-utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuItemCard from './MenuItemCard';

interface MenuItem {
  _id: string;
  title: string;
  mainImage: string;
  slug: string;
}

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
    <div>
      {/* TABS */}
      <Tabs defaultValue={'All'} className="w-full">
        <TabsList>
          {menuCategories && menuCategories.map((category) => (
            <TabsTrigger key={category} value={category} onClick={() => setActiveCategory(category)}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeCategory}>
          <MenuItemCard category={activeCategory} />
        </TabsContent>
      </Tabs>
    </div>
  );
}