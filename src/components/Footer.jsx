import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <motion.div
      className="flex flex-col mb-16 md:mb-0"
      id="footer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Top Border */}
      <motion.div
        className="border-1 border-[#cfcfcf] dark:border-[#101110] h-32"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Main Footer Content */}
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-20 border-1 border-[#cfcfcf] dark:border-[#101110] pt-28 pb-16 px-16 bg-white dark:bg-black justify-around">
        {/* Name Section */}
        <div className="py-4">
          <h1 className="text-3xl bg-gradient-to-r from-[#6A988D] to-[#335f51] text-transparent bg-clip-text font-stretch-semi-expanded font-semibold">
            Mohit <br />
            Rauniyar
          </h1>
        </div>

        {/* Craft Section */}
        <div className="flex flex-col gap-8">
          <h3 className="text-[#5c6456] font-bold">CRAFT</h3>
          <ul className="dark:text-[#969c91] text-[#222] flex flex-col gap-4">
            {[
              { title: "No More Disconnected Dots", link: "/project/infosys" },
              { title: "Bridging The Gap", link: "/project/edip" },
              { title: "No More Disconnected Dots", link: "" },
              { title: "No More Disconnected Dots", link: "" },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={item.link}
                  className="text-lg hover:underline-offset-2 hover:underline font-semibold"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-8">
          <h3 className="text-[#5c6456] font-bold">CONTACT</h3>
          <ul className="dark:text-[#969c91] text-[#222] flex flex-col gap-4">
            {[
              {
                platform: "LinkedIn",
                link: "https://linkedin.com/in/mohit-kumar-rauniyar-984537291",
              },
              {
                platform: "Mail",
                link: "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=mohitrauniyar0001@gmail.com&tf=1",
              },
              {
                platform: "WhatsApp",
                link: "https://wa.me/917892117698",
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold flex gap-2 items-center"
                >
                  {item.platform}
                  <motion.div
                    whileHover={{
                      rotate: 45,
                      scale: 1.3,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <MdOutlineArrowOutward />
                  </motion.div>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
