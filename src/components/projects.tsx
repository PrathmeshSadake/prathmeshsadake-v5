import React from "react";

import { IconBrandGithub } from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { Link } from "lucide-react";

const Projects = () => {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={
            <div className='flex items-center space-x-4'>
              <IconBrandGithub className='h-5 w-5 text-neutral-500 cursor-pointer' />
              <Link className='h-5 w-5 text-neutral-500 cursor-pointer' />
            </div>
          }
          className={i === 1 || i === 2 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};
const Skeleton = () => (
  <div className='flex w-full h-32 rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);
const items = [
  {
    title: "Quill",
    description:
      "Complete AI SaaS Platform with Next.js 14, React, Prisma, tRPC, Tailwind CSS enabling users to upload a PDF document and chat with AI assistant about the document.",
    header: <Skeleton />,
  },
  {
    title: "Evently",
    description:
      "An event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, Mongoose, Clerk, and Stripe.",
    header: <Skeleton />,
  },
  {
    title: "Scuttle",
    description:
      "A Full Stack Spotify Clone with Next 13.4, React, Tailwind, Supabase, PostgreSQL, and Stripe in 2023! In this comprehensive tutorial, you'll learn how to develop a complete music streaming application from scratch, replicating the popular features and functionalities of Spotify.",
    header: <Skeleton />,
  },
  {
    title: "Cypress",
    description:
      "An end-to-end fullstack notion clone, all with proper notion-style editor, cover images, nested documents, publishing documents to public, real-time database and more.",
    header: <Skeleton />,
  },
];

export default Projects;
