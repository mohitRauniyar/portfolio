import React from "react";
import ParticipationDetail from "../../components/ParticipationDetail";
import Title from "../noMoreDisconnectedDots/Title";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import { FaCheck, FaListAlt } from "react-icons/fa";
import BannerWithMobileView from "./BannerWithMobileView";
import MobileDataChart from "./MobileDataChart";
import DigitalDivideChart from "./DigitalDivideChart";
import UserPersonaCarousel from "./UserPersonaCarousel";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { BiMinusCircle } from "react-icons/bi";
import { TbCirclePlus } from "react-icons/tb";
import { SiGithub } from "react-icons/si";


export default function Edip() {
  return (
    <>
      <SideNav />
      <div className="flex justify-center w-full bg-[#fafafa] dark:bg-[#000]">
        <div className="w-full md:w-7xl md:ml-20 flex flex-col scroll-smooth">
          <div className="flex flex-col">
            <BannerWithMobileView
              imageLinks={[
                "assets/bridgingTheGaps/register.png",
                "assets/bridgingTheGaps/login.png",
              ]}
              altText="Website Image"
            />

            <div className="border-1 border-[#cfcfcf] dark:border-[#101110] bg-white dark:bg-black p-8 md:p-32">
              <Title
                title="Movement Toward Inclusive Technology"
                domain="Application"
              />
              <a href="https://github.com/mohitRauniyar/Tutex" target="_blank" className="dark:text-black text-white p-4 px-8 my-16 text-2xl flex gap-8 rounded-lg bg-black dark:bg-white w-fit"><SiGithub /> View Code Repository</a>
              
              <div className="flex xl:flex-row flex-col-reverse md:gap-32 gap-16  pt-8 font-stretch-expanded">
                <div className="">
                  <h2 className="text-xl lg:text-2xl font-semibold dark:text-white w-fit py-8">
                    At-A-Glance
                  </h2>
                  <p className="lg:text-2xl text-xl p-4 pl-0  text-[#666964] dark:text-[#8d8d8d]">
                    The digital world continues to evolve at an unprecedented
                    pace, yet a significant portion of the
                    population—particularly the elderly—remains disconnected.
                    <strong>
                      <i> Tutex</i>
                    </strong>{" "}
                    was conceived as a digital inclusion platform designed to
                    empower older adults and digitally awkward people with
                    digital literacy, enabling them to navigate technology
                    confidently.
                  </p>
                </div>
                <div className="">
                  <iframe
                    src="https://lottie.host/embed/814d9ada-6312-4a51-89bc-6af8bf830803/7jSBYTrS3V.lottie"
                    className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-cover object-contain xl:mt-0 mt-8"
                  ></iframe>
                </div>
              </div>
              <ParticipationDetail
                prop={{
                  participationType: "Team Project",
                  role: [
                    "Scrum Master",
                    "Frontend Developement",
                    "Database Design",
                  ],
                  timeline: "February 2025 - May 2025",
                }}
              />
            </div>

            <div className="border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
              <div className="mb-8">
                <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
                  01. DISCOVER
                </h1>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
                  Understanding the Digital Divide
                </p>
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
                  Despite the increasing integration of technology in daily
                  life, elderly and digitally-new individuals often face
                  barriers to digital adoption.
                  <br />
                  <br />
                </p>
              </div>

              <div>
                <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
                  To validate this hypothesis, we conducted an initial research
                  phase.
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  The Digital Growth in India
                </h2>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] mt-16">
                  The mobile data usage and penetration is increasing linearly
                  and steadily as per the reseaches and studies done by scholars
                  and data institutions.
                </p>
                <div className="xl:pt-24 pt-8 scale-[80%]">
                  <MobileDataChart />
                </div>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] mt-16">
                  Despite the rapid growth in internet connectivity, digital
                  literacy, especially in rural areas, has not kept pace
                  proportionally, highlighting a persistent digital divide.
                </p>
                <div className="xl:pt-24 pt-8 scale-[80%]">
                  <DigitalDivideChart />
                </div>
                <div className="my-12">
                  <p className="font-semibold text-xl dark:text-[#aaa] text-[#444]">
                    "Has the growth in digital literacy kept pace with the rapid
                    advancement of digitalization?"
                  </p>
                  <p className="p-8 my-8 text-2xl font-semibold italic rounded-2xl bg-[#eee] dark:bg-[#111] text-[#000] dark:text-[#fff]">
                    No.
                  </p>
                </div>
              </div>
              <div className="lg:my-16">
                <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
                  The Barriers
                </p>
                <div className="flex flex-col gap-16">
                  <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                    <img
                      src="/assets/bridgingTheGaps/overload.png"
                      alt=""
                      className="w-48 dark:invert-100"
                    />
                    <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                      Many users find modern interfaces too complex and
                      unintuitive.
                    </p>
                  </div>
                  <div className="flex xl:flex-row-reverse flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                    <img
                      src="/assets/bridgingTheGaps/incapabilities.png"
                      alt=""
                      className="w-60 dark:invert-100"
                    />
                    <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                      Impaired vision, hearing loss, and motor difficulties
                      hinder digital interaction.
                    </p>
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-32">
                  <img
                    src="/assets/bridgingTheGaps/fear.png"
                    alt=""
                    className="w-40"
                  />
                  <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                    Fear of security risks, making mistakes, or breaking devices
                    prevents active engagement.
                  </p>
                </div>
                <p className="text-xl lg:text-2xl text-[#595c58] dark:text-[#a3a2a2] mt-8 xl:my-32 flex items-center">
                  Beyond these individual challenges, societal factors like the
                  lack of accessible training resources and limited peer support
                  further widen the gap. It became clear that a
                  one-size-fits-all solution would not work—what was needed was
                  an intuitive, supportive, and adaptive learning experience.
                </p>
              </div>
              
              <div className="-mt-8">
                <p className="text-xl md:text-2xl text-black dark:text-white py-8">
                  Is there a good solution?
                </p>
                <p className="text-2xl md:text-4xl text-[#444] text-center dark:text-[#cfcfcf] py-8">
                  Competitor Analysis
                </p>
                <p className="text-md lg:text-lg text-[#666964] dark:text-[#8d8d8d] p-12 xl:px-32 flex items-center">
                  I started off by monitoring direct and indirect competitors that provide similar concepts to my product: walkthrough, training or hands-on practice. By doing so, I was able to gather ideas and solutions for improving the user experience by implementing different features.
                </p>
                <div className="flex flex-col my-16 xl:flex-row gap-8 justify-evenly items-stretch">
                  <div className="bg-[#eee] dark:bg-[#222] text-[#444] dark:text-[#cfcfcf] flex flex-col items-center justify-center xl:w-[32%] p-4">
                    <img src="/assets/bridgingTheGaps/TechLifeUnity.png" alt="" className="w-20 h-20"/>
                    <p className="text-center font-semibold my-4">Tech Life Unity</p>
                    <ul className="w-full p-4 flex flex-col gap-2">
                      <li><BiMinusCircle className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>No hands-on practice</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>No multi-language support</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>Only how-to text blogs</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>Website-based deployment</li>
                      <li><TbCirclePlus  className="inline text-green-600 text-2xl font-extrabold mr-2 -ml-2"/>Includes pictures of interfaces</li>
                      <li><TbCirclePlus  className="inline text-green-600 text-2xl font-extrabold mr-2 -ml-2"/>Step-wise instructions</li>   
                      <li><TbCirclePlus  className="inline text-green-600 text-2xl font-extrabold mr-2 -ml-2"/>No account creation needed</li>   
                    </ul>
                  </div>
                  
                  <div className="bg-[#eee] dark:bg-[#222] text-[#444] dark:text-[#cfcfcf] flex flex-col items-center xl:w-[32%] p-4">
                    <img src="/assets/bridgingTheGaps/seekho.png" alt="" className="w-20 h-20"/>
                    <p className="text-center font-semibold my-4">Seekho App</p>
                    <ul className="w-full p-4 flex flex-col gap-2">
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>No hands-on practice</li>
                      <li><BiMinusCircle className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>Video-based courses</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>No specific task-based tutorial</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>Complex UPI AutoPay setup</li>
                      <li><TbCirclePlus  className="inline text-green-600 text-2xl font-extrabold mr-2 -ml-2"/>Skill-based courses</li>
                      <li><TbCirclePlus  className="inline text-green-600 text-2xl font-extrabold mr-2 -ml-2"/>Professional experienced teachers</li>   
                    </ul>
                  </div>
                  
                  <div className="bg-[#eee] dark:bg-[#222] text-[#444] dark:text-[#cfcfcf] flex flex-col items-center xl:w-[32%] p-4">
                    <img src="/assets/bridgingTheGaps/youtube.png" alt="" className="w-20 h-20"/>
                    <p className="text-center font-semibold my-4">Youtube</p>
                    <ul className="w-full p-4 flex flex-col gap-2">
                      <li><BiMinusCircle className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>No hands-on practice</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>No repetitive walkthroughs</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>Too many options to choose from</li>
                      <li><BiMinusCircle  className="inline text-red-600 text-2xl font-extrabold mr-2 -ml-2"/>Too many distractions</li>
                      <li><TbCirclePlus  className="inline text-green-600 text-2xl font-extrabold mr-2 -ml-2"/>Available in multiple languages</li>
                      <li><TbCirclePlus  className="inline text-green-600 text-2xl font-extrabold mr-2 -ml-2"/>Available in many varieties</li>   
                    </ul>
                  </div>
                  
                </div>
              </div>

              <div className="-mt-8">
                
                <p className="text-2xl md:text-4xl text-[#444] text-center dark:text-[#cfcfcf] py-8">
                  Prioritization Matrix
                </p>
                <p className="text-md lg:text-lg text-[#666964] dark:text-[#8d8d8d] p-12 xl:px-32 flex items-center">
                  I used a 2 x 2 prioritization matrix to categorize the needs based on users' necessity and priority. MoSCoW model was used for this. Then, the Minimum Viable Product (MVP) features of the product was decided.
                </p>
                <div className="flex flex-col my-16 xl:flex-row gap-0 justify-evenly items-stretch">
                  <div className="bg-[#83ec9a] text-[#444]  flex flex-col items-center justify-center xl:w-[25%] p-4">
                    <p className="text-center font-semibold my-4">Must Do</p>
                    <ul className="w-full p-4 flex flex-col gap-2">
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Hands-On walkthrough modules</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Repetitive Practice Availability</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Progress Tracking</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Easy Navigation</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Minimalistic Design</li>
                    </ul>
                  </div>
                  <div className="bg-[#83ec9ad5] text-[#444]  flex flex-col items-center xl:w-[25%] p-4">
                    <p className="text-center font-semibold my-4">Should Do</p>
                    <ul className="w-full p-4 flex flex-col gap-2">
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Account Management</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Multiple-language Support</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>High Accessibility (both audio and visual)</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Hint button</li>
                    </ul>
                  </div>
                  <div className="bg-[#83ec9aa9] text-[#444] dark:text-[#cfcfcf] flex flex-col items-center xl:w-[25%] p-4">
                    <p className="text-center font-semibold my-4">Could Do</p>
                    <ul className="w-full p-4 flex flex-col gap-2">
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>AI Chat-Bot</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Journey Tracking</li>
                    </ul>
                  </div>
                  <div className="bg-[#83ec9a5b] text-[#444] dark:text-[#cfcfcf] flex flex-col items-center xl:w-[25%] p-4">
                    <p className="text-center font-semibold my-4">Won't Do</p>
                    <ul className="w-full p-4 flex flex-col gap-2">
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Gamification</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>AutoPay Subscription model</li>
                      <li><FaCheck className="inline text-green-600 text-2xl mr-2 -ml-2"/>Mobile Notifications</li>
                    </ul>
                  </div>
                  
                  
                  
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
              <div className="mb-8">
                <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
                  02. EMPATHIZE
                </h1>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
                  Engaging with the Users
                </p>
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
                  To design a <b>meaningful</b> solution, we needed to
                  understand the people who would use it.
                </p>
              </div>
              <p className="text-xl md:text-2xl font-semibold text-black dark:text-white py-8">
                User Personas
              </p>
              <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
                Based on our research, we crafted three primary user personas:
              </p>

              <div className="">
                <UserPersonaCarousel />
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
                These personas helped shape our design decisions, ensuring an inclusive and user-centric approach.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
              <div className="mb-8">
                <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
                  03. IDEATE
                </h1>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
                  Designing the Ideal Solution
                </p>
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
                  With a deep understanding of the problem, we outlined key
                  features that would bring all stakeholders onto the same
                  platform and ensure a smooth, structured learning experience.
                </p>
              </div>

              <div className="flex flex-col xl:gap-64 gap-32">
              <p className="text-xl md:text-2xl font-semibold text-black dark:text-white py-8 text-center">
                  Crazy-8s
                </p>
                <p className="text-lg lg:text-xl text-[#666964] dark:text-[#8d8d8d] xl:-my-48 -my-24 flex items-center">
                  After having done research and narraowing down MVPs, I started stektching the ideas on a paper divided by eight containers. Allocating one minute per container, I could come up with various ideas and solutions for my product  
                </p>
              <div>

              <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
                   Understanding the Data
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  MySQL Database Design
                </h2>
                <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
                   Entity-Relationship Diagram
                </p>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                  TO understand the storage of data ER diagram was made to understand the tables to be stored in mySQL database.  
                </p>
                <img
                  src="/assets/bridgingTheGaps/erDiagram.png"
                  alt=""
                  className="w-full my-16 xl:scale-75"
                />
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  Express Framework
                </h2>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                  {" "}
                  Ensures a fast, robust-routing, and scalable backend.
                </p>
                <img
                  src="/assets/noMoreDisconnectedDots/interface_design.png"
                  alt=""
                  className="w-full my-16"
                  />
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  MVC Design Pattern
                </h2>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                  The MVC (Model-View-Controller) design pattern breaks an
                  application into three parts: the Model (which handles data),
                  the View (which is what users see), and the Controller (which
                  connects the two). This makes it easier to work on each part
                  separately, so you can update or fix things without messing up
                  the whole app. MVC helps keep everything organized and
                  improves the quality of the software.
                </p>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-32 my-8 mt-32 flex items-center">
                  {" "}
                  A Role-based Access Control was added with three different
                  roles: Admin, Manager and, Employee.
                </p>
                <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8 mt-32">
                  Frontend Design
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  ReactJS
                </h2>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                  {" "}
                  Delivers a smooth, interactive experience.
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  React Hot Toast
                </h2>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                  {" "}
                  To display toast notifications in real-time, without requiring
                  a full page reload.{" "}
                </p>
                  </div>
                <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                  
                  <div className="">
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                      Requesting for Course
                    </h2>
                    <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
                      Managers can request training for employees based on
                      project requirements.
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="/assets/noMoreDisconnectedDots/course_feedback.png"
                      alt=""
                      className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
                    />
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
                  <div className="">
                    <img
                      src="/assets/noMoreDisconnectedDots/course_assignment.png"
                      alt=""
                      className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                      Modular Course Creation
                    </h2>
                    <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
                      Admins can create new courses or assign existing ones to
                      employees.
                    </p>
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                  <div className="">
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                      Easy tracking of courses
                    </h2>
                    <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
                      Employees can view the courses assigned to them, complete
                      the modules and track their progress.
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="/assets/noMoreDisconnectedDots/course_dashboard.png"
                      alt=""
                      className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
                    />
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
                  <div className="">
                    <img
                      src="/assets/noMoreDisconnectedDots/course_feedback_submission.png"
                      alt=""
                      className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                      Feedback Oriented
                    </h2>
                    <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
                      Employees can provide feedback on their assignments and
                      Admins can view the feedback metrics to improve the course
                      and view course performance.
                    </p>
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                  <div className="">
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                      Progress Tracking
                    </h2>
                    <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8">
                      Employees and admins can easliy monitor course completion.
                    </p>
                  </div>
                  <div className="">
                    <img
                      src="/assets/noMoreDisconnectedDots/course_feedback.png"
                      alt=""
                      className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"
                    />
                  </div>
                </div>
                <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                  <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                    Role Based Access Control
                  </h2>
                  <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                    {" "}
                    Ensures that each user type has access to only relevant
                    actions.
                  </p>
                </div>
                <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
                  <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                    Ensures only authorized users can access the system with the
                    help of JWT authentication token.{" "}
                  </p>
                  <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                    Secure Access
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center my-32">
                  With this blueprint, we were ready to bring the platform to
                  life.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
              <div className="mb-8">
                <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
                  04. PROTOTYPING
                </h1>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
                  Laying the Foundation
                </p>
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
                  A powerful system needs a strong technical foundation. We
                  designed the platform with a scalable and optimized
                  architecture.
                </p>
              </div>

              <div>
                <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
                   Understanding the user flow
                </p>
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  Use Case Diagram
                </h2>
                <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                  To get a better understanding of the journey of user in our application and understand dependencies, i crafted the usecase diagram considering a general tutorial course.
                </p>
                <img
                  src="/assets/bridgingTheGaps/usecaseDiagram.png"
                  alt=""
                  className="w-full my-16 xl:scale-75"
                />
                
                <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                  Lo-Fi Wireframing
                </h2>
                <div className="flex flex-col items-center xl:hidden pt-8">
                <img
                  src="/assets/bridgingTheGaps/wireframe1.png"
                  alt=""
                  className="w-full xl:scale-75"
                />
                <img
                  src="/assets/bridgingTheGaps/wireframe2.png"
                  alt=""
                  className="w-full xl:scale-75"
                />
                </div>
                <img
                  src="/assets/bridgingTheGaps/fullWireframe.png"
                  alt=""
                  className="w-full my-16 xl:block hidden"
                />

                
              </div>
              <div className="lg:my-16">
                <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8"></p>
                <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                  <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">
                    The Result?
                  </h2>
                  <p className="text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center">
                    Just a seamless, structured learning ecosystem designed for
                    efficiency and growth.
                  </p>
                </div>
              </div>

              <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] mt-32 text-center">
                A company where employees learn what they need, exactly when
                they need it.
              </p>
            </div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>

            <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
              <div className="mb-8">
                <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">
                  05. Reflection
                </h1>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center">
                  No More Disconnected Dots.
                </p>
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">
                  Lessons, Challenges & The Road Ahead
                </p>
              </div>
              <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
                Lessons Learned
              </p>
              <div className="flex flex-col xl:flex-row gap-2 justify-evenly text-black dark:text-white">
                <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                  <h3 className="text-center my-8 text-2xl">
                    User-Centric Design is the Key
                  </h3>
                </div>
                <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                  <h3 className="text-center my-8 text-2xl">
                    Efficiency & Scalability Must Go Hand in Hand
                  </h3>
                </div>
                <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                  <h3 className="text-center my-8 text-2xl">
                    Security Can’t Be an Afterthought
                  </h3>
                </div>
                <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                  <h3 className="text-center my-8 text-2xl">
                    Incremental Development & Testing Pays Off
                  </h3>
                </div>
              </div>
              <p className="text-md md:text-xl font-semibold text-black dark:text-white py-8">
                Future Enhancements & Roadmap
              </p>
              <div className="flex flex-col gap-2 text-black dark:text-white">
                <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8 text-left">
                  <div className="my-8 text-2xl flex gap-8">
                    <div className="flex items-center">
                      <FaListAlt />
                    </div>
                    <h3 className="text-2xl">User-Centric Design is the Key</h3>
                  </div>
                  <div className="my-8 text-2xl flex gap-8">
                    <div className="flex items-center">
                      <FaListAlt />
                    </div>
                    <h3 className="text-2xl">
                      Efficiency & Scalability Must Go Hand in Hand
                    </h3>
                  </div>
                  <div className="my-8 text-2xl flex gap-8">
                    <div className="flex items-center">
                      <FaListAlt />
                    </div>
                    <h3 className="text-2xl">
                      Security Can’t Be an Afterthought
                    </h3>
                  </div>
                  <div className="my-8 text-2xl flex gap-8">
                    <div className="flex items-center">
                      <FaListAlt />{" "}
                    </div>
                    <h3 className="text-2xl">
                      Incremental Development & Testing Pays Off
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center my-32">
                  With the final version deployed, the platform transformed the
                  way training happens inside the company.
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
