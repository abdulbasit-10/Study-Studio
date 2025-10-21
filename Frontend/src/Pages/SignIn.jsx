// src/SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 📧 Email Sign-in Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sign-in delay (replace with real auth later)
    setTimeout(() => {
      console.log("Signed in with:", email);
      alert(`Welcome back, ${email}!`);
      navigate("/"); // redirect to home page after login
      setLoading(false);
    }, 1000);
  };

  // 🔹 Google Sign-in (placeholder)
  const handleGoogleSignIn = () => {
    setLoading(true);
    alert("Redirecting to Google sign-in...");
    // Replace this with real Google Auth (Firebase / Clerk / etc.)
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  // 🔹 Facebook Sign-in (placeholder)
  const handleFacebookSignIn = () => {
    setLoading(true);
    alert("Redirecting to Facebook sign-in...");
    // Replace this with real Facebook Auth
    setTimeout(() => {
      navigate("/");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-10 text-center">
        <h2 className="text-xl font-semibold mb-1">Sign in to StudyStudio</h2>
        <p className="text-gray-500 text-sm mb-6">
          Welcome back! Please sign in to continue
        </p>

        {/* 🌐 Social Buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={handleFacebookSignIn}
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition disabled:opacity-50"
          >
            <FaFacebook className="text-blue-600" />
            <span className="text-sm font-medium">Facebook</span>
          </button>
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition disabled:opacity-50"
          >
            <FcGoogle />
            <span className="text-sm font-medium">Google</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-300" />
          <span className="px-3 text-gray-400 text-sm">or</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* ✉️ Email Login Form */}
        <form onSubmit={handleSubmit} className="text-left mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white rounded-lg py-2 font-medium mt-4 hover:bg-gray-800 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Continue →"}
          </button>
        </form>

        {/* 🔗 Sign up link */}
        <p className="text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-black font-medium hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
