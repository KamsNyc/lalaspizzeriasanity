"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { getKey } from "../../sanity/lib/key-utils";

interface InstagramInterface {
  id: string;
  media_url: string;
  caption: string;
  media_type: string;
  timestamp: number;
  permalink: string;
}

function InstagramSection() {
  const [instagramData, setInstagramData] = useState<InstagramInterface[]>([]);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [instagramKey, setInstagramKey] = useState<string | null>(null);

  function formatTimestamp(timestamp: number) {
    const date = new Date(timestamp);
    const formattedDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  }

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const key = await getKey();
        setInstagramKey(key);

        if (key) {
          const response = await fetch(
            `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${key}`
          );

          const data = await response.json();
          setInstagramData(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchInstagramData();
  }, []);

  return (
    <div className="w-full h-full mt-[24px] md:mt-[80px]">
      {/* CONTAINER */}
      <div className="">
        {/* HEADING container*/}
        <div className="flex items-center justify-evenly md:justify-between">
          {/* TAG LALASPIZZERIA */}
          <h1 className="text-[25px] md:text-[64px] font-bold leading-[52px] md:leading-[72px]">
            Tag
            <Link
              target="_blank"
              href={"https://www.instagram.com/lalaspizzeria/"}
            >
              <span className="text-red-500 hover:underline">
                @Lalaspizzeria
              </span>
            </Link>
          </h1>
          {/* BUTTON */}
          <div className="border-[3px] border-black px-3 md:px-6 py-1 md:py-2 rounded-full hover:bg-red-500 hover:text-white">
            <Link
              target="_blank"
              href={"https://www.instagram.com/lalaspizzeria/"}
              className="flex items-center gap-2 "
            >
              <button className="text-[24px] font-semibold ">Insta</button>
              <FaExternalLinkAlt size={28} />
            </Link>
          </div>
        </div>
        {/* ------------ INSTAGRAM FETCHING SECTION ---------- */}
        {/* INSTAGRAM SLIDER PICTURES */}
        <div className="w-full md:flex items-center justify-evenly p-4 md:p-2 space-y-12 md:space-y-0 mt-[32px]">
          {instagramData.slice(0, 4).map((item) => (
            <div key={item.id} className="">
              <div className=" h-[250px] md:h-[550px] relative">
                <Image
                  src={item.media_url}
                  alt={item.caption}
                  width={500}
                  height={590}
                  className="h-full w-full md:max-w-[300px] 2xl:max-w-[320px] md:max-h-[590px] overflow-hidden object-cover rounded-sm"
                  onMouseEnter={() => setHoveredImage(item.id)}
                  onMouseLeave={() => setHoveredImage(null)}
                />
                {/* ABSOLUTE TIMESTAMP */}
                <span className="text-[14px] text-white absolute top-3 left-0 font-medium w-full">
                  <div className="flex items-center justify-between px-2">
                    <p className="font-bold">
                      POSTED {formatTimestamp(item.timestamp)}
                    </p>
                    <Link
                      target="_blank"
                      href={item.permalink}
                      className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:scale-115 duration-150 ease-in-out z-40"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  </div>
                </span>
                {/* ABSOLUTE CAPTION BOX */}
                <div
                  className={`absolute z-2 top-0 left-0 w-full h-full md:h-full bg-black/70 text-white p-4 text-center rounded-b-[4px] cursor-pointer ${
                    hoveredImage === item.id ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300 ease-in-out hover:opacity-100`}
                >
                  <p className="mt-10 md:mt-40 sans leading-[20px] overflow-hidden flex items-center justify-center">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstagramSection;
