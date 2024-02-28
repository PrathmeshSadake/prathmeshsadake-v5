"use client";
import React from "react";
import ContainerScroll from "@/components/ui/container-scroll-animation";

const Hero = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className='text-4xl font-semibold text-black dark:text-white'>
              Unleash the power of <br />
              <span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
                Scroll Animations
              </span>
            </h1>
          </>
        }
      />
    </div>
  );
};

export const users = [
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
];

export default Hero;
