import Image from 'next/image'
import React from 'react'
import SocialIcons from './SocialIcons'

function AnnouncementBar() {
  return (
   <div className="w-full h-[48px] red flex items-center justify-between text-white px-4 md:px-[32px] whitespace-nowrap">
      {/* LEFT SIDE */}
        <div className='flex items-center'>
          <h1 className="text-[16px] font-semibold">Queens Village</h1>
          <div className="text-center md:flex items-center">
            <p className='sans text-[15px] font-light md:border-r border-[FFFFFF]/25 px-[32px]'>Opened daily 11:00AM - 10:00PM</p>

            <p className='sans text-[16px] px-[8px] md:px-[32px] font-light'>(347) 426 5287</p>
          </div>
        </div>
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <p className="hidden md:block">Follow us on:</p>
        <SocialIcons />
      </div>
    </div>
  )
}

export default AnnouncementBar
