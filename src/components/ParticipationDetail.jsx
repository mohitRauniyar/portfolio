import React from "react";

export default function ParticipationDetail({prop}) {
  return (
    <div className="flex md:flex-row flex-wrap flex-col justify-between gap-8 mt-8 md:mt-24">
      <div className=" p-4 border-l-2 border-red-500 md:border-0">
        <h3 className="text-2xl text-black dark:text-white md:pl-8 md:border-l-2 border-red-500">
          {prop.participationType}
        </h3>
      </div>
      <div className=" p-4 border-l-2 border-red-500 md:border-0">
        <h3 className="text-2xl text-black dark:text-white mb-4 md:border-l-2 border-red-500 md:pl-8">
          My Role
        </h3>
        {prop.role.map((element,index) => (
            <p key={index} className="text-lg text-[#666964] dark:text-[#8d8d8d] md:pl-8">
            {element}
          </p>
        ))}
      </div>
      <div className=" p-4 border-l-2 border-red-500 md:border-0">
        <h3 className="text-2xl text-black dark:text-white mb-4 md:pl-8 md:border-l-2 border-red-500">
          Timeline
        </h3>
        <p className="text-lg text-[#666964] dark:text-[#8d8d8d] md:pl-8">
          {prop.timeline}
        </p>
      </div>
    </div>
  );
}
