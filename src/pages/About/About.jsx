import React from "react";
import SideNav from "../../components/SideNav";
import ProfileCard from "./ProfileCard";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <SideNav />
      <div className="flex justify-center w-full bg-[#fafafa] dark:bg-[#000] min-h-screen">
        <div className="w-full md:w-7xl md:ml-20 flex flex-col scroll-smooth">
          <div className="flex flex-col">
            <ProfileCard />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
