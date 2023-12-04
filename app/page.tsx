import Image from 'next/image'
import Menu from './components/Menu'
import AnnouncementBar from './components/AnnouncementBar'
import SocialIcons from './components/SocialIcons'

export default function Home() {
  return (
   <main>
    {/* ANNOUNCMENT BAR */}
    {/* <AnnouncementBar /> */}

    <SocialIcons />
    <Menu />

   </main>
  )
}
