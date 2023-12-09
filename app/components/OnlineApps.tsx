import Image from 'next/image'
import React from 'react'

function OnlineApps() {
  return (
    <div className=' inline-block text-center md:text-left md:flex items-center justify-between h-full gap-4 md:gap-[64px] xl:gap-[48px] border py-4 mt-[24px] md:mt-[80px]'>
        {/* LEFT SIDE TEXT */}
        <div className="w-full">
            <h1 className='text-[54px] font-semibold leading-[50px]'>You can order<br></br>through apps</h1>
            <p className=' mt-[24px] text-[17px] leading-[24px] sans w-full px-8 md:px-0 md:max-w-[346px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
            
        </div>
        {/* RIGHT SIDE IMAGES */}
        <div className="w-full">
            <Image
            src={'/DeliveryApps.png'}
            alt="Lala's Pizzeria Online Ordering Apps"
            width={1000}
            height={600}
            className='w-full h-full md:max-w-[828px] md:max-h-[220px]'
            />
        </div>
      
    </div>
  )
}

export default OnlineApps
