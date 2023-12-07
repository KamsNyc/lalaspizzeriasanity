import Image from 'next/image'
import MenuItemCard from './components/MenuItemCard'
import AnnouncementBar from './components/AnnouncementBar'
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'

export default function Home() {
  return (
   <main className="">
    {/* ACCOUNCEMENT BAR/NAVIGATION BAR IN LAYOUT PAGE */}
      {/* HERO CONTAINER*/}
      <section className='px-2 lg:px-[120px] 2xl:px-[240px]'>
        <HeroSection />
      </section>

      {/* MENU CONTAINER  */}
      <section className='px-2 lg:px-[120px] 2xl:px-[240px]'>
      <Menu />
      
        
      </section>

   </main>
  )
}
