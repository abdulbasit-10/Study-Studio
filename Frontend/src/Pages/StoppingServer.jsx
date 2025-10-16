import React, { useState } from "react";

/**
 * StoppingServerGuide.jsx
 * Responsive documentation page (How To Stop StudyStudio) using React + Tailwind CSS.
 * Consistent with the other pages: header, collapsible sidebar, main content, right TOC, footer.
 */
export default function StoppingServerGuide() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const leftNav = [
    { group: "Environments", items: [
      "Local Environment",
      "Getting Started",
      "Environment Variables",
      "Gemini",
      "Authentication",
      "Payment Gateways",
      "Database ORM",
      "Storage",
      "Database",
      "Starting Server",
      { label: "Stopping Server", active: true },
      "Production Environment",
      "Custom Server Environment",
    ]},
  ];

  const toc = [{ id: "stop", label: "How To Stop StudyStudio?" }];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
              aria-label="Toggle sidebar"
              onClick={() => setOpenSidebar(v => !v)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded"></div>
              <span className="font-semibold">StudyStudio</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <input
              className="hidden sm:block border rounded-md px-3 py-1.5 text-sm w-56 focus:outline-none focus:ring focus:ring-emerald-200"
              placeholder="Search documentation…"
            />
            <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-emerald-700">Buy now</button>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className={`col-span-12 md:col-span-3 xl:col-span-2 bg-white md:bg-transparent border md:border-0 rounded md:rounded-none ${openSidebar ? 'block' : 'hidden'} md:block`}>
            {leftNav.map((g, gi) => (
              <div key={gi} className="md:sticky md:top-16">
                <h3 className="px-4 md:px-0 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">{g.group}</h3>
                <ul className="divide-y md:divide-y-0 border md:border-0 rounded md:rounded-none">
                  {g.items.map((it, i) => {
                    const label = typeof it === 'string' ? it : it.label;
                    const active = typeof it === 'object' && it.active;
                    return (
                      <li key={i} className={`px-4 md:px-0 py-2 text-sm ${active ? 'bg-emerald-50 text-emerald-700 font-medium rounded-md md:rounded-none' : 'hover:text-gray-900'}`}>{label}</li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main content */}
          <main className="col-span-12 md:col-span-9 xl:col-span-8">
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-2">
              <span>Documentation</span> <span className="mx-1">›</span>
              <span>Local Environment</span> <span className="mx-1">›</span>
              <span className="text-gray-900 font-medium">Stopping Server</span>
            </nav>

            {/* Title */}
            <h1 id="stop" className="text-2xl font-bold mb-3">How To Stop StudyStudio?</h1>

            <p className="text-gray-700 leading-relaxed mb-4">
              To stop StudyStudio, simply press <code className="bg-gray-100 px-1 py-0.5 rounded">Ctrl + C</code> in the terminal where the server is running. In order to
              fully stop the server you can also enter the following command to ensure it's completely stopped:
            </p>

            <div className="rounded-md border bg-white overflow-hidden mb-6">
              <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-b">terminal</div>
              <pre className="p-4 text-sm overflow-auto"><code>{`exit`}</code></pre>
            </div>

            <p className="text-gray-700 mb-6">
              This completely stops every running service and now you won't be able to access the application.
            </p>

            <p className="text-xs text-gray-400 mt-8">Last updated on November 10, 2024</p>

            {/* Prev/Next */}
            <div className="flex items-center justify-between border-t mt-6 pt-4 text-sm">
              <a href="#" className="inline-flex items-center gap-2 hover:underline">‹ Starting Server</a>
              <a href="#" className="inline-flex items-center gap-2 hover:underline">Production Environment ›</a>
            </div>
          </main>

          {/* Right TOC */}
          <aside className="hidden xl:block col-span-2">
            <div className="sticky top-16">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">On this page</div>
              <ul className="space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-gray-600 hover:text-gray-900 hover:underline">{t.label}</a></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-gray-500 text-sm py-4">© 2025 StudyStudio Inc. All rights reserved.</footer>
    </div>
  );
}