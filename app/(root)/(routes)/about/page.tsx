import React, { JSX, SVGProps } from "react";
import Link from "next/link";
import clsx from "clsx";

import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";

import { Container } from "@/components/Container";
const portraitImage = "/images/portrait.jpg";

interface SocialLinkProps {
  className?: string;
  href: string;
  children: any;
  icon: any;
}

const SocialLink: React.FC<SocialLinkProps> = ({
  className,
  href,
  children,
  icon: Icon,
}) => {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        target={"_blank"}
        rel='noopener noreferrer'
        className='group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500' />
        <span className='ml-4'>{children}</span>
      </Link>
    </li>
  );
};

function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' {...props}>
      <path
        fillRule='evenodd'
        d='M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z'
      />
    </svg>
  );
}

export default function About() {
  return (
    <Container className='mt-16 sm:mt-32'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <img
              src={portraitImage}
              alt=''
              sizes='(min-width: 1024px) 32rem, 20rem'
              className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            I’m Prathmesh Sadake.
          </h1>
          <div className='mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-300'>
            <p>
              Power-packed with the strengths of data structures and algorithms.
              I can perform modifications in various software, according to
              client requirements, by applying the principles of computer
              science, with the goal of optimising an application for better
              performance delivery.
            </p>
            <p>
              I can create client-facing apps and websites with cutting-edge
              back-end support. I have worked with modern tools including
              Next.js, React.js, MongoDB, Node, Express.js, Firebase and
              Postman. I usually use the MERN stack, but I'm flexible enough to
              utilize whatever tools are required.
            </p>
            <p>
              I am currently working at{" "}
              <span className='font-medium text-teal-400'>Ensemble Inc</span> as
              a{" "}
              <span className='font-medium text-teal-400'>
                Product Engineer
              </span>{" "}
              where my responsibilities includes:
            </p>
            <ul className='list-inside list-disc'>
              <li>Researching, designing, and managing software programs</li>
              <li>Testing and evaluating new programs</li>
              <li>
                Modifying software to fix errors, and improve its performance
              </li>
              <li>Deploying software tools, processes, and metrics</li>
              <li>
                Directing software programming and documentation development.
              </li>
              <li>
                Preparing reports on programming project specifications,
                activities, or status.
              </li>
              <li>
                Consulting with engineering staff to evaluate software-hardware
                interfaces and develop specifications and performance
                requirements.
              </li>
            </ul>
            <p>
              I am a collaborative person but sometimes I get nervous and
              self-conscious in social situations. Also I enjoy making people
              around me laugh.
            </p>
          </div>
        </div>
        <div className='lg:pl-20'>
          <ul role='list'>
            <SocialLink
              href='https://twitter.com/prathmeshsadake'
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href='https://instagram.com/prxthmesharchive'
              icon={InstagramIcon}
              className='mt-4'
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href='https://github.com/PrathmeshSadake'
              icon={GitHubIcon}
              className='mt-4'
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href='https://www.linkedin.com/in/prathmeshsadake/'
              icon={LinkedInIcon}
              className='mt-4'
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href='mailto:prathmeshsadake@gmail.com'
              icon={MailIcon}
              className='mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40'
            >
              prathmeshsadake@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
