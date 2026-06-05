import React from "react";
import Pic from "../Pic/WhatApp Logo.png";

export default function Navbar() {
    return (

        <nav className="bg-[#fcf5eb] flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div className=" md:flex justify-center items-center">
                <img
                    src={Pic}
                    alt="WhatsApp"
                    className="h-10"
                    />
                    </div>
            

            {/* Menu */}
            <ul className="hidden md:flex items-center gap-8 text-gray-950">
                <li className="cursor-pointer hover:underline-offset-4 decoration-green-500"
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
            <button className="hidden md:flex bg-[#25D366] px-6 py-3 rounded-full font-medium items-center gap-2 hover:bg-black hover:text-white duration-300">
                Download<span>↓</span>
            </button>

            {/* Mobile Menu Icon */}
            <button className="md:hidden text-2xl">
                ☰
            </button>
        </nav>
    );
}
