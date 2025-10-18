// src/Documentation/LeftSideBar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function SidebarLink({ to, children }) {
  const base =
    "block text-sm px-3 py-2 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50";
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

const PROD_LINKS = [
  { label: "Overview", to: "/documentation/env/prod" },
  { label: "Deploying", to: "/documentation/env/prod/deploying" },
  { label: "Scaling", to: "/documentation/env/prod/scaling" },
  { label: "Monitoring", to: "/documentation/env/prod/monitoring" },
];

export default function LeftSideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [prodExpanded, setProdExpanded] = useState(false);

  // Auto-expand dropdowns when matching current route
  useEffect(() => {
    const path = location.pathname;
    if (
      path === "/documentation/local" ||
      SUB_LINKS.some((s) => path === s.to || path.startsWith(s.to + "/"))
    ) {
      setExpanded(true);
    }

    if (
      path === "/documentation/env/prod" ||
      PROD_LINKS.some((s) => path === s.to || path.startsWith(s.to + "/"))
    ) {
      setProdExpanded(true);
    }
  }, [location.pathname]);

  function handleParentClick() {
    navigate("/documentation/local");
    setExpanded((v) => !v);
  }

  function handleProdClick() {
    navigate("/documentation/env/prod");
    setProdExpanded((v) => !v);
  }

  return (
    <div className="px-3 py-6">
      <div className="mb-4">
        <SidebarLink to="/documentation">Introduction</SidebarLink>
        <SidebarLink to="/documentation/how-it-works">How It Works</SidebarLink>
        <SidebarLink to="/documentation/buying-guide">Buying Guide</SidebarLink>
      </div>

      <div className="mt-6 text-xs uppercase tracking-wide text-black font-semibold">
        Environments
      </div>
      <div className="mt-2 space-y-1">
        {/* Local Environment Dropdown */}
        <div>
          <button
            onClick={handleParentClick}
            className="w-full text-left block text-sm px-3 py-2 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            aria-expanded={expanded}
          >
            <span className="flex items-center justify-between w-full">
              <span>Local Environment</span>
              <svg
                className={`ml-2 h-4 w-4 transform transition-transform duration-150 ease-in-out ${
                  expanded ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
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

        {/* Production Environment Dropdown */}
        <div>
          <button
            onClick={handleProdClick}
            className="w-full text-left block text-sm px-3 py-2 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            aria-expanded={prodExpanded}
          >
            <span className="flex items-center justify-between w-full">
              <span>Production Environment</span>
              <svg
                className={`ml-2 h-4 w-4 transform transition-transform duration-150 ease-in-out ${
                  prodExpanded ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>

          {prodExpanded && (
            <div className="mt-2 ml-3 space-y-1">
              {PROD_LINKS.map((s) => (
                <SidebarLink key={s.to} to={s.to}>
                  {s.label}
                </SidebarLink>
              ))}
            </div>
          )}
        </div>

        <SidebarLink to="/documentation/custom">Custom Server Environment</SidebarLink>
        <SidebarLink>More</SidebarLink>

        {/* ✅ External Link to Study Studio */}
        <a
          href="https://studystudio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm px-3 py-2 rounded-md truncate text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        >
          Study Studio
        </a>
      </div>
    </div>
  );
}
