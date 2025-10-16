import React from "react";

export default function Database() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 flex items-start justify-center py-8 sm:py-10">
			<div className="w-full max-w-3xl sm:max-w-4xl px-4 sm:px-6 md:px-8">
				<article className="prose sm:prose lg:prose-lg max-w-none">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">Database</h1>
					<p className="text-gray-600 text-sm sm:text-base">
						StudyStudio supports multiple database providers. Choose the one that fits your needs — self-hosted or managed services are both supported. Below are the common setup steps for Neon, Pinecone and Upstash.
					</p>

					<section id="neon" className="mt-6 sm:mt-8">
						<h2 className="text-xl sm:text-2xl font-bold">Neon</h2>
						<p className="text-gray-600 text-sm sm:text-base">
							Neon is an open-source serverless Postgres platform. You can host it on Neon or on a similar serverless Postgres provider. Follow the steps below to configure Neon for StudyStudio.
						</p>

						<ol className="mt-4 list-decimal list-inside space-y-4 sm:space-y-6">
							<li>
								<h3 className="font-semibold text-sm sm:text-base">Setup Neon Account</h3>
								<p className="text-sm text-gray-600">
									Create a Neon account, create a project and a branching database. Keep the connection string ready.
								</p>
								<div className="mt-3 bg-white border rounded-lg overflow-hidden shadow-sm">
									<div className="p-3 sm:p-4">
										<div className="w-full h-36 sm:h-40 md:h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
											<span className="text-xs sm:text-sm">Screenshot: Neon dashboard (placeholder)</span>
										</div>
									</div>
								</div>
							</li>

							<li>
								<h3 className="font-semibold text-sm sm:text-base">Get Connection String</h3>
								<p className="text-sm text-gray-600">Copy the Neon connection string (postgres://...)</p>
								<pre className="bg-gray-900 text-gray-100 rounded-lg p-3 sm:p-4 overflow-auto text-xs sm:text-sm whitespace-pre">
<code>{`# .env.local
NEON_CONNECTION_STRING=postgres://user:pass@host:5432/dbname`}</code>
								</pre>
							</li>
						</ol>
					</section>

					<section id="pinecone" className="mt-6 sm:mt-8">
						<h2 className="text-xl sm:text-2xl font-bold">Pinecone</h2>
						<p className="text-gray-600 text-sm sm:text-base">
							Pinecone is a vector database used for similarity search in ML applications. Use Pinecone for embeddings and vector search.
						</p>

						<ol className="mt-4 list-decimal list-inside space-y-4 sm:space-y-6">
							<li>
								<h3 className="font-semibold text-sm sm:text-base">Setup Pinecone Account</h3>
								<p className="text-sm text-gray-600">
									Create an index in Pinecone. Configure dimensions and metric as required.
								</p>
								<div className="mt-3 bg-white border rounded-lg overflow-hidden shadow-sm">
									<div className="p-3 sm:p-4">
										<div className="w-full h-36 sm:h-40 md:h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
											<span className="text-xs sm:text-sm">Screenshot: Pinecone index creation (placeholder)</span>
										</div>
									</div>
								</div>
							</li>

							<li>
								<h3 className="font-semibold text-sm sm:text-base">Get Pinecone API Key & Index</h3>
								<p className="text-sm text-gray-600">Copy your Pinecone API key and index name from the Pinecone dashboard.</p>
								<pre className="bg-gray-900 text-gray-100 rounded-lg p-3 sm:p-4 overflow-auto text-xs sm:text-sm whitespace-pre">
<code>{`# .env.local
PINECONE_INDEX=your-pinecone-index
PINECONE_ENVIRONMENT=your-pinecone-environment
PINECONE_API_KEY=your-pinecone-api-key`}</code>
								</pre>
							</li>
						</ol>
					</section>

					<section id="upstash" className="mt-6 sm:mt-8">
						<h2 className="text-xl sm:text-2xl font-bold">Upstash</h2>
						<p className="text-gray-600 text-sm sm:text-base">
							Upstash provides serverless Redis which is convenient for caching, rate-limiting and small persistence needs.
						</p>

						<ol className="mt-4 list-decimal list-inside space-y-4 sm:space-y-6">
							<li>
								<h3 className="font-semibold text-sm sm:text-base">Setup Upstash Account</h3>
								<p className="text-sm text-gray-600">Create a Redis database on Upstash and note the REST URL and token.</p>
								<div className="mt-3 bg-white border rounded-lg overflow-hidden shadow-sm">
									<div className="p-3 sm:p-4">
										<div className="w-full h-36 sm:h-40 md:h-48 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">
											<span className="text-xs sm:text-sm">Screenshot: Upstash dashboard (placeholder)</span>
										</div>
									</div>
								</div>
							</li>

							<li>
								<h3 className="font-semibold text-sm sm:text-base">Get Upstash Environment Variables</h3>
								<p className="text-sm text-gray-600">Copy the REST URL and token and add them to your environment file.</p>
								<pre className="bg-gray-900 text-gray-100 rounded-lg p-3 sm:p-4 overflow-auto text-xs sm:text-sm whitespace-pre">
<code>{`# .env.local
UPSTASH_REDIS_REST_URL=your-upstash-redis-rest-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-rest-token`}</code>
								</pre>
							</li>
						</ol>
					</section>

					<footer className="mt-8 sm:mt-12 text-sm text-gray-500">
						<p>Last updated on November 10, 2024</p>
					</footer>
				</article>
			</div>
		</div>
	);
}