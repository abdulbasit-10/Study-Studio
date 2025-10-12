import React from "react";

const PricingSection = () => {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#39424F]">
          Our  <span
            className="bg-clip-text text-transparent bg-gradient-to-r"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#2C8651 0%,#449665 60%,#2C8651 100%)",
            }}
          >
            Pricing
          </span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          Whatever your status, our offers evolve according to your needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {/* Free Plan */}
        <div className="border rounded-2xl shadow-sm p-8 w-80 text-center">
          <h3 className="text-gray-600 font-medium mb-2">Free</h3>
          <p className="text-4xl font-bold text-gray-900 mb-2">Free</p>
          <p className="text-sm text-gray-500 mb-6">Forever free.</p>
          <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
            <li>✔️ 10,000 credits</li>
            <li>✔️ Limited AI Prompts</li>
            <li>✔️ 1 month of history</li>
          </ul>
          <button className="w-full py-2 border rounded-md text-gray-700 hover:bg-gray-100 transition">
            Sign up
          </button>
        </div>

        {/* Monthly Plan */}
        <div className="border-2 border-green-600 rounded-2xl shadow-lg p-8 w-80 text-center relative">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
          <h3 className="text-gray-600 font-medium mb-2">Monthly</h3>
          <p className="text-4xl font-bold text-gray-900 mb-2">
            $9.<span className="text-2xl align-top">99</span>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            For students who want a full experience.
          </p>
          <ul className="text-gray-600 text-sm mb-8 space-y-2 text-left">
            <li>✔️ Unlimited credits</li>
            <li>✔️ Unlimited AI Prompts</li>
            <li>✔️ 1 year of history</li>
          </ul>
          <button className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
