export default function GettingStartedDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Installing Dependencies</h1>

      {/* Info Note */}
      <Note tone="info" className="mb-6">
        💡 We recommend using <Code>yarn</Code> for installing dependencies.
      </Note>

      {/* Instructions */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Once you purchase the code, move into the folder named{" "}
        <Code>source code</Code> and install the necessary dependencies.
        Make sure you have <Code>node/npm</Code> or <Code>yarn</Code> installed in your system:
      </p>

      {/* Terminal command */}
      <TerminalBox lines={['cd "source code"']} className="mb-8" />

      <p className="text-gray-700 leading-relaxed mb-6">
        Depending upon your package manager, run the following commands:
      </p>

      {/* Tabs */}
      <Tabs className="mb-3" />

      <TerminalBox lines={["npm install"]} className="mb-6" />

      <p className="text-gray-700 leading-relaxed mb-6">
        This is how your terminal should look after installing the dependencies:
      </p>

      {/* Screenshot */}
      <figure className="mt-6">
        <img
          src="/images/install-dependencies.png"
          alt="Terminal installing dependencies"
          className="w-full rounded-xl shadow-lg"
        />
        <figcaption className="text-sm text-gray-500 text-center mt-2">
          Post installation of dependencies on a terminal window.
        </figcaption>
      </figure>

      {/* Footer */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 10, 2024
      </div>
      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Local Environment</a>
        <a href="#" className="hover:underline">Environment Variables ›</a>
      </nav>
    </main>
  );
}

/* ---------- Helper Components ---------- */

/* Info Note */
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

/* Inline Code */
function Code({ children }) {
  return (
    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">{children}</code>
  );
}

/* Terminal Box */
function TerminalBox({ lines = [], className = "" }) {
  return (
    <div className={`rounded-lg overflow-hidden border border-green-100 ${className}`}>
      <div className="bg-green-50 text-green-900 text-xs px-4 py-2 border-b border-green-100">
        Terminal
      </div>
      <pre className="bg-green-50/60 text-gray-800 px-4 py-3 text-sm leading-7 overflow-x-auto">
        {lines.join("\n")}
      </pre>
    </div>
  );
}

/* Tabs Component */
function Tabs({ className = "" }) {
  return (
    <div className={`inline-flex rounded-md overflow-hidden border border-gray-200 text-xs ${className}`}>
      <div className="px-3 py-1 bg-green-50 text-green-800 border-r border-gray-200">
        npm
      </div>
      <div className="px-3 py-1 bg-gray-50 text-gray-600">yarn</div>
    </div>
  );
}
