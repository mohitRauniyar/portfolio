import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../../ThemeContext';

// Example services array (each service has its own media element)
const services = [
  {
    id: 'api',
    title: 'API Development',
    description: 'I develop clean, well-documented APIs that facilitate seamless integration and efficient data exchange between systems.',
    media: <img src="/assets/serviceImages/apiDev.png" alt="Service Z" className="w-full rounded shadow h-full xl:object-cover object-contain hover:scale:110" />,
  },
  {
    id: 'software',
    title: 'Software Engines',
    description: 'I design custom software engines that power high-performance applications and streamline complex processes.',
    media: <img src="/assets/serviceImages/sde.png" alt="Service Z" className="w-full rounded shadow h-full xl:object-cover object-contain hover:scale:110" />,
  },
  {
    id: 'product',
    title: 'Product Management',
    description: 'I steer products from concept to market, aligning strategy with user needs to deliver exceptional value and impact.',
    media: <img src="/assets/serviceImages/product.png" alt="Service Z" className="w-full rounded shadow h-full xl:object-cover object-contain hover:scale:110" />,
  },
  {
    id: 'scrum',
    title: 'Scrum Management',
    description: 'I lead agile teams with proven scrum practices, ensuring transparent, timely project delivery and continuous improvement.',
    media: <img src="/assets/serviceImages/projectManagement.png" alt="Service Z" className="w-full rounded shadow h-full xl:object-cover object-contain hover:scale:110" />,
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'I create visually engaging, responsive interfaces that enhance user interaction and drive engagement.',
    media: <img src="/assets/serviceImages/frontendService.webp" alt="Service X" className="w-full rounded shadow h-full xl:object-cover object-contain hover:scale:110" />,
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'I build robust, secure server solutions that scale with your business, ensuring reliable and efficient performance.',
    media: <img src="/assets/serviceImages/backend.png" alt="Service Y" className="w-full rounded shadow h-full xl:object-cover object-contain hover:scale:110" />,
  },
  {
    id: 'fullstack',
    title: 'FullStack Websites',
    description: 'I combine frontend finesse and backend strength to deliver comprehensive, end-to-end solutions tailored to your needs.',
    media: <img src="/assets/serviceImages/fullstack.jpg" alt="Service Z" className="w-full rounded shadow h-full xl:object-cover object-contain hover:scale:110" />,
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
    <div className="flex lg:flex-row flex-col-reverse justify-between w-full gap-8">
      {/* Left Section - Service List */}
      <div className="lg:w-1/2 space-y-36">
        {services.map((service, index) => (
          <div
            key={service.id}
            data-index={index}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="flex flex-col gap-0 lg:gap-10 lg:h-120 rounded pt-8"
          >
            <h3 className="md:text-4xl text-2xl bg-gradient-to-r from-[#88c2b5] to-[#346152] text-transparent bg-clip-text font-semibold pb-4">
              {service.title}
            </h3>
            <p className="text-xl lg:pl-8 pt-8 pr-8 dark:text-[#eef4f27f]">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Right Section - Sticky Media */}
      <div className="lg:w-1/2">
        <div className="sticky top-10 lg:top-[30%] h-[24rem] shadow-xl overflow-hidden rounded-md z-20">
          {services[activeIndex].media}
        </div>
      </div>
    </div>
  );
}