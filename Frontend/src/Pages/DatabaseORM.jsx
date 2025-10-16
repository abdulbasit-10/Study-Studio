import React, { useState } from "react";

/**
 * DatabaseORMGuide.jsx
 * Responsive documentation page built with React + Tailwind CSS.
 * Layout: header, collapsible left sidebar, main content, right sticky TOC, footer.
 */
export default function DatabaseORMGuide() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const leftNav = [
    { group: "Environments", items: [
      "Local Environment",
      "Getting Started",
      "Environment Variables",
      "Gemini",
      "Authentication",
      "Payment Gateways",
      { label: "Database ORM", active: true },
      "Storage",
      "Database",
      "Starting Server",
      "Stopping Server",
      "Custom Server Environment",
    ]},
  ];

  const toc = [
    { id: "setup", label: "Setup project with Neon" },
    { id: "variables", label: "Replacing environment variables" },
    { id: "studio", label: "Visiting Drizzle Studio" },
  ];

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
          {/* Left sidebar */}
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
            <nav className="text-sm text-gray-500 mb-2">
              <span>Documentation</span> <span className="mx-1">›</span>
              <span>Local Environment</span> <span className="mx-1">›</span>
              <span className="text-gray-900 font-medium">Database ORM</span>
            </nav>

            <h1 className="text-2xl font-bold mb-2">Drizzle</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              <a href="#" className="text-emerald-700 underline">Drizzle</a> is an open‑source headless Typescript ORM. It’s the only ORM with both relational and SQL‑like query APIs,
              providing you the best of both worlds when it comes to accessing your relational data.
              For <code className="px-1 py-0.5 bg-gray-100 rounded">local server environment</code>, we are using Drizzle in combination with <a href="#" className="text-emerald-700 underline">Neon</a> which is also an open‑source <a href="#" className="text-emerald-700 underline">PostgreSQL</a> database.
            </p>

            <p className="text-gray-700 mb-8">In order to setup the Drizzle ORM, you need to follow the below steps:</p>

            {/* Setup with Neon */}
            <section id="setup" className="scroll-mt-20">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">1</span>
                Setup project with Neon
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Visit the <a href="#" className="text-emerald-700 underline">Neon</a> sign‑up, and create a new project. You will be asked to setup a <em>Name</em>, <em>Postgres version</em>, <em>Cloud Service Provider</em>, <em>Region</em>, and <em>Compute size</em>.
                You can create your own database name or use the default one. For the rest of the values, you can keep them at default. Moving onwards, you will be redirected to the <em>quickstart</em>.
                From the quickstart section, select <em>Postgres</em>, click on <em>show password</em>, and copy the snippet.
              </p>
              <div className="border rounded-md overflow-hidden bg-white mb-6">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop"
                  alt="Example for a project created on Neon dashboard."
                  className="w-full object-cover"
                />
                <div className="text-center text-xs text-gray-500 py-2">Example for a project created on Neon dashboard.</div>
              </div>
            </section>

            {/* Replacing environment variables */}
            <section id="variables" className="scroll-mt-20">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">2</span>
                Replacing environment variables
              </h2>
              <p className="text-gray-700 mb-3">
                Replace <span className="font-mono bg-gray-100 px-1 rounded">your-neon-db-connection-string</span> with your original <a href="#" className="text-emerald-700 underline">Neon DB Connection String</a> from <a href="#" className="text-emerald-700 underline">Neon dashboard</a>.
                You need to ensure you have used the same <strong>Neon DB Connection String</strong> for all of the required environment variables.
              </p>

              <div className="rounded-md border bg-white overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-b">.env.local</div>
                <pre className="p-4 text-sm overflow-auto"><code>{`NEXT_DRIZZLE_DB_URL = your-neon-db-connection-string
DATABASE_URL = your-neon-db-connection-string`}</code></pre>
              </div>
            </section>

            {/* Visiting Drizzle Studio */}
            <section id="studio" className="scroll-mt-20">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">3</span>
                Visiting Drizzle Studio
              </h2>
              <p className="text-gray-700 mb-3">You can use the following command to visit Drizzle studio for your project:</p>
              <div className="rounded-md border bg-white overflow-hidden">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-b">npm</div>
                <pre className="p-4 text-sm overflow-auto"><code>{`npx drizzle-kit studio`}</code></pre>
              </div>
            </section>

            <p className="text-gray-600 mt-8">
              This completes your setup for Drizzle ORM with Neon database. You can now start using Drizzle ORM in your project.
            </p>

            <p className="text-xs text-gray-400 mt-8">Last updated on November 3, 2024</p>

            {/* Prev/Next */}
            <div className="flex items-center justify-between border-t mt-6 pt-4 text-sm">
              <a href="#" className="inline-flex items-center gap-2 hover:underline">‹ Payment Gateways</a>
              <a href="#" className="inline-flex items-center gap-2 hover:underline">Storage ›</a>
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
