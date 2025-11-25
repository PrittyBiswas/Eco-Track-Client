import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase.init";
import Swal from "sweetalert2";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();

        try {
            await sendPasswordResetEmail(auth, email);

            Swal.fire({
                icon: "success",
                title: "Email Sent!",
                text: "A password reset link has been sent to your email.",
                confirmButtonColor: "#16a34a", // green
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Something went wrong. Please try again.",
                confirmButtonColor: "#d33", // red
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
                Reset Password
            </h2>

            <form className="space-y-4" onSubmit={handleReset}>
                <div className="flex flex-col">
                    <label className="text-gray-700 mb-1">Enter Your Email</label>
                    <input
                        type="email"
                        className="border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="yourname@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
}
