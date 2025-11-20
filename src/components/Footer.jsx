import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IoLeafOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-300 px-6 md:px-20 py-14">
      <div className="grid md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">

        {/* Left Section */}
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt=""  className=" size-18"/>
            <h3 className="text-xl font-bold text-white"> EcoTrack </h3>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Baghdad Environmental Friends
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Dedicated to protecting and preserving Baghdad's environment through
            community action, education, and sustainable practices since 2018.
          </p>

          <div className="flex gap-4 mt-5 text-gray-300">
            <FaFacebookF className="hover:text-primary cursor-pointer" />
            <FaInstagram className="hover:text-primary cursor-pointer" />
            <FaTwitter className="hover:text-primary cursor-pointer" />
            <FaEnvelope className="hover:text-primary cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Programs</li>
            <li className="hover:text-primary cursor-pointer">News</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Our Programs */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Programs</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">Green Baghdad Initiative</li>
            <li className="hover:text-primary cursor-pointer">Clean Water Project</li>
            <li className="hover:text-primary cursor-pointer">Waste Reduction</li>
            <li className="hover:text-primary cursor-pointer">Environmental Education</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-gray-400">
        <p>© 2025 Baghdad Environmental Friends. All rights reserved.</p>

        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <p>Building a sustainable future for Baghdad</p>

          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover: bg-secondary transition">
            <FiSettings className="text-sm" />
            Admin Panel
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
