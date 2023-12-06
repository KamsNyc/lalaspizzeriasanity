import Image from 'next/image'
import React from 'react'
import SocialIcons from './SocialIcons'

function AnnouncementBar() {
  return (
   <div className="w-full h-[48px] red flex items-center justify-between text-white px-4 md:px-[32px]">
      {/* LEFT SIDE */}
        <div className='flex items-center'>
          <h1 className="text-[15px] md:text-[16px] font-semibold leading-[18px] text-center md:leading-normal md:text-left">Queens Village</h1>
        </div>
        {/* MIDDLE SIDE */}
        <div className="text-center md:flex items-center">
            <p className='sans text-[14px] whitespace-nowrap font-light md:border-r border-[FFFFFF]/25 px-4 md:px-[24px]'>Opened daily 11:00AM - 10:00PM</p>

            <p className='sans text-[14px] px-[8px] md:px-[24px] font-light'>(347) 426 5287</p>
          </div>
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <p className="hidden md:flex whitespace-nowrap">Follow us on:</p>
        <SocialIcons />
      </div>
    </div>
  )
}

export default AnnouncementBar
