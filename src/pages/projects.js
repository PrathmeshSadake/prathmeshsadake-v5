import React from "react";
import ContactCard from "../components/ContactCard/ContactCard";

import Project from "../components/Project/Project";

export default function Projects() {
  const projects = [
    {
      title: "Studio Seven",
      subtitle: "Clothing Store",
      description:
        "Clothing store website made with ReactJs, Redux and Sass. Has features fetching data from google firestore database and user signin and signup using firebase auth.",
      imageUrl: process.env.PUBLIC_URL + "/images/projects/studioseven.png",
      technologies: ["React", "react-redux", "Sass", "Firebase", "react-router-dom"],
      githubUrl:
        "https://www.github.com/PrathmeshSadake/StudioSeven",
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal Website",
      description:
        "Personal portfolio website made with React.js to showcase about us, projects to employers and other members to let them know why you will fit into their organization. There is also a contact form which is made using email-js api. ",
      imageUrl: process.env.PUBLIC_URL + "/images/projects/portfolio.png",
      technologies: ["React", "react-bootstrap", "SCSS", "AOS-Animations"],
      githubUrl:
        "https://www.github.com/PrathmeshSadake/prathmeshsadake.github.io",
    },
    {
      title: "Unsplashy",
      subtitle: "Free stock images React Application",
      description:
        "An image gallery which fetches images from unsplash api. It has some awesome features like searching for images and infinite scrolling in which images keeps on loading as user scrolls",
      imageUrl: process.env.PUBLIC_URL + "/images/projects/unsplashy.png",
      technologies: ["React", "react-bootstrap", "css", "unsplash-api"],
      githubUrl: "https://www.github.com/PrathmeshSadake/unsplashy",
    },
    {
      title: "Newscast",
      subtitle: "Flutter News Application",
      description:
        "A News app made with flutter SDK which fetches news from news API and NewYorkTimes api. It has features like category wise news, searching for news articles, article view and opening news in browser.",
      imageUrl: process.env.PUBLIC_URL + "/images/projects/newscast.png",
      technologies: [
        "Flutter",
        "Dart",
        "New York Times Api",
        "newsapi.org Api",
      ],
      githubUrl: "https://www.github.com/PrathmeshSadake/newscast",
    },
    {
      title: "DevJobs",
      subtitle: "Jobs searching Flutter application",
      description:
        "Jobs searching Flutter application with features like category wise jobs, searching for jobs and there's also a section where user can read business news articles. Each job and news article has a url linked with it so user can open it it there favourite browser. Jobs are listed using Github jobs Api and for the news I have used NewsApi.org.",
      imageUrl: process.env.PUBLIC_URL + "/images/projects/devjobs.png",
      technologies: ["Flutter", "Dart", "GitHub jobs Api"],
      githubUrl: "https://www.github.com/PrathmeshSadake/devjobs",
    },
    
  ];
  return (
    <div>
      {projects.map((project) => (
        <Project project={project} />
      ))}{" "}
      <ContactCard description="Interested in doing a project together? Please feel free to drop me a line." />
    </div>
  );
}
