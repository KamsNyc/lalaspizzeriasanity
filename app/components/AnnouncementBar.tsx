import Image from 'next/image'
import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaBusinessTime } from "react-icons/fa";


function AnnouncementBar() {
  return (
    <div className='flex bg-[#474747] px-[192px] w-full h-[45px] justify-between items-center'>
      {/* COL 1 */}
      <div className="flex items-center text-white space-x-7">
        {/* PHONENUMBER */}
        <div className="flex items-center space-x-[4px]">
            {/* ICON */}
            <FiPhoneCall size={13} />
                 {/* TEXT */}
        <p className=" font-base">(347) 426 5287</p>  
        </div>
        {/* Open Hours */}
        <div className="flex items-center space-x-[4px]">
            {/* ICON */}
            <FaBusinessTime size={13} />
                 {/* TEXT */}
        <p className=" font-base">Open 7 Days, 11AM - 10PM</p>  
        </div>
      </div>
    </div>
  )
}

export default AnnouncementBar
