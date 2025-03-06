import React from "react";
import ProjectTitle from "./ProjectTitle";
import Technology from "./Technology";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div className="flex flex-col" id='craft'>
      <div className="border-1 border-[#cfcfcf] dark:border-[#101110] ">
        <h2 className="text-center align-middle dark:text-white p-28 text-lg md:text-2xl overline">
          CRAFT
        </h2>
      </div>
      <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110]">
        <div className="border-y-1 border-[#cfcfcf] dark:border-[#101110] md:p-28 p-8 bg-white dark:bg-black">
          <ProjectTitle title="No More Disconnected Dots" domain="Website" />
          <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between gap-12 py-8 mt-16">
            <div className="flex flex-col lg:gap-8 gap-4 lg:w-[25%] w-full">
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
                href="/project/infosys"
                className="dark:bg-white bg-black p-3 rounded-sm text-white dark:text-black font-bold w-fit lg:text-xl text-sm hover:bg-black hover:text-white"
              >
                Read More
              </Link>
            </div>
            <img src="assets/noMoreDisconnectedDots/course_assignment.png" alt="" loading="lazy" className="lg:w-[55%] "/>
          </div>
        </div>
        <div className="border-y-1 border-[#cfcfcf] dark:border-[#101110] md:p-28 p-8 bg-white dark:bg-black">
          <ProjectTitle title="Bridging The Gap" domain="Application" />
          <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between gap-12 py-8 mt-16">
            <img src="assets/noMoreDisconnectedDots/course_assignment.png" alt="" loading="lazy" className="lg:w-[55%] "/>
            <div className="flex flex-col lg:gap-8 gap-4 lg:w-[25%] w-full">
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
                href="/project/edip"
                className="bg-black dark:bg-white p-3 rounded-sm text-white dark:text-black font-bold w-fit lg:text-xl text-sm hover:bg-black hover:text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="border-y-1 border-[#cfcfcf] dark:border-[#101110] md:p-28 p-8 bg-white dark:bg-black">
          <ProjectTitle title="No More Disconnected Dots" domain="Website" />
          <div className="flex flex-wrap flex-col-reverse md:flex-row justify-between gap-12 py-8 mt-16">
            <div className="flex flex-col lg:gap-8 gap-4 lg:w-[25%] w-full">
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
                href=""
                className="bg-black dark:bg-white p-3 rounded-sm text-white dark:text-black font-bold w-fit lg:text-xl text-sm hover:bg-black hover:text-white"
              >
                Read More
              </Link>
            </div>
            <img src="assets/noMoreDisconnectedDots/course_assignment.png" alt="" loading="lazy" className="lg:w-[55%] "/>
          </div>
        </div>
      </div>
    </div>
  );
}
