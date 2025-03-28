import React, { useState, useRef, useEffect } from "react";
import { RiAddLargeLine, RiCloseLargeLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

// ExpandableSection Component
function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mt-4 border-b-2 border-gray-200 py-8 ">
      {/* Header with Title and Toggle Button */}
      <div className="flex items-center justify-between" onClick={toggleSection}
          aria-expanded={isOpen}>
        <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
        <button
          className="dark:text-white text-xl leading-none focus:outline-none"
        >
          {isOpen ? <RiCloseLargeLine /> : <RiAddLargeLine />}
        </button>
      </div>

      {/* Expandable Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className="mt-6 p-4 text-lg text-[#666964] dark:text-[#8d8d8d]">
          {children}
        </div>
      </div>
    </div>
  );
}

// Certificate Data
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
    description:
      "Completed Responsive Web Design certification from freeCodeCamp.",
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

// Certificate Card with Modal Trigger
const CertificateCard = ({ provider, title, image, description, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick({ title, provider, image, description })}
      className="relative overflow-hidden rounded-xl shadow-lg group max-w-[400px] justify-center cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-56 md:min-h-fit object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-[#000000d5] bg-opacity-50 flex flex-col items-center justify-evenly opacity-0 group-hover:opacity-100 transition-opacity">
        <div>
          <h3 className="text-white text-lg font-semibold text-center">
            {title}
          </h3>
          <h5 className="text-white text-sm font-semibold text-center">
            -- {provider} --
          </h5>
        </div>
        <p className="text-gray-300 text-sm text-center px-4">{description}</p>
      </div>
    </motion.div>
  );
};

// Modal Component
const Modal = ({ isOpen, onClose, content }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-[#000000e0] bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl shadow-2xl w-[90%] md:w-[700px] xl:w-[1000px] flex flex-col md:flex-row overflow-hidden relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Left Section - Image */}
          <img
            src={content.image}
            alt={content.title}
            className="w-full md:w-1/2 object-cover"
          />
          {/* Right Section - Content */}
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800">{content.title}</h3>
            <h5 className="text-sm text-gray-600 mb-4">-- {content.provider} --</h5>
            <p className="text-gray-700">{content.description}</p>
            <button
              onClick={onClose}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main ProfileCard Component
export default function ProfileCard() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openModal = (certificate) => setSelectedCertificate(certificate);
  const closeModal = () => setSelectedCertificate(null);

  return (
    <div className="border-1 border-[#cfcfcf] dark:border-[#101110] bg-white dark:bg-black p-8 md:p-32">
      {/* Profile Overview */}
      <div className="flex xl:flex-row flex-col-reverse gap-16 mb-16 py-8 font-stretch-expanded">
        <div>
          <h1 className="text-2xl lg:text-4xl font-semibold dark:text-white w-fit py-8">
            Mohit Kumar Rauniyar
          </h1>
          <p className="lg:text-xl text-xl p-4 pl-0 text-[#666964] dark:text-[#8d8d8d]">
            Undergrad Student at Amrita Vishwa Vidyapeetham with a B.Tech. in
            Computer Science Engineering. Passionate about crafting seamless,
            joyful experiences that create real-world impact.
          </p>
        </div>
        <div>
          <iframe
            src="https://lottie.host/embed/196969de-713f-4b05-abb7-ee12d9b0ee8b/WXLgkii3Ct.lottie"
            className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-cover object-contain xl:mt-0 mt-8 md:scale-150"
          ></iframe>
        </div>
      </div>

      {/* Expandable Sections */}
      <ExpandableSection title="Background">
      I am a curious and driven individual who enjoys exploring diverse technologies and building impactful solutions. My journey spans from developing web applications with React and Spring Boot to optimizing algorithms and diving deep into distributed computing. I thrive on solving real-world challenges, whether it's enhancing system performance, or structuring data efficiently. My passion lies in continuous learning, exploring emerging technologies, and applying them to create scalable and practical solutions.
      </ExpandableSection>

      <ExpandableSection title="Design Philosophy">
        My design philosophy revolves around empathy, simplicity, and
        user-centered principles. I believe great products emerge when we deeply
        understand human needs and design solutions that are both functional and
        delightful.
      </ExpandableSection>

      <ExpandableSection title="Things I Love">
        I love traveling, coffee, music, and exploring new technologies. I'm also
        a huge fan of collaborative brainstorming sessions and believe that the
        best ideas come from diverse perspectives.
      </ExpandableSection>

      {/* Certificates Section with Modal */}
      <ExpandableSection title="Certifications">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 mt-4 grow">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} onClick={openModal} />
          ))}
        </div>
      </ExpandableSection>

      <ExpandableSection title="Publications">
        <h2 className="font-semibold text-xl dark:text-white">
          <i>Hierarchical Data Storage Model in MongoDB</i>
        </h2>
        <p className="p-4 text-[#666964] dark:text-[#8d8d8d]">
          A novel approach to structuring hierarchical data in MongoDB,
          leveraging tree-based storage for optimized retrieval and efficient
          resume ranking. This model reduces redundancy, enhances scalability,
          and improves query performance using AVL trees.
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

      {/* Modal for Certificate Details */}
      <Modal
        isOpen={!!selectedCertificate}
        onClose={closeModal}
        content={selectedCertificate || {}}
      />
    </div>
  );
}
