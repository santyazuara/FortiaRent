"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedSection({ children, className }: Props) {
  const shouldReduce = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}

