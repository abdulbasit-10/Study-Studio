export default function PaymentGatewaysDoc() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Integrating Payment Gateways
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Currently <span className="font-semibold">StudyStudio</span> supports the following payment gateways:
      </p>
      <ul className="list-disc list-inside space-y-1 mb-6 text-green-700">
        <li><a href="#" className="hover:underline">Stripe</a></li>
        <li><a href="#" className="hover:underline">PayPal</a></li>
        <li><a href="#" className="hover:underline">Razorpay</a></li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-10">
        We will guide you through the process of integrating these payment gateways into your
        StudyStudio application.
      </p>

      {/* Stripe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3" id="stripe">Stripe</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          The current setup for a subscription-based system is a single{" "}
          <span className="font-semibold">Monthly</span> plan. To enable Stripe billing, fill out
          the following fields in your <code className="bg-gray-100 px-1 rounded text-sm">.env</code> file:
        </p>

        {/* Step 1 */}
        <Step number={1} title="Replacing Secret Key">
          Replace <Code>your-stripe-secret-key</Code> with your original{" "}
          <span className="font-medium">Stripe Secret key</span> from{" "}
          <a href="#" className="text-green-700 underline hover:text-green-800">Stripe dashboard</a>.
        </Step>

        {/* Step 2 */}
        <Step number={2} title="Replacing Webhook Secret">
          Replace <Code>your-stripe-webhook-secret</Code> with your original{" "}
          <span className="font-medium">Stripe Webhook Secret</span> from{" "}
          <a href="#" className="text-green-700 underline hover:text-green-800">Stripe webhook page</a>{" "}
          by creating a new endpoint that points to:
          <Code className="ml-1">/api/stripe/webhook</Code>. The webhook should listen for:
          <ul className="mt-4 space-y-1 text-gray-700">
            <li>• <Code>checkout.session.completed</Code></li>
            <li>• <Code>customer.subscription.created</Code></li>
            <li>• <Code>customer.subscription.deleted</Code></li>
            <li>• <Code>customer.subscription.updated</Code></li>
            <li>• <Code>invoice.payment_succeeded</Code></li>
            <li>• <Code>invoice.payment_failed</Code></li>
          </ul>
        </Step>

        {/* Step 3 */}
        <Step number={3} title="Replacing Monthly Subscription Price ID">
          <Note>
            Currently you can only offer a single subscription. Additional subscription plans will
            be added in the future.
          </Note>

          <p className="text-gray-700 leading-relaxed mt-4">
            Before replacing <Code>your-stripe-monthly-subscription-price-id</Code>, create a
            new price product from your{" "}
            <a href="#" className="text-green-700 underline hover:text-green-800">
              Stripe product page
            </a>.
            On the product catalog, click <span className="font-medium">Create product</span> and fill
            in the details. Select the <span className="font-medium">Recurring</span> option and set the{" "}
            <span className="font-medium">Billing interval</span>. After creating, go to the{" "}
            <span className="font-medium">Product</span> page, click the three dots on the right of the
            price and select <span className="font-medium">Copy price ID</span>.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            This is the <span className="font-medium">Price ID</span> you will use to replace{" "}
            <Code>your-stripe-monthly-subscription-price-id</Code>.
          </p>

          <pre className="bg-green-50 border border-green-100 rounded-lg p-4 text-sm overflow-x-auto my-4">
{`# env.local
NEXT_PUBLIC_STRIPE_MONTHLY_SUBSCRIPTION_PRICE_ID=your-stripe-monthly-subscription-price-id`}
          </pre>

          {/* Example image */}
          <figure className="mt-6">
            <img
              src="/images/stripe-monthly-example.png"
              alt="Example for a monthly subscription product"
              className="w-full rounded-xl shadow-lg"
            />
            <figcaption className="text-sm text-gray-500 text-center mt-2">
              Example for a monthly subscription product.
            </figcaption>
          </figure>
        </Step>
      </section>

      {/* PayPal */}
      <section className="mb-12" id="paypal">
        <h2 className="text-2xl font-bold mb-3">PayPal</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          To enable PayPal billing, you will need to perform the following steps:
        </p>
        <Info>Currently under development. Thank you for your patience.</Info>
      </section>

      {/* Razorpay */}
      <section className="mb-12" id="razorpay">
        <h2 className="text-2xl font-bold mb-3">Razorpay</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          To enable Razorpay billing, you will need to perform the following steps:
        </p>
        <Info>Currently under development. Thank you for your patience.</Info>
      </section>

      {/* Footer-like meta + prev/next */}
      <div className="text-right text-xs text-gray-500 mt-10">
        Last updated on November 3, 2024
      </div>

      <nav className="flex items-center justify-between mt-8 pt-6 border-t text-green-700 text-sm">
        <a href="#" className="hover:underline">‹ Authentication</a>
        <a href="#" className="hover:underline">Database ORM ›</a>
      </nav>
    </main>
  );
}

/* ---------- Small UI helpers ---------- */

function Step({ number, title, children }) {
  return (
    <div className="relative pl-12 sm:pl-14 mb-10">
      <div className="absolute left-0 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-sm font-semibold text-gray-700">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  );
}

function Code({ children, className = "" }) {
  return (
    <code className={`bg-gray-100 rounded px-1 py-0.5 text-sm ${className}`}>
      {children}
    </code>
  );
}

function Note({ children }) {
  return (
    <div className="bg-yellow-50 border border-yellow-100 text-yellow-900 rounded-md px-4 py-3 text-sm">
      {children}
    </div>
  );
}

function Info({ children }) {
  return (
    <div className="bg-blue-50 border border-blue-100 text-blue-900 rounded-md px-4 py-3 text-sm">
      {children}
    </div>
  );
}
