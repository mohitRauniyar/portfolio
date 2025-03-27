import React from "react";
import MobileView from "../pages/bridgingTheGaps/MobileView";

export default function TitleImageDescription({title, imageUrl, altText, description}) {
  return (
    <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8 items-center">
      <div className="xl:w-[50%]">
        <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
          {title}
        </h2>
        <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
          {description}
        </p>
      </div>
      <div className="xl:w-[50%] xl:p-20 p-8">
        <MobileView imageUrl={imageUrl} altText={altText}/>
      </div>
    </div>
  );
}
