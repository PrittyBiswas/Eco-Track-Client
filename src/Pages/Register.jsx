import { Link } from "react-router";
import logo from "../assets/logo.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Simulate API registration
        loginUser({
            name: formData.name,
            email: formData.email,
            profileImage: formData.profileImage,
        });

        alert("Successfully Registered!");
        navigate("/"); // redirect to home page
    };

    const handleGoogleSignInClick = () => {
        signInWithGoogle()
            .then((result) => {
                console.log("Google Login Success:", result.user);
                alert("Successfully Logged in!");
                navigate("/"); // redirect to home
            })
            .catch((error) => {
                console.log("Google Login Error:", error);
                alert("Login Failed!");
            });
    };

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-lg p-10 border border-green-100">

                {/* Logo Section */}
                <div className="flex flex-col items-center">
                    <img src={logo} alt="logo" className="w-14 h-14" />
                    <h2 className="text-2xl font-bold mt-1 text-green-700">Join EcoTrack</h2>
                    <p className="text-gray-500 text-sm">Create your sustainable account</p>
                </div>

                <h3 className="text-xl font-semibold text-center mb-2 text-green-700">Create Account</h3>
                <p className="text-center text-gray-600 mb-6 text-sm">Join our eco-friendly community</p>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Re-enter your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
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

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                    >
                        Create Account
                    </button>

                    {/* Google Sign In */}
                    <button
                        onClick={handleGoogleSignInClick}
                        type="button"
                        className="btn w-full bg-white text-black border border-gray-300 flex items-center justify-center gap-2"
                    >
                        <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
                            <g>
                                <path fill="#fff" d="M0 0h512v512H0z" />
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                            </g>
                        </svg>
                        Register with Google
                    </button>
                </form>

                <div className="text-center mt-6 text-sm">
                    <p className="text-gray-700">
                        Already have an account?{" "}
                        <Link to="/login" className="text-green-700 font-semibold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Register;
