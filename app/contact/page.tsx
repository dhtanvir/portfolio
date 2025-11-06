"use client";

import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
export default function ContactPage() {
  return (

    <motion.section
      id="contact"
      className="py-24 text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >


      <section className="max-w-3xl mx-auto py-16 text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Have a project idea or just want to say hi?
          Feel free to send me a message below 👇
        </p>


        <ContactForm />

      </section>
    </motion.section>
  );
}
