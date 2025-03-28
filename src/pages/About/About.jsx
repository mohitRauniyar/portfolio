import React from "react";
import { motion } from "framer-motion";
import SideNav from "../../components/SideNav";
import ProfileCard from "./ProfileCard";
import Footer from "../../components/Footer";
import BottomNav from "../../components/BottomNav";

// Animation Variants
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slideInVariant = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

export default function About() {
  return (
    <>
        <SideNav />

      {/* BottomNav Animation */}
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <BottomNav />
      </motion.div>

      {/* Main Page Container */}
      <motion.div
        className="flex justify-center w-full bg-[#fafafa] dark:bg-[#000] min-h-screen"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="w-full md:w-7xl md:ml-20 flex flex-col scroll-smooth">
          <motion.div
            className="flex flex-col"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
          >
            {/* ProfileCard Animation */}
            <motion.div variants={fadeInVariant}>
              <ProfileCard />
            </motion.div>

            {/* Footer Animation */}
            <motion.div variants={fadeInVariant}>
              <Footer />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
