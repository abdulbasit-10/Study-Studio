import React from "react";
import { Link } from "react-router-dom";

export default function ProductionEnvironment() {
  const sections = [
    { label: "Getting Started", to: "/documentation/env/prod/getting-started", icon: "📋" },
    { label: "Environment Variables", to: "/documentation/env/prod/environment-variables", icon: "💻" },
    { label: "Gemini", to: "/documentation/env/prod/gemini", icon: "⚙️" },
    { label: "Authentication", to: "/documentation/env/prod/authentication", icon: "🔑" },
    { label: "Payment Gateways", to: "/documentation/env/prod/payment-gateways", icon: "💳" },
    { label: "Database ORM", to: "/documentation/env/prod/database-orm", icon: "🗄️" },
    { label: "Database", to: "/documentation/env/prod/database", icon: "🧩" },
    { label: "Storage", to: "/documentation/env/prod/storage", icon: "📦" },
    { label: "Deployment", to: "/documentation/env/prod/deployment", icon: "🚀" },
    { label: "Customization", to: "/documentation/env/prod/customization", icon: "🧰" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        Documentation / <span className="text-emerald-600 font-medium">Production Environment</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Production Environment Guide
      </h1>

      {/* Alert */}
      <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg mb-6 flex items-center">
        <span className="text-2xl mr-3">⚠️</span>
        <span>Please follow the guide in the provided order.</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-8">
        This section will guide you through the final setup and deploying the application on{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-600 hover:underline font-medium"
        >
          Vercel
        </a>.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {sections.map((section) => (
          <Link
            key={section.to}
            to={section.to}
            className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition flex items-center space-x-3"
          >
            <span className="text-xl">{section.icon}</span>
            <span className="text-gray-800 font-medium">{section.label}</span>
          </Link>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-between items-center border-t pt-4 text-sm text-gray-600">
        <Link
          to="/documentation/stopping-server"
          className="hover:text-emerald-600 transition"
        >
          ← Stopping Server
        </Link>
        <Link
          to="/documentation/env/prod/getting-started"
          className="hover:text-emerald-600 transition"
        >
          Getting Started →
        </Link>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        Last updated on <span className="font-medium text-gray-500">November 11, 2024</span>
      </p>

      <footer className="text-center text-xs text-gray-400 mt-10 border-t pt-4">
        © 2025 StudyStudio Inc. All rights reserved.
      </footer>
    </div>
  );
}
