import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import PreviewImage from '../assets/1.webp'

export default function App() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "Can I install StudyStudio on my cPanel or DirectAdmin type hosting server?",
      a: "No, StudyStudio requires a Node.js runtime environment and cannot run on shared hosting like cPanel or DirectAdmin.",
    },
    {
      q: "What if I don’t want to use Resend for email services? Can I use my own email provider?",
      a: "Yes, you can integrate your own SMTP provider instead of Resend by updating the configuration files in your environment setup.",
    },
    {
      q: "Is StudyStudio entirely free to use?",
      a: "Yes! StudyStudio is free to deploy for testing and development, but some features require paid third-party services like Resend or Vercel.",
    },
    {
      q: "Someone mentioned that I’ll still need to pay for services like Astria, Vercel, and Resend after purchasing StudyStudio. Is this true?",
      a: "Yes, those are external service providers that handle hosting, AI processing, and email delivery. Their costs are separate from the StudyStudio license.",
    },
    {
      q: "Isn’t it too pricey to use all these platforms like Vercel, Resend, and Supabase once I get more users?",
      a: "Not necessarily — these services scale with your usage. You only pay for what you use, which makes it cost-effective for growing startups.",
    },
    {
      q: "But I’m not a developer nor can I do sales. Can I still use StudyStudio and get a userbase?",
      a: "Absolutely! StudyStudio is designed to be simple for non-technical users. You can use the built-in dashboard to manage your platform and attract users.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Documentation Content */}
        <main className="flex-1 pt-1 px-3 max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-4">
            Documentation &gt; <span className="text-gray-700 font-medium">Introduction</span>
          </p>
    </main>
      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-2 py-3">
        <h2 className="text-3xl font-bold mb-4">StudyStudio</h2>
        <p className="text-gray-700 leading-relaxed">
          Introducing <strong>StudyStudio</strong>, an educational SaaS platform powered by Gemini that lets students
          and parents create personalized AI tutors for any subject. With StudyStudio, say goodbye to high tutoring 
          costs and hello to flexible, on-demand learning. This intuitive platform makes it easy to tailor AI tutors 
          to specific coursework needs, allowing users to chat and learn at their own pace. Built with Next.js, React, 
          and Gemini StudyStudio is your ultimate tool to transform tutoring, making education accessible, customizable, 
          and affordable.
        </p>

          <img
          src={PreviewImage}
          alt="StudyStudio preview"
          className="mt-8 rounded-xl shadow-lg"
        />

        <p className="text-sm text-gray-500 text-center mt-10">
          The landing page of StudyStudio.
        </p>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          <p className="text-gray-700 mb-8 border-t">
            To start using StudyStudio, you need to select an environment first:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {["Local Environment", "Production Environment", "Custom Server Environment"].map(
              (env) => (
                <div
                  key={env}
                  className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
                >
                  <img
                    src="https://studystudio.vercel.app/preview.png"
                    alt={env}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4 border-t">
                    <h3 className="font-semibold text-green-700 hover:underline cursor-pointer">
                      {env} →
                    </h3>
                  </div>
                </div>
              )
            )}
          </div>

          <p className="mt-8 text-gray-600">
            Currently using StudyStudio without using one of these built-in environments is
            not possible.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">StudyStudio FAQs</h2>
        <p className="text-gray-700 mb-6">
          The StudyStudio FAQs is a collection of useful questions and answers about the
          project. If you have a question that isn’t answered here, please send us an{" "}
          <a href="mailto:support@studystudio.com" className="text-green-600 underline">
            email
          </a>.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-gray-50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 hover:bg-gray-100"
              >
                {item.q}
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="p-4 text-gray-700 border-t bg-white">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-50 text-center py-6 text-sm text-gray-600">
        <p>Last updated on October 30, 2024</p>
        <a href="#howitworks" className="text-green-600 hover:underline">
          How It Works →
        </a>
      </footer>
    </div>
  );
}
