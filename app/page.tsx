
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'
import InstagramSection from './components/InstagramSection'
import OnlineApps from './components/OnlineApps'
import PromotionsGrid from './components/PromotionsGrid'

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

      {/* INSTAGRAM CONTAINER */}
      <section className='px-2 lg:px-[80px] 2xl:px-[120px]'>
          <InstagramSection />
      </section>

      {/* ORDER THROUGH APP SECTION */}
      <section className=''>
      <OnlineApps />
      </section>

      {/* DEALS/CATERING/SCHOOL DEALS/ALL */}
      <section className='px-2 lg:px-[80px] 2xl:px-[240px]'>
        <PromotionsGrid />
      </section>

      
   </main>
  )
}
