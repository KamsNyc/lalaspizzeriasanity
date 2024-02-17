"use client";
import React, { useState } from "react";
import MenuLogo from "./MenuLogo";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="px-4 lg:px-[120px] 2xl:px-[240px] py-[24px] md:py-[32px]">
      {/* NAVIGTION CONTAINER */}
      <div className="h-[46px] flex items-center justify-between">
        {/* LEFT SIDE LOGO/ADDRESS */}
        <div className="flex items-center gap-[32px]">
          {/* LOGO */}
          <div className="flex flex-1">
            <Link href={"/"}>
              <MenuLogo />
            </Link>
          </div>
        </div>
        {/* RIGHTSIDE MENU LINKS/BUTTONS */}
        <div className="flex items-center gap-[32px]">
          {/* MENU LINKS */}
          <ul className="hidden md:flex items-center gap-[24px] xl:gap-[32px]">
            <Link className="text-[15px] font-bold" href={"/"}>
              Home
            </Link>
            <Link className="text-[15px] font-bold" href={"/menu"}>
              Menu
            </Link>
            <Link className="text-[15px] font-bold" href={"/deals"}>
              Deals
            </Link>
            <Link className="text-[15px] font-bold" href={"/catering"}>
              Catering
            </Link>
            {/* <Link className="text-[15px] font-bold" href={"/blog"}>
              Blog
            </Link> */}
          </ul>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 md:gap-2">
            <Link
              href="https://food.google.com/chooseprovider?restaurantId=/g/11vbwq39_x&g2lbs=ANTchaMtE1BCQDHt4Ea-hFX13wS22z8-63wmWQC0bRniHeMYkHvQ03bviPFSOWEiCadnihfMkWDs9biXWnEITve6unxZp61JqqEc-8xJA0LSXKli0xKn5mlKwbvbGHrEOoCi8MToHYbNTmCSXB0lzp-9jbzfQqihAQ%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=HuiNZYG0NM2t5NoP49uTgAc&ei=HuiNZYG0NM2t5NoP49uTgAc&fo_s=OA&opi=89978449&orderType=1&sei=CRur8-DGM2SaEa4OU-PwLE1g&utm_campaign&utm_source=search"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex yellow  px-[8px] md:px-[32px] py-[6px] md:py-[10px] rounded-[10px] text-[15px] font-bold whitespace-nowrap">
                Order Online
              </button>
            </Link>
            <Link href="tel:3474265287">
              <h3 className="flex border border-[#1B1B1B]/10 px-[8px] md:px-[32px] py-[6px] md:py-[10px] rounded-[10px] text-[15px] font-bold whitespace-nowrap">
                Call Us
              </h3>
            </Link>
            {/* HAMBURGER MENU FOR MOBILE */}
            <Sheet>
              <SheetTrigger className="md:hidden">
                <div className="md:hidden flex ml-2 md:ml-0">
                  <h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </h2>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-bold text-black uppercase">Navigation</SheetTitle>
                  <SheetDescription className="text-center font-medium">
  {/* Menu Links Section */}
  <section className="border-b pb-4 mb-4 ">
    <h2 className="text-lg text-red-600 font-semibold mb-2">Hello from Lala&apos;s Pizzeria</h2>
    <ul className="divide-y divide-gray-200">
      <li className="py-2">
        <Link href={"/"} className="block w-full p-3 rounded-md bg-gray-200 hover:bg-red-600 text-black">
          Home
        </Link>
      </li>
      <li className="py-2">
        <Link href={"/menu"} className="block w-full p-3 rounded-md bg-gray-200 hover:bg-red-600 text-black">
          Menu
        </Link>
      </li>
      <li className="py-2">
        <Link href={"/deals"} className="block w-full p-3 rounded-md bg-gray-200 hover:bg-red-600 text-black">
          Deals
        </Link>
      </li>
      <li className="pt-2">
        <Link href={"/catering"} className="block w-full p-3 rounded-md bg-gray-200 hover:bg-red-600 text-black">      
          Catering
        </Link>
      </li>
    </ul>
  </section>

  {/* Social Media Links Section */}
  <section className="border-b pb-4 mb-4">
    <h2 className="text-lg font-semibold mb-2 text-red-600">Social Media</h2>
    <div className="flex justify-center gap-4">
      <Link href="#" className="block w-full p-3 rounded-md bg-gray-200 hover:bg-yellow-400 text-black">
        Instagram
      </Link>
      <Link href="#" className="block w-full p-3 rounded-md bg-gray-200 hover:bg-yellow-400 text-black">
        Facebook
      </Link>
    </div>
  </section>

  {/* Food Ordering Apps Section */}
  <section className="border-b pb-4 mb-4">
    <h2 className="text-lg font-semibold mb-2 text-red-600">Food Ordering Apps</h2>
    <div className="grid grid-cols-3 justify-center gap-4">
      <Link href="#" className="block w-full p-3 rounded-md bg-gray-200 hover:bg-yellow-400 text-black">
        Ubereats
      </Link>
      <Link href="#" className="block w-full p-3 rounded-md bg-gray-200 hover:bg-yellow-400 text-black">
        Grubhub
      </Link>
      <Link href="#" className="block w-full p-3 rounded-md bg-gray-200 hover:bg-yellow-400 text-black">
        Doordash
      </Link>
    </div>
  </section>

  {/* Order Today Section */}
  <section className="border-b pb-4 mb-4">
    <h2 className="text-lg font-semibold mb-2 text-red-600">Order Today</h2>
    <div className="flex justify-center">
      <div className="w-1/2 p-3 rounded-md cursor-pointer bg-gray-200 hover:bg-red-600 text-black mr-2">
        (347) 426 5287
      </div>
      <div className="w-1/2 p-3 rounded-md cursor-pointer bg-gray-200 hover:bg-red-600 text-black ml-2">
        Order Online
      </div>
    </div>
  </section>

  {/* Current Deals Section */}
  <section>
    <h2 className="text-lg font-semibold mb-2 text-red-600">Current Deals</h2>
    <div className="flex justify-center">
      <div className="w-full p-3 rounded-md cursor-pointer bg-gray-200 hover:bg-red-600 text-black">
        Special Offers Here
      </div>
    </div>
  </section>
</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
