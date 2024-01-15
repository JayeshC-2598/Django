// Footer.jsx
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                <p>&copy; 2023 Iblog</p>
                <div className="flex space-x-4">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter
                            className="text-white hover:text-blue-400"
                            size={20}
                        />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebook
                            className="text-white hover:text-blue-600"
                            size={20}
                        />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram
                            className="text-white hover:text-pink-500"
                            size={20}
                        />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin
                            className="text-white hover:text-blue-500"
                            size={20}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
