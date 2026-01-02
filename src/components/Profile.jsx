import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        profileImage: null,
        profileImagePreview: "",
    });

    // Load user data and/or localStorage on mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("profileData"));
        if (storedData) {
            setFormData(storedData);
        } else if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                profileImage: null,
                profileImagePreview: user.profileImage || "",
            });
        }
    }, [user]);

    // Update state + localStorage for text inputs
    const handleChange = (e) => {
        const updatedData = { ...formData, [e.target.name]: e.target.value };
        setFormData(updatedData);
        localStorage.setItem("profileData", JSON.stringify(updatedData));
    };

    // Handle image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewURL = URL.createObjectURL(file);
            const updatedData = { ...formData, profileImage: file, profileImagePreview: previewURL };
            setFormData(updatedData);
            localStorage.setItem("profileData", JSON.stringify(updatedData));
        }
    };

    // Submit profile changes
    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedProfile = {
            ...user,
            name: formData.name,
            email: formData.email,
            profileImage: formData.profileImagePreview, // Save preview as profile
        };

        updateUser(updatedProfile);
        localStorage.setItem("profileData", JSON.stringify(formData));

        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your profile has been updated",
            confirmButtonColor: "#16a34a",
        });
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
                Edit Profile
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Image Preview */}
                <div className="flex justify-center mb-6">
                    <label className="relative cursor-pointer group">

                        {/* Profile Image */}
                        <img
                            src={
                                formData.profileImagePreview ||
                                "https://ui-avatars.com/api/?name=User&background=22c55e&color=fff&size=100"
                            }
                            alt="Profile Preview"
                            className="w-28 h-28 rounded-full border-4 border-green-600 object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                                Edit
                            </span>
                        </div>

                        {/* Camera Icon */}
                        <div className="absolute bottom-1 right-1 bg-green-600 p-2 rounded-full shadow-lg group-hover:scale-110 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 7h4l2-3h6l2 3h4v13H3V7z"
                                />
                                <circle cx="12" cy="13" r="3" />
                            </svg>
                        </div>

                        {/* Hidden File Input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                </div>


                {/* Name */}
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-green-300 rounded-lg px-4 py-2"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-green-300 rounded-lg px-4 py-2"
                    />
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Profile;
