export default function DatabaseOrmDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Drizzle</h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed mb-4">
        <a href="#" className="text-green-700 underline hover:text-green-800">Drizzle</a> is an
        open-source headless Typescript ORM. It’s the only ORM with both relational and SQL-like
        query APIs, providing you the best of both worlds when it comes to accessing your
        relational data.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        For <Code>local server environment</Code>, we are using Drizzle in combination with{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">Neon</a> which is
        also an open-source <Code>PostgreSQL</Code> database.
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        In order to setup the Drizzle ORM, you need to follow the below steps:
      </p>

      {/* Step 1 */}
      <Step number={1} title="Setup project with Neon">
        Visit the <a href="#" className="text-green-700 underline hover:text-green-800">Neon</a>{" "}
        sign-up, and create a new project. You will be asked to setup a{" "}
        <Code>Name</Code>, <Code>Postgres version</Code>, <Code>Cloud Service Provider</Code>,{" "}
        <Code>Region</Code>, and <Code>Compute size</Code>. You can create your own database
        name or use the default one. For the rest of the values, you can keep them at default.
        Moving onwards, you will be redirected to the <Code>quickstart</Code>. From the{" "}
        <Code>quickstart</Code> section, select <Code>Postgres</Code>, click on{" "}
        <Code>show password</Code>, and copy the snippet.
        <figure className="mt-6">
          <img
            src="/images/neon-dashboard-example.png"
            alt="Neon dashboard project example"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            Example for a project created on Neon dashboard.
          </figcaption>
        </figure>
      </Step>

      {/* Step 2 */}
      <Step number={2} title="Replacing environment variables">
        Replace <Code>your-neon-db-connection-string</Code> with your original{" "}
        <span className="font-medium">Neon DB Connection String</span> from{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">Neon dashboard</a>.
        Ensure you have used the same <span className="font-medium">Neon DB Connection String</span>{" "}
        for all of the required environment variables.
        <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto mt-4">
{`# env.local
NEXT_PUBLIC_DRIZZLE_DB_URL=your-neon-db-connection-string
DATABASE_URL=your-neon-db-connection-string`}
        </pre>
      </Step>

      {/* Step 3 */}
      <Step number={3} title="Visiting Drizzle Studio">
        You can use the following command to visit Drizzle studio for your project:
        <div className="mt-4">
          <Tabs />
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-sm overflow-x-auto mt-2">
{`npm db:studio`}
          </pre>
        </div>
      </Step>

      {/* Completion note */}
      <p className="text-gray-700 leading-relaxed mt-8">
        This completes your setup for Drizzle ORM with Neon database. You can now start using
        Drizzle ORM in your project.
      </p>

      {/* Meta + Prev/Next */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 8, 2024
      </div>
      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Payment Gateways</a>
        <a href="#" className="hover:underline">Storage ›</a>
      </nav>
    </main>
  );
}

/* ---------- UI helpers ---------- */

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

/* Simple two-tab header mimic (npm / yarn) to match screenshot */
function Tabs() {
  return (
    <div className="inline-flex rounded-md overflow-hidden border border-gray-200 text-xs">
      <div className="px-3 py-1 bg-green-50 text-green-800 border-r border-gray-200">npm</div>
      <div className="px-3 py-1 bg-gray-50 text-gray-600">yarn</div>
    </div>
  );
}
