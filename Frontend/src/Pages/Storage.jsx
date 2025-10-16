import React, { useState } from "react";

/**
 * StorageGuide.jsx
 * Responsive documentation page (Cloudinary storage) using React + Tailwind CSS.
 * Matches the style/layout used for other pages: header, collapsible sidebar, main, right TOC, footer.
 */
export default function StorageGuide() {
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
      { label: "Storage", active: true },
      "Database",
      "Starting Server",
      "Stopping Server",
      "Production Environment",
      "Custom Server Environment",
    ]},
  ];

  const toc = [
    { id: "cloudinary", label: "Cloudinary" },
    { id: "setup", label: "Setup Cloudinary Account" },
    { id: "preset", label: "Creating a Cloudinary Upload Preset" },
    { id: "replacing", label: "Replacing Cloud Name & Upload Preset" },
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
            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-500 mb-2">
              <span>Documentation</span> <span className="mx-1">›</span>
              <span>Local Environment</span> <span className="mx-1">›</span>
              <span className="text-gray-900 font-medium">Storage</span>
            </nav>

            {/* Page Title */}
            <h1 id="cloudinary" className="text-2xl font-bold mb-3">Cloudinary</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              The image storage service used in StudyStudio is <a href="#" className="text-emerald-700 underline">Cloudinary</a>. Cloudinary is a cloud‑based image and video
              management service. It enables users to upload, store, manage, manipulate, and deliver images and video for
              websites and apps. You can use their free‑tier to host the images and videos for your application.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-3 rounded mb-6">
              ⚠️ If you’re worried about the free‑tier not being enough or the need to scale in the future, we have provided an
              appropriate accurate cost estimate calculator for our SaaS product in the documentation as well. Visit <a href="#" className="font-medium underline">Cost Calculator</a> to learn about it in depth.
            </div>

            <p className="text-gray-700 mb-6">Open your <code className="bg-gray-100 px-1 py-0.5 rounded">.env.local</code> file and ensure following the given steps:</p>

            {/* Step 1 */}
            <section id="setup" className="scroll-mt-20">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">1</span>
                Setup Cloudinary Account
              </h2>
              <p className="text-gray-700 mb-4">
                Create an account on <a href="#" className="text-emerald-700 underline">Cloudinary</a> and get your <strong>Cloud Name</strong>. You will see this value in your Cloudinary
                dashboard. Copy it and save it for later use.
              </p>
            </section>

            {/* Step 2 */}
            <section id="preset" className="scroll-mt-20">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">2</span>
                Creating a Cloudinary Upload Preset
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                From the sidebar, navigate to the <em>Settings</em> tab and then click on the <em>Upload Presets</em> tab. Create a new
                upload preset by clicking on <em>Add upload preset</em>. Make sure your <em>Signing mode</em> is set to <em>Unsigned</em>.
                You can keep the rest of the values to be at default and the <em>Upload Preset</em> name field empty. Click on <em>Save</em>.
                Once created, you can copy the <em>Upload Preset Name</em> that was generated by the system and save it for later use.
              </p>

              <div className="border rounded-md overflow-hidden bg-white mb-6">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                  alt="Example for the creation of upload preset on a Cloudinary dashboard."
                  className="w-full object-cover"
                />
                <div className="text-center text-xs text-gray-500 py-2">Example for the creation of upload preset on a cloudinary dashboard.</div>
              </div>
            </section>

            {/* Step 3 */}
            <section id="replacing" className="scroll-mt-20">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">3</span>
                Replacing Cloudinary Cloud Name and Cloudinary Upload Preset
              </h2>
              <p className="text-gray-700 mb-3">
                Replace <code className="bg-gray-100 px-1 rounded">your-cloudinary-cloud-name</code> with your original <strong>Cloudinary Cloud Name</strong>, and <code className="bg-gray-100 px-1 rounded">your-cloudinary-uploads-preset</code> with your original <strong>Cloudinary Upload Preset</strong> values that you copied earlier.
              </p>

              <div className="rounded-md border bg-white overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-b">.env.local</div>
                <pre className="p-4 text-sm overflow-auto"><code>{`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your-cloudinary-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = your-cloudinary-upload-preset`}</code></pre>
              </div>

              <p className="text-gray-700">This is how you can set up Cloudinary for your StudyStudio application.</p>

              <p className="text-xs text-gray-400 mt-8">Last updated on November 3, 2024</p>

              {/* Prev/Next */}
              <div className="flex items-center justify-between border-t mt-6 pt-4 text-sm">
                <a href="#" className="inline-flex items-center gap-2 hover:underline">‹ Database ORM</a>
                <a href="#" className="inline-flex items-center gap-2 hover:underline">Database ›</a>
              </div>
            </section>
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

