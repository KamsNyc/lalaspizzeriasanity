import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MENU_LINKS = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Menu",
    link: "#menu",
  },
  {
    title: "Catering",
    link: "/catering",
  },
  {
    title: "Online Apps",
    link: "https://food.google.com/chooseprovider?restaurantId=/g/11vbwq39_x&g2lbs=ANTchaNxSBRlDn2qKuTvyU4g-Ivvg7iczk30j1ISiviQ-sJllvIEhon3lgbD6Z3AywRq0Gr_WBS_t3hM4__Ncp_iBlLw1l9hzzei8ZaDxmumlvdkDO6E-WuGDui5LhR3IzJRY-M2P_GggJC9h6F-P-QMmr5Sji5BeA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=search&gei=iSWHZZPVBYeh5NoPhpeaqA4&ei=iSWHZZPVBYeh5NoPhpeaqA4&fo_s=OA&opi=89978449&orderType=1",
  },
];

const SOCIAL_LINKS = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61551944973297",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/lalaspizzeria/",
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <div className="red mt-[100px]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:mr-9">
            <Link href="/" className="flex items-center justify-center md:justify-normal">
              <Image src="/Logo.png" className="object-cover scale-150" width={100} height={60} alt="Lalas Pizzeria Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 space-x-4">
            <div>
              <h2 className="mb-6 text-base font-bold text-white  uppercase dark:text-white underline">Pages</h2>
              <ul className="text-white  dark:text-gray-400 font-medium flex-col flex gap-y-3">
                {MENU_LINKS.map((menuItem, index) => (
                  <li key={index}>
                    <Link target='_blank' href={menuItem.link} className="hover:underline  hover:text-gray-900">
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* SOCIALS */}
            <div>
              <h2 className="mb-6 text-base font-bold text-white  uppercase dark:text-white underline">Socials</h2>
              <ul className="text-white  font-medium flex-col flex gap-y-3">
              {SOCIAL_LINKS.map((socialItem, index) => (
              <Link target='_blank' key={index} href={socialItem.link} className="text-white hover:underline  hover:text-gray-900 dark:hover:text-white">
                {socialItem.title}
              </Link>
            ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white  sm:text-center dark:text-gray-400">
            © {currentYear} <Link href="https://lalaspizzeria.com/" className="hover:underline">Lalas Pizzeria</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {SOCIAL_LINKS.map((socialItem, index) => (
              <Link key={index} href={socialItem.link} className="text-white  hover:text-gray-900 dark:hover:text-white ms-5">
                {socialItem.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
