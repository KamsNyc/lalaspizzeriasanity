import MenuHero from '@/app/components/MenuHero';
import React from 'react'

interface PageProps {
    params: {
      id: string;
    };
  }
  
  function Page({ params }: PageProps) {
    const { id } = params;
    return (
      <div>
        {/* HEADER */}
        <div className="px-2 lg:px-[80px] 2xl:px-[240px]">
        <MenuHero itemId={id} />
        </div>

        {/* BANNER FREE DELIVERY + LALAS ORDERING */}
        <div className="py-[80px]">
          banner free delivery
        </div>

        {/* MENU FILTER */}
        <div className="">
          menu filter
        </div>
        {id}
       
      </div>
    );
  }

export default Page
