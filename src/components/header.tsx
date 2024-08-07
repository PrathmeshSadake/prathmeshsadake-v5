"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import Section from "./section";

const Header: React.FunctionComponent = () => {
  return (
    <Section className='flex flex-row items-center justify-start gap-4 mt-12 max-sm:items-start max-md:items-start'>
      <motion.div
        className='profile-icon-wrapper relative w-fit h-fit'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Image
          src={"/assets/images/profile.jpeg"}
          alt='prathmesh-profile'
          width={"80"}
          height={"80"}
          className='rounded-full transition-all hover:grayscale'
          priority
        />
        <motion.div
          className='box icon-content-wrapper animation-delay absolute px-2 py-1 bg-white shadow rounded-full text-sm left-14 bottom-0 cursor-default select-none max-sm:left-8 max-sm:text-xs max-sm:px-1 max-sm:py-0.5'
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {"✨"}
        </motion.div>
      </motion.div>
      <div>
        <h1 className='welcome-text leading-snug font-semibold text-2xl text-zinc-900'>
          {"👋 Hi, I am Prathmesh"}
        </h1>
        <div className='leading-snug font-normal text-base text-zinc-500 mt-2'>
          <p>{"A full-stack software engineer, from India."}</p>
          <p>{new Date().getFullYear() - 2001 + ", he/him"}</p>
        </div>
      </div>
    </Section>
  );
};

export default Header;
