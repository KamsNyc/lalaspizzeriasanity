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
} from "@/components/ui/sheet"

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
              href="https://clover.com/online-ordering/lalas-pizzeria-queens"
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
  <SheetContent >
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
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
