import React from "react";
import SideNav from "../../components/SideNav";
import Title from './Title'
import Banner from "../../components/Banner";
import ParticipationDetail from "../../components/ParticipationDetail";
import Footer from "../../components/Footer"
import { FaListAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import BottomNav from "../../components/BottomNav";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function Main() {
  return (
    <>
      <SideNav />
      <BottomNav/>
      <div className="flex justify-center w-full bg-[#fafafa] dark:bg-[#000]">
        <div className="w-full md:w-7xl md:ml-16 flex flex-col scroll-smooth">
          <div className="flex flex-col">


            <Banner imageLink="assets/noMoreDisconnectedDots/course_assignment.png" altText="Website Image"/>



            <motion.div
      className="border-1 border-[#cfcfcf] dark:border-[#101110] bg-white dark:bg-black p-8 md:p-32"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Title
        title="Transforming Employee Training for Project Success"
        domain="Web Application"
      />
      <motion.a
        href="https://github.com/L-DMS-V1/Batch-4"
        target="_blank"
        className="dark:text-black text-white p-4 px-8 my-16 text-2xl flex gap-8 items-center rounded-lg bg-black dark:bg-white w-fit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <SiGithub /> View Code Repository
      </motion.a>
      <div className="flex xl:flex-row flex-col-reverse md:gap-32 gap-16 pt-8 font-stretch-expanded">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h2 className="text-xl lg:text-2xl font-semibold dark:text-white w-fit py-8">
            At-A-Glance
          </h2>
          <p className="lg:text-2xl text-xl p-4 pl-0 text-[#666964] dark:text-[#8d8d8d]">
            SkillMatrix is a comprehensive platform for managing employee
            training and skill development. The system ensures seamless
            training management with role-based access and real-time tracking.
            With SkillMatrix, organizations can efficiently upskill their
            workforce and monitor growth.
          </p>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <iframe
            src="https://lottie.host/embed/a86cb229-d825-4eb6-adc9-dbfd1affd126/8Q9ONZq9g4.lottie"
            className="md:scale-125 h-[300px] lg:min-w-96 max-w-[600px] align-middle m-auto md:h-full w-full xl:object-cover object-contain xl:mt-0 mt-8"
          ></iframe>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <ParticipationDetail
          prop={{
            participationType: "Team Project",
            role: ["Backend Development", "Database Design"],
            timeline: "October 2024 - December 2024",
          }}
        />
      </motion.div>
    </motion.div>



            <div className="border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>
            
            
            <motion.div
      className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
          01. DISCOVER
        </h1>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
          The Gaps in Learning
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
          In fast-paced companies, <b>learning isn’t optional—it’s a necessity</b>.
          As new technologies emerge and project requirements shift, employees
          must adapt quickly to deliver high-quality products.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
          Starting thoughts...
        </p>
        <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
          Missed deadlines, inefficiencies, and inconsistent product quality
        </h2>
      </motion.div>

      <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
            There was no structured system to ensure employees learned the right
            skills at the right time. This lack of alignment led to missed deadlines,
            inefficiencies, and inconsistent product quality.
          </p>
        </motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <iframe
            src="https://lottie.host/embed/3b98bb2b-d1d6-4cc0-b388-6faa83825706/ambFpckLUC.lottie"
            className="md:scale-125 h-[300px] lg:min-w-96 max-w-[600px] align-middle m-auto md:h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
          ></iframe>
        </motion.div>
      </div>

      <motion.div
        className="lg:my-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
          The Opportunity
        </p>
        <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
            Employee Training Platform
          </h2>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
            Build a centralized Employee Training Platform that seamlessly connects
            learning to project needs.
          </p>
        </div>
      </motion.div>

      <motion.p
        className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] mt-32"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        But we found a disconnect between learning and execution:
      </motion.p>

      <div className="flex flex-col gap-8 lg:mt-0 -mt-8">
        <motion.div
          className="flex flex-col gap-4 bg-[#eee] dark:bg-[#111] rounded-xl p-16 text-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-center text-xl text-[#444] dark:text-[#aaa]">
            <i>
              "We do see skill gaps for there are a number of variety of projects,
              but we lack a structured way to request training."
            </i>
          </p>
          <p className="text-right text-[#444] dark:text-[#aaa]">
            <i>- Managers</i>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 bg-[#eee] dark:bg-[#111] rounded-xl p-16 text-lg"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-center text-xl text-[#444] dark:text-[#aaa]">
            <i>
              "There are many fragmented requests from different managers of
              different departments. This leads to inefficiencies in course creation
              and assignment."
            </i>
          </p>
          <p className="text-right text-[#444] dark:text-[#aaa]">
            <i>- Trainers</i>
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 bg-[#eee] dark:bg-[#111] rounded-xl p-16 text-lg"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <p className="text-center text-xl text-[#444] dark:text-[#aaa]">
            <i>
              "I try to upskill but struggled with unstructured learning resources
              that did not align with project demands."
            </i>
          </p>
          <p className="text-right text-[#444] dark:text-[#aaa]">
            <i>- Employee</i>
          </p>
        </motion.div>
      </div>
    </motion.div>


            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>


               <motion.div
      className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
          02. EMPATHIZE
        </h1>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
          Understanding the user and the requirements.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
          To design a <b>meaningful</b> solution, we needed to understand the
          people who would use it.
        </p>
      </motion.div>

      <motion.p
        className="text-md md:text-xl font-semibold text-black dark:text-white py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Perspective Analysis
      </motion.p>

      <motion.div
        className="flex flex-col xl:flex-row gap-2 justify-evenly text-black dark:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.2 }}
      >
        {/* Manager Card */}
        <motion.div
          className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-center my-8 text-2xl">Manager</h3>
          <ul className="flex flex-col text-[#4e4e4d] dark:text-[#adadad] my-12 gap-8 list-disc">
            <li>noticed skill gaps in their teams but had no easy way to request training.</li>
            <li>wanted employees to learn specific technologies for ongoing projects.</li>
            <li>sometimes needed existing courses assigned instead of requesting new ones.</li>
          </ul>
        </motion.div>

        {/* Trainer Card */}
        <motion.div
          className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-center my-8 text-2xl">Trainer</h3>
          <ul className="flex flex-col text-[#4e4e4d] dark:text-[#adadad] my-12 gap-8 list-disc">
            <li>received training requests in different formats and lacked a centralized system to manage them.</li>
            <li>had to manually track which employees had completed training.</li>
            <li>lacked a way to monitor the effectiveness of the courses.</li>
          </ul>
        </motion.div>

        {/* Employee Card */}
        <motion.div
          className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-center my-8 text-2xl">Employee</h3>
          <ul className="flex flex-col text-[#4e4e4d] dark:text-[#adadad] my-12 gap-8 list-disc">
            <li>had no structured learning path aligned with real-world project needs</li>
            <li>often didn’t know which skills were essential for their roles.</li>
            <li>couldn’t track their progress or provide structured feedback.</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
          By immersing ourselves in these challenges, I understood that a
          simple training portal wouldn’t be enough—I needed a{" "}
          <b>dynamic, role-driven system</b> that integrates seamlessly with the
          company’s workflow.
        </p>
      </motion.div>
    </motion.div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>


            <motion.div
      className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Header */}
      <motion.div variants={sectionVariants} className="mb-8">
        <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
          03. IDEATE
        </h1>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
          Designing the Ideal Solution
        </p>
      </motion.div>

      {/* Description */}
      <motion.div variants={sectionVariants}>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
          With a deep understanding of the problem, we outlined key features that would bring all stakeholders onto the same platform and ensure a smooth, structured learning experience.
        </p>
      </motion.div>

      {/* Feature List Container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex flex-col xl:gap-64 gap-32"
      >
        {/* Feature Item 1 */}
        <motion.div variants={sectionVariants} className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
              Requesting for Course
            </h2>
            <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
              Managers can request training for employees based on project requirements.
            </p>
          </div>
          <motion.img
            variants={imageVariants}
            src={`${import.meta.env.BASE_URL}assets/noMoreDisconnectedDots/course_feedback.png`}
            alt=""
            className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
          />
        </motion.div>

        {/* Feature Item 2 */}
        <motion.div variants={sectionVariants} className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
          <motion.img
            variants={imageVariants}
            src={`${import.meta.env.BASE_URL}assets/noMoreDisconnectedDots/course_assignment.png`}
            alt=""
            className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
          />
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
              Modular Course Creation
            </h2>
            <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
              Admins can create new courses or assign existing ones to employees.
            </p>
          </div>
        </motion.div>

        {/* Feature Item 3 */}
        <motion.div variants={sectionVariants} className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
              Easy tracking of courses
            </h2>
            <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
              Employees can view the courses assigned to them, complete the modules and track their progress.
            </p>
          </div>
          <motion.img
            variants={imageVariants}
            src={`${import.meta.env.BASE_URL}assets/noMoreDisconnectedDots/course_dashboard.png`}
            alt=""
            className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
          />
        </motion.div>

        {/* Feature Item 4 */}
        <motion.div variants={sectionVariants} className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
          <motion.img
            variants={imageVariants}
            src={`${import.meta.env.BASE_URL}assets/noMoreDisconnectedDots/course_feedback_submission.png`}
            alt=""
            className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
          />
          <div>
            <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
              Feedback Oriented
            </h2>
            <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
              Employees can provide feedback on their assignments and Admins can view the feedback metrics to improve the course and view course performance.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Conclusion */}
      <motion.div variants={sectionVariants}>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center my-32">
          With this blueprint, we were ready to bring the platform to life.
        </p>
      </motion.div>
    </motion.div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>

            <motion.div
      className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Header */}
      <motion.div variants={sectionVariants} className="mb-8">
        <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
          04. PROTOTYPING
        </h1>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
          Laying the Foundation
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.div variants={sectionVariants}>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
          A powerful system needs a strong technical foundation. We designed the platform with a scalable and optimized architecture.
        </p>
      </motion.div>

      {/* Backend Design */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p
          variants={sectionVariants}
          className="text-md md:text-xl font-semibold text-black dark:text-white py-8"
        >
          Backend Design
        </motion.p>

        {/* MySQL Database */}
        <motion.div variants={sectionVariants}>
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
            MySQL Database
          </h2>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
            To get a better understanding of database design, entities were defined and class diagrams were made for the entities and the service interfaces which I later changed into an ER Diagram.
          </p>
          <motion.img
            variants={imageVariants}
            src={`${import.meta.env.BASE_URL}assets/noMoreDisconnectedDots/erDiagram.png`}
            alt="ER Diagram"
            className="w-full my-16"
          />
        </motion.div>

        {/* Spring Boot Framework */}
        <motion.div variants={sectionVariants}>
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
            Spring Boot Framework
          </h2>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
            Ensures a secure, fast, and scalable backend. I designed the class diagrams for service interfaces that needed to be implemented.
          </p>
          <motion.img
            variants={imageVariants}
            src={`${import.meta.env.BASE_URL}assets/noMoreDisconnectedDots/interface_design.png`}
            alt="Interface Design"
            className="w-full my-16"
          />
        </motion.div>

        {/* MVC Design Pattern */}
        <motion.div variants={sectionVariants}>
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
            MVC Design Pattern
          </h2>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
            The MVC (Model-View-Controller) design pattern breaks an application into three parts: the Model (which handles data), the View (which is what users see), and the Controller (which connects the two). This makes it easier to work on each part separately, so you can update or fix things without messing up the whole app. MVC helps keep everything organized and improves the quality of the software.
          </p>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-32 my-8 mt-32 flex items-center">
            A Role-based Access Control was added with three different roles: Admin, Manager, and Employee.
          </p>
        </motion.div>

        {/* Frontend Design */}
        <motion.p
          variants={sectionVariants}
          className="text-md md:text-xl font-semibold text-black dark:text-white py-8 mt-32"
        >
          Frontend Design
        </motion.p>

        {/* ReactJS */}
        <motion.div variants={sectionVariants}>
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
            ReactJS
          </h2>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
            Delivers a smooth, interactive experience.
          </p>
        </motion.div>

        {/* React Hot Toast */}
        <motion.div variants={sectionVariants}>
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
            React Hot Toast
          </h2>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
            To display toast notifications in real-time, without requiring a full page reload.
          </p>
        </motion.div>
      </motion.div>

      {/* The Result */}
      <motion.div variants={sectionVariants} className="lg:my-16">
        <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
          <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
            The Result?
          </h2>
          <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
            Just a seamless, structured learning ecosystem designed for efficiency and growth.
          </p>
        </div>
      </motion.div>

      {/* Final Note */}
      <motion.p
        variants={sectionVariants}
        className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] mt-32 text-center"
      >
        A company where employees learn what they need, exactly when they need it.
      </motion.p>
    </motion.div>


            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>

            <motion.div
      className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Header */}
      <motion.div variants={sectionVariants} className="mb-8">
        <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
          05. Reflection
        </h1>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
          No More Disconnected Dots.
        </p>
      </motion.div>

      {/* Introduction */}
      <motion.div variants={sectionVariants}>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
          Lessons, Challenges & The Road Ahead
        </p>
      </motion.div>

      {/* Lessons Learned */}
      <motion.p
        variants={sectionVariants}
        className="text-md md:text-xl font-semibold text-black dark:text-white py-8"
      >
        Lessons Learned
      </motion.p>

      <motion.div
        className="flex flex-col xl:flex-row gap-2 justify-evenly text-black dark:text-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          "User-Centric Design is the Key",
          "Efficiency & Scalability Must Go Hand in Hand",
          "Security Can’t Be an Afterthought",
          "Incremental Development & Testing Pays Off",
        ].map((lesson, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8 rounded-lg shadow-lg cursor-pointer"
          >
            <h3 className="text-center my-8 text-2xl">{lesson}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Future Enhancements & Roadmap */}
      <motion.p
        variants={sectionVariants}
        className="text-md md:text-xl font-semibold text-black dark:text-white py-8"
      >
        Future Enhancements & Roadmap
      </motion.p>

      <motion.div
        className="flex flex-col gap-2 text-black dark:text-white"
        variants={sectionVariants}
      >
        <motion.div
          variants={cardVariants}
          className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8 text-left rounded-lg shadow-lg"
        >
          {[
            "User-Centric Design is the Key",
            "Efficiency & Scalability Must Go Hand in Hand",
            "Security Can’t Be an Afterthought",
            "Incremental Development & Testing Pays Off",
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={sectionVariants}
              className="my-8 text-2xl flex gap-8"
            >
              <div className="flex items-center text-[#337062] dark:text-[#d4fff5]">
                <FaListAlt />
              </div>
              <h3 className="text-2xl">{item}</h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Final Reflection */}
      <motion.div variants={sectionVariants}>
        <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center my-32">
          With the final version deployed, the platform transformed the way training happens inside the company.
        </p>
      </motion.div>
    </motion.div>




          </div>
          
          



          <Footer/>
        </div>
      </div>
    </>
  );
}
