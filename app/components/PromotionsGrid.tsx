import Image from 'next/image'
import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Promos = [
    {
        text: "Deals", 
        url:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: (
          <Alert className='mb-6 md:mb-12'>

            <AlertTitle>AVALIABLE: SUNDAY - TUESDAY | 12PM - 4PM</AlertTitle>
            <AlertDescription className=''>
              <span><strong>BUY ANY 2 SLICES AND GET A SODA FOR FREE</strong></span>
            </AlertDescription>
          </Alert>
        ),
      },    
    {
        text: "Catering", url:"https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Current Deals"        
    },
    {
        text: "School Deals", url:"https://images.unsplash.com/photo-1544880047-1966fc792a37?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Current Deals"        
    },
    {
        text: "All", url:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Current Deals"      
    },


]

function PromotionsGrid() {
  return (
    <div>
        {/* HEADING */}
        <h1 className="text-[48px] text-center md:text-left md:text-[64px] font-bold leading-[52px] md:leading-[72px] overflow-hidden ">
            Promotions
          </h1>

          {/* PROMOTIONS SLIDER */}
          <div className="flex items-center justify-evenly  overflow-hidden my-[32px] md:my-[48px] cursor-pointer duration-500 ease-in-out">
          {
            Promos && Promos.map((item,index) => (
                <div key={index} className="flex items-center max-h-[200px] overflow-hidden rounded-md ">
                  {/* SIDEBAR TRIGGER */}
                  <Sheet>
  <SheetTrigger> {/* DEALS */}
                <div className="relative hover:scale-125 duration-500 ease-in-out border border-red-500">
                    {/* IMAGE */}
                    <Image 
                    src={item.url}
                    alt='test'
                    width={500}
                    height={500}
                    className='opacity-95 overflow-hidden w-[100px] h-[100px] md:w-[300px] md:h-[300px]'
                    />

                     {/* HEADING */}
                   <div className="absolute top-1/2 w-full text-center translate-y-[-50%] yellow rounded-md ">
                    <h1 className='font-bold text-red-500 text-[15px] md:text-[24px] px-1 whitespace-nowrap'>{item.text}</h1>
                    </div>
                </div></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='border-b text-[24px]'> {item.text} at Lala's Pizzeria</SheetTitle>
      <SheetDescription>
       11
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
               
          </div>
            ))
          }
      </div>
    </div>
  )
}

export default PromotionsGrid
