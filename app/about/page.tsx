"use client";
import { motion } from "framer-motion";

export default function AboutPage() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      className="py-24"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >

      <section className="max-w-3xl mx-auto py-16">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          👋 Hi! I’m <span className="font-semibold">Md Tanvirul Islam</span>, a
          passionate Front-End Developer who loves creating beautiful, modern,
          and responsive user interfaces.
          <br />
          <br />
          I specialize in <strong>React, Next.js, and Tailwind CSS</strong>.
          I enjoy turning complex problems into elegant solutions and building
          user-friendly web apps that look great on any device.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {["React", "Next.js", "TypeScript", "Tailwind", "Node.js"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </section>
    </motion.section>
  );
}
