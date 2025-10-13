// src/components/DocumentationSidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Collapsible({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between py-2 px-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        aria-expanded={open}
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transform transition-transform duration-150 ${open ? "rotate-90" : ""
            }`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden
        >
          <path d="M6 6 L14 10 L6 14 Z" fill="currentColor" />
        </svg>
      </button>

      <div className={`${open ? "block" : "hidden"} pl-4 mt-1`}>{children}</div>
    </div>
  );
}

function SidebarLink({ to, children, external }) {
  const base =
    "block text-sm px-2 py-1 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50";
  const activeClass =
    "bg-emerald-50 text-emerald-700 font-medium"; // pale green background for active

  if (external) {
    return (
      <a href={to} className={base} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `${base} ${isActive ? activeClass : ""}`}
    >
      {children}
    </NavLink>
  );
}

export default function DocumentationSidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-gray-100 bg-white px-3 py-4">
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-700">Documentation</h2>
      </div>

      {/* Top single link (highlighted with pale green like screenshot) */}
      <div className="mb-3">
        <SidebarLink to="/docs/introduction">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded bg-emerald-200" />
            <span className="text-sm">Introduction</span>
          </div>
        </SidebarLink>
      </div>

      {/* Small vertical spacing then simple links */}
      <div className="mb-4">
        <SidebarLink to="/docs/how-it-works">How It Works</SidebarLink>
        <SidebarLink to="/docs/buying-guide">Buying Guide</SidebarLink>
      </div>

      <div className="mt-4 mb-2 text-xs uppercase tracking-wider text-gray-400">
        Environments
      </div>

      <div className="space-y-0.5">
        <Collapsible title="Local Environment" defaultOpen={false}>
          <SidebarLink to="/docs/env/local">Getting started</SidebarLink>
          <SidebarLink to="/docs/env/local/variables">Environment variables</SidebarLink>
        </Collapsible>

        <Collapsible title="Production Environment">
          <SidebarLink to="/docs/env/prod/deploy">Deployment</SidebarLink>
          <SidebarLink to="/docs/env/prod/monitor">Monitoring</SidebarLink>
        </Collapsible>

        <Collapsible title="Custom Server Environment">
          <SidebarLink to="/docs/env/custom/setup">Setup</SidebarLink>
          <SidebarLink to="/docs/env/custom/secure">Security</SidebarLink>
        </Collapsible>
      </div>

      <div className="mt-6 mb-2 text-xs uppercase tracking-wider text-gray-400">More</div>

      <div className="space-y-1">
        <SidebarLink to="https://studystudio.example" external>
          StudyStudio ↗
        </SidebarLink>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-3">
        <button
          className="w-full text-left text-xs text-gray-500 flex items-center gap-2 px-2 py-2 hover:text-gray-700"
          aria-label="toggle sidebar"
        >
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
            <path d="M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Collapse</span>
        </button>
      </div>
    </aside>
  );
}

