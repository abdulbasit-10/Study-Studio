import React from "react";

const SubscribeSection = () => {
  return (
    <section className="w-full bg-white py-20 text-center">
      <h2 className="text-5xl font-bold text-[#39424F] mb-2">
        Subscribe <span
            className="bg-clip-text text-transparent bg-gradient-to-r"
            style={{
              backgroundImage:
                "linear-gradient(90deg,#2C8651 0%,#449665 60%,#2C8651 100%)",
            }}
          >
            Now
          </span>
      </h2>
      <p className="text-gray-500 mb-8">
        Subscribe to our newsletter and start making the most of every engagement.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-3xl mx-auto flex items-center border rounded-lg overflow-hidden"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 text-gray-700 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 flex items-center gap-2"
        >
          Join →
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-3">
        No spam, unsubscribe at any time.
      </p>
    </section>
  );
};

export default SubscribeSection;
