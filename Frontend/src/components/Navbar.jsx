// src/components/Navbar.jsx
import React, { useState } from "react";
import { BookOpen, ArrowRight, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- added
import logoUrl from "../assets/logo.svg";
import profileUrl from "../assets/profile.svg";
import documentationUrl from "../assets/Documentation.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // <-- added

  return (
    <header className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src={logoUrl} alt="Study Studio" className="h-15 w-auto ml-10" />
            </a>
          </div>

          {/* Right: Desktop links */}
          <nav className="hidden md:flex items-center">
            <a
              href="/documentation"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition"
            >
              <img src={documentationUrl} alt="Documentation" className="w-4 h-4" />
              <span>Documentation</span>
            </a>

            {/* vertical separator */}
            <div className="mx-4 h-6 w-px bg-gray-200" aria-hidden />

            {/* ✅ Get Started button */}
            <button
              onClick={() => navigate("/signin")}
              className="inline-flex items-center cursor-pointer gap-2 text-gray-500 text-sm font-medium px-4 py-2 transition hover:text-gray-900"
            >
              <img src={profileUrl} alt="Profile icon" className="w-4 h-4" />
              <span>Get Started</span>
            </button>
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

          {/* ✅ Get Started button for mobile */}
          <button
            onClick={() => navigate("/signin")}
            className="flex items-center gap-2 text-gray-700 px-2 py-2 rounded hover:bg-gray-50 w-full"
          >
            <img src={profileUrl} alt="Profile icon" className="w-4 h-4" />
            <span>Get Started</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
