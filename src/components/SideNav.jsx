import React, { useContext, useState } from "react";
import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";
import { ThemeContext } from "../../ThemeContext";
import { RiHome2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp, IoDocumentAttachOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { toggleTheme, setLight, setDark, theme } = useContext(ThemeContext);

  return (
    <div
      className={`fixed bottom-0 left-0 h-screen z-20 border-r-1 border-[#cfcfcf] ${
        isCollapsed ? "w-20" : "w-48"
      } transition-all duration-300 bg-gradient-to-b bg-white dark:from-[#0E0E0E] dark:via-[#2B312D] dark:to-[#161616] md:flex hidden flex-row justify-center pb-12 pt-4 text-black dark:text-[#c9c3c3]`}
    >
      <div className="flex flex-col justify-between mt-8">
        <div className="flex flex-col justify-center gap-16">
          <button
            className={`focus:outline-none w-full flex ${
              isCollapsed ? "justify-center" : "justify-between text-2xl"
            }`}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <GiHamburgerMenu />
            ) : (
              <>
                <p className="inline text-lg italic font-semibold -mt-1">MR</p>
                <IoCloseSharp />
              </>
            )}
          </button>
          <div className="mt-24  ">
            <ul className="flex flex-col gap-8 w-full">
              <li>
                <Link
                  to="/"
                  className="flex items-center dark:hover:bg-gray-950 hover:bg-[#acbba9] rounded-md text-xl px-3 py-2"
                >
                  <RiHome2Line />
                  {!isCollapsed && <span className="ml-4">Home</span>}
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="flex items-center dark:hover:bg-gray-950 hover:bg-[#acbba9] rounded-md text-xl px-3 py-2"
                >
                  <CgProfile />
                  {!isCollapsed && <span className="ml-4">About</span>}
                </Link>
              </li>

              <li>
                <a
                  href="/assets/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center dark:hover:bg-gray-950 hover:bg-[#acbba9] rounded-md text-xl px-3 py-2"
                >
                  <IoDocumentAttachOutline />
                  {!isCollapsed && <span className="ml-4">Resume</span>}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`flex ${
            isCollapsed ? "flex-col gap-8" : "flex-row justify-evenly"
          }  text-black dark:text-white text-2xl`}
        >
          <AiOutlineMoon
            onClick={() => setDark()}
            className={`cursor-pointer ${
              theme == "dark" ? "bg-[#9da39c] text-black" : ""
            } rounded-full p-1 text-3xl`}
          />
          <AiOutlineSun
            onClick={() => setLight()}
            className={`cursor-pointer ${
              theme == "light" ? "bg-[#9da39c] " : ""
            } rounded-full p-1 text-3xl`}
          />
        </div>
      </div>
    </div>
  );
}
