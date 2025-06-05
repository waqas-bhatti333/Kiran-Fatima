import { Fragment, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import pic1 from "../Images/kiranfatima.png";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos"
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      easing: 'ease-in-sine',
      delay: 300,
    });
  })
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/kiran-fatima-41133431b");
  };
  const openGithub = () => {
    window.open("https://github.com/kirankiran12");
  };

  return (
    <Fragment>
      <div id="home" className="flex lg:mt-16 md:mt-14 sm:mt-24 justify-center items-center lg:h-[85vh] md:h-[50vh] sm:h-[20vh] px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div data-aos="fade-right" className="w-full md:w-[65%] text-center md:text-start mt-24 md:mt-0">
            <h1 className="text-white text-3xl md:text-4xl font-normal">
              Hi, I’m <span className="text-[#FF014F]">Kiran Fatima</span><br /> 

              <span className="text-white">
                <Typewriter
                  words={["Flutter Developer", "Android Developer"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={40}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-white text-start mt-2">
            I am a Flutter Developer specializing in building responsive, cross-platform mobile applications using Flutter and Dart. I craft modern UI/UX, write clean and scalable code, and integrate seamless APIs for smooth and high-performance user experiences. Let’s build something amazing together!
            </p>
            <div className="mt-4">
              <h2 className="text-white">Find me on</h2>
              <div className="flex justify-center md:justify-start items-center gap-6 mt-2">
                <button className="text-white cursor-pointer flex justify-center bg-[#1E2125] h-10 w-10 rounded items-center">
                  <FaFacebookF className="h-5 w-5" />
                </button>
                <button onClick={openLinkedin} className="text-white cursor-pointer flex justify-center bg-[#1E2125] h-10 w-10 rounded items-center">
                  <FaLinkedinIn className="h-5 w-5" />
                </button>
                <button onClick={openGithub} className="text-white cursor-pointer flex justify-center bg-[#1E2125] h-10 w-10 rounded items-center">
                  <FaGithub className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-up" className="hidden md:block md:w-[40%]">
            <img src={pic1} alt="Hero" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
