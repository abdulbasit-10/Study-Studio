// src/Documentation/LocalEnvironmentGuide.jsx
import React from "react";
import {
  AlertTriangle,
  Info,
  Cpu,
  BookOpen,
  Lock,
  Database,
  Cloud,
  Zap,
  Box,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/**
 * LocalEnvironmentGuide
 * - responsive grid (1 / 2 / 3 / 4 columns depending on viewport)
 * - accessible buttons/links for each step
 * - small breadcrumb, title, callouts, last-updated, nav links
 *
 * Requirements:
 *  - tailwindcss configured in the project
 *  - lucide-react installed (npm i lucide-react) or swap icons for your own
 */
export default function LocalEnvironmentGuide() {
  const cards = [
    { id: "getting-started", title: "Getting Started", icon: BookOpen },
    { id: "env-vars", title: "Environment Variables", icon: Cpu },
    { id: "gemini", title: "Gemini", icon: Cloud },
    { id: "authentication", title: "Authentication", icon: Lock },
    { id: "payment-gateways", title: "Payment Gateways", icon: Box },
    { id: "database-orm", title: "Database ORM", icon: Database },
    { id: "database", title: "Database", icon: Database },
    { id: "storage", title: "Storage", icon: Cloud },
    { id: "starting-server", title: "Starting Server", icon: Zap },
    { id: "stopping-server", title: "Stopping Server", icon: Zap },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          <a href="/documentation" className="hover:underline text-gray-500">
            Documentation
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Local Environment</span>
        </div>

        {/* Title */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Local Environment Guide
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            This section will guide you through the initial setup and
            installation process on your local machine.
          </p>
        </header>

        {/* Callouts */}
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-md p-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <div className="text-sm text-yellow-800 font-medium">
                This environment is for users who don't want to host StudyStudio.
              </div>
              <div className="text-sm text-yellow-700 mt-1">
                Use this to run StudyStudio locally for development or evaluation.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-orange-50 border border-orange-200 rounded-md p-3">
            <Info className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <div className="text-sm text-orange-800 font-medium">
                Please follow the guide in the provided order.
              </div>
              <div className="text-sm text-orange-700 mt-1">
                Steps are arranged so prerequisites are covered first.
              </div>
            </div>
          </div>
        </div>

        {/* Grid of cards */}
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="group block rounded-lg border border-gray-200 bg-white hover:shadow-md transition p-4 flex items-center gap-3"
                  aria-label={c.title}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-medium text-gray-900 group-hover:text-emerald-600">
                      {c.title}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 truncate">
                      {/** optional short description could go here */}
                      {/* Example: "Install Docker and Node.js" */}
                    </div>
                  </div>

                  <div className="ml-auto text-gray-300">
                    {/* chevron indicator */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transform transition-transform group-hover:translate-x-1"
                      aria-hidden
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* last updated & divider */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-sm text-gray-500">Last updated on November 3, 2024</div>

            <nav className="flex items-center gap-4">
              <a
                href="/documentation/buying-guide"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Buying Guide</span>
              </a>

              <a
                href="#getting-started"
                className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:underline font-medium"
              >
                <span>Getting Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
