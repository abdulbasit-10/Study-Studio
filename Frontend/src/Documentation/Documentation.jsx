// src/Documentation/Documentation.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

export default function Documentation() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />

      <div className="flex flex-1 pt-16"> {/* pad top if header is fixed */}
        {/* Left sidebar (hidden on small screens) */}
        <aside className="hidden lg:block w-64">
          <LeftSideBar />
        </aside>

        {/* main area - nested pages render here */}
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* Right sidebar */}
        <aside className="hidden xl:block w-64 p-6">
          <RightSideBar />
        </aside>
      </div>
    </div>
  );
}
