"use client";

import HeroPage from "./hero/page";
import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};



export default function HomePage() {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A minimal personal portfolio built with Next.js & Tailwind.",
      img: "/projects/project1.png",
      github: "#",
      live: "#",
    },
    {
      title: "Task Manager",
      desc: "A modern task app built using React and Firebase.",
      img: "/projects/project2.png",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 scroll-smooth">
      {/*  Hero */}
      <HeroPage/>
      {/* 👤 About */}
        <AboutPage/>
      {/*  Projects */}
        <ProjectsPage/>
      {/*  Contact */}
        <ContactPage/>
    </div>
  );
}
