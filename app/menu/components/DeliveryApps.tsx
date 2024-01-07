import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEye } from "react-icons/fa";


function DeliveryApps() {
  return (
    <div>
        <div className="">
      <h3 className="text-[18px] font-semibold uppercase">Order with our delivery partners:</h3>
      </div>
        {/* DELIVERY APPS */}
      <div className="border h-16 flex gap-8 items-center mt-2">
        {/* CLOVER */}
        <Link target='_blank' href={'https://www.clover.com/online-ordering/lalas-pizzeria-queens'} className="">
          <Image src={'/CloverLogo.svg'} alt='' height={60} width={60} />
        </Link>
        {/* UBEREATS */}
        <Link target='_blank' href={'https://www.ubereats.com/store/lalas-pizzeria/4Muo1_PFRdyfcyT7svBt3g?utm_campaign=place-action-link&utm_medium=organic'} className="">
          <Image src={'/UberEatsLogo.png'} alt='' height={100} width={100} />
        </Link>
        {/* GRUBHUB */}
        <Link target='_blank' href={'https://www.grubhub.com/restaurant/lalas-pizzeria-215-32-hillside-ave-queens/6946816'} className="">
          <Image src={'/GrubhubLogo.png'} alt='' height={95} width={95} />
        </Link>
        {/* SLICE */}
        <Link target='_blank' href={'https://slicelife.com/restaurants/ny/queens/11427/lala-s-pizza/menu'} className="">
          <Image src={'/SliceLogo.png'} alt='' height={60} width={60} />
        </Link>
        {/* DOORDASH */}
        <Link target='_blank' href={"https://www.doordash.com/store/lala's-pizzeria-queens-26042775"} className="">
          <Image src={'/DoordashLogo.png'} alt='' height={110} width={110} />
        </Link>
        {/* VIEW ALL*/}
        <Link target='_blank' href={"https://food.google.com/chooseprovider?restaurantId=/g/11vbwq39_x&g2lbs=ANTchaMsZ95LKkBEcMWwnUsk7CjUXiUlQxKwOlsRNlp46QgJra2RLXbLQs00esWOaiHvr_FppfT_nwdEktYw6kIQWS-Qdli-sEUs11IoSoM5wyOBLgfT7298EDMEwUeOluw9iStzTqW2xx58yOpbFNZAEPK2SmHUhQ%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=mvGaZbmYOpqx5NoP6JCxuA4&ei=mvGaZbmYOpqx5NoP6JCxuA4&opi=89978449&sei=CVuKSfLeyLW9EWHpXBZ_R2tI&utm_campaign&utm_source=search&addressId&orderType=1&partnerId=07382683665824229530&fulfillmentTime&menuSearchQuery&cartId&fo_s=OA&dineInLocationId"} className="">
          <div className="yellow w-[60px] h-[60px] rounded-full hover:bg-[red]"><span className='flex items-center justify-center h-full text-center leading-[1rem] font-bold '>View All
</span></div>
        </Link>
      </div>
    </div>
  )
}

export default DeliveryApps
