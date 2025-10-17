export default function CustomServerEnvDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Custom Server Environment Guide
      </h1>

      {/* Alerts */}
      <Note tone="error" className="mb-4">
        🚧 This section is still under development.
      </Note>

      <Note tone="warning" className="mb-8">
        ⚠️ Please follow the guide in the provided order.
      </Note>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-10">
        This section will guide you through the final setup and deploying the
        application on any of your traditional servers i.e.{" "}
        <span className="font-semibold">Shared Hosting</span>,{" "}
        <span className="font-semibold">VPS Hosting</span>, or{" "}
        <span className="font-semibold">Dedicated Hosting</span>.
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GuideBox title="Getting Started" />
        <GuideBox title="Environment Variables" />
        <GuideBox title="Gemini" />
        <GuideBox title="Authentication" />
        <GuideBox title="Payment Gateways" />
        <GuideBox title="Database" />
        <GuideBox title="Deployment" />
        <GuideBox title="Customization" />
      </div>

      {/* Footer */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 11, 2024
      </div>

      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Customization</a>
        <a href="#" className="hover:underline flex items-center gap-1">
          StudyStudio{" "}
          <span className="inline-block text-xs border border-current rounded px-1">
            ↗
          </span>
        </a>
      </nav>
    </main>
  );
}

/* ---------- UI Helpers ---------- */

/* Alert note box */
function Note({ children, tone = "info", className = "" }) {
  const tones = {
    info: "bg-blue-50 border-blue-100 text-blue-900",
    warning: "bg-yellow-50 border-yellow-100 text-yellow-900",
    error: "bg-red-50 border-red-100 text-red-900",
  };
  return (
    <div className={`rounded-md px-4 py-3 text-sm border ${tones[tone]} ${className}`}>
      {children}
    </div>
  );
}

/* Guide box component */
function GuideBox({ title }) {
  return (
    <div className="border border-gray-200 hover:border-green-400 transition rounded-lg px-5 py-3 flex items-center justify-between cursor-pointer">
      <span className="text-gray-800 font-medium">{title}</span>
      <span className="text-gray-400">›</span>
    </div>
  );
}
