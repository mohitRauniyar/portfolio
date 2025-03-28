import React, { useContext } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";
import { motion } from "framer-motion";

export default function BottomNav() {
  const { toggleTheme, setLight, setDark, theme } = useContext(ThemeContext);

  // Variants for icon and text animation
  const iconVariants = {
    hover: { scale: 1.1, y: -4, transition: { duration: 0.2 } },
    tap: { scale: 0.9, transition: { duration: 0.1 } },
  };

  // Variants for fade-in of the bottom nav
  const navVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className={`fixed bottom-0 left-0 h-16 z-50 border-t-1 border-[#cfcfcf] w-full bg-gradient-to-b bg-white dark:from-[#0E0E0E] dark:to-[#161616] flex md:hidden justify-around items-center text-black dark:text-[#c9c3c3]`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* Home Link */}
      <motion.div
        className="flex flex-col items-center justify-center gap-1"
        whileHover="hover"
        whileTap="tap"
        variants={iconVariants}
      >
        <Link to="/" className="text-lg">
          <RiHome2Line />
        </Link>
        <p className="text-sm">Home</p>
      </motion.div>

      {/* About Link */}
      <motion.div
        className="flex flex-col items-center justify-center gap-1"
        whileHover="hover"
        whileTap="tap"
        variants={iconVariants}
      >
        <Link to="/about" className="text-lg">
          <CgProfile />
        </Link>
        <p className="text-sm">About me</p>
      </motion.div>

      {/* Resume Link */}
      <motion.div
        className="flex flex-col items-center justify-center gap-1"
        whileHover="hover"
        whileTap="tap"
        variants={iconVariants}
      >
        <a
          href="/assets/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          <IoDocumentAttachOutline />
        </a>
        <p className="text-sm">Resume</p>
      </motion.div>

      {/* Theme Toggle */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9, rotate: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {theme === "light" ? (
          <AiOutlineMoon
            onClick={() => setDark()}
            className="cursor-pointer rounded-full p-1 text-3xl"
          />
        ) : (
          <AiOutlineSun
            onClick={() => setLight()}
            className="cursor-pointer rounded-full p-1 text-3xl"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
