// src/Pages/GetStarted.jsx
import React from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

export default function Abc() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-start gap-8 p-8 min-h-screen bg-gray-50">
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>
        {/* Clerk's hosted SignIn UI */}
        <SignIn />
      </div>

      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        {/* Clerk's hosted SignUp UI */}
        <SignUp />
      </div>
    </section>
  );
}
