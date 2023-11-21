import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  kubernetes,
  jenkins,
  docker,
  aws,
  grafana,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mongodb,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: kubernetes,
    name: "Kubernetes",
    type: "DevOps",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },

  {
    imageUrl: grafana,
    name: "Grafana",
    type: "DevOps",
  },
  {
    imageUrl: jenkins,
    name: "Jenkins",
    type: "DevOps",
  },
  {
    imageUrl: aws,
    name: "AWS",
    type: "DevOps",
  },
];

export const experiences = [
  {
    title: "Web Software Developer",
    company_name: "Arca Innovation",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "Mar 2021 - Apr 2021 ",
    points: [
      "Worked on the UI/UX design enhancing user journey and creative elements. ",
      "Assisted with writing content for the descriptive elements of the website.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Docsup Private Limited",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Developed and maintained web applications using React.js and other related technologies.",
      "Translated UI/UX design wireframes into high-quality code that will produce visual elements of the application.",
      "Worked with ReactJS, Node.js, Express.js, and Firebase authentication.",
    ],
  },
  {
    title: "Product Engineering",
    company_name: "Ensemble Inc",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Nov 2022 - Oct 2023",
    points: [
      "Responsible for developing and implementing user interface components using Next.js, Tailwind CSS, Postgres SQL and Prisma.",
      "Modifying software to fix errors, and improve its performance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Development Intern",
    company_name: "Intellify",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Aug 2023 - Present",
    points: [
      "Designed and managed the database schema, created tables, defined relationships between data, and implemented CRUD (Create, Read, Update, Delete) operations for Intellify's application data.",
      "Implemented user authentication and authorization systems using Supabase. This includes features like user registration, login, password reset, and role-based access control.",
      "Worked with technology stack like Next.js, TypeScript, Prisma, Supabase, Sanity",
      "Participated in code reviews to maintain code quality and learn from more experienced developers on the team.",
    ],
  },
  {
    title: "Full Stack Development Intern",
    company_name: "Bharat One Care",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Oct 2023 - Present",
    points: [
      "Designed and managed the database schema, created tables, defined relationships between data, and implemented CRUD (Create, Read, Update, Delete) operations using Firebase and Express.js",
      "Implemented user authentication and authorization systems using Firebase. This includes features like user registration, login, password reset, and role-based access control.",
      "Worked with technology stack like React.js and Firebase.",
      "Participated in code reviews to maintain code quality and learn from more experienced developers on the team.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/PrathmeshSadake",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/prathmeshsadake",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
