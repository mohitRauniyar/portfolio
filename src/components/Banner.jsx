import React from "react";

export default function Banner({imageLink, altText}) {
  return (
    <div className="border-1 border-[#cfcfcf] dark:border-[#101110] bg-[#eee] dark:bg-[#111] p-8 lg:p-60 lg:pt-28 md:p-40 md:pt-20">
      <div className="flex flex-col justify-center">
        <div className="rounded-xl border-5 border-black dark:border-[#777777] flex justify-center bg-black px-2 py-4 shadow-2xl shadow-[#363636d0] dark:shadow-[#201e1e]">
          <img
            src={`${import.meta.env.BASE_URL}${imageLink}`}
            alt={altText}
            className="object-contain rounded-sm"
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
