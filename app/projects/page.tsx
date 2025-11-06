"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import CreDesign_project from "@/public/image/CreDesign-project-page-0001.jpg";
import DailyMen_project from "@/public/image/DailyMen-project-01.jpg";
import Travel_project from "@/public/image/travel_img-01.jpg";

const projects = [
  {
    title: "CeDesign Project:",
    desc: "A minimal personal website built with HTML & CSS.",
    img: CreDesign_project,
    github: "https://github.com/dhtanvir/CreDesign_project",
    live: "https://dhtanvir.github.io/CreDesign_project/",
  },
  {
    title: "DailyMen website",
    desc: "A minimal personal website built with HTML & CSS and JavaScript.",
    img: DailyMen_project,
    github: "https://github.com/dhtanvir/DailyMen_project",
    live: "https://dhtanvir.github.io/DailyMen_project/",
  },
  {
    title: "Travel Project ",
    desc: "A minimal personal website built with HTML & CSS.",
    img: Travel_project,
    github: "https://github.com/dhtanvir/project-travel",
    live: "https://dhtanvir.github.io/project-travel/",
  },
];


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsPage() {
  return (
    <motion.section
      id="projects"
      className="py-24"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >


      <section className="max-w-5xl mx-auto py-16">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </motion.section>
  );
}
