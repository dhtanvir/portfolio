"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectProps {
  title: string;
  desc: string;
  img: string | any; // imported static image or string path
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  desc,
  img,
  github,
  live,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      {/* ✅ Use Next.js <Image /> instead of <img /> */}
      <div className="w-full h-40 relative">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{desc}</p>

        <div className="flex gap-4 text-gray-500">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            aria-label="View source on GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="View live demo"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
