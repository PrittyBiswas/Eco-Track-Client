import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Banner1 from '../assets/Heroimg1.jpg';
import Banner2 from '../assets/HeroImg2.jpg';
import Banner3 from '../assets/HeroImg3.jpg';
import { Link } from 'react-router';

const banners = [Banner1, Banner2, Banner3];

const Banner = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            className="relative"
        >
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className="w-full relative h-[350px] sm:h-[420px] md:h-[520px] lg:h-[650px]"
                >
                    {/* Image */}
                    <img
                        src={banner}
                        className="w-full h-full object-cover brightness-75"
                    />

                    {/* Banner Text */}
                    <div
                        className="
                        absolute bottom-8 sm:bottom-12 md:bottom-20
                        left-4 sm:left-10 md:left-20 lg:left-32
                        text-white z-10
                        
                        w-[90%] sm:w-[70%] md:w-[45%] 
                        space-y-4 sm:space-y-5 md:space-y-6
                        
                        text-center sm:text-left
                        "
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                            Plants make a positive impact <br /> on your environment.
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg">
                            Provide your house & office space with the right plants and let our
                            plant care team keep them flourishing.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                            <Link to="/AllChallenges" className="btn bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-2 md:py-3 rounded-full">
                                Book Now
                            </Link>


                            <Link to="/events" className="group flex items-center gap-2 px-4 py-2 border-2 border-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-green-600 transition duration-300">
                                Know More
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </Link>


                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center justify-center sm:justify-start gap-4 md:gap-6">
                            <a
                                href="https://www.facebook.com/prittybiswas090"
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition duration-300"
                            >
                                <FaFacebookF size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/prittybiswas090/"
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition duration-300"
                            >
                                <FaInstagram size={18} />
                            </a>
                            <a
                                href="https://x.com/prittybiswas090"
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition duration-300"
                            >
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default Banner;
