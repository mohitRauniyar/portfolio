import React from "react";
import ProjectTitle from "./ProjectTitle";
import Technology from "./Technology";
import { Link } from "react-router-dom";
import MobileView from "../bridgingTheGaps/MobileView";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.div
      className="flex flex-col"
      id="craft"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Craft Header */}
      <motion.div
        className="border-1 border-[#cfcfcf] dark:border-[#101110]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h2 className="text-center align-middle dark:text-white p-28 text-lg md:text-2xl overline">
          CRAFT
        </h2>
      </motion.div>

      {/* Project Sections */}
      <motion.div
        className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // ✅ Animation triggers only once
      >
        {/* Project 1 */}
        <motion.div
          className="border-y-1 border-[#cfcfcf] dark:border-[#101110] md:p-28 p-8 bg-white dark:bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }} // ✅ Only triggers once
        >
          <ProjectTitle title="No More Disconnected Dots" domain="Website" />
          <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between gap-12 py-8 mt-16">
            <motion.div
              className="flex flex-col lg:gap-8 gap-4 lg:w-[25%] w-full"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }} // ✅ Only once
            >
              <Technology
                props={[
                  "ReactJS",
                  "Java SpringBoot",
                  "REST API",
                  "SQL",
                  "MVC model",
                ]}
              />
              <Link
                to="/project/infosys"
                className="dark:bg-white bg-black p-3 rounded-sm text-white dark:text-black font-bold w-fit lg:text-xl text-sm hover:bg-black hover:text-white"
              >
                Read More
              </Link>
            </motion.div>
            <motion.img
              src="assets/noMoreDisconnectedDots/course_assignment.png"
              alt=""
              loading="lazy"
              className="lg:w-[55%]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="border-y-1 border-[#cfcfcf] dark:border-[#101110] md:p-28 p-8 bg-white dark:bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ProjectTitle title="Bridging The Gap" domain="Application" />
          <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between gap-12 py-8 mt-16">
            <motion.div
              className="lg:w-[55%] overflow-hidden bg-[#f2f2f2] dark:bg-[#111] p-8"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MobileView imageUrl="assets/bridgingTheGaps/login.png" />
            </motion.div>
            <motion.div
              className="flex flex-col lg:gap-8 gap-4 lg:w-[25%] w-full"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Technology
                props={[
                  "ReactJS",
                  "React Native",
                  "NodeJS",
                  "Digital Awareness",
                  "Agile Process",
                ]}
              />
              <Link
                to="/project/edip"
                className="bg-black dark:bg-white p-3 rounded-sm text-white dark:text-black font-bold w-fit lg:text-xl text-sm hover:bg-black hover:text-white"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          className="border-y-1 border-[#cfcfcf] dark:border-[#101110] md:p-28 p-8 bg-white dark:bg-black"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ProjectTitle title="No More Disconnected Dots" domain="Website" />
          <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between gap-12 py-8 mt-16">
            <motion.div
              className="flex flex-col lg:gap-8 gap-4 lg:w-[25%] w-full"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Technology
                props={[
                  "ReactJS",
                  "Java SpringBoot",
                  "REST API",
                  "SQL",
                  "MVC model",
                ]}
              />
              <Link
                to=""
                className="bg-black dark:bg-white p-3 rounded-sm text-white dark:text-black font-bold w-fit lg:text-xl text-sm hover:bg-black hover:text-white"
              >
                Read More
              </Link>
            </motion.div>
            <motion.img
              src="assets/noMoreDisconnectedDots/course_assignment.png"
              alt=""
              loading="lazy"
              className="lg:w-[55%]"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
