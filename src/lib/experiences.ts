interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  experienceTitle?: React.ReactNode | string;
  experienceDescription?: string[];
  experienceOrg?: {
    name?: React.ReactNode | string;
    link?: React.ReactNode | string;
    websiteDisplayName?: React.ReactNode | string;
  };
  experienceStatus?:
    | "current"
    | {
        startAt?: React.ReactNode | string;
        endAt?: React.ReactNode | string;
      };
}
export const getExperiences = function (): ExperienceItemProps[] {
  return [
    // {
    //   experienceTitle: "Software Engineer 1",
    //   experienceDescription: [
    //     "Developed and maintained backend services using Postgres, Supabase, and Vector Database for efficient data storage and retrieval.",
    //     "Implemented scalable and secure APIs using LangChain and OpenAI for natural language processing and understanding.",
    //     "Collaborated with cross-functional teams to design, develop, and deploy web applications using Next.js and TypeScript.",
    //     "Actively participated in mentoring junior developers, facilitating their growth and development within the team.",
    //   ],
    //   experienceOrg: {
    //     name: "Build Fast with AI",
    //     link: "https://buildfastwithai.com",
    //     websiteDisplayName: "buildfastwithai.com",
    //   },
    //   experienceStatus: {
    //     startAt: "Feb 2024",
    //     endAt: "Present",
    //   },
    // },
    {
      experienceTitle: "Software Development Intern",
      experienceDescription: [
        "Designed and managed the database schema, created tables, defined relationships between data, and implemented CRUD operations for the application's data.",
        "Designed and developed a custom authentication system using Supabase, enhancing security and user management capabilities.",
      ],
      experienceOrg: {
        name: "Build Fast with AI",
        // link: "https://buildfastwithai.com",
        // websiteDisplayName: "buildfastwithai.com",
      },
      experienceStatus: {
        startAt: "Aug 2023",
        endAt: "Jan 2024",
      },
    },
    {
      experienceTitle: "Software Development Intern",
      experienceDescription: [
        "Implemented RESTful APIs for communication between the client and server.",
        "Implemented user authentication and authorization systems using Firebase, including features like user registration, login, password reset, and role-based access control.",
        "Participated in code reviews to maintain code quality and learn from more experienced developers on the team.",
      ],
      experienceOrg: {
        name: "Bharat One Care",
        // link: "https://bharatonecare.com",
        // websiteDisplayName: "bharatonecare.com",
      },
      experienceStatus: {
        startAt: "Oct 2023",
        endAt: "Dec 2023",
      },
    },
    {
      experienceTitle: "Product Engineer",
      experienceDescription: [
        "Developed and maintained responsive web applications using React.js and Next.js, providing a smooth user experience.",
        "Leveraged Git for version control, ensuring seamless collaboration within development teams.",
        "Worked in an Agile development environment, participating in sprint planning, daily stand-ups, and reviewing application requirements and interface designs.",
      ],
      experienceOrg: {
        name: "Ensemble Inc",
        // link: "https://ensembleinc.com",
        // websiteDisplayName: "ensembleinc.com",
      },
      experienceStatus: {
        startAt: "Nov 2022",
        endAt: "Oct 2023",
      },
    },
    {
      experienceTitle: "Project Intern",
      experienceDescription: [
        "Automated the detection of different sentiments from textual comments and feedback.",
        "Developed a deep learning algorithm to detect different types of emotion contained in a collection of English sentences or a large paragraph.",
      ],
      experienceOrg: {
        name: "TCS iON",
        // link: "https://www.tcsion.com",
        // websiteDisplayName: "tcsion.com",
      },
      experienceStatus: {
        startAt: "Jun 2022",
        endAt: "Jul 2022",
      },
    },
    {
      experienceTitle: "MERN Stack Developer",
      experienceDescription: [
        "Responsible for writing reusable, testable, and efficient code.",
        "Worked with ReactJS, Node.js, Express.js, and Firebase authentication.",
        "Translated UI/UX design wireframes into high-quality code that produced visual elements of the application.",
      ],
      experienceOrg: {
        name: "Docsup Private Limited",
        // link: "https://docsup.com",
        // websiteDisplayName: "docsup.com",
      },
      experienceStatus: {
        startAt: "Jan 2022",
        endAt: "Feb 2022",
      },
    },
    {
      experienceTitle: "Web Software Developer",
      experienceDescription: [
        "Worked on the UI/UX design enhancing user journey and creative elements.",
        "Assisted with writing content for the descriptive elements of the website.",
        "Improved existing UI of Web Applications.",
        "Implemented Form validation using Javascript and jQuery.",
      ],
      experienceOrg: {
        name: "Arca Innovation",
        // link: "https://arcainnovation.com",
        // websiteDisplayName: "arcainnovation.com",
      },
      experienceStatus: {
        startAt: "Mar 2021",
        endAt: "Apr 2021",
      },
    },
  ];
};
