import React, { useState } from "react";
import { BookOpen, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              {/* Put your logo at public/logo.png or change path */}
              <img
                src="./src/assets/logo.svg"
                alt="Study Studio"
                className="h-15 w-50"
              />
            </a>
          </div>

          {/* Right: Desktop links */}
          <nav className="hidden md:flex items-center">
            <a
              href="/documentation"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition"
            >
              <BookOpen size={18} />
              <span>Documentation</span>
            </a>

            {/* vertical separator */}
            <div className="mx-4 h-6 w-px bg-gray-200" aria-hidden />

            <a
              href="/get-started"
              className="inline-flex items-center gap-2 text-gray-700 text-sm font-medium px-4 py-2 transition"
            >
              <span>Get Started</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 inline-flex items-center justify-center rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 pt-2 pb-4 space-y-2 border-t border-gray-100">
          <a
            href="/documentation"
            className="flex items-center gap-2 text-gray-700 px-2 py-2 rounded hover:bg-gray-50"
          >
            <BookOpen size={16} />
            <span>Documentation</span>
          </a>

          <a
            href="/get-started"
            className="flex items-center gap-2 text-gray-700 px-2 py-2 rounded hover:bg-gray-50"
          >
            <span>Get Started</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
