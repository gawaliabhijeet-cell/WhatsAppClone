import React from "react";
import LogoPic from "../Pic/WhatApp Logo.png";
import circle from "../Pic/circle.png";
import { FaArrowRight } from "react-icons/fa";


export default function Navbar() {
    return (

        <nav className="bg-[#fcf5eb] flex items-center justify-between px-8 py-4 gap-4">
            {/* Logo */}
            <div className=" md:flex justify-center items-center">
                <img
                    src={LogoPic}
                    alt="WhatsApp"
                    className="h-10"
                />
            </div>


            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-gray-950">
                <li className="cursor-pointer hover:underline-offset-4 hover:decoration-green-500"
                >Features</li>
                <li className="cursor-pointer hover:underline-offset-4 decoration-green-500"
                >Privacy</li>
                <li className="cursor-pointer hover:underline-offset-4 decoration-green-500"
                >Help Center</li>
                <li className="cursor-pointer hover:underline-offset-4 decoration-green-500"
                >Blog</li>
                <li className="cursor-pointer hover:underline-offset-4 decoration-green-500"
                >For Business</li>
                <li className=" cursor-pointer inline text-base font-normal leading-5.5 text-[#1c1e21]"
                >Apps</li>
            </ul>

            {/* Download Button */}
            <div className="flex items-center justify-center gap-4">

                <button
                    className="hidden md:flex items-center gap-2 cursor-pointer bg-white border border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
                >
                    Sign in
                    <FaArrowRight />
                </button>
                <button className=" cursor-pointer hidden md:flex bg-[#25D366] px-6 py-3 rounded-full font-medium items-center hover:bg-black hover:text-white duration-300">
                    Download
                </button>

            </div>


            {/* Mobile Menu Icon */}
            <div
                className="flex items-center justify-center px-4 gap-4"
            >

                <img
                    className=" block md:hidden h-8 w-8 "
                    src={circle}
                    alt="Download"
                />
                <button className="md:hidden text-2xl">
                    ☰
                </button>
            </div>
        </nav>
    );
}
