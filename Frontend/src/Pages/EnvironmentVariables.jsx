// src/Documentation/EnvironmentVariables.jsx
import React from "react";
import envPreviewImage from "../assets/Environment.webp"; // adjust the path as needed

export default function EnvironmentVariables({ lastUpdated = "November 8, 2024" }) {
  const envExample = `# CLERK (Authentication service)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = your-clerk-publishable-key
CLERK_SECRET_KEY = your-clerk-secret-key

# CLERK URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL = /sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL = /sign-up

# GOOGLE GEMINI API KEY (AI service)
NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY = your-google-gemini-api-key

# DRIZZLE & NEON (ORM & Database service)
NEXT_PUBLIC_DRIZZLE_DB_URL = your-neon-db-connection-string
DATABASE_URL = your-neon-db-connection-string

# CLOUDINARY (Image storage service)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = your-cloudinary-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET = your-cloudinary-upload-preset

# STRIPE (Payment service)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = your-stripe-publishable-key
STRIPE_SECRET_KEY = your-stripe-secret-key
NEXT_PUBLIC_STRIPE_MONTHLY_SUBSCRIPTION_PRICE_ID = your-stripe-price-id

# RAZORPAY VARS (Payment service)
NEXT_PUBLIC_RAZORPAY_KEY_ID = your-razorpay-key-id
RAZORPAY_KEY_SECRET = your-razorpay-key-secret

# APP URL
NEXT_PUBLIC_APP_URL = http://localhost:3000
NEXT_PUBLIC_APP_TEST_MODE = true

# ADDITIONALS
VERCEL_DEEP_CLONE = true
`;

  return (
    <main className="flex-1 px-6 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li>
              <a href="/documentation" className="hover:underline">Documentation</a>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <a href="/documentation/local-environment" className="hover:underline">Local Environment</a>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-700">Environment Variables</li>
          </ol>
        </nav>

        {/* Title */}
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Creating Environment Variables
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            You need to create an <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">.env.local</code> file in your project root and add the following environment variables:
          </p>
        </header>

        {/* .env code block */}
        <section className="mb-8">
          <div className="rounded-lg overflow-hidden border border-emerald-100 bg-emerald-50">
            <div className="px-6 py-6">
              <pre
                className="whitespace-pre-wrap break-words text-xs sm:text-sm leading-relaxed text-emerald-900"
                style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace" }}
              >
                <code>{envExample}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Illustration / preview image */}
        <section className="mb-8">
          <p className="text-sm text-gray-600 mb-3">
            This is how your project root directory should look after creating the <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">.env.local</code> file:
          </p>

          <div className="bg-white shadow-sm rounded-md overflow-hidden">
            {/* Replace the src with your actual preview image import or URL */}
            <img
              src={envPreviewImage}
              alt="Project root with .env.local file"
              className="w-full h-56 sm:h-72 object-cover"
            />
          </div>

          <p className="text-center text-xs text-gray-500 mt-3">
            Post creation of <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">.env.local</code> file in project root directory.
          </p>
        </section>

        {/* Last updated */}
        <div className="text-right text-sm text-gray-500 mb-6">
          Last updated on {lastUpdated}
        </div>

        <hr className="border-t border-gray-100 my-6" />

        {/* Bottom navigation */}
        <nav className="flex items-center justify-between text-sm">
          <a href="/documentation/local-environment/getting-started" className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Getting Started
          </a>

          <a href="/documentation/local-environment/gemini" className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600">
            <span>Gemini</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>

      </div>
    </main>
  );
}
