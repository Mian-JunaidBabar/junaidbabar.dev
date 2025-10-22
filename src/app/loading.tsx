"use client";

import { motion } from "framer-motion";

// Variants for the container to orchestrate the animation of the dots
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Each dot will start its animation 0.15s after the previous one
    },
  },
};

// Variants for the individual dots to create the "bounce" effect
const dotVariants = {
  hidden: { y: 0 }, // Start position
  visible: {
    y: [0, -20, 0], // Keyframes: go up to -20px and back down to 0
  },
};

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        className="flex gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="h-4 w-4 rounded-full bg-sky-500"
          variants={dotVariants}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-sky-500"
          variants={dotVariants}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-4 w-4 rounded-full bg-sky-500"
          variants={dotVariants}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
}
