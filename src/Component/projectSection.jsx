import React from "react";
import ProjectCard from "./projectCard";
import img1 from "../Images/mockup-1.png";
import img2 from "../Images/mockup-2.png";
import img3 from "../Images/mockup-3.png";
import img4 from "../Images/mockup-4.png";
import img5 from "../Images/mockup-5.png";
import img6 from "../Images/mockup-6.png";

const projects = [
  {
    image: img1,
    techStack: ["React", "TailwindCSS", "Node.js", "+7"],
    title: "TUTOR - LMS Platform",
    description:
      "TUTOR is a powerful and feature-rich Learning Management System (LMS) thoughtfully engineered...",
    link: "#",
  },
  {
    image: img2,
    techStack: ["ReactJS", "TypeScript", "TailwindCSS", "+8"],
    title: "AI Auto Parts – Auto Parts Management SaaS",
    description:
      "Auto Parts is a comprehensive, feature-rich SaaS platform built on the MERN stack...",
    link: "#",
  },
  {
    image: img3,
    techStack: ["NextJS", "Tailwind", "Redux", "+7"],
    title: "School Website and LMS",
    description:
      "School Website and LMS is a comprehensive, all-in-one student-teacher management system...",
    link: "#",
  },
  {
    image: img4,
    techStack: ["React", "Node.js", "MongoDB", "+3"],
    title: "E-Commerce Platform",
    description:
      "Brew Cart is a modern online platform created to empower local independent microbreweries...",
    link: "#",
  },
  {
    image: img5,
    techStack: ["NextJS", "Tailwind", "Redux", "+7"],
    title: "Task Management App",
    description:
      "Welcome to Quantum Sync — a company where technology, innovation, and opportunity come together...",
    link: "#",
  },
  {
    image: img6,
    techStack: ["NextJS", "Tailwind", "Redux", "+6"],
    title: "Paste View",
    description:
      "Pasteview is a modern and efficient pastebin platform designed to make sharing text or code snippets simple...",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4">
      <div
        className="grid gap-8 w-full max-w-[1400px]
                  grid-cols-1 
                  sm:grid-cols-1 
                  md:grid-cols-2 
                  lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            techStack={project.techStack}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
