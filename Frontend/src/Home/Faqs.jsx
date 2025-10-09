import React, { useState } from "react";

const faqs = [
  {
    question: "Can I cancel at anytime?",
    answer:
      "Yes, you can cancel anytime. No questions are asked while you cancel, but we would highly appreciate it if you will give us some feedback.",
  },
  {
    question: "My team has credits. How do we use them?",
    answer:
      "Your team can use credits to access premium AI prompts or templates depending on your plan settings.",
  },
  {
    question: "How does StudyStudio's pricing work?",
    answer:
      "Our pricing is based on a flexible monthly subscription. You can upgrade or downgrade anytime.",
  },
  {
    question: "How secure is StudyStudio?",
    answer:
      "We use industry-standard encryption and never share your data. Your privacy and security are our top priorities.",
  },
  {
    question: "How do I get access to a template I purchased?",
    answer:
      "Purchased templates appear in your dashboard immediately after payment confirmation.",
  },
  {
    question: "Upgrade subscription type?",
    answer:
      "You can upgrade your plan anytime from your account settings, and the changes will take effect instantly.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white py-20 flex flex-col md:flex-row justify-center gap-16">
      {/* Left side text */}
      <div className="md:w-1/3 px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          FAQ<span className="text-green-600">S</span>
        </h2>
        <p className="text-gray-500">
          Answers to the most frequently asked questions.
        </p>
      </div>

      {/* Right side accordion */}
      <div className="md:w-1/2 px-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">{faq.question}</h3>
              <span className="text-gray-500 text-lg">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
