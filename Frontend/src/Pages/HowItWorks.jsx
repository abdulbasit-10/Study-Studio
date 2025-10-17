// src/Documentation/HowItWorks.jsx
import React from "react";
import { BookOpen, User, RefreshCw, MessageSquare } from "lucide-react";
import PreviewImage from "../assets/1.webp";

export default function HowItWorks() {
  const techStack = [
    {
      name: "Gemini",
      href: "https://ai.google/discover/gemini/",
      desc: "for AI tutoring and fine-tuning",
      icon: "🤖",
    },
    {
      name: "React",
      href: "https://react.dev/",
      desc: "for user interface",
      icon: "⚛️",
    },
    {
      name: "Next.js",
      href: "https://nextjs.org/",
      desc: "for app and landing page",
      icon: "▲",
    },
    {
      name: "Neon (Postgres)",
      href: "https://neon.tech/",
      desc: "for database",
      icon: "🗄️",
    },
    {
      name: "Clerk",
      href: "https://clerk.com/",
      desc: "for authentication",
      icon: "🔐",
    },
    {
      name: "Drizzle ORM",
      href: "https://orm.drizzle.team/",
      desc: "for database management",
      icon: "💧",
    },
    {
      name: "Stripe, PayPal, Razorpay",
      href: "https://stripe.com/, https://paypal.com/, https://razorpay.com/",
      desc: "for billing",
      icon: "💳",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1">
        <main className="flex-1 pt-1 px-3 max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-4">
            Documentation &gt;{" "}
            <span className="text-gray-700 font-medium">How It Works</span>
          </p>

          <h1 className="text-3xl font-bold mb-6">How It Works</h1>

          <p className="mb-4 text-gray-700">The app is powered by:</p>

          {/* Tech stack list */}
          <ul className="space-y-2 mb-8 ml-4">
            {techStack.map((item, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-lg leading-none">{item.icon}</span>
                <span className="text-gray-700">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium underline"
                  >
                    {item.name}
                  </a>{" "}
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>

          {/* Step 1 */}
          <div className="text-center my-12">
            <div className="w-8 h-8 mx-auto bg-green-800 text-white flex items-center justify-center rounded-full font-bold">
              1
            </div>
            <h2 className="text-5xl font-bold mt-4">Provide your input</h2>
            <p className="mb-6 mt-2 text-lg text-gray-900 tracking-wide mx-auto max-w-xs">
              Select your use-case scenario and submit your input.
            </p>

            <div className="flex justify-center gap-30 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-800 to-green-500 text-white p-4 rounded-2xl shadow-md">
                  <BookOpen size={80} />
                </div>
                <p className="mt-2 text-gray-500 font-medium">AI Coursework</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-800 to-green-500 text-white p-4 rounded-2xl shadow-md">
                  <User size={80} />
                </div>
                <p className="mt-2 text-gray-500 font-medium">AI Tutor</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
         <div className="text-center my-12">
  <div className="w-8 h-8 mx-auto bg-green-800 text-white flex items-center justify-center rounded-full font-bold">
    2
  </div>

  <h2 className="text-5xl font-bold mt-4">Our AI gets to work</h2>
  <p className="text-gray-900 mb-6 mt-2 text-lg tracking-wide mx-auto max-w-xs">
    The AI processing takes some time. Be patient.
  </p>

  {/* ✅ Fixed Gradient Border Effect */}
  <div className="relative mx-auto w-120 h-71 rounded-2xl p-[3px] bg-gradient-to-r from-blue-600 to-green-500 shadow-lg shadow-green-100">
    <div className="rounded-2xl bg-white">
      <img
        src={PreviewImage}
        alt="StudyStudio preview"
        className="rounded-xl"
      />
    </div>
  </div>
</div>


          {/* Step 3 */}
          <div className="text-center my-12">
            <div className="w-8 h-8 mx-auto bg-green-800 text-white flex items-center justify-center rounded-full font-bold">
              3
            </div>
            <h2 className="text-5xl font-bold mt-4">Get amazing results</h2>
            <p className="text-gray-900 mb-6 mt-2 text-lg tracking-wide mx-auto max-w-xs">
              You will receive accurate and concise responses tailored to your
              needs.
            </p>

            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-800 to-green-500 text-white p-4 rounded-2xl shadow-md">
                  <RefreshCw size={80} />
                </div>
                <p className="mt-2 text-gray-500 font-medium">AI Output</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-800 to-green-500 text-white p-4 rounded-2xl shadow-md">
                  <MessageSquare size={80} />
                </div>
                <p className="mt-2 text-gray-500 font-medium">AI Response</p>
              </div>
            </div>

            <p className="text-gray-500 mt-8 text-sm">
              A step-by-step process of how StudyStudio generates AI results.
            </p>
          </div>

          <p className="text-gray-500 text-right text-sm">
            Last updated on November 3, 2024
          </p>
          <p className="border-t w-full border-gray-300 text-center text-sm text-gray-500"></p>
          {/* Bottom navigation */}
          <div className="flex justify-between mt-12 text-green-600 font-medium text-sm">
            <a href="#" className="text-black hover:text-green-400 mt-3">
              ← Introduction
            </a>
            <a href="#" className="text-black hover:text-green-400 mt-3">
              Buying Guide →
            </a>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-300 text-center py-5 mt-15 text-lg text-gray-800">
        © 2025{" "}
        <span className="text-gray-800">StudyStudio Inc.</span> All
        rights reserved.
      </footer>
    </div>
  );
}
