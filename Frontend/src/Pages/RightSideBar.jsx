// src/Documentation/RightSideBar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function RightSideBar() {
  const items = [
    { to: "#quick-start", label: "Quick Start" },
    { to: "#faqs", label: "StudyStudio FAQs" },
  ];  

  return (
    <aside className="fixed top-24 bg-white p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">On This Page</h3>
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="block text-sm text-gray-600 hover:text-emerald-700 hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
