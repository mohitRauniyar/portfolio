import React from 'react'
import Banner from '../../components/Banner'
import ParticipationDetail from '../../components/ParticipationDetail'
import Title from '../noMoreDisconnectedDots/Title'
import SideNav from '../../components/SideNav'
import Footer from "../../components/Footer"
import { FaListAlt } from "react-icons/fa";

export default function Edip() {
  return (
    <>
          <SideNav />
          <div className="flex justify-center w-full bg-[#fafafa] dark:bg-[#000]">
            <div className="w-full md:w-7xl md:ml-20 flex flex-col scroll-smooth">
              <div className="flex flex-col">
    
    
                <Banner imageLink="/assets/noMoreDisconnectedDots/course_assignment.png" altText="Website Image"/>
    
    
    
                <div className="border-1 border-[#cfcfcf] dark:border-[#101110] bg-white dark:bg-black p-8 md:p-32">
                  <Title title="Movement Toward Inclusive Technology" domain="Application"/>
                  <div className="flex xl:flex-row flex-col-reverse md:gap-32 gap-16  pt-8 font-stretch-expanded">
                    <div className="">
                      <h2 className="text-xl lg:text-2xl font-semibold dark:text-white w-fit py-8">At-A-Glance</h2>
                      <p className="lg:text-2xl text-xl p-4 pl-0  text-[#666964] dark:text-[#8d8d8d]">The digital world continues to evolve at an unprecedented pace, yet a significant portion of the population—particularly the elderly—remains disconnected. "Bridging the Gaps" was conceived as a **digital inclusion platform** designed to empower older adults with digital literacy, enabling them to navigate technology confidently.</p>
                    </div>
                    <div className="">
                      {/* <img src="/assets/noMoreDisconnectedDots/course_feedback.png" alt="" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-cover object-contain xl:mt-0 mt-8"/> */}
                      {/* <iframe src="https://lottie.host/embed/6236096a-34bb-4e40-b7fa-f06b65e35e9c/McwtSbGhFB.lottie" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-cover object-contain xl:mt-0 mt-8"></iframe> */}
                      <iframe src="https://lottie.host/embed/091a66a6-5fb8-40b5-9909-ba58e042cfb7/xFXp24EfZV.lottie" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-cover object-contain xl:mt-0 mt-8"></iframe>
                    </div>
                  </div>
                  <ParticipationDetail prop={{"participationType": "Team Project", "role":["Scrum Master", "Frontend Developement", "Database Design"], "timeline": "February 2025 - April 2025"}}/>
                </div>
    
    
    
                <div className="border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>
                
                
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
                  <div className="mb-8">
                    <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">01. DISCOVER</h1>
                    <p className='text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center'>Understanding the Digital Divide</p>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">In fast-paced companies, <b>learning isn’t optional—it’s a necessity</b>. As new technologies emerge and project requirements shift, employees must adapt quickly to deliver high-quality products.</p>
                  </div>
                  
                  <div>
                  <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8'>Starting thoughts...</p>
                  <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Missed deadlines, inefficiencies, and inconsistent product quality</h2>
                  <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
                    <div className="">
                      <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8'>There was no structured system to ensure employees learned the right skills at the right time. This lack of alignment led to missed deadlines, inefficiencies, and inconsistent product quality.</p>
                    </div>
                    <div className="">
                      {/* <img src="/assets/noMoreDisconnectedDots/course_feedback.png" alt="" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"/> */}
                      <iframe src="https://lottie.host/embed/97ed338e-f9a5-4e23-9f2d-9d8a74e86489/lqQtzmumTL.lottie" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"></iframe>
                      {/* <iframe src="https://lottie.host/embed/485adc8f-83c0-4b6a-83a4-e96929ee9694/qB4mUmmarw.lottie" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"></iframe> */}
                    </div>
                  </div>
                  </div>
                  <div className="lg:my-16">
                    <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8'>The Oppurtunity</p>
                    <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Employee Training Platform</h2>
                      <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'>Build a centralized Employee Training Platform that seamlessly connects learning to project needs.</p>
                    </div>
                  </div>
    
                  <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] mt-32">But we found a disconnect between learning and execution:</p>
    
                  <div className="flex flex-col gap-8 lg:mt-0 -mt-8">
                    <div className="flex flex-col gap-4 bg-[#eee] dark:bg-[#111] rounded-xl p-16 text-lg">
                      <p className="text-center text-xl text-[#444] dark:text-[#aaa]"><i>"We do see skill gaps for there are a number of variety of projects, but we lack a structured way to request training."</i></p>
                      <p className="text-right text-[#444] dark:text-[#aaa]"><i>- Managers</i></p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#eee] dark:bg-[#111] rounded-xl p-16 text-lg">
                      <p className="text-center text-xl text-[#444] dark:text-[#aaa]"><i>"There are many fragmented requests from different managers of different departments. This leads to inefficiencies in course creation and assignment."</i></p>
                      <p className="text-right text-[#444] dark:text-[#aaa]"><i>- Trainers</i></p>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#eee] dark:bg-[#111] rounded-xl p-16 text-lg">
                      <p className="text-center text-xl text-[#444] dark:text-[#aaa]"><i>"I try to upskill but struggled with unstructured learning resources that did not align with project demands."</i></p>
                      <p className="text-right text-[#444] dark:text-[#aaa]"><i>- Employee</i></p>
                    </div>
                  </div>
                </div>
    
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>
    
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
                  <div className="mb-8">
                    <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">02. EMPATHIZE</h1>
                    <p className='text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center'>Understanding the user and the requirements.</p>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">To design a <b>meaningful</b> solution, we needed to understand the people who would use it.</p>
                  </div>
                  <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8'>Perspective Analysis</p>
                  <div className="flex flex-col xl:flex-row gap-2 justify-evenly text-black dark:text-white">
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                      <h3 className="text-center my-8 text-2xl">Manager</h3>
                      <ul className="flex flex-col text-[#4e4e4d] dark:text-[#adadad] my-12 gap-8 list-disc">
                        <li>noticed skill gaps in their teams but had no easy way to request training.</li>
                        <li>wanted employees to learn specific technologies for ongoing projects.</li>
                        <li>sometimes needed existing courses assigned instead of requesting new ones. </li>
                      </ul>
                    </div>
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                      <h3 className="text-center my-8 text-2xl">Trainer</h3>
                      <ul className="flex flex-col text-[#4e4e4d] dark:text-[#adadad] my-12 gap-8 list-disc">
                        <li>received training requests in different formats and lacked a centralized system to manage them.</li>
                        <li>had to manually track which employees had completed training.</li>
                        <li>lacked a way to monitor the effectiveness of the courses. </li>
                      </ul>
                    </div>
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                      <h3 className="text-center my-8 text-2xl">Employee</h3>
                      <ul className="flex flex-col text-[#4e4e4d] dark:text-[#adadad] my-12 gap-8 list-disc">
                        <li>had no structured learning path aligned with real-world project needs</li>
                        <li>often didn’t know which skills were essential for their roles.</li>
                        <li>couldn’t track their progress or provide structured feedback.</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">By immersing ourselves in these challenges, I understood that a simple training portal wouldn’t be enough—I needed a <b>dynamic, role-driven system</b> that integrates seamlessly with the company’s workflow.</p>
                  </div>
                </div>
    
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>
    
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
                  <div className="mb-8">
                    <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">03. IDEATE</h1>
                    <p className='text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center'>Designing the Ideal Solution</p>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">With a deep understanding of the problem, we outlined key features that would bring all stakeholders onto the same platform and ensure a smooth, structured learning experience.</p>
                  </div>
                  
                  <div className="flex flex-col xl:gap-64 gap-32">
                    <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <div className="">
                        <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Requesting for Course</h2>
                        <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8'>Managers can request training for employees based on project requirements.</p>
                      </div>
                      <div className="">
                        <img src="/assets/noMoreDisconnectedDots/course_feedback.png" alt="" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"/>
                      </div>
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <div className="">
                        <img src="/assets/noMoreDisconnectedDots/course_assignment.png" alt="" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"/>
                      </div>
                      <div className="">
                        <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Modular Course Creation</h2>
                        <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8'>Admins can create new courses or assign existing ones to employees.</p>
                      </div>
                    </div>
                    <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <div className="">
                        <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Easy tracking of courses</h2>
                        <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8'>Employees can view the courses assigned to them, complete the modules and track their progress.</p>
                      </div>
                      <div className="">
                        <img src="/assets/noMoreDisconnectedDots/course_dashboard.png" alt="" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"/>
                      </div>
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <div className="">
                        <img src="/assets/noMoreDisconnectedDots/course_feedback_submission.png" alt="" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"/>
                      </div>
                      <div className="">
                        <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Feedback Oriented</h2>
                        <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8'>Employees can provide feedback on their assignments and Admins can view the feedback metrics to improve the course and view course performance.</p>
                      </div>
                    </div>
                    <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <div className="">
                        <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Progress Tracking</h2>
                        <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] my-8'>Employees and admins can easliy monitor course completion.</p>
                      </div>
                      <div className="">
                        <img src="/assets/noMoreDisconnectedDots/course_feedback.png" alt="" className="lg:min-w-96 max-w-[600px] align-middle m-auto h-full w-full xl:object-contain object-contain xl:mt-0 mt-8"/>
                      </div>
                    </div>
                    <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Role Based Access Control</h2>
                      <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'> Ensures that each user type has access to only relevant actions.</p>
                    </div>
                    <div className="flex xl:flex-row flex-col-reverse lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'>Ensures only authorized users can access the system with the help of JWT authentication token. </p>
                      <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Secure Access</h2>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center my-32">With this blueprint, we were ready to bring the platform to life.</p>
                  </div>
                </div>
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
                  <div className="mb-8">
                    <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">04. PROTOTYPING</h1>
                    <p className='text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center'>Laying the Foundation</p>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">A powerful system needs a strong technical foundation. We designed the platform with a scalable and optimized architecture.</p>
                  </div>
                  
                  <div>
                    <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8'>Backend Design</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">MySQL Database</h2>
                    <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'>To get a better understanding of database design, entities were defined and class diagrams were made for the entities and the service interfaces which i later changed into an ER Diagram.</p>
                    <img src="/assets/noMoreDisconnectedDots/erDiagram.png" alt=""  className="w-full my-16"/>
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">Spring Boot Framework</h2>
                    <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'> Ensures a secure, fast, and scalable backend. I designed the class diagrams for servuce interfaces that needed to be implemented.</p>
                    <img src="/assets/noMoreDisconnectedDots/interface_design.png" alt="" className="w-full my-16" />
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">MVC Design Pattern</h2>
                    <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'>The MVC (Model-View-Controller) design pattern breaks an application into three parts: the Model (which handles data), the View (which is what users see), and the Controller (which connects the two). This makes it easier to work on each part separately, so you can update or fix things without messing up the whole app.  MVC helps keep everything organized and improves the quality of the software.</p>
                    <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-32 my-8 mt-32 flex items-center'> A Role-based Access Control was added with three different roles: Admin, Manager and, Employee.</p>
                    <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8 mt-32'>Frontend Design</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">ReactJS</h2>
                    <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'> Delivers a smooth, interactive experience.</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">React Hot Toast</h2>
                    <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'> To display toast notifications in real-time, without requiring a full page reload. </p>
                  </div>
                  <div className="lg:my-16">
                    <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8'></p>
                    <div className="flex xl:flex-row flex-col lg:gap-16 xl:gap-32 gap-8 pt-8">
                      <h2 className="text-3xl lg:text-5xl font-semibold dark:text-white w-fit py-8">The Result?</h2>
                      <p className='text-xl lg:text-2xl text-[#666964] dark:text-[#8d8d8d] xl:my-8 flex items-center'>Just a seamless, structured learning ecosystem designed for efficiency and growth.</p>
                    </div>
                  </div>
    
                  <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] mt-32 text-center">A company where employees learn what they need, exactly when they need it.</p>
    
                  
                </div>
    
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-12"></div>
    
                <div className="flex flex-col gap-28 border-1 border-[#cfcfcf] dark:border-[#101110] p-8 md:p-32 bg-white dark:bg-black">
                  <div className="mb-8">
                    <h1 className="md:text-5xl text-3xl text-center font-light text-black dark:text-white mt-16 mb-4 lg:mb-8">05. Reflection</h1>
                    <p className='text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center'>No More Disconnected Dots.</p>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center mb-8">Lessons, Challenges & The Road Ahead</p>
                  </div>
                  <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8'>Lessons Learned</p>
                  <div className="flex flex-col xl:flex-row gap-2 justify-evenly text-black dark:text-white">
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                      <h3 className="text-center my-8 text-2xl">User-Centric Design is the Key</h3>
                      
                    </div>
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                      <h3 className="text-center my-8 text-2xl">Efficiency & Scalability Must Go Hand in Hand</h3>
                      
                    </div>
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                      <h3 className="text-center my-8 text-2xl">Security Can’t Be an Afterthought</h3>
                      
                    </div>
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8">
                      <h3 className="text-center my-8 text-2xl">Incremental Development & Testing Pays Off</h3>
                      
                    </div>
                  </div>
                  <p className='text-md md:text-xl font-semibold text-black dark:text-white py-8'>Future Enhancements & Roadmap</p>
                  <div className="flex flex-col gap-2 text-black dark:text-white">
                    <div className="bg-[#d4fff570] dark:bg-[#3370622f] md:p-10 p-8 text-left">
                      <div className="my-8 text-2xl flex gap-8"><div className="flex items-center"><FaListAlt /></div><h3 className="text-2xl">User-Centric Design is the Key</h3></div>
                      <div className="my-8 text-2xl flex gap-8"><div className="flex items-center"><FaListAlt /></div><h3 className="text-2xl">Efficiency & Scalability Must Go Hand in Hand</h3></div>
                      <div className="my-8 text-2xl flex gap-8"><div className="flex items-center"><FaListAlt /></div><h3 className="text-2xl">Security Can’t Be an Afterthought</h3></div>
                      <div className="my-8 text-2xl flex gap-8"><div className="flex items-center"><FaListAlt/> </div><h3 className="text-2xl">Incremental Development & Testing Pays Off</h3></div>
                      
                    </div>
                  </div>
                  <div>
                    <p className="text-lg lg:text-2xl text-[#666964] dark:text-[#8d8d8d] text-center my-32">With the final version deployed, the platform transformed the way training happens inside the company.</p>
                  </div>
                </div>
    
    
    
    
              </div>
              
              
    
    
    
              <Footer/>
            </div>
          </div>
        </>
  )
}
