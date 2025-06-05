import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaLaptopCode, FaCode, FaServer, FaPlug, FaMobileAlt, FaCloudUploadAlt } from "react-icons/fa";


const Services = () => {
 useEffect(() => {
  Aos.init({
   offset: 200,
   duration: 1200,
   easing: 'ease-out-back',
   delay: 100,
   once: false,
   mirror: true,
  });
 }, []);
 const myServices = [
  {
   icon: <FaLaptopCode className="text-3xl text-[#FF014F]" />,
   title: "Mobile App Development",
   descrp: "Mobile app development creates software for smartphones, emphasizing design, performance, and cross-platform compatibility."
  },
  {
   icon: <FaCode className="text-3xl text-[#FF014F]" />,
   title: "UI/UX Design",
   descrp: "focuses on creating user-friendly interfaces (UI) and ensuring a smooth, intuitive user experience (UX) in digital products like websites and mobile apps."
  },
  {
   icon: <FaServer className="text-3xl text-[#FF014F]" />,
   title: "Firebase Integration",
   descrp: "Firebase integration connects apps to backend services like authentication, database, storage, and push notifications."
  },
  {
   icon: <FaPlug className="text-3xl text-[#FF014F]" />,
   title: "API Integration",
   descrp: "Seamlessly integrate third-party APIs, payment gateways, and authentication systems to enhance application features and connectivity."
  },
  {
   icon: <FaMobileAlt className="text-3xl text-[#FF014F]" />,
   title: "App Maintenance & Bug Fixing",
   descrp: "ensures apps run smoothly by updating features, improving performance, and resolving technical issues regularly."
  },
  {
   icon: <FaCloudUploadAlt className="text-3xl text-[#FF014F]" />,
   title: "Deployment to App Stores",
   descrp: "involves publishing the app on platforms like Google Play and Apple App Store after meeting guidelines and testing."
  }
 ];
 const animations = ["fade-up", "fade-up", "fade-up", "fade-up", "fade-up", "fade-up"];
 const selectAnimation = (index) => animations[index % animations.length];


 return (
  <Fragment>
   <div id="services">

    <div className="flex justify-center items-center mt-3.5 p-6">
     <h1 className="text-white text-5xl font-bold">My Services</h1>
    </div>


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
     {myServices.map((item, index) => (
      <div
       data-aos={selectAnimation}
       data-aos-delay={`${index * 100}`}

       key={index}
       className="flex group cursor-pointer flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-all duration-700  hover:bg-gradient-to-r from-[#ff416c] to-[#ff4b2b]"
      >

       <div className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-700 group-hover:bg-white transition-all duration-300">
        {item.icon}
       </div>


       <h1 className="text-white text-xl font-semibold mt-3">{item.title}</h1>
       <p className="text-gray-300 text-start mt-2">{item.descrp}</p>
      </div>
     ))}
    </div>
   </div>
  </Fragment>
 );
};

export default Services;
