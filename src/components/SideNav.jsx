import React, { useContext, useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { ThemeContext } from "../../ThemeContext";
import { RiHome2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoDocumentAttachOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { toggleTheme, setLight, setDark, theme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`fixed bottom-0 left-0 h-screen z-20 border-r-1 border-[#cfcfcf] ${
        isCollapsed ? "w-16" : "w-48"
      } transition-all duration-300 bg-gradient-to-b bg-white dark:from-[#0E0E0E] dark:via-[#2B312D] dark:to-[#161616] md:flex hidden flex-row justify-center pb-12 pt-4 text-black dark:text-[#c9c3c3]`}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center justify-between mt-8">
        {/* Collapse/Expand Button */}
        <div className="flex flex-col justify-center gap-16">
          <button
            className={`focus:outline-none w-full flex ${
              isCollapsed ? "justify-center" : "justify-between text-2xl"
            }`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <motion.div
                key="menu"
                initial={{ rotate: 0 }}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <GiHamburgerMenu />
              </motion.div>
            ) : (
              <motion.div
                key="close"
                initial={{ rotate: 340 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full flex justify-between gap-20">
                  <p className="inline text-lg italic font-semibold -mt-1">
                    MR
                  </p>
                  <IoCloseSharp />
                </div>
              </motion.div>
            )}
          </button>

          {/* Sidebar Menu */}
          <div className="mt-24">
            <ul className="flex flex-col gap-8 w-full">
              {[
                { to: "/", label: "Home", icon: <RiHome2Line /> },
                { to: "/about", label: "About", icon: <CgProfile /> },
                {
                  href: "/assets/Resume.pdf",
                  label: "Resume",
                  icon: <IoDocumentAttachOutline />,
                  external: true,
                },
              ].map((item, index) => (
                <motion.li
                  key={item.label}
                  className="cursor-pointer"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center dark:hover:bg-gray-950 hover:bg-[#acbba9] rounded-md text-xl px-3 py-2"
                    >
                      {item.icon}
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="flex items-center dark:hover:bg-gray-950 hover:bg-[#acbba9] rounded-md text-xl px-3 py-2"
                    >
                      {item.icon}
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Theme Toggle */}
        <div
          className={`flex ${
            isCollapsed ? "flex-col gap-8" : "flex-row justify-evenly"
          } text-black dark:text-white text-2xl`}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 20 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineMoon
              onClick={() => setDark()}
              className={`cursor-pointer ${
                theme == "dark" ? "bg-[#9da39c] text-black" : ""
              } rounded-full p-1 text-3xl`}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -20 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineSun
              onClick={() => setLight()}
              className={`cursor-pointer ${
                theme == "light" ? "bg-[#9da39c]" : ""
              } rounded-full p-1 text-3xl`}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
