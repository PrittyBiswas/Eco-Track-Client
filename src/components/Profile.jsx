import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
    const { user, loginUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: user?.name || "",
        email: user?.email || "",
        profileImage: user?.profileImage || "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser({
            ...user,
            name: formData.name,
            email: formData.email,
            profileImage: formData.profileImage,
        });
        alert("Profile updated successfully!");
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Edit Profile</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Profile Image Preview */}
                <div className="flex justify-center mb-4">
                    <img
                        src={formData.profileImage || "https://via.placeholder.com/100"}
                        alt="Profile Preview"
                        className="w-24 h-24 rounded-full border-2 border-green-600 object-cover"
                    />
                </div>

                {/* Name */}
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Profile Image URL */}
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Profile Image URL</label>
                    <input
                        type="text"
                        name="profileImage"
                        placeholder="Enter your profile image URL"
                        value={formData.profileImage}
                        onChange={handleChange}
                        className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                {/* Submit */}
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
