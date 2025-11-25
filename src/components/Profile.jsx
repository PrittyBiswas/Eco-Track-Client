import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Profile = () => {
    const { user, updateUser } = useContext(AuthContext);

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

        const updatedProfile = {
            ...user,
            name: formData.name,
            email: formData.email,
            profileImage: formData.profileImage,
        };

        updateUser(updatedProfile);
        Swal.fire({
            icon: "success",
            title: " Successfully!",
            text: "Your Profile has been Changed",
            confirmButtonColor: "#16a34a",
        });
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 mb-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Edit Profile</h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="flex justify-center mb-4">
                    <img
                        src={formData.profileImage || "https://via.placeholder.com/100"}
                        alt="Profile Preview"
                        className="w-24 h-24 rounded-full border-2 border-green-600 object-cover"
                    />
                </div>

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

                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Profile Image URL</label>
                    <input
                        type="text"
                        name="profileImage"
                        value={formData.profileImage}
                        onChange={handleChange}
                        className="w-full border border-green-300 rounded-lg px-4 py-2"
                    />
                </div>

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
