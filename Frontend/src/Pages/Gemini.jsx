import React from "react";
import tutorialImage1 from "../assets/gemini.webp"; // adjust the path as needed

export default function Documentation() {
  return (
    <div className="px-6 md:px-16 py-10 bg-white text-gray-800">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-3">
        Documentation &gt; Local Environment &gt;{" "}
        <span className="text-gray-700 font-medium">Gemini</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold mb-4">
        Creating Google Developer Account
      </h1>

      {/* Intro paragraph */}
      <p className="text-gray-700 mb-6 leading-relaxed">
        To use Gemini, you need to create an account on{" "}
        <a
          href="https://aistudio.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Google AI
        </a>
        . Once you have created an account, you can get your API key from the{" "}
        <a
          href="https://aistudio.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          API page
        </a>
        . Afterwards, in your <code>.env</code> file, you need to make the
        following changes:
      </p>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">1. Replacing API Key</h2>
        <p className="text-gray-700 mb-4">
          Replace <code className="bg-gray-100 px-1 rounded">your-gemini-api-key</code> with
          your original <span className="font-medium">Gemini API key</span> from{" "}
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            API page
          </a>
          .
        </p>

        {/* Image */}
        <div className="rounded-xl border bg-gray-50 overflow-hidden shadow-sm">
          <img
            src={tutorialImage1}
            alt="Google AI Studio API Key Creation"
            className="w-full h-auto object-contain"
          />
          <p className="text-sm text-center text-gray-500 py-3">
            A figure displaying how to create your own API key on Google AI Studio.
          </p>
        </div>
      </section>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6 mt-6 text-sm text-gray-600">
        <a
          href="#"
          className="hover:text-blue-600 transition-colors mb-2 md:mb-0"
        >
          ← Environment Variables
        </a>
        <p className="text-xs text-gray-400">Last updated on November 3, 2024</p>
        <a
          href="#"
          className="hover:text-blue-600 transition-colors mb-2 md:mb-0"
        >
          Authentication →
        </a>
      </div>
    </div>
  );
}

