// src/Documentation/LeftSideBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function SidebarLink({ to, children }) {
  const base = "block text-sm px-3 py-2 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50";
  const active = "bg-emerald-50 text-emerald-700 font-medium";
  return (
    <NavLink to={to} className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
      {children}
    </NavLink>
  );
}

export default function LeftSideBar() {
  return (
    <div className="px-3 py-6 fixed">
      <div className="mb-4">
        <SidebarLink to="/documentation">Introduction</SidebarLink>
        <SidebarLink to="/documentation/how-it-works">How It Works</SidebarLink>
        <SidebarLink to="/documentation/buying-guide">Buying Guide</SidebarLink>
      </div>

      <div className="mt-6 text-xs uppercase tracking-wide text-gray-400">Environments</div>
      <div className="mt-2 space-y-1">
        <SidebarLink to="/documentation/env/local">Local Environment</SidebarLink>
        <SidebarLink to="/documentation/env/prod">Production Environment</SidebarLink>
        <SidebarLink to="/documentation/env/custom">Custom Server</SidebarLink>
      </div>
    </div>
  );
}
