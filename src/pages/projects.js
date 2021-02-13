import React from "react";
import ContactCard from "../components/ContactCard/ContactCard";

import Project from "../components/Project/Project";

export default function Projects() {
  const projects = [
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
      title: "Animated Introduction",
      subtitle: "Login and Signup Screen",
      description: "Animated Login and Signup screen using flutter.",
      imageUrl: process.env.PUBLIC_URL + "/images/projects/animatedLogin.png",
      technologies: ["Flutter", "Dart"],
      githubUrl: "https://www.github.com/PrathmeshSadake/animatedlogin",
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
