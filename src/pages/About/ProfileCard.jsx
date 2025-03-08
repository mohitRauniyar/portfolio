import React, { useState, useRef } from "react";
import { RiAddLargeLine, RiCloseLargeLine } from "react-icons/ri";
import { motion } from "framer-motion";

function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mt-4 border-b-2 border-gray-200 py-8">
      {/* Header with Title and Toggle Button */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        <button className="dark:text-white text-xl leading-none focus:outline-none" onClick={toggleSection}>
          {isOpen ? <RiCloseLargeLine /> : <RiAddLargeLine />}
        </button>
      </div>

      {/* Expandable Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="mt-6 p-4 text-lg text-[#666964] dark:text-[#8d8d8d]">{children}</div>
      </div>
    </div>
  );
}

const certificates = [
  {
    provider: "SpringBoard",
    title: "Scrum Practices",
    image: "/assets/certificates/Scrum.png",
    description: "Proficient in agile methodologies like Scrum practices and tools.",
  },
  {
    provider: "AWS Academy",
    title: "Cloud Foundations",
    image: "/assets/certificates/aws_foundation.png",
    description: "Completed Responsive Web Design certification from freeCodeCamp.",
  },
  {
    provider: "SpringBoard",
    title: "Database Management System Part-1",
    image: "/assets/certificates/dbms-1.png",
    description: "Completed Infosys Young Java Professional program.",
  },
  {
    provider: "Amrita University",
    title: "Computer Vision",
    image: "/assets/certificates/computerVision.png",
    description: "Completed JS Algorithms & Data Structures certification.",
  },
  {
    provider: "SpringBoard",
    title: "Database Management System Advanced",
    image: "/assets/certificates/dbms-2.png",
    description: "Completed JS Algorithms & Data Structures certification.",
  },
  {
    provider: "be10x",
    title: "AI Tools Handling",
    image: "/assets/certificates/aiTools.png",
    description: "Completed JS Algorithms & Data Structures certification.",
  },
];

const CertificateCard = ({provider,  title, image, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative overflow-hidden rounded-xl shadow-lg group max-w-[400px] justify-center"
    >
      <img src={image} alt={title} className="w-full h-56 md:min-h-fit object-cover rounded-xl" />
      <div className="absolute inset-0 bg-[#000000d5] bg-opacity-50 flex flex-col items-center justify-evenly opacity-0 group-hover:opacity-100 transition-opacity">
        <div>

        <h3 className="text-white text-lg font-semibold text-center">{title}</h3>
        <h5 className="text-white text-sm font-semibold text-center">-- {provider} --</h5>
        </div>
        <p className="text-gray-300 text-sm text-center px-4">{description}</p>
      </div>
    </motion.div>
  );
};

export default function ProfileCard() {
  return (
    <div className="border-1 border-[#cfcfcf] dark:border-[#101110] bg-white dark:bg-black p-8 md:p-32">
      <div className="flex xl:flex-row flex-col-reverse gap-16 mb-16 py-8 font-stretch-expanded">
        <div>
          <h1 className="text-2xl lg:text-4xl font-semibold dark:text-white w-fit py-8">
            Mohit Kumar Rauniyar
          </h1>
          <p className="lg:text-xl text-xl p-4 pl-0 text-[#666964] dark:text-[#8d8d8d]">
            Undergrad Student at Amrita Vishwa Vidyapeetham with a B.Tech. in
            Computer Science Engineering. Passionate about crafting seamless, joyful experiences that create real-world impact.
          </p>
        </div>
        <div className="">
          <iframe
            src="https://lottie.host/embed/196969de-713f-4b05-abb7-ee12d9b0ee8b/WXLgkii3Ct.lottie"
            className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-cover object-contain xl:mt-0 mt-8 scale-150"
          ></iframe>
        </div>
      </div>

      <ExpandableSection title="Background">
      I thrive on solving complex problems, whether it's optimizing computations, structuring large-scale data, or improving network performance. My passion lies in building scalable, high-performance solutions that drive real-world impact in distributed computing, algorithm optimization, and database efficiency.
      </ExpandableSection>

      <ExpandableSection title="Design Philosophy">
        My design philosophy revolves around empathy, simplicity, and user-centered principles. I believe great products emerge 
        when we deeply understand human needs and design solutions that are both functional and delightful.
      </ExpandableSection>

      <ExpandableSection title="Things I Love">
        I love traveling, coffee, music, and exploring new technologies. I'm also a huge fan of collaborative brainstorming sessions 
        and believe that the best ideas come from diverse perspectives.
      </ExpandableSection>

      {/* Expandable Section for Certificates */}
      <ExpandableSection title="Certifications">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 mt-4 grow">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </ExpandableSection>

      <ExpandableSection title="Publications">
        <h2 className="font-semibold text-xl dark:text-white">
          <i>Hierarchical Data Storage Model in MongoDB</i>
        </h2>
        <p className="p-4 text-[#666964] dark:text-[#8d8d8d]">
          A novel approach to structuring hierarchical data in MongoDB, leveraging tree-based storage for optimized retrieval 
          and efficient resume ranking. This model reduces redundancy, enhances scalability, and improves query performance using AVL trees.
        </p>
        <a
          href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10816975"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-green-900 dark:text-green-200"
        >
          Read Full Paper
        </a>
      </ExpandableSection>
    </div>
  );
}
