import React, { useState } from "react";

/**
 * PaymentGatewaysGuide.jsx
 * Responsive documentation page built with React + Tailwind CSS.
 * Layout: header, collapsible sidebar, main content, right sticky TOC, footer.
 */
export default function PaymentGatewaysGuide() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const leftNav = [
    { group: "Environments", items: [
      "Local Environment",
      "Getting Started",
      "Environment Variables",
      "Gemini",
      "Authentication",
      { label: "Payment Gateways", active: true },
      "Database ORM",
      "Storage",
      "Database",
      "Starting Server",
      "Stopping Server",
      "Production Environment",
      "Custom Server Environment",
    ]},
  ];

  const toc = [
    { id: "integrating", label: "Integrating Payment Gateways" },
    { id: "stripe", label: "Stripe" },
    { id: "secret", label: "Replacing Secret Key" },
    { id: "webhook", label: "Replacing Webhook Secret" },
    { id: "price", label: "Replacing Monthly Subscription Price ID" },
    { id: "paypal", label: "PayPal" },
    { id: "razorpay", label: "Razorpay" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
              aria-label="Toggle sidebar"
              onClick={() => setOpenSidebar(v => !v)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded"></div>
              <span className="font-semibold">StudyStudio</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <input
              className="hidden sm:block border rounded-md px-3 py-1.5 text-sm w-56 focus:outline-none focus:ring focus:ring-emerald-200"
              placeholder="Search documentation…"
            />
            <button className="bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-emerald-700">Buy now</button>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-12 gap-6">
          {/* Left sidebar */}
          <aside className={`col-span-12 md:col-span-3 xl:col-span-2 bg-white md:bg-transparent border md:border-0 rounded md:rounded-none ${openSidebar ? 'block' : 'hidden'} md:block`}>
            {leftNav.map((g, gi) => (
              <div key={gi} className="md:sticky md:top-16">
                <h3 className="px-4 md:px-0 text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">{g.group}</h3>
                <ul className="divide-y md:divide-y-0 border md:border-0 rounded md:rounded-none">
                  {g.items.map((it, i) => {
                    const label = typeof it === 'string' ? it : it.label;
                    const active = typeof it === 'object' && it.active;
                    return (
                      <li key={i} className={`px-4 md:px-0 py-2 text-sm ${active ? 'bg-emerald-50 text-emerald-700 font-medium rounded-md md:rounded-none' : 'hover:text-gray-900'}`}>{label}</li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </aside>

          {/* Main content */}
          <main className="col-span-12 md:col-span-9 xl:col-span-8">
            <nav className="text-sm text-gray-500 mb-2">
              <span>Documentation</span> <span className="mx-1">›</span>
              <span>Local Environment</span> <span className="mx-1">›</span>
              <span className="text-gray-900 font-medium">Payment Gateways</span>
            </nav>

            <h1 id="integrating" className="text-2xl font-bold mb-3">Integrating Payment Gateways</h1>
            <p className="text-gray-700 mb-4">Currently StudyStudio supports the following payment gateways:</p>
            <ul className="list-disc list-inside text-emerald-700 mb-6">
              <li><a href="#" className="underline">Stripe</a></li>
              <li><a href="#" className="underline">PayPal</a></li>
              <li><a href="#" className="underline">Razorpay</a></li>
            </ul>

            <p className="text-gray-700 mb-6">We will guide you through the process of integrating these payment gateways into your StudyStudio application.</p>

            <section id="stripe" className="scroll-mt-20">
              <h2 className="text-lg font-semibold mb-3">Stripe</h2>
              <p className="text-gray-700 mb-4">The current setup for a subscription-based system is a single <a href="#" className="text-emerald-700 underline">Monthly</a> plan. To enable Stripe billing, you will need to fill out the following fields in your <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file.</p>

              {/* Replacing Secret Key */}
              <h3 id="secret" className="text-base font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">1</span>
                Replacing Secret Key
              </h3>
              <p className="text-gray-700 mb-4">Replace <code className="bg-gray-100 px-1 rounded">your-stripe-secret-key</code> with your original <strong>Stripe Secret Key</strong> from <a href="#" className="text-emerald-700 underline">Stripe dashboard page</a>.</p>

              {/* Replacing Webhook Secret */}
              <h3 id="webhook" className="text-base font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">2</span>
                Replacing Webhook Secret
              </h3>
              <p className="text-gray-700 mb-3">Replace <code className="bg-gray-100 px-1 rounded">your-stripe-webhook-secret</code> with your original <strong>Stripe Webhook Secret</strong> from <a href="#" className="text-emerald-700 underline">Stripe webhook page</a>. Create a new endpoint that points to the URL: <code className="bg-gray-100 px-1 rounded">your-app-url/api/stripe/webhook</code>. The webhook should listen for the following events:</p>
              <ul className="bg-gray-50 border rounded-md text-sm font-mono p-4 mb-6 text-gray-700 space-y-1">
                <li>checkout.session.completed</li>
                <li>customer.subscription.created</li>
                <li>customer.subscription.deleted</li>
                <li>customer.subscription.updated</li>
                <li>invoice.payment_succeeded</li>
                <li>invoice.payment_failed</li>
              </ul>

              {/* Replacing Monthly Subscription Price ID */}
              <h3 id="price" className="text-base font-semibold flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-emerald-600 text-white">3</span>
                Replacing Monthly Subscription Price ID
              </h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded text-yellow-800 mb-4">
                ⚠️ Currently you can only offer a single subscription. Additional subscription plans will be added in the future.
              </div>
              <p className="text-gray-700 mb-4">Before replacing <code className="bg-gray-100 px-1 rounded">your-stripe-monthly-subscription-price-id</code>, create a new price product from your <a href="#" className="text-emerald-700 underline">Stripe product page</a>. On the product catalog, click <em>Create product</em>, fill details, and select <em>Recurring</em> with your <em>Billing interval</em>. Once done, copy the <strong>Price ID</strong> and replace it in your environment file.</p>

              <div className="rounded-md border bg-white overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-b">.env.local</div>
                <pre className="p-4 text-sm overflow-auto"><code>{`NEXT_PUBLIC_STRIPE_MONTHLY_SUBSCRIPTION_PRICE_ID = your-stripe-monthly-subscription-price-id`}</code></pre>
              </div>

              <div className="border rounded-md overflow-hidden bg-white mb-8">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
                  alt="Example for a monthly subscription product."
                  className="w-full object-cover"
                />
                <div className="text-center text-xs text-gray-500 py-2">Example for a monthly subscription product.</div>
              </div>

              {/* PayPal */}
              <section id="paypal" className="scroll-mt-20 mb-8">
                <h2 className="text-lg font-semibold mb-3">PayPal</h2>
                <p className="text-gray-700 mb-3">To enable PayPal billing, perform the following steps:</p>
                <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-3 rounded">
                  ℹ️ Currently under development. Thank you for your patience.
                </div>
              </section>

              {/* Razorpay */}
              <section id="razorpay" className="scroll-mt-20">
                <h2 className="text-lg font-semibold mb-3">Razorpay</h2>
                <p className="text-gray-700 mb-3">To enable Razorpay billing, perform the following steps:</p>
                <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-3 rounded">
                  ℹ️ Currently under development. Thank you for your patience.
                </div>
              </section>

              <p className="text-xs text-gray-400 mt-8">Last updated on November 3, 2024</p>
              <div className="flex items-center justify-between border-t mt-6 pt-4 text-sm">
                <a href="#" className="hover:underline">‹ Authentication</a>
                <a href="#" className="hover:underline">Database ORM ›</a>
              </div>
            </section>
          </main>

          {/* Right TOC */}
          <aside className="hidden xl:block col-span-2">
            <div className="sticky top-16">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">On this page</div>
              <ul className="space-y-2 text-sm">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-gray-600 hover:text-gray-900 hover:underline">{t.label}</a></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t text-center text-gray-500 text-sm py-4">© 2025 StudyStudio Inc. All rights reserved.</footer>
    </div>
  );
}