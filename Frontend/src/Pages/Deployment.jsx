export default function VercelDeploymentDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Vercel Deployment</h1>

      {/* Notices */}
      <Note tone="info" className="mb-4">
        We’re using <span className="font-semibold">Vercel</span> to host our codebase. While it’s
        possible to host on other platforms, it’s advisable to use Vercel for a seamless experience.
      </Note>
      <Note tone="warning" className="mb-8">
        Before deploying, ensure you’ve completed all previous steps and collected the required
        environment variables.
      </Note>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed mb-6">
        In this section, we’ll deploy <span className="font-semibold">StudyStudio</span> to Vercel.
        Vercel provides developer tools and secure cloud infrastructure to build, scale, and deliver
        fast, modern web apps. Its hassle-free, one-click deployment makes it a popular choice for
        zero-cost starters.
      </p>
      <p className="text-gray-700 leading-relaxed mb-10">
        For an easier deployment process, connect your{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">GitHub</a> account to
        Vercel and import your repository.
      </p>

      {/* Step: Import Git Repository */}
      <Step number={1} title="Import Git Repository">
        <p>
          On the Vercel dashboard, click <Code>Add New</Code> → <Code>Project</Code>, then choose
          your Git provider and repository. Click <Code>Import</Code>, choose a project name, and
          open the <Code>Environment Variables</Code> tab. Paste your collected variables before
          deploying.
        </p>

        <div className="rounded-md border border-blue-100 bg-blue-50/60 text-blue-900 text-sm px-4 py-3 mt-4">
          <p className="font-medium mb-2">You can paste all of them at once. Ensure:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><span className="font-medium">Key</span> is exactly as shown.</li>
            <li><span className="font-medium">Value</span> is your copied value.</li>
            <li><span className="font-medium">Environment</span> is set appropriately (Preview/Prod).</li>
          </ul>
        </div>

        {/* Env Vars Block */}
        <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto my-6">
{`# === CLERK (Authentication service) ===
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key

# === CLERK ROUTES ===
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# === GOOGLE GEMINI (AI service) ===
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY=your-google-gemini-api-key

# === DRIZZLE + NEON (DB service) ===
NEXT_PUBLIC_DRIZZLE_DB_URL=your-neon-db-connection-string
DATABASE_URL=your-neon-db-connection-string

# === CLOUDINARY (Storage) ===
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your-cloudinary-upload-preset

# === PINECONE (AI service) ===
PINECONE_INDEX=your-pinecone-index
PINECONE_ENVIRONMENT="aws"   # options: "aws", "gcp"
PINECONE_API_KEY=your-pinecone-api-key

# === UPSTASH REDIS (Cache) ===
UPSTASH_REDIS_REST_URL=your-upstash-redis-rest-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-rest-token

# === STRIPE (Payments) ===
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_MONTHLY_SUBSCRIPTION_PRICE_ID=your-stripe-monthly-subscription-price-id

# === PAYPAL (Payments) ===
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your-paypal-client-id

# === RAZORPAY (Payments) ===
NEXT_PUBLIC_RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret

# === GOOGLE ANALYTICS ===
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-google-analytics-id
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID_VALUE=your-google-analytics-id-value

# === APP URL & TEST MODE ===
NEXT_PUBLIC_APP_URL=https://your-domain.com   # or http://localhost:3000
NEXT_PUBLIC_APP_TEST_MODE=true                # set to true for test mode

# === ADDITIONALS ===
VERCEL_DEEP_CLONE=true`}
        </pre>

        {/* Vercel deployment UI screenshot */}
        <figure className="mt-6">
          <img
            src="/images/vercel-deploy-page.png"
            alt="The deployment page on Vercel"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            The deployment page on Vercel.
          </figcaption>
        </figure>

        <p className="text-gray-700 leading-relaxed mt-8">
          Once deployment completes, you’ll see your app instance live. It should resemble the
          following:
        </p>

        {/* App live screenshot */}
        <figure className="mt-6">
          <img
            src="/images/studystudio-live.png"
            alt="StudyStudio running in a live environment"
            className="w-full rounded-xl shadow-lg"
          />
          <figcaption className="text-sm text-gray-500 text-center mt-2">
            StudyStudio running in a live environment.
          </figcaption>
        </figure>

        <p className="text-gray-700 leading-relaxed mt-6">
          That’s it — StudyStudio is live and ready to use.
        </p>
      </Step>

      {/* Footer */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 11, 2024
      </div>
      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Google Analytics</a>
        <a href="#" className="hover:underline">Customization ›</a>
      </nav>
    </main>
  );
}

/* ---------- UI Helpers ---------- */

function Step({ number, title, children }) {
  return (
    <section className="relative pl-12 sm:pl-14 mb-12">
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
    info: "bg-emerald-50 border-emerald-100 text-emerald-900",
    warning: "bg-yellow-50 border-yellow-100 text-yellow-900",
  };
  return (
    <div className={`rounded-md px-4 py-3 text-sm border ${tones[tone]} ${className}`}>
      {children}
    </div>
  );
}
