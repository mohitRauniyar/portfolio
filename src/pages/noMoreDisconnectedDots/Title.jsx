import React from "react";
import { motion } from "framer-motion";

// Animation Variant
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Title({ title, domain }) {
  return (
    // Container Animation
    <motion.div
      className="mt-4 mb-8"
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Domain Animation */}
      <motion.p
        className="text-md md:text-xl font-semibold text-[#687261]"
        variants={fadeInVariant}
        transition={{ delay: 0.1 }}
      >
        {domain}
      </motion.p>

      <br />

      {/* Title Animation */}
      <motion.h1
        className="text-2xl lg:text-4xl font-semibold dark:text-white w-fit"
        variants={fadeInVariant}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
}
