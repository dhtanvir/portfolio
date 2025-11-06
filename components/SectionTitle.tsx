"use client";
import { motion } from "framer-motion";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h2
      className="text-3xl font-bold text-center mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
}
