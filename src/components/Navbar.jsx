import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: "error",
                    title: "Logged Out",
                    text: "You have been logged out successfully.",
                    confirmButtonColor: "red",
                });
                navigate("/login");
            })
            .catch((error) => console.error("Logout Error:", error));
    };

    const navLinkClass = ({ isActive }) =>
        `cursor-pointer px-2 py-1 font-medium hover:text-green-600 transition 
        ${isActive ? "border-b-2 border-green-600 text-green-600" : "text-gray-800"}`;

    return (
        <nav className="w-full bg-white shadow-md py-3">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

                {/* Left - Logo */}
                <div className="flex items-center gap-2">
                    <img src={Logo} alt="EcoTrack Logo" className="w-10 h-10" />
                    <span className="text-green-700 font-bold text-xl tracking-wide">
                        EcoTrack
                    </span>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 items-center">
                    <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                    <li><NavLink to="/AllChallenges" className={navLinkClass}>Challenges</NavLink></li>

                    {user && (
                        <>
                            <li><NavLink to="/UserChallenges" className={navLinkClass}>User Challenges</NavLink></li>
                            <li><NavLink to="/events" className={navLinkClass}>Events</NavLink></li>
                            <li><NavLink to="/activities" className={navLinkClass}>My Activities</NavLink></li>
                        </>
                    )}
                </ul>

                {/* Desktop - Right */}
                <div className="hidden md:flex items-center gap-4">
                    {user ? (
                        <>
                            <Link to="/profile">
                                <img
                                    src={user.profileImage || "https://via.placeholder.com/40"}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border-2 border-green-600"
                                />
                            </Link>
                            <button
                                onClick={handleLogOut}
                                className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded-lg transition"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <NavLink
                            to="/login"
                            className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-1 rounded-lg transition"
                        >
                            Login
                        </NavLink>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>

            </div>

            {/* Mobile Sidebar (Slide-in from Right) */}
            <div
                className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 transform transition-transform duration-300 z-50
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close button */}
                <button
                    className="text-3xl absolute top-4 right-4"
                    onClick={() => setOpen(false)}
                >
                    <HiX />
                </button>

                <div className="mt-12 flex flex-col gap-6">
                    <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
                        Home
                    </NavLink>

                    <NavLink to="/AllChallenges" className={navLinkClass} onClick={() => setOpen(false)}>
                        Challenges
                    </NavLink>

                    {user && (
                        <>
                            <NavLink to="/UserChallenges" className={navLinkClass} onClick={() => setOpen(false)}>
                                User Challenges
                            </NavLink>

                            <NavLink to="/events" className={navLinkClass} onClick={() => setOpen(false)}>
                                Events
                            </NavLink>

                            <NavLink to="/activities" className={navLinkClass} onClick={() => setOpen(false)}>
                                My Activities
                            </NavLink>
                        </>
                    )}

                    <div className="border-t pt-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link to="/profile" onClick={() => setOpen(false)}>
                                    <img
                                        src={user.profileImage || "https://via.placeholder.com/40"}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full border-2 border-green-600"
                                    />
                                </Link>

                                <button
                                    onClick={handleLogOut}
                                    className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-4 py-1 rounded-lg transition"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <NavLink
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-1 rounded-lg transition block"
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
