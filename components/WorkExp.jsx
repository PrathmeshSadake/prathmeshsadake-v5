"use client";
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Section } from "./Section";
import { SimpleLayout } from "./SimpleLayout";
function ToolsSection({ children, title, ...props }) {
  return (
    <Section title={title} {...props}>
      <ul role='list' className='space-y-8'>
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, subtitle, href, children }) {
  return (
    <Card as='li'>
      <Card.Title as='h3' href={href}>
        {title}
      </Card.Title>
      <Card.SubTitle as='h4' href={href}>
        {subtitle}
      </Card.SubTitle>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}
const experienceData = [
  {
    company: "BharatOne Care",

    position: "Software Developer",
    type: "Internship",
    duration: "Oct 2023 - Dec 2023 · 3 mos",
    location: "Remote",
    responsibilities: [
      "Implementing RESTful APIs for communication between the client and server.",
      "Implemented user authentication and authorization systems using Firebase, including features like user registration, login, password reset, and role-based access control.",
      "Participated in code reviews to maintain code quality and learn from more experienced developers on the team.",
    ],
    skills: ["Firebase", "React.js", "CSS", "Node.js", "Express.js"],
  },
  {
    company: "Intellify",

    position: "Nextjs Developer",
    type: "Internship",
    duration: "Aug 2023 - Oct 2023 · 3 mos",
    location: "Remote",
    responsibilities: [
      "Designed and managed the database schema, created tables, defined relationships between data, and implemented CRUD operations for Intellify's application data.",
      "Implemented user authentication and authorization systems using Supabase, including features like user registration, login, password reset, and role-based access control.",
      "Worked with content management systems like Sanity and Contentful to implemented blogs feature on website.",
      "Participated in code reviews to maintain code quality and learn from more experienced developers on the team.",
    ],
    skills: ["Supabase", "Next.js", "Tailwind CSS", "React.js"],
  },
  {
    company: "Ensemble Inc",

    position: "Product Engineering Intern",
    type: "Internship",
    duration: "Oct 2022 - Oct 2023 · 1 yr",
    responsibilities: [
      "Developing and implementing highly responsive user interface components using React concepts.",
      "Responsible for developing and implementing user interface components using Next.js, Tailwind CSS, and workflows such as Redux.",
      "Reviewing application requirements and interface designs.",
    ],
    skills: [
      "Postman",
      "TypeScript",
      "Strapi.js",
      "Next.js",
      "JavaScript",
      "React.js",
    ],
  },

  {
    company: "Docsup Private Limited",
    type: "Internship",
    position: "MERN Stack Developer",
    duration: "Jan 2022 - Feb 2022 · 2 mos",
    responsibilities: [
      "Responsible for writing reusable, testable, and efficient code.",
      "Worked with ReactJS, Node.js, Express.js, and Firebase authentication.",
      "Translated UI/UX design wireframes into high-quality code that will produce visual elements of the application.",
    ],
    skills: ["ReactJS", "Node.js", "Express.js", "Firebase"],
  },
  {
    company: "Arca Innovation",

    position: "Web Software Developer",
    type: "Internship",
    duration: "Mar 2021 - Apr 2021 · 2 mos",
    location: "Mumbai, Maharashtra, India",
    responsibilities: [
      "Worked on the UI/UX design enhancing user journey and creative elements.",
      "Assisted with writing content for the descriptive elements of the website.",
      "Improved existing UI of Web Applications.",
      "Implemented Form validation using JavaScript and jQuery.",
    ],
    skills: ["UI/UX Design", "JavaScript", "jQuery"],
  },
];

export default function WorkExperience() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <SimpleLayout
      title='Discover My Professional Journey.'
      intro='From innovative internships to freelance ventures, this is a snapshot of my evolving expertise, one experience at a time.'
    >
      <div className='space-y-20'>
        {experienceData.map((exp) => (
          <ToolsSection title={exp.company}>
            {loaded && (
              <Tool
                title={`${exp.position} (${exp.type})`}
                subtitle={exp.duration}
              >
                <ul className='w-full list-inside list-disc'>
                  {exp.responsibilities.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
                <div className='w-full flex flex-wrap mt-4 space-x-4'>
                  {exp.skills.map((i) => (
                    <div className='my-2 rounded-full bg-white/90 px-3 text-sm font-medium text-teal-500 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-teal-400 dark:ring-white/10'>
                      {i}
                    </div>
                  ))}
                </div>
              </Tool>
            )}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  );
}
