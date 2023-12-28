import React from "react";
import BGImage from "../assets/bg_img.jpg";

function Header() {
    return (
        <div className="relative">
            <div className="fixed w-full backdrop-blur-xl text-white">
                <div className="container mx-auto flex flex-row justify-between max-w-[90rem] w-full">
                    <div className="text-white font-bold text-3xl p-4">
                        Iblog
                    </div>
                    <ul className="flex space-x-6 m-2 cursor-pointer">
                        <li className="p-3 w-24 text-center font-semibold">
                            Home
                        </li>
                        <li className="p-3 w-24 text-center font-semibold">
                            Blog
                        </li>
                        <li className="p-3 w-24 text-center font-semibold">
                            About
                        </li>
                        <li className="p-3 w-24 text-center font-semibold">
                            Contact
                        </li>
                        <li className="p-3 w-24 text-center font-semibold">
                            Add Post
                        </li>
                    </ul>
                    <div className="flex space-x-6 m-2">
                        <div className="p-3 w-24 text-center border-2 rounded-xl border-white border-solid font-semibold cursor-pointer">
                            Sign Up
                        </div>
                        <div className="p-3 w-24 text-center border-2 rounded-xl border-white border-solid font-semibold cursor-pointer">
                            Login
                        </div>
                    </div>
                </div>
            </div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-center text-8xl font-semibold text-white">
                Insights Unveiled: Exploring Perspectives
            </p>
            <img src={BGImage} className="bg-cover" alt="BGImage" />
        </div>
    );
}

export default Header;
