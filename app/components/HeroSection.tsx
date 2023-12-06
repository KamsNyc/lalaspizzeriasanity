import Link from "next/link";
import React from "react";
import Image from "next/image"
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <div className="border">
      {/* LEFT TEXT/RIGHT IMAGE */}
      <div className="md:flex item-center md:max-h-[480px] gap-[8px] md:gap-[4px]">
        {/* LEFT SIDE TEXT */}
        <div className="h-1/2 md:h-full md:w-1/2">
          <div className="flex h-full flex-col justify-center">
          {/* HEADING */}
          <h1 className=" mt-[24px] md:mt-[30px] text-[56px] md:text-[72px] font-bold leading-[60px] md:leading-[80px]">
            Pizza round<br></br>behind your<br></br>corner
          </h1>
          {/* BUTTONS */}
          <div className="mt-[24px] md:mt-[48px] flex items-center gap-[24px] md:gap-[32px]">
            <Link
              href="https://clover.com/online-ordering/lalas-pizzeria-queens"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-bold text-white red px-[20px] md:px-[50px] py-[16px] md:py-[12px] rounded-[10px]"
            >
              View Menu
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
          <div className="mt-[24px] ml-[16px]">
            <p>moe promotions on</p>
          </div>

          </div>
        </div>
        {/* RIGHT SIDE TEXT */}
        <div className="h-1/2 md:h-full md:w-1/2 my-[32px] md:my-0">
          <div className="w-full h-full flex items-center justify-center">
          <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
