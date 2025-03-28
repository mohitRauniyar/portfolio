import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../ThemeContext";

// Services Array
const services = [
  // {
  //   id: "api",
  //   title: "API Development",
  //   description:
  //     "I develop clean, well-documented APIs that facilitate seamless integration and efficient data exchange between systems.",
  //   media: (
  //     <motion.img
  //       src="/assets/serviceImages/apiDev.png"
  //       alt="API Development"
  //       className="w-full rounded shadow h-full xl:object-cover object-contain"
  //       initial={{ scale: 0.8, opacity: 0 }}
  //       animate={{ scale: 1, opacity: 1 }}
  //       transition={{ duration: 0.6 }}
  //     />
  //   ),
  // },
  {
    id: "software",
    title: "Software Engines",
    description:
      "I design custom software engines that power high-performance applications and streamline complex processes.",
    media: (
      <motion.img
        src="/assets/serviceImages/sde.png"
        alt="Software Engines"
        className="w-full rounded shadow h-full xl:object-cover object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    ),
  },
  {
    id: "product",
    title: "Product Management",
    description:
      "I steer products from concept to market, aligning strategy with user needs to deliver exceptional value and impact.",
    media: (
      <motion.img
        src="/assets/serviceImages/product.png"
        alt="Product Management"
        className="w-full rounded shadow h-full xl:object-cover object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    ),
  },
  {
    id: "scrum",
    title: "Scrum Management",
    description:
      "I lead agile teams with proven scrum practices, ensuring transparent, timely project delivery and continuous improvement.",
    media: (
      <motion.img
        src="/assets/serviceImages/projectManagement.png"
        alt="Scrum Management"
        className="w-full rounded shadow h-full xl:object-cover object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    ),
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "I create visually engaging, responsive interfaces that enhance user interaction and drive engagement.",
    media: (
      <motion.img
        src="/assets/serviceImages/frontendService.webp"
        alt="Frontend Development"
        className="w-full rounded shadow h-full xl:object-cover object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    ),
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "I build robust, secure server solutions that scale with your business, ensuring reliable and efficient performance.",
    media: (
      <motion.img
        src="/assets/serviceImages/backend.png"
        alt="Backend Development"
        className="w-full rounded shadow h-full xl:object-cover object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    ),
  },
  {
    id: "fullstack",
    title: "FullStack Websites",
    description:
      "I combine frontend finesse and backend strength to deliver comprehensive, end-to-end solutions tailored to your needs.",
    media: (
      <motion.img
        src="/assets/serviceImages/fullstack.jpg"
        alt="FullStack Websites"
        className="w-full rounded shadow h-full xl:object-cover object-contain"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
    ),
  },
];

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const serviceRefs = useRef([]);

  useEffect(() => {
    serviceRefs.current = serviceRefs.current.slice(0, services.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute("data-index")));
          }
        });
      },
      { threshold: 0.5 }
    );

    serviceRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="flex lg:flex-row flex-col-reverse justify-between w-full gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Left Section - Service List */}
      <motion.div
        className="lg:w-1/2 space-y-36"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            data-index={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="flex flex-col gap-0 lg:gap-10 lg:h-120 rounded pt-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="md:text-4xl text-2xl bg-gradient-to-r from-[#88c2b5] to-[#346152] text-transparent bg-clip-text font-semibold pb-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-xl lg:pl-8 pt-8 pr-8 dark:text-[#eef4f27f]"
              whileHover={{ scale: 1.02 }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Section - Sticky Media */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
      >
        <motion.div
          className="sticky top-10 lg:top-[30%] h-[24rem] shadow-xl overflow-hidden rounded-md z-20"
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {services[activeIndex].media}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
