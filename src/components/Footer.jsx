import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="flex flex-col mb-16 md:mb-0" id='footer'>
      <div className="border-1 border-[#cfcfcf] dark:border-[#101110] h-32" />

      <div className="flex lg:flex-row flex-col lg:gap-0 gap-20 border-1 border-[#cfcfcf] dark:border-[#101110] pt-28 pb-16 px-16 bg-white dark:bg-black justify-around">
        <div className=" py-4">
          <h1 className=" text-3xl bg-gradient-to-r from-[#6A988D] to-[#335f51] text-transparent bg-clip-text font-stretch-semi-expanded font-semibold">
            Mohit <br/>Rauniyar
          </h1>
        </div>
        <div className="flex flex-col gap-8">
          <h3 className="text-[#5c6456] font-bold">CRAFT</h3>
          <ul className="dark:text-[#969c91] text-[#222] flex flex-col gap-4">
            <li className="">
              <Link
                to="/project/infosys"
                className="text-lg hover:underline-offset-2 hover:underline font-semibold"
              >
                No More Disconnected Dots
              </Link>
            </li>
            <li className="">
              <Link
                to="/project/edip"
                className="text-lg hover:underline-offset-2 hover:underline font-semibold"
              >
                Bridging The Gap
              </Link>
            </li>
            <li className="">
              <Link
                to=""
                className="text-lg hover:underline-offset-2 hover:underline font-semibold"
              >
                No More Disconnected Dots
              </Link>
            </li>
            <li className="">
              <Link
                to=""
                className="text-lg hover:underline-offset-2 hover:underline font-semibold"
              >
                No More Disconnected Dots
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-8">
            
          <h3 className="text-[#5c6456] font-bold">CONTACT</h3>
          <ul className="dark:text-[#969c91] text-[#222] flex flex-col gap-4">
            <li className="">
              <a
                href="https://linkedin.com/in/mohit-kumar-rauniyar-984537291"
                className="text-lg font-semibold flex gap-2"
              >
                LinkedIn <MdOutlineArrowOutward/>
              </a>
            </li>
            <li className="">
              <a
                href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=mohitrauniyar0001@gmail.com&tf=1"
                className="text-lg font-semibold flex gap-2"
              >
                Mail <MdOutlineArrowOutward/>
              </a>
            </li>
            <li className="">
              <a
                href="https://wa.me/917892117698"
                className="text-lg font-semibold flex gap-2"
              >
                WhatsApp <MdOutlineArrowOutward/>
              </a>
            </li>
            
          </ul>
        </div>
        
      </div>
    </div>
  );
}
