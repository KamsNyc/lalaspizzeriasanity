import Link from "next/link";
import React from "react";
import Image from "next/image"
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <div className="md:pt-[50px] md:pb-[32px]">
      {/* LEFT TEXT/RIGHT IMAGE */}
      <div className="md:flex item-center md:max-h-[480px] gap-[8px] md:gap-[4px] md:pb-[80px]">
        {/* LEFT SIDE TEXT */}
        <div className="h-1/2 md:h-full md:w-1/2">
          <div className="flex h-full flex-col justify-center">
          {/* HEADING */}
          <h1 className="text-center md:text-left mt-[24px] md:mt-[30px] text-[47px] md:text-[60px] 2xl:text-[68px] font-bold leading-[52px] md:leading-[72px]">
          Best Pizza in <br/>Queens Village, NY <div className="text-red-500 underline">Lalas Pizzeria</div>
          </h1>
          <p className="mt-3 text-center md:text-left">Enjoy mouth-watering pizza with free delivery in Queens Village, NY.</p>
          {/* BUTTONS */}
          <div className="mt-[24px] md:mt-[48px] flex items-center justify-center md:justify-normal gap-[24px] md:gap-[32px]">
            <Link
              href="/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-bold text-white red px-[20px] md:px-[50px] py-[16px] md:py-[12px] rounded-[10px]"
            >
              In Store Menu
            </Link>

            <Link
              href="https://www.google.com/maps/place/Lala's+Pizzeria/@40.7271297,-73.7513489,17z/data=!3m1!4b1!4m6!3m5!1s0x89c261fe9f6cc74f:0xa6bfb34a206c0c17!8m2!3d40.7271297!4d-73.748774!16s%2Fg%2F11vbwq39_x?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-bold border hover:bg-gray-50 border-[#1B1B1B]/20 px-[20px] md:px-[50px] py-[16px] md:py-[12px] rounded-[10px]"
            >
              Open in Maps
            </Link>
          </div>  
          {/* QUICK REVIEW PROOF CONTAINER */}
          <div className="mt-[24px] md:ml-[16px] py-1">
            <p>find our deals here <Link href={'/deals'} className="text-blue-500 hover:underline hover:cursor-pointer italic">click me</Link></p>
            <p>find our catering menu here <Link href={'/catering'} className="text-blue-500 hover:underline hover:cursor-pointer italic">click me</Link></p>
          </div>

          </div>
        </div>
        {/* RIGHT SIDE TEXT */}
        <div className="h-1/2 md:h-full md:w-1/2">
          <div className="w-full h-full py-[32px] md:h-[480px] flex items-center justify-center">
          <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
