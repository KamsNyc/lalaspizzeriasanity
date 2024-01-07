import InstagramSection from '@/app/components/InstagramSection';
import MenuFilter from '@/app/components/MenuFilter';
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
        <div className="pt-[20px] py-10 md:py-0">
          <MenuFilter />
        </div>

        {/* INSTAGRAM ITEMS */}
        <div className=" mt-0 md:-mt-[40px]">
          <InstagramSection />
        </div>
       
      </div>
    );
  }

export default Page
