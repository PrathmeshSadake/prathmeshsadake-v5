import Head from "next/head";
import Link from "next/link";
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/SocialIcons";

import Photos from "@/components/Photos";
import { Container } from "@/components/Container";

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
      {...props}
    >
      <path
        d='M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z'
        className='fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'
      />
      <path
        d='M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5'
        className='stroke-zinc-400 dark:stroke-zinc-500'
      />
    </svg>
  );
}

function SocialLink({ icon: Icon, href, ...props }) {
  return (
    <Link
      className='group -m-1 p-1'
      href={href}
      {...props}
      target={"_blank"}
      rel='noopener noreferrer'
    >
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

function Resume() {
  let resume = [
    {
      company: "Ensemble Inc",
      title: "Product Engineer",
      logo: "/images/planetaria.svg",
      start: "Oct 2022",
      end: "Present",
    },
    {
      company: "TCS iON",
      title: "Project Intern",
      logo: "/images/planetaria.svg",
      start: "Jun 2022",
      end: "Jul 2022",
    },
    {
      company: "Docsup Private Limited",
      title: "MERN Stack Development Intern",
      logo: "/images/planetaria.svg",
      start: "Jan 2022",
      end: "Feb 2022",
    },
    {
      company: "Arca Innovation",
      title: "Web Software Developement Intern",
      logo: "/images/planetaria.svg",
      start: "Mar 2021",
      end: "Apr 2021",
    },
  ];

  return (
    <div className='rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40'>
      <h2 className='flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'>
        <BriefcaseIcon className='h-6 w-6 flex-none' />
        <span className='ml-3'>Work</span>
      </h2>
      <ol className='mt-6 space-y-4'>
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className='flex gap-4'>
            <div className='relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'>
              <img src={role.logo} alt='' className='h-7 w-7' />
            </div>
            <dl className='flex flex-auto flex-wrap gap-x-2'>
              <dt className='sr-only'>Company</dt>
              <dd className='w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'>
                {role.company}
              </dd>
              <dt className='sr-only'>Role</dt>
              <dd className='w-full text-xs text-zinc-500 dark:text-zinc-400'>
                {role.title}
              </dd>
              <dt className='sr-only'>Date</dt>
              <dd
                className='text-xs text-zinc-400 dark:text-zinc-500'
                aria-label={`${role.start ?? role.start} until ${
                  role.end ?? role.end
                }`}
              >
                <time dateTime={role.start ?? role.start}>
                  {role.start ?? role.start}
                </time>{" "}
                <span aria-hidden='true'>—</span>{" "}
                <time dateTime={role.end ?? role.end}>
                  {role.end ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href='#' variant='secondary' className='group mt-6 w-full'>
        Download CV
        <ArrowDownIcon className='h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50' />
      </Button> */}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Prathmesh Sadake - Software Development Engineer</title>
        <meta
          name='description'
          content='I’m Prathmesh, a Software Development Engineer based in Navi Mumbai.'
        />
      </Head>
      <Container className='mt-9'>
        <div className='max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            Software Development Engineer
          </h1>
          <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
            I’m Prathmesh, a Software Development Engineer based in Navi Mumbai.
            I am a collaborative person but sometimes I get nervous and
            self-conscious in social situations. Also I enjoy making people
            around me laugh.
          </p>
          <div className='mt-6 flex gap-6'>
            <SocialLink
              href='https://twitter.com/prathmeshsadake'
              aria-label='Follow on Twitter'
              icon={TwitterIcon}
            />
            <SocialLink
              href='https://instagram.com/prxthmesharchive'
              aria-label='Follow on Instagram'
              icon={InstagramIcon}
            />
            <SocialLink
              href='https://github.com/prathmeshsadake'
              aria-label='Follow on GitHub'
              icon={GitHubIcon}
            />
            <SocialLink
              href='https://linkedin.co/in/prathmeshsadake'
              aria-label='Follow on LinkedIn'
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  );
}
