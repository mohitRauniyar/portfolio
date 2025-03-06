import React from "react";
import ServiceSection from "./ServiceSection";

export default function Services() {
  return (
    <div className="flex flex-col dark:bg-black min-h-screen" id="services">
      {/* Title Section */}
      <div className="border border-[#cfcfcf] dark:border-[#101110] bg-transparent">
        <h2 className="text-center dark:text-white p-28 text-lg md:text-2xl overline">
          SERVICES
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:gap-28 gap-16 border border-[#cfcfcf] dark:border-[#101110] lg:p-28 p-12 bg-white dark:bg-black min-h-screen pb-32">
        <ServiceSection />
      </div>
    </div>
  );
}
