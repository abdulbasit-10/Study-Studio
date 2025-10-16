// File: LocalEnvironmentGuide.jsx
import React from "react";

export default function LocalEnvironmentGuide() {
  const sections = [
    "Getting Started",
    "Environment Variables",
    "Gemini",
    "Authentication",
    "Payment Gateways",
    "Database ORM",
    "Database",
    "Storage",
    "Starting Server",
    "Stopping Server",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm flex justify-between items-center px-6 py-3 border-b">
        <div className="flex items-center space-x-2">
          <img
            src="https://seeklogo.com/images/S/study-studio-logo.png"
            alt="StudyStudio"
            className="w-8 h-8"
          />
          <h1 className="text-lg font-semibold">StudyStudio</h1>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
          Buy Now
        </button>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 bg-white border-r p-4">
          <h2 className="text-sm font-bold text-gray-700 mb-2">Environments</h2>
          <ul className="space-y-2 text-sm">
            <li className="font-semibold text-green-700 bg-green-50 px-3 py-2 rounded-md">
              Local Environment
            </li>
            {[
              "Getting Started",
              "Environment Variables",
              "Gemini",
              "Authentication",
              "Payment Gateways",
              "Database ORM",
              "Storage",
              "Database",
              "Starting Server",
            ].map((item, i) => (
              <li
                key={i}
                className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-2">
            Local Environment Guide
          </h1>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-3 mb-3 rounded">
            ⚠️ This environment is for users who don’t want to host StudyStudio.
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 text-orange-800 p-3 mb-6 rounded">
            🔸 Please follow the guide in the provided order.
          </div>

          <p className="mb-6 text-gray-600">
            This section will guide you through the initial setup and installation
            process on your local machine.
          </p>

          {/* Grid of Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border rounded-md bg-white hover:shadow-md transition p-4 cursor-pointer"
              >
                <h3 className="font-medium text-green-700 flex items-center space-x-2">
                  <span>📘</span>
                  <span>{section}</span>
                </h3>
              </div>
            ))}
          </div>

          {/* Footer Info */}
          <p className="text-sm text-gray-400 mt-8">
            Last updated on November 3, 2024
          </p>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-gray-500 text-sm py-3">
        © 2025 StudyStudio Inc. All rights reserved.
      </footer>
    </div>
  );
}
