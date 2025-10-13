// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "../assets/logo.svg"; // adjust path if needed

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logoUrl} alt="Study Studio" className="h-15 w-30 ml-0" />
            </a>
          </div>

          {/* Center: small nav (desktop) + search */}
          <div className="flex-1 flex items-center justify-end gap-6">
            {/* Desktop links */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="/"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Home
              </a>
              {/* <a
                href="/documentation"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Documentation
              </a> */}
            </nav>

            {/* Search input */}
            <div className="hidden sm:flex items-center bg-gray-50 border border-gray-100 rounded-full px-3 py-1 shadow-sm">
              <label htmlFor="doc-search" className="sr-only">
                Search documentation
              </label>
              <input
                id="doc-search"
                type="search"
                placeholder="Search documentation..."
                className="bg-transparent text-sm placeholder-gray-400 outline-none w-64"
              />
              <div className="ml-3 px-2 py-0.5 bg-white rounded text-xs text-gray-500 border border-gray-100">
                CTRL K
              </div>
            </div>

            {/* Get started / profile (desktop) */}
            {/* <div className="hidden md:flex items-center gap-4">
              <a
                href="/get-started"
                className="text-sm text-gray-700 hover:text-gray-900 px-3 py-1 rounded-md transition"
              >
                Get Started
              </a>
            </div> */}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="p-2 inline-flex items-center justify-center rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${open ? "block" : "hidden"} md:hidden border-t border-gray-100 bg-white`}>
        <div className="px-4 py-3 space-y-2">
          <a href="/" className="block text-sm text-gray-700 px-2 py-2 rounded hover:bg-gray-50">
            Home
          </a>
          <a
            href="/documentation"
            className="block text-sm text-gray-700 px-2 py-2 rounded hover:bg-gray-50"
          >
            Documentation
          </a>
          <a
            href="/get-started"
            className="block text-sm text-gray-700 px-2 py-2 rounded hover:bg-gray-50"
          >
            Get Started
          </a>

          {/* mobile search */}
          <div className="mt-2">
            <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              <input
                type="search"
                placeholder="Search documentation..."
                className="bg-transparent text-sm placeholder-gray-400 outline-none w-full"
              />
              <div className="ml-2 px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500">
                CTRL K
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
