import React from "react";
import { CheckSquare, BookOpen, UserCheck, Clock } from "lucide-react";
import backgroundImg from "../assets/Container.png"; // ensure this path & filename are correct

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background image (DOM <img> so bundler resolves path reliably) */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={backgroundImg}
          alt=""
          className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-cover"
          style={{ objectPosition: "center top" }}
        />
      </div>

      {/* Gradient fade at bottom of image to white (sits above image, behind content) */}
      <div
        className="absolute inset-x-0 top-0 -z-5 pointer-events-none"
        style={{
          height: "420px",
          background:
            "linear-gradient(to bottom, rgba(238,247,239,0.95) 20%, rgba(238,247,239,0.7) 50%, rgba(255,255,255,0) 85%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-20 pb-12 md:pt-28 md:pb-20 text-center">
          {/* Small pill */}
          <div className="inline-flex items-center bg-white/90 border border-gray-200 rounded-full px-4 py-1 text-sm shadow-sm mb-4">
            <span className="text-sm text-gray-600">
              Free subscription for a limited time
            </span>
            <a
              href="#"
              className="ml-3 inline-flex items-center justify-center bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full"
            >
              Join Now
            </a>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            <span className="block">
              Study<span className="text-emerald-600">Studio</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            Say goodbye to tutor fees and endless study hours. StudyStudio is your
            24/7 AI-powered study partner.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="#get-started"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-md shadow"
            >
              <span>Get started</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Features area */}
        <div className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature
              icon={<BookOpen className="w-6 h-6 text-emerald-600" />}
              title="AI Coursework"
              desc="Access a vast library of AI subject templates."
            />
            <Feature
              icon={<UserCheck className="w-6 h-6 text-emerald-600" />}
              title="Customizable AI Tutor"
              desc="24/7 AI tutoring, tailored to your needs."
            />
            <Feature
              icon={<CheckSquare className="w-6 h-6 text-emerald-600" />}
              title="Free to Use"
              desc="Upgrade to unlock premium features."
            />
            <Feature
              icon={<Clock className="w-6 h-6 text-emerald-600" />}
              title="24/7 Support"
              desc="Contact us 24 hours a day, 7 days a week."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Feature card subcomponent */
function Feature({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-start gap-4 p-4 md:p-6 text-left">
      <div className="p-3 rounded-lg bg-emerald-50 inline-flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <a
        href="#"
        className="mt-3 text-sm font-medium text-emerald-600 inline-flex items-center gap-2"
      >
        Learn more
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
        >
          <path
            d="M5 12h14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}
