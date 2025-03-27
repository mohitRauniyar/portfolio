import React from "react";
import MobileView from "./MobileView";

export default function BannerWithMobileView({ imageLinks, altText }) {
  return (
    <div className="border-1 border-[#cfcfcf] dark:border-[#101110] bg-[#eee] dark:bg-[#111] w-full p-8">
      {/* Show all images on lg and above */}
      <div className="hidden lg:flex lg:gap-4 justify-evenly">
        {imageLinks.map((imageLink, index) => (
          <MobileView key={index} imageUrl={imageLink} altText={altText} />
        ))}
      </div>

      {/* Show only the first image on smaller screens */}
      <div className="flex lg:hidden justify-center">
        <MobileView imageUrl={imageLinks[0]} altText={altText} />
      </div>
    </div>
  );
}
