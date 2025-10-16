// src/Documentation/LeftSideBar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function SidebarLink({ to, children }) {
  const base = "block text-sm px-3 py-2 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50";
  const active = "bg-emerald-50 text-emerald-700 font-medium";
  return (
    <NavLink to={to} className={({ isActive }) => `${base} ${isActive ? active : ""}`}>
      {children}
    </NavLink>
  );
}


const SUB_LINKS = [
  { label: "Getting Started", to: "/documentation/getting-started" },
  { label: "Environment Variables", to: "/documentation/environment-variables" },
  { label: "Gemini", to: "/documentation/gemini" },
  { label: "Authentication", to: "/documentation/authentication" },
  { label: "Payment Gateways", to: "/documentation/payment-gateways" },
  { label: "Database ORM", to: "/documentation/database-orm" },
  { label: "Storage", to: "/documentation/storage" },
  { label: "Database", to: "/documentation/database" },
  { label: "Starting Server", to: "/documentation/starting-server" },
  { label: "Stopping Server", to: "/documentation/stopping-server" },
];

export default function LeftSideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  // auto-expand when current route matches any of the sub-links or the local page
  useEffect(() => {
    const path = location.pathname;
    if (path === "/documentation/local" || SUB_LINKS.some((s) => path === s.to || path.startsWith(s.to + "/"))) {
      setExpanded(true);
    }
  }, [location.pathname]);

  function handleParentClick() {
    // navigate to the Local Environment page and toggle expansion
    navigate("/documentation/local");
    setExpanded((v) => !v);
  }

  return (
    <div className="px-3 py-6">
      <div className="mb-4">
        <SidebarLink to="/documentation">Introduction</SidebarLink>
        <SidebarLink to="/documentation/how-it-works">How It Works</SidebarLink>
        <SidebarLink to="/documentation/buying-guide">Buying Guide</SidebarLink>

        

      </div>

      <div className="mt-6 text-xs uppercase tracking-wide text-gray-400">Environments</div>
      <div className="mt-2 space-y-1">
        <div>
          <button
            onClick={handleParentClick}
            className="w-full text-left block text-sm px-3 py-2 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            aria-expanded={expanded}
          >
            Local Environment
          </button>

          {expanded && (
            <div className="mt-2 ml-3 space-y-1">
              {SUB_LINKS.map((s) => (
                <SidebarLink key={s.to} to={s.to}>
                  {s.label}
                </SidebarLink>
              ))}
            </div>
          )}
        </div>
        <SidebarLink to="/documentation/env/prod">Production Environment</SidebarLink>
        <SidebarLink to="/documentation/env/custom">Custom Server</SidebarLink>
      </div>
    </div>
  );
}
