
import { Link, useNavigate } from "react-router";
import logo from "../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Login = () => {

    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log("Google Login Success:", result.user);
                alert("Successfully Login!");
                navigate("/"); // redirect to home
            })
            .catch((error) => {
                console.log("Google Login Error:", error);
                alert("Login Failed!");
            });
    };


    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 border border-green-100">

                {/* Logo */}
                <div className="flex flex-col items-center mb-2">
                    <img src={logo} alt="" className="size-20" />
                    <h2 className="text-2xl font-bold mt-1 text-green-700">Login to EcoTrack</h2>
                    <p className="text-gray-500 text-sm">Sustainable business solutions</p>
                </div>

                <h3 className="text-xl font-semibold text-center mb-2 text-green-700">
                    Welcome Back
                </h3>
                <p className="text-center text-gray-600 mb-6 text-sm">
                    Sign in to your account
                </p>

                {/* Form */}
                <form className="space-y-5">

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"

                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"

                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
                    >
                        Sign In
                    </button>
                    {/* Google */}
                    <button
                        onClick={handleGoogleSignIn}
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
                        Login with Google
                    </button>
                </form>

                {/* Extra Links */}
                <div className="text-center mt-6 text-sm">
                    <p className="text-gray-700">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-green-700 font-semibold hover:underline">
                            Register
                        </Link>
                    </p>

                    <Link
                        to="/forgot-password"
                        className="text-green-600 hover:underline text-sm inline-block mt-2"
                    >
                        Forgot your password?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
