import React from "react";
import main from "../Pic/main.png";
import main1 from "../Pic/main1.png";
import main2 from "../Pic/main2.png";
import main3 from "../Pic/main3.png";


export default function Main() {
  return (
    <div className=" bg-[#fcf5eb] relative mx-4">
      {/* Background Image */}
     <img
  src={main}
  alt="main"
  className="w-500 h-auto object-cover mx-4 my-4 rounded-2xl"
/>

      {/* Left Text */}
      <div className="absolute top-24 left-20 text-white">
        <h1 className="text-8xl font-light leading-none">
          Message <br />
          privately
        </h1>

        <p className="mt-8 text-2xl max-w-xl">
          Simple, reliable, private messaging and calling for free*,
          available all over the world.
        </p>

        <button className=" cursor-pointer mt-10 bg-green-500 px-10 py-4 rounded-full text-black text-xl">
          Download
        </button>
      </div>

      {/* Right Side Images */}
      <img
        src={main1}
        alt="img"
        className="absolute top-10 right-80 w-80 h-20"
      />

      <img
        src={main2}
        alt="img"
        className="absolute top-40 right-80 w-40"
      />

      <img
        src={main3}
        alt="img"
        className="absolute top-60 right-90 w-72"
      /> 
    </div>
  );
}