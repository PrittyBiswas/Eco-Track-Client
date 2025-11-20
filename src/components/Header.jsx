import React from "react";
import leaf from "../assets/Leaf-1.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-gradient-to-r from-gray-100 via-green-50 to-gray-100 rounded-xl overflow-hidden">
            <div className="max-w-lg space-y-6 z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                    Plants make a positive impact <br /> on your environment.
                </h1>
                <p className="text-gray-700 text-lg">
                    Provide your house & office space with the right plants and let our
                    plant care team keep them flourishing.
                </p>

                <div className="flex items-center gap-6">
                    <button className="btn bg-primary hover:bg-secondary text-white px-8 rounded-full">
                        Book Now
                    </button>
                    <button className="font-semibold text-gray-900 hover:text-secondary transition duration-300">
                        Know More
                    </button>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-white bg-primary hover:bg-secondary  p-3 rounded-full transition duration-300"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-white bg-primary hover:bg-secondary  p-3 rounded-full transition duration-300"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="#"
                        className="text-white bg-primary hover:bg-secondary  p-3 rounded-full transition duration-300"
                    >
                        <FaTwitter size={20} />
                    </a>
                </div>

            </div>

            <div className="absolute md:static right-0 bottom-0 md:bottom-auto">
                <img
                    src={leaf}
                    alt="Leaf"
                    className="w-72 md:w-[420px] drop-shadow-md"
                />
            </div>
        </div>
    );
};

export default Header;
