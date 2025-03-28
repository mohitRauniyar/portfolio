import React, { useContext } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../ThemeContext";

export default function BottomNav() {
  const { toggleTheme, setLight, setDark, theme } = useContext(ThemeContext);
  return (
    <div
      className={`fixed bottom-0 left-0 h-16 z-50 border-t-1 border-[#cfcfcf] w-full bg-gradient-to-b bg-white dark:from-[#0E0E0E] dark:to-[#161616] flex md:hidden justify-around items-center text-black dark:text-[#c9c3c3]`}
    >
      <div className="">

      <Link to="/" className="text-lg flex flex-col items-center justify-center gap-1">
        <RiHome2Line />
        <p className="text-sm">Home</p>
      </Link>
      </div>
      <div className="">

      <Link to="/about" className="text-lg flex flex-col items-center justify-center gap-1">
        <CgProfile />
        <p className="text-sm">About me</p>
      </Link>
      </div>
      <div className="">
        <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg flex flex-col items-center justify-center gap-1">
          <IoDocumentAttachOutline />
          <p className="text-sm">Resume</p>
        </a>
      </div>

      {theme == "light" ? (
        <AiOutlineMoon
          onClick={() => setDark()}
          className={`cursor-pointer ${
            theme == "dark" ? "bg-[#9da39c] text-black" : ""
          } rounded-full p-1 text-3xl`}
        />
      ) : (
        <AiOutlineSun
          onClick={() => setLight()}
          className={`cursor-pointer ${
            theme == "light" ? "bg-[#9da39c] " : ""
          } rounded-full p-1 text-3xl`}
        />
      )}
    </div>
  );
}
