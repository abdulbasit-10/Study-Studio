// File: LocalEnvironmentGuide.jsx
import React from "react";

export default function LocalEnvironment() {
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

  // Return only the main/middle content (no header, sidebars or footer)
  return (
    <main className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-2">Local Environment Guide</h1>

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md bg-white hover:shadow-md transition p-4 cursor-pointer"
            >
              <h3 className="font-medium text-green-700 flex items-center space-x-2">
                <span>📘</span>
                <span>{section}</span>
              </h3>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-8 text-right">Last updated on November 3, 2024</p>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-gray-300 text-center py-5 mt-15 text-lg text-gray-800">
        © 2025{" "}
        <span className="text-gray-800">StudyStudio Inc.</span> All
        rights reserved.
      </footer> 
    </main>
  );
}

