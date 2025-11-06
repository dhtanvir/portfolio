"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-24">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Hi, I’m <span className="text-blue-600">Tanvirul Islam</span> 👋
      </motion.h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Front-End Developer | React | Tailwind | Next.js
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/dhtanvir" target="_blank">
          <FaGithub size={28} className="hover:text-blue-600" />
        </a>
        <a href="https://www.linkedin.com/in/dhtanvir1323/" target="_blank">
          <FaLinkedin size={28} className="hover:text-blue-600" />
        </a>
      </div>
    </section>
  );
}
