export default function GoogleAnalyticsDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Google Analytics</h1>

      {/* Top note */}
      <Note tone="warning" className="mb-6">
        Please make sure that you already have a{" "}
        <a href="#" className="underline">Google Analytics</a> account set up.
      </Note>

      <p className="text-gray-700 leading-relaxed mb-10">
        To add <a href="#" className="text-green-700 underline hover:text-green-800">Google Analytics</a> with
        <span className="font-semibold"> StudyStudio</span>, replace the following environment variables in your{" "}
        <Code>.env.local</Code> file. This is the easiest way to get started with GA. Just follow the steps to
        ensure it works correctly.
      </p>

      {/* Step 1 */}
      <Step number={1} title="Creating A Google Analytics Property">
        Go to your{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">Google Analytics</a>{" "}
        account and click on the <Code>Settings</Code> icon from the sidebar. Click on{" "}
        <Code>Create Property</Code> to create a new property. Select <Code>Property</Code> from the dropdown,
        fill the required details such as <Code>Property Name</Code>, <Code>Business Details</Code>,{" "}
        <Code>Business Objectives</Code>, and click on <Code>Create</Code>. Choose <Code>Web</Code> as the platform
        and enter your website URL and stream name. Then click <Code>Create & Continue</Code>.
        <figure className="mt-6">
          <img
            src="/images/ga-property.png"
            alt="Google Analytics property creation"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            A running window of a Google Analytics in a web browser.
          </figcaption>
        </figure>
      </Step>

      {/* Step 2 */}
      <Step number={2} title="Getting The Analytics ID">
        A new setup dialog will appear. Select the <Code>Install Manually</Code> option. You will see a
        tracking ID and a script source link that you need to copy (as shown below). Copy both values
        — you’ll place them in your <Code>.env.local</Code>.
        <figure className="mt-6">
          <img
            src="/images/ga-id-dialog.png"
            alt="Google Analytics manual install dialog"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            A running window of a Google Analytics account with dialog box for setup in a web browser.
          </figcaption>
        </figure>
      </Step>

      {/* Step 3 */}
      <Step number={3} title="Replacing Google Analytics ID">
        Replace <Code>your-google-analytics-id-source-link</Code> with your original{" "}
        <span className="font-medium">complete script src URL</span>, and{" "}
        <Code>your-google-analytics-id-value</Code> with your original{" "}
        <span className="font-medium">ID value</span> from the dialog.
        <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto mt-4">
{`# env.local
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = your-google-analytics-id-source-link
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_VALUE = your-google-analytics-id-value`}
        </pre>
        <p className="text-gray-700 leading-relaxed mt-4">
          Lastly, click the <Code>Test</Code> button in the GA interface to verify the integration is
          working smoothly.
        </p>
      </Step>

      {/* Footer */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 10, 2024
      </div>
      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Database</a>
        <a href="#" className="hover:underline">Deployment ›</a>
      </nav>
    </main>
  );
}

/* ---------- Helpers ---------- */

function Step({ number, title, children }) {
  return (
    <section className="relative pl-12 sm:pl-14 mb-10">
      <div className="absolute left-0 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
        {number}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}

function Code({ children }) {
  return (
    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">{children}</code>
  );
}

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
