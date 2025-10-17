export default function StoppingServerDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">How To Stop StudyStudio?</h1>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed mb-6">
        To stop StudyStudio, simply press{" "}
        <Kb>Ctrl</Kb> + <Kb>C</Kb> in the terminal where the server is running.
        To fully stop the server you can also enter the following command to ensure
        it’s completely stopped:
      </p>

      {/* Terminal snippet */}
      <TerminalBox lines={["exit"]} className="mb-6" />

      <p className="text-gray-700 leading-relaxed">
        This completely stops every running service and now you won’t be able to access the
        application.
      </p>

      {/* Meta + Prev/Next */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 10, 2024
      </div>
      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Starting Server</a>
        <a href="#" className="hover:underline">Production Environment ›</a>
      </nav>
    </main>
  );
}

/* ---------- Small UI helpers ---------- */

function Kb({ children }) {
  return (
    <kbd className="px-1.5 py-0.5 rounded border border-gray-300 bg-gray-100 text-xs font-semibold">
      {children}
    </kbd>
  );
}

function TerminalBox({ lines = [], className = "" }) {
  return (
    <div
      className={`rounded-lg overflow-hidden border border-green-100 ${className}`}
    >
      {/* Header */}
      <div className="bg-green-50 text-green-900 text-xs px-4 py-2 border-b border-green-100">
        terminal
      </div>
      {/* Body */}
      <pre className="bg-green-50/60 text-gray-800 px-4 py-3 text-sm leading-7 overflow-x-auto">
        {lines.join("\n")}
      </pre>
    </div>
  );
}
