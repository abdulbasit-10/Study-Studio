import React from "react";
import { Link } from "react-router-dom";

export default function BuyingGuide() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-3xl font-semibold mb-6">Which License To Buy?</h1>
      {/* divider + last-updated (shown under the line) */}
      <hr className="border-t border-gray-200 mb-3" />
      <div className="text-right text-sm text-gray-500 mb-6">Last updated on November 3, 2024</div>

      {/* Intro paragraph */}
      <p className="mb-6">
        There are two types of licenses available for purchase:
      </p>

      {/* List */}
      <ul className="list-disc list-inside mb-10 text-gray-700">
        <li>Regular License</li>
        <li>Extended License</li>
      </ul>

      {/* Regular License Section */}
      <h2 className="text-2xl font-semibold mb-2">Regular License</h2>
      <p className="text-gray-700 font-medium mb-4">
        Ideal for personal or internal use projects.
      </p>

      <p className="mb-4 text-gray-700">
        The Regular License is perfect if you’re creating something for personal
        use or a client project where there’s no direct revenue generation
        involved. This means you or your client can use StudyStudio for one end
        product without charging users for it.
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>One-time purchase for one project.</li>
        <li>No ongoing costs.</li>
        <li>
          Perfect for personal projects, internal tools, or any project where
          end users don’t pay to access it.
        </li>
      </ul>

      <h3 className="font-semibold mb-2">What you get:</h3>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>Full access to StudyStudio’s powerful features.</li>
        <li>
          Peace of mind knowing you’re covered for a single non-commercial
          project.
        </li>
      </ul>

      <p className="italic text-gray-600 mb-10">
        If your goal is to enhance your creative flow without worrying about
        monetization, the Regular License has you covered.
      </p>

      {/* Extended License Section */}
      <h2 className="text-2xl font-semibold mb-2">Extended License</h2>
      <p className="text-gray-700 font-medium mb-4">
        For commercial projects with endless potential.
      </p>

      <p className="mb-4 text-gray-700">
        The Extended License is designed for professionals and businesses who
        want to use our technology in commercial products.
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>
          Whether it’s a paid service, SaaS, or a product sold directly, the
          Extended License gives you the freedom to generate revenue from your
          end product.
        </li>
        <li>
          Use StudyStudio in one paid project that’s scalable and
          profit-generating.
        </li>
        <li>
          With the Extended License, you have the flexibility to scale and
          monetize your work, giving you more value from your investment.
        </li>
      </ul>

      <h3 className="font-semibold mb-2">Why go Extended?</h3>
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
        <li>
          Unlock the ability to charge end users for the product you create.
        </li>
        <li>
          Perfect for SaaS platforms, membership sites, and any project where
          monetization is key.
        </li>
        <li>
          Higher earning potential with no restrictions on how much you can
          charge your users.
        </li>
      </ul>

      <p className="italic text-gray-600 mb-10">
        Turn StudyStudio into a revenue-generating machine with the Extended
        License.
      </p>
      <p className="text-right">Last updated on November 3, 2024</p>

      {/* Prev / Next navigation (left and right) */}
      <nav className="mt-10 border-t border-gray-200 pt-6">
        <div className="flex justify-between font-semibold hover:text-green-500 items-center text-sm text-black">
          <Link to="/documentation/how-it-works" className="flex items-center space-x-3 hover:text-gray-900">
            <span className="text-2xl">‹</span>
            <span>How It Works</span>
          </Link>

          <Link to="/documentation/local" className="flex items-center space-x-3 hover:text-gray-900">
            <span>Local Environment</span>
            <span className="text-2xl">›</span>
          </Link>
        </div>
      </nav>
      
      {/* Footer note */}
        <footer className="w-full border-t border-gray-300 text-center py-3 mt-10 text-lg text-gray-800">
        © 2025{" "}
        <span className="text-gray-800">StudyStudio Inc.</span> All
        rights reserved.
      </footer>
    </section>
    
  );
}
