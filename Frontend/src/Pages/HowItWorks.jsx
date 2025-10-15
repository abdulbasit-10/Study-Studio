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
      name: "Stripe",
      href: "https://stripe.com/",
      desc: "for billing",
      icon: "💳",
    },
    {
      name: "PayPal",
      href: "https://paypal.com/",
      desc: "for billing",
      icon: "💸",
    },
    {
      name: "Razorpay",
      href: "https://razorpay.com/",
      desc: "for billing",
      icon: "🏷️",
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
            <div className="w-8 h-8 mx-auto bg-green-600 text-white flex items-center justify-center rounded-full font-bold">
              1
            </div>
            <h2 className="text-2xl font-bold mt-4">Provide your input</h2>
            <p className="text-gray-600 mb-6">
              Select your use-case scenario and submit your input.
            </p>

            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-500 to-green-300 text-white p-4 rounded-2xl shadow-md">
                  <BookOpen size={40} />
                </div>
                <p className="mt-2 text-gray-700 font-medium">AI Coursework</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-500 to-green-300 text-white p-4 rounded-2xl shadow-md">
                  <User size={40} />
                </div>
                <p className="mt-2 text-gray-700 font-medium">AI Tutor</p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center my-12">
            <div className="w-8 h-8 mx-auto bg-green-600 text-white flex items-center justify-center rounded-full font-bold">
              2
            </div>
            <h2 className="text-2xl font-bold mt-4">Our AI gets to work</h2>
            <p className="text-gray-600 mb-6">
              The AI processing takes some time. Be patient.
            </p>

            <img
              src={PreviewImage}
              alt="StudyStudio preview"
              className="rounded-xl border border-green-300 mx-auto shadow-lg shadow-green-100"
            />
          </div>

          {/* Step 3 */}
          <div className="text-center my-12">
            <div className="w-8 h-8 mx-auto bg-green-600 text-white flex items-center justify-center rounded-full font-bold">
              3
            </div>
            <h2 className="text-2xl font-bold mt-4">Get amazing results</h2>
            <p className="text-gray-600 mb-6">
              You will receive accurate and concise responses tailored to your
              needs.
            </p>

            <div className="flex justify-center gap-8 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-500 to-green-300 text-white p-4 rounded-2xl shadow-md">
                  <RefreshCw size={40} />
                </div>
                <p className="mt-2 text-gray-700 font-medium">AI Output</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-br from-green-500 to-green-300 text-white p-4 rounded-2xl shadow-md">
                  <MessageSquare size={40} />
                </div>
                <p className="mt-2 text-gray-700 font-medium">AI Response</p>
              </div>
            </div>

            <p className="text-gray-500 mt-6 text-sm">
              A step-by-step process of how StudyStudio generates AI results.
            </p>
          </div>

          <p className="text-gray-500 text-right text-sm">
            Last updated on November 3, 2024
          </p>

          {/* Bottom navigation */}
          <div className="flex justify-between mt-12 text-green-600 font-medium text-sm">
            <a href="#" className="underline hover:text-green-700">
              ← Introduction
            </a>
            <a href="#" className="underline hover:text-green-700">
              Buying Guide →
            </a>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gray-50 text-center py-6 text-sm text-gray-600">
        © 2025{" "}
        <span className="font-semibold text-gray-800">StudyStudio Inc.</span> All
        rights reserved.
      </footer>
    </div>
  );
}
