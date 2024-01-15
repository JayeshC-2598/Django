import React from "react";
import { animateScroll as scroll } from "react-scroll";
import BGImage from "../assets/bg_img.jpg";
import { Link, Routes, Route, Router } from "react-router-dom";
import SearchIcon from "../assets/search.svg";

function Header() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="min-h-[90vh]">
            <div className="absolute w-full backdrop-blur-xl text-white">
                <div className="container mx-auto flex flex-row justify-between max-w-full ">
                    <div className="flex gap-4">
                        <div className="text-white font-bold text-3xl p-4 self-center">
                            Iblog
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <div className="p-3 w-24 text-center font-semibold">
                                Home
                            </div>
                            <div className="p-3 w-24 text-center font-semibold">
                                Blog
                            </div>
                            <div className="p-3 w-24 text-center font-semibold">
                                About
                            </div>
                            <div className="p-3 w-24 text-center font-semibold">
                                Contact
                            </div>
                        </div>
                    </div>
                    <div className="flex m-4 justify-center items-center gap-6">
                        <div className="flex items-center h-12 relative">
                            <input
                                placeholder="Search"
                                type="search"
                                className="p-4 rounded-full opacity-50 focus:outline-none text-black placeholder:pl-2"
                            />
                            <button className=" w-12 h-12 rounded-full p-2 absolute top-0 right-0 ">
                                <img src={SearchIcon} alt="" className="" />
                            </button>
                        </div>
                        <Link
                            className="p-3 w-24 text-center border-2 rounded-xl border-white border-solid font-semibold cursor-pointer"
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                        <Link
                            className="p-3 w-24 text-center border-2 rounded-xl border-white border-solid font-semibold cursor-pointer"
                            to="/login"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 text-center text-7xl font-semibold text-white">
                Insights Unveiled: Exploring Perspectives
            </p>
            <img
                src={BGImage}
                className="bg-cover h-[92vh] w-full"
                alt="Background Image"
            />

            <div
                className="fixed bottom-4 right-4 p-3 bg-black text-white font-semibold rounded-full cursor-pointer"
                onClick={scrollToTop}
            >
                ↑
            </div>
        </div>
    );
}

export default Header;
