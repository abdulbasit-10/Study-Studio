import React from "react";

export default function Authentication() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 flex items-start justify-center py-10">
			<div className="w-full max-w-3xl px-4">
				<article className="prose prose-lg max-w-none">
					<section id="create-account" className="mb-8">
						<h2 className="text-2xl font-bold">1. Create a Clerk Account</h2>
						<p className="text-gray-600">
							Navigate to the Clerk Signin Page and sign up. After signing up you will be redirected to the Clerk dashboard where you can create a new application.
						</p>

						<div className="mt-4 bg-white border rounded-lg overflow-hidden shadow-sm">
							<div className="p-4">
								<div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
									{/* Replace with real screenshot path or component */}
									<span>Screenshot: Clerk dashboard while creating a new application</span>
								</div>
								<p className="mt-3 text-sm text-gray-500">Clerk dashboard while creating a new application.</p>
							</div>
						</div>
					</section>

					<section id="create-application" className="mb-8">
						<h2 className="text-2xl font-bold">2. Creating an Application</h2>
						<p className="text-gray-600">
							When creating an application you will be asked to enter the name and sign-in methods (Email, Google, Facebook, etc.). For this guide we use Email, Google and Facebook sign-in methods.
						</p>

						<div className="mt-4 bg-white border rounded-lg overflow-hidden shadow-sm">
							<div className="p-4">
								<div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
									<span>Screenshot: Setting up a new application on Clerk</span>
								</div>
								<p className="mt-3 text-sm text-gray-500">Setting up a new application on Clerk.</p>
							</div>
						</div>
					</section>

					<section id="setup-application" className="mb-8">
						<h2 className="text-2xl font-bold">3. Setting up the Application</h2>
						<p className="text-gray-600">
							After creating the application you can find the Publishable Key and Secret Key in the application settings. Copy these keys to your project's .env.local file.
						</p>

						<div className="mt-4 bg-white border rounded-lg overflow-hidden shadow-sm">
							<div className="p-4">
								<div className="w-full h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
									<span>Screenshot: Finding publishable and secret keys on the dashboard</span>
								</div>
								<p className="mt-3 text-sm text-gray-500">Finding publishable and secret keys on the dashboard.</p>
							</div>
						</div>
					</section>

					<section id="replace-keys" className="mb-8">
						<h2 className="text-2xl font-bold">4. Replacing Clerk Publishable Key and Clerk Secret Key</h2>
						<p className="text-gray-600">
							Replace the example keys below with the keys from the Clerk dashboard in your .env.local file at the root of the project.
						</p>

						<div className="mt-4">
							<pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-auto text-sm">
								<code>
{`# .env.local
REACT_APP_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
REACT_APP_CLERK_SECRET_KEY=your-clerk-secret-key`}
								</code>
							</pre>
							<p className="mt-3 text-sm text-gray-500">
								With this, you have successfully set up the authentication service for StudyStudio. Proceed to configure payment gateways next.
							</p>
						</div>
					</section>

					<footer className="mt-12 text-sm text-gray-500">
						<p>Last updated on November 10, 2024</p>
					</footer>
				</article>
			</div>
		</div>
	);
}