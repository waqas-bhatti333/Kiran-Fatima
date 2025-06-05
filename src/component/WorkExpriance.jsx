// import Aos from "aos";
// import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";

const WorkExperience = () => {
 // useEffect(() => {
 //  Aos.init({
 //   offset: 200,
 //   duration: 1200,
 //   easing: 'ease-out-back',
 //   delay: 100,
 //   once: false,
 //   mirror: true,
 //  });
 // }, []);
 return (
  <Fragment>
   <div id="resume">
    <h1 className=" font-bold text-center mb-8 text-white">
     Education & Work Experience
    </h1>
    <div className="flex justify-center text-start gap-2 p-2 md:p-2 lg:p-4 items-start">
     {/* Education Section */}
     <div className="px-2">
      <h1 className="text-2xl font-semibold mb-4 text-white">Education</h1>
      <div className="mb-6">
       <h1 className="text-xl font-medium text-white">Bachelor In Software Engineering</h1>
       <h2 className="text-lg text-gray-300">2023-2027</h2>
       <p className="text-gray-300">The Islamia University Of Bahawalpur</p>
      </div>

      <div className="mb-6">
       <h1 className="text-xl font-medium text-white">Intermediate</h1>
       <h2 className="text-lg text-gray-300">2020-2022</h2>
       <p className="text-gray-300">Punjab College Bahawalpur</p>
      </div>
     </div>


     <div className="w-1 h-[60vh] md:h-[37vh] rounded lg:h-[40vh] text-white bg-gradient-to-b from-[#FF014F] to-[#FF5733] mx-4"></div>


     <div className="text-wrap">
      <h1 className="text-2xl font-semibold mb-4 text-white"> Experience</h1>
      <div className="mb-2 lg:mb-6 md:mb-4">
       <h1 className="text-xl font-medium text-white">Flutter Developer </h1>
       <h2 className="text-lg text-gray-300">2025-Present</h2>
       <p className="text-gray-300">Codes Thinker Company (Onsite)</p>
      </div>

      <div className="mb-2 lg:mb-6 md:mb-4">
       <h1 className=" lg:text-xl text-sm font-medium text-white">Flutter Developer</h1>
       <h2 className="text-lg text-gray-300">2024-January</h2>
       <p className="text-gray-300 text-wrap">CAS Softwares Agency (Remote)</p>
      </div>
     </div>
    </div>
   </div>
  </Fragment>
 );
};

export default WorkExperience;