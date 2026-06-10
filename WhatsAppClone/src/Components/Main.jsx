import React from "react";
import main from "../Pic/main.png";
import main1 from "../Pic/main1.png";
import main2 from "../Pic/main2.png";
import main3 from "../Pic/main3.png";
import { FaArrowDown } from "react-icons/fa";


export default function Main() {
  return (
    <div className=" bg-[#fcf5eb] relative mx-4">
      {/* Background Image */}
      <img
        src={main}
        alt="main"
        className="w-full md:w-11/12 lg:w-full h-auto object-cover mx-auto my-4 rounded-2xl"
      />

      {/* Left Text */}
      <div className="absolute top-5 left-5 md:top-20 md:left-16 lg:left-20 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-8xl font-medium leading-none">
          Message <br className="hidden lg:block" />
          privately
        </h1>

        <p className="mt-8 text-2xl max-w-xl">
          Simple, reliable, private messaging and calling for free*,
          available all over the world.
        </p>

        <button className="md:w-auto cursor-pointer 
        lg:cursor-pointer mt-10 w-full border-2 border-gray-900 bg-green-500 flex items-center justify-center gap-2 px-10 py-4 rounded-full hover:text-white hover:bg-black text-xl">
          Download <FaArrowDown />
        </button>
      </div>

      {/* Right Side Images */}
      <img
        src={main1}
        alt="img"
        className="hidden md:block absolute top-10 right-80 w-80 h-20"
      />

      <img
        src={main2}
        alt="img"
        className="hidden md:block absolute top-40 right-80 w-40"
      />

      <img
        src={main3}
        alt="img"
        className="hidden md:block absolute top-60 right-90 w-72"
      />
    </div>
  );
}