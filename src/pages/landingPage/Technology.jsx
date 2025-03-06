import React from "react";

export default function Technology({ props }) {
  return (
    <>
      <div className="flex md:flex-row flex-wrap gap-4 text-white text-sm lg:text-md">
        
        {props.map((tech) => (
          <div key={tech} className="bg-[#192a25bf] p-3 rounded-md w-fit hover:bg-[#375a5070]">
            {tech}
          </div>
        ))}
      </div>
      
    </>
  );
}
