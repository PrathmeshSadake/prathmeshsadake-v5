import Projects from "@/components/projects";
import Spotlight from "@/components/ui/spot-light";
import {
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className='max-w-6xl mx-auto px-4 md:px-6 lg:px-8'>
      <div className='min-h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] overflow-hidden'>
        <Spotlight
          className='-top-0 left-0 md:left-60 md:-top-20'
          fill='white'
        />
        <div className='relative z-10  w-full pt-10 md:pt-0'>
          <h1 className='text-2xl md:text-6xl font-semibold md:font-bold md:text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            I’m Prathmesh Sadake, <br /> a Software Engineer <br />{" "}
            <span className='text-lg md:text-4xl'>@ Build Fast with AI.</span>
          </h1>
          <p className='md:hidden mt-8 font-medium text-sm text-neutral-300 max-w-xl md:text-center mx-auto'>
            Power-packed with the strengths of data structures and algorithms. I
            can perform modifications in various software, according to client
            requirements, by applying the principles of computer science, with
            the goal of optimising an application for better performance
            delivery.
          </p>
        </div>
      </div>

      <div className='py-6 space-y-12'>
        <div>
          <h3 className='text-xl md:text-2xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            Things I&apos;ve made trying to put my dent in the universe.
          </h3>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-xl text-center mx-auto'>
            I&apos;ve worked on tons of little projects over the years but these
            are the ones that I&apos;m most proud of.
          </p>
        </div>
        <Projects />

        <div className='flex space-x-6 mx-auto max-w-fit'>
          <Linkedin className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
          <IconBrandGithub className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
          <IconBrandInstagram className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
          <Mail className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
          <IconBrandTwitter className='w-6 h-6 text-neutral-500 hover:text-neutral-200 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Home;
