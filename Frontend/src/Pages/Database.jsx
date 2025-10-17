export default function DatabaseDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Neon Section */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Neon</h1>

      <Note tone="info" className="mb-4">
        <strong>Neon</strong> is completely open-source. Personally, we’re using Neon itself to host
        the database. The experience has been smooth with no issues. You can also use its
        self-hosting capabilities or host it on your own server — see their{" "}
        <a href="#" className="underline text-blue-800">
          documentation
        </a>
        .
      </Note>

      <Note tone="warning" className="mb-8">
        Please make sure to follow all of the following setup steps and configure dependencies and
        services accordingly.
      </Note>

      <p className="text-gray-700 leading-relaxed mb-6">
        The database service used in <span className="font-semibold">StudyStudio</span> is{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">
          Neon
        </a>
        . Neon is an open-source serverless Postgres database platform for developers. You can use
        Neon to host the database on a serverless architecture without needing to pay for
        maintenance.
      </p>

      <p className="text-gray-700 leading-relaxed mb-10">
        If you have followed the previous guide, then this step has already been configured
        properly. Additionally, we’re required to setup a storage service and some database
        services used for our AI model. This step is quite significant if you want AI to be
        fine-tuned and learn from data.
      </p>

      {/* Pinecone Section */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pinecone</h2>

      <p className="text-gray-700 mb-8">
        <a href="#" className="text-green-700 underline hover:text-green-800">
          Pinecone
        </a>{" "}
        is a cloud-based vector database for machine learning applications. It represents data as
        vectors, enabling fast and scalable search for similar data points in databases. This makes
        it essential for managing, ranking, and retrieving AI embeddings.
      </p>

      {/* Step 1 */}
      <Step number={1} title="Setup Pinecone Account">
        Create an account on{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">
          Pinecone
        </a>{" "}
        and get your <Code>Pinecone Index</Code>. Click on <Code>Create Index</Code> and set up your
        index name. Make sure the <Code>dimension</Code> is set to 1536 and <Code>metric</Code> is
        set to <Code>cosine</Code>. Choose your <Code>Cloud Provider</Code> and <Code>Region</Code>{" "}
        to be default. Afterwards, click <Code>Create Index</Code>.
        <figure className="mt-6">
          <img
            src="/images/pinecone-index.png"
            alt="Pinecone dashboard example"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            Example for the creation of an index on a Pinecone dashboard.
          </figcaption>
        </figure>
      </Step>

      {/* Step 2 */}
      <Step number={2} title="Getting the Pinecone environment variables">
        Afterwards, you’ll be redirected to the <Code>Index</Code> you just created. Click{" "}
        <Code>Connect</Code> and get your <Code>Pinecone API Key</Code> from the{" "}
        <Code>Initialize</Code> section. Click on <Code>Show API Key</Code>, copy it, and save it
        for later use.
        <figure className="mt-6">
          <img
            src="/images/pinecone-api.png"
            alt="Pinecone API key example"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            Example for getting the API key of an index on a Pinecone dashboard.
          </figcaption>
        </figure>
      </Step>

      {/* Step 3 */}
      <Step
        number={3}
        title="Replacing Pinecone Index, Pinecone Environment, and Pinecone API Key"
      >
        Replace your <Code>pinecone-index</Code> with your original{" "}
        <span className="font-medium">Pinecone Index Name</span>, your{" "}
        <Code>pinecone-environment</Code> with <Code>us-east-1</Code> or <Code>gcp</Code>{" "}
        depending on your setup, and your <Code>pinecone-api-key</Code> with your original API key.
        <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto mt-4">
{`# env.local
PINECONE_INDEX=your-pinecone-index
PINECONE_ENVIRONMENT="us-east-1"  # or "gcp"
PINECONE_API_KEY=your-pinecone-api-key`}
        </pre>
        <p className="text-gray-700 leading-relaxed mt-3">
          This completes the setup of Pinecone for your StudyStudio application.
        </p>
      </Step>

      {/* Upstash Section */}
      <h2 className="text-2xl sm:text-3xl font-bold mt-16 mb-4">Upstash</h2>

      <p className="text-gray-700 mb-8">
        <a href="#" className="text-green-700 underline hover:text-green-800">
          Upstash
        </a>{" "}
        is a serverless Redis database that can be used to store and manage data. It helps control
        request limits efficiently and runs smoothly even during heavy loads. With its generous
        free tier, it’s perfect for managing small or moderate workloads.
      </p>

      {/* Step 1 */}
      <Step number={1} title="Setup Upstash Account">
        Create an account on{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">
          Upstash
        </a>{" "}
        and log in. Click <Code>Create Database</Code> and then set your database name. Make sure
        the plan is set to <Code>Free</Code>. Once done, you’ll see your database dashboard.
        <figure className="mt-6">
          <img
            src="/images/upstash-db.png"
            alt="Upstash dashboard example"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            Example after the post-creation of a database on an Upstash dashboard.
          </figcaption>
        </figure>
      </Step>

      {/* Step 2 */}
      <Step number={2} title="Getting the Upstash environment variables">
        From the <Code>Database</Code> view, click <Code>REST API</Code>. Copy your{" "}
        <Code>REST URL</Code> and <Code>REST Token</Code>. Save them for later use.
        <figure className="mt-6">
          <img
            src="/images/upstash-env.png"
            alt="Upstash REST variables"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            Example for getting the environment variables of the database on an Upstash dashboard.
          </figcaption>
        </figure>
      </Step>

      {/* Step 3 */}
      <Step number={3} title="Replacing Upstash Environment Variables">
        Replace <Code>upstash-redis-rest-url</Code> with your original{" "}
        <span className="font-medium">Upstash Redis REST URL</span> and{" "}
        <Code>upstash-redis-rest-token</Code> with your{" "}
        <span className="font-medium">Upstash Redis REST Token</span> value.
        <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto mt-4">
{`# env.local
UPSTASH_REDIS_REST_URL=your-upstash-redis-rest-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-rest-token`}
        </pre>
        <p className="text-gray-700 leading-relaxed mt-3">
          This completes the setup of Upstash for your StudyStudio application as well as the setup
          of the database services.
        </p>
      </Step>

      {/* Footer */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 10, 2024
      </div>
      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">
          ‹ Storage
        </a>
        <a href="#" className="hover:underline">
          Starting Server ›
        </a>
      </nav>
    </main>
  );
}

/* ---------- UI Helper Components ---------- */

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
