"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function InstagramSection() {
  const [instagramData, setInstagramData] = useState([]);

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const formattedDate = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    return formattedDate;
  }

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=IGQWRNS1BSTy1UT05JZA25nNzYxOTNmRXpPWlVaWDBsMEVXYWRFRFQ1NjJ5RDIyQ25HbG8xRHRXSDRNOGEzWHNRVjR6WXJnQVNVeHNZAVmxXekk0NXFoOEtXRmwzY2RnazROUWtveG84RGxsTmQ4bG5VbVlXdHY1SEEZD`
        );
        const data = await response.json();
        setInstagramData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchInstagramData();
  }, []);

  return (
    <div className="w-full h-full mt-[24px] md:mt-[100px]">
      {/* CONTAINER */}
      <div className="">
        {/* HEADING container*/}
        <div className="flex items-center justify-evenly md:justify-between mb-[64px]">
          {/* TAG LALASPIZZERIA */}
          <h1 className="text-[25px] md:text-[64px] font-bold leading-[52px] md:leading-[72px]">
            Tag{" "}
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
        <div className="w-full border md:flex items-center justify-evenly p-4 md:p-2 space-y-12 md:space-y-0">
          {instagramData.slice(0, 4).map((item) => (
            <div key={item.id} className="">
              <div className=" h-[250px] md:h-[550px] relative">
                <Image
                  src={item.media_url}
                  alt={item.caption}
                  width={500}
                  height={590}
                  className="h-full w-full md:max-w-[320px] md:max-h-[590px] overflow-hidden object-cover rounded-xl"
                />

                {/* ABSOULUTE TIMESTAMP */}
                <span className="text-[14px] text-white absolute top-3 left-0 font-medium w-full">
                  <div className="flex items-center justify-between px-2">
                    <p className="font-bold">POSTED {formatTimestamp(item.timestamp)}</p>
                    <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:cursor-pointer hover:scale-115 duration-150 ease-in-out"><FaExternalLinkAlt /></div>
                  </div>
                  
                </span>

                {/* ABSOULUTE CAPTION BOX */}
                <div className="absolute z-2 bottom-0 left-0 w-full h-[35%] md:h-[20%] bg-black/30 text-white p-4 text-center">
                  <p className="sans leading-[20px]">{item.caption}</p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
        {/* <div>
          {instagramData.map((item) => (
            <div key={item.id}>
              <img src={item.media_url} alt={item.caption} />
              <p>{item.caption}</p>
              <a href={item.permalink} target="_blank" rel="noopener noreferrer">
                View on Instagram
              </a>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default InstagramSection;
