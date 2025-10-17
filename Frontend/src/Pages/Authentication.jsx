export default function AuthenticationDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6">Authentication</h1>

      <p className="text-gray-700 mb-8 leading-relaxed">
        For authentication purposes, <span className="font-semibold">StudyStudio</span> uses{" "}
        <a href="#" className="text-green-700 underline hover:text-green-800">
          Clerk
        </a>{" "}
        to implement the backend for managing sign-ups and sign-ins using
        multiple beautiful minimalist authentication pages. When running it
        locally, we use their test environment to self-host it on our local
        machine.
      </p>

      <p className="text-gray-700 mb-10 leading-relaxed">
        To sign in or sign up, you will need to enter your email address or
        connect your Google/Facebook account and follow the given steps.
      </p>

      {/* Step 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          1. Create a Clerk Account
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Navigate to the{" "}
          <a href="#" className="text-green-700 underline hover:text-green-800">
            Clerk Signin Page
          </a>{" "}
          and sign up. You’ll be redirected to the Clerk dashboard. Click on{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">Create application</code>.
        </p>

        <img
          src="/images/clerk-step1.png"
          alt="Clerk dashboard"
          className="rounded-xl shadow-lg mb-3"
        />
        <p className="text-sm text-gray-500 text-center">
          Clerk dashboard while creating a new application.
        </p>
      </section>

      {/* Step 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">2. Creating an Application</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Once you are in the process of creating an application, you will be
          asked to enter the name of the application and select the appropriate
          sign-in/sign-up methods for your users. For this project, we are using
          the{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            Email
          </code>
          ,{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            Google
          </code>{" "}
          and{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            Facebook
          </code>{" "}
          sign-in methods.
        </p>

        <img
          src="/images/clerk-step2.png"
          alt="Clerk app creation"
          className="rounded-xl shadow-lg mb-3"
        />
        <p className="text-sm text-gray-500 text-center">
          Setting up a new application on Clerk.
        </p>
      </section>

      {/* Step 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">3. Setting up the Application</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Afterwards, you’ll be redirected to the application settings page
          where you can find the{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            Publishable Key
          </code>{" "}
          and{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            Secret Key
          </code>
          . Copy these keys and paste them in the{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            .env.local
          </code>{" "}
          file in the root directory of your project.
        </p>

        <img
          src="/images/clerk-step3.png"
          alt="Clerk settings"
          className="rounded-xl shadow-lg mb-3"
        />
        <p className="text-sm text-gray-500 text-center">
          Finding publishable and secret keys on the dashboard.
        </p>
      </section>

      {/* Step 4 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          4. Replacing Clerk Keys
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Replace the{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            your-clerk-publishable-key
          </code>{" "}
          and{" "}
          <code className="bg-gray-100 px-1 rounded text-sm">
            your-clerk-secret-key
          </code>{" "}
          with the ones provided in the Clerk dashboard.
        </p>

        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-6">
{`# CLERK (Authentication service)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="clerk-publishable-key"
CLERK_SECRET_KEY="clerk-secret-key"`}
        </pre>

        <p className="text-gray-700 leading-relaxed">
          With this, you’ve successfully set up authentication for StudyStudio.
          You can now move on to the next section to set up the payment
          gateways.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm mt-16 text-center border-t pt-6">
        © 2025 StudyStudio Inc. All rights reserved.
      </footer>
    </main>
  );
}
