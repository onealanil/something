import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram , AiFillTwitterCircle, AiFillLinkedin} from "react-icons/ai";



const Footer = () => {
  return (
    <>
      <footer className="w-full mx-auto flex flex-col md:items-center md:justify-center bg-black select-none">
        <div className="w-full md:w-[90%] py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-8">
          {/* company  */}
          <div className="flex flex-col md:items-start md:px-1 items-center justify-center w-full gap-y-4 font-sideFont">
            <span className="text-white font-bold cursor-pointer select-none">
              Company
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Why Choose Us
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              About Us
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Pricing
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Testinomial
            </span>
          </div>

          {/* Resources */}
          <div className="flex flex-col items-center md:items-start px-1 justify-center gap-y-4 font-sideFont">
            <span className="text-white font-bold cursor-pointer select-none">
              Resources
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Privacy Policy
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Terms And Condition
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Blog
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Contact Us
            </span>
          </div>

          {/* Product  */}
          <div className="flex flex-col items-center md:items-start px-1 justify-center gap-y-4 font-sideFont mt-6">
            <span className="text-white font-bold cursor-pointer select-none">
              Product
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Project Management
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Time Tracker
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Time Schedule
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Lead Generate
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Remote Collaboration
            </span>
          </div>

          {/* subscribe */}
          <div className=" flex flex-col items-center md:items-start px-1 justify-center gap-y-4 font-sideFont">
            <span className="text-white font-subscribeFont font-bold cursor-pointer select-none tracking-widest text-[1rem] md:text-[2rem]">
              Subscribe
            </span>
            <span className="text-gray-400 hover:text-green cursor-pointer select-none text-sm">
              Subscribe to our Newsletter
            </span>

            <div className="relative pr-5 pt-5 pb-5 w-[18rem]">
              <input
                type="text"
                className="py-4 pl-4 w-[13rem] text-[10px] rounded-md font-sideFont border-transparent focus:outline-none"
                placeholder="Enter your Email..."
              />
              <span className="bg-green text-sm absolute right-2 focus:shadow-none top-6 px-7 rounded-lg font-sideFont text-white py-2 select-none cursor-pointer">
                Subscribe
              </span>
            </div>
          </div>
        </div>
        {/* last line item  */}

        <div className="flex items-center pb-6 md:py-14 justify-center">
          <span className="hidden md:block md:w-56 md:border border-b-white"></span>
          <div className="flex gap-x-3 md:px-8 px-4 items-center justify-center ">
            <span class=" text-gray-500 md:px-4 font-light font-copyrightFont">
              Copyright @ 2023
            </span>
            <BsFacebook size={24} className="text-white cursor-pointer hover:text-green"/>
            <AiFillTwitterCircle size={24} className="text-white cursor-pointer hover:text-green"/>
            <AiFillInstagram size={24} className="text-white cursor-pointer hover:text-green"/>
            <AiFillLinkedin size={24} className="text-white cursor-pointer hover:text-green"/>
          </div>

          <span className="hidden md:block md:w-56 border border-b-white"></span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
