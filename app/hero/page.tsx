import React from 'react'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroPage = () => {
    return (
        <>
          
            <motion.section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center text-center"
                variants={fadeInUp}
                initial="hidden"
                animate="show"
            >
                <h1 className="text-5xl font-bold mb-4">
                    Hi, I’m <span className="text-blue-600">Tanvir</span> 👋
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Front-End Developer | React | Next.js | Tailwind
                </p>
                <div className="flex gap-4">
                    <a href="https://github.com/dhtanvir" target="_blank"><FaGithub size={26} /></a>
                    <a href="https://www.linkedin.com/in/dhtanvir1323/" target="_blank"><FaLinkedin size={26} /></a>
                </div>
            </motion.section>
        </>
    )
}

export default HeroPage
