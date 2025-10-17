export default function StartingServerDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Running StudyStudio</h1>

      {/* Top warning notes */}
      <Note tone="warning" className="mb-6">
        Please make sure that you have followed all of the previous steps and configured
        dependencies and services accordingly.
      </Note>

      <p className="text-gray-700 leading-relaxed mb-6">
        The moment you’ve been waiting for. Let’s run StudyStudio locally. If you have followed
        all of the previous steps correctly as mentioned in the documentation, you should be able
        to run StudyStudio locally without any issues. To run StudyStudio locally, use the
        following command:
      </p>

      <Note tone="warning" className="mb-6">
        Please make sure that you’re using your preferred package manager. We still recommend using{" "}
        <Code>yarn</Code> for setting up your application.
      </Note>

      {/* Command Tabs + Terminal box */}
      <div className="mb-3">
        <Tabs />
      </div>
      <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto">
{`yarn  dev`}
      </pre>

      <p className="text-gray-700 leading-relaxed mt-6">
        This command will start the server and show a localized version of{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">
          StudyStudio
        </a>{" "}
        running in your browser.
      </p>

      {/* Screenshot */}
      <figure className="mt-8">
        <img
          src="/images/studystudio-local.png"
          alt="StudyStudio running locally"
          className="w-full rounded-xl shadow-lg"
        />
        <figcaption className="text-sm text-gray-500 text-center mt-2">
          StudyStudio running locally on a local machine.
        </figcaption>
      </figure>

      {/* Meta + Prev/Next */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 10, 2024
      </div>
      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Database</a>
        <a href="#" className="hover:underline">Stopping Server ›</a>
      </nav>
    </main>
  );
}

/* ---------- Small UI helpers ---------- */

function Code({ children }) {
  return (
    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">{children}</code>
  );
}

/* Info/Warning note */
function Note({ children, tone = "info", className = "" }) {
  const tones = {
    info: "bg-blue-50 border-blue-100 text-blue-900",
    warning: "bg-yellow-50 border-yellow-100 text-yellow-900",
  };
  return (
    <div className={`rounded-md px-4 py-3 text-sm border ${tones[tone]} ${className}`}>
      {children}
    </div>
  );
}

/* Simple tabs header (npm / yarn) */
function Tabs() {
  return (
    <div className="inline-flex rounded-md overflow-hidden border border-gray-200 text-xs">
      <div className="px-3 py-1 bg-gray-50 text-gray-600">npm</div>
      <div className="px-3 py-1 bg-green-50 text-green-800 border-l border-gray-200">yarn</div>
    </div>
  );
}
