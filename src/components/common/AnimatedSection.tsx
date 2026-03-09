"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
};

export default function AnimatedSection({ children, className, id, delay = 0 }: Props) {
  const shouldReduce = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}

