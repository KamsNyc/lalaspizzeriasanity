import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

function AllPromotions() {
  return (
    <div className='mt-[80px]'>
    {/* HEADING */}
    <h1 className="text-[48px] text-center md:text-[64px] font-bold leading-[52px] md:leading-[72px] overflow-hidden ">
        Promotions
      </h1>
    {/* PROIMOTION CONTAINER */}
    <div className="md:flex justify-evenly py-4">
      {/* DEALS */}
      <div className="mt-6 ">
        {/* HEADING */}
      <h1 className='uppercase text-center md:text-left text-2xl md:text-3xl text-[#FE0000] tracking-wide font-bold pb-4'>Our Current Deals</h1>
      {/* DEALS */}
      <div className="space-y-6 ">
      <Alert>
  <AlertTitle>DEC-25 - CHRISTMAS HOLIDAY DAY SPECIAL </AlertTitle>
  <AlertDescription className='flex-col flex'>
    <span><strong>25% OFF, MINIMUM $15</strong></span>
    <span><strong>FREE LOCAL DELIVERY QUEENS VILLAGE</strong></span>
  </AlertDescription >
</Alert>

<Alert>
  <AlertTitle>DEC-25 - CHRISTMAS HOLIDAY DAY SPECIAL </AlertTitle>
  <AlertDescription className='flex-col flex'>
    <span><strong>25% OFF, MINIMUM $15</strong></span>
    <span><strong>FREE LOCAL DELIVERY QUEENS VILLAGE</strong></span>
  </AlertDescription >
</Alert>
</div>
  </div>
   {/* CATERING */}
   <div className="mt-6">
        {/* HEADING */}
      <h1 className='uppercase text-center md:text-left text-2xl md:text-3xl text-[#FE0000] tracking-wide font-bold pb-4'>Our School Deals</h1>
      {/* DEALS */}
      <div className="space-y-6 ">
      <Alert>
  <AlertTitle>DEC-25 - CHRISTMAS HOLIDAY DAY SPECIAL </AlertTitle>
  <AlertDescription className='flex-col flex'>
    <span><strong>25% OFF, MINIMUM $15</strong></span>
    <span><strong>FREE LOCAL DELIVERY QUEENS VILLAGE</strong></span>
  </AlertDescription >
</Alert>

<Alert>
  <AlertTitle>DEC-25 - CHRISTMAS HOLIDAY DAY SPECIAL </AlertTitle>
  <AlertDescription className='flex-col flex'>
    <span><strong>25% OFF, MINIMUM $15</strong></span>
    <span><strong>FREE LOCAL DELIVERY QUEENS VILLAGE</strong></span>
  </AlertDescription >
</Alert>
</div>
  </div>
  </div>

</div>
  )
}

export default AllPromotions
