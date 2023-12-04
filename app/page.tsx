import Image from 'next/image'
import Menu from './components/Menu'
import AnnouncementBar from './components/AnnouncementBar'
import SocialIcons from './components/SocialIcons'

export default function Home() {
  return (
   <main className="">
     <AnnouncementBar />
    {/* PADDING X */}
    <div className="px-4 lg:px-[120px] 2xl:px-[240px]">
    {/* ANNOUNCMENT BAR */}
  

    {/* <SocialIcons /> */}
    {/* <Menu /> */}
    </div>
   </main>
  )
}
