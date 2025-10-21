// src/LearnMore.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Home } from "lucide-react"; // for home icon

export default function LearnMore() {
  const { topic } = useParams(); // <-- dynamic route like /learn-more/:topic
  const navigate = useNavigate();

  // ✅ All data objects
  const topics = {
    "ai-coursework": {
      title: "AI Coursework",
      subtitle: "Explore our vast library of AI-powered academic templates",
      description: `
        <p>
          StudyStudio’s <strong>AI Coursework</strong> module helps students and educators
          streamline academic tasks. Access pre-built templates for <em>mathematics, coding,
          data analysis, essay writing</em> and more — all enhanced with AI assistance.
        </p>
        <ul>
          <li>✅ Auto-generated study notes from your course material.</li>
          <li>📚 Ready-to-use lab reports, quizzes, and assignments.</li>
          <li>📈 Smart progress tracking with visual analytics.</li>
        </ul>
        <p>
          Whether you’re a teacher designing lessons or a learner completing projects,
          our AI system adapts to your syllabus and writing style to save hours of effort.
        </p>
      `,
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60",
    },

    "ai-tutor": {
      title: "Customizable AI Tutor",
      subtitle: "Your 24/7 smart learning companion",
      description: `
        <p>
          Our <strong>Customizable AI Tutor</strong> provides interactive lessons,
          personalized explanations, and adaptive quizzes based on each student's skill level.
        </p>
        <ul>
          <li>🤖 Learn through real-time AI chat sessions that explain topics step-by-step.</li>
          <li>🎯 Adjust difficulty — from beginner to advanced — with one click.</li>
          <li>🧠 Supports voice, text, and diagram-based queries for visual learners.</li>
        </ul>
        <p>
          Unlike static e-learning, this tutor learns with you — analyzing mistakes,
          offering hints, and generating tailored practice sets.
          It’s like having a private instructor on demand.
        </p>
      `,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=60",
    },

    "free-to-use": {
      title: "Free to Use",
      subtitle: "Enjoy premium AI tools without cost",
      description: `
        <p>
          Experience the power of AI learning tools — absolutely free! StudyStudio gives users access to key AI-powered study features,
          including interactive notes, smart summarization, and progress tracking.
        </p>
        <ul>
          <li>💰 No hidden costs or subscriptions required.</li>
          <li>🚀 Upgrade anytime for additional premium benefits.</li>
          <li>🌎 Accessible from any device, anywhere in the world.</li>
        </ul>
        <p>
          Start learning smarter today — for free — and upgrade later if you need more features.
        </p>
      `,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },

    "support-24-7": {
      title: "24/7 Support",
      subtitle: "We’re always here to help you succeed",
      description: `
        <p>
          Need help with your coursework, AI tutor setup, or account? Our support team is available 24/7.
          Whether you're facing a technical issue or want study guidance, we’ve got your back.
        </p>
        <ul>
          <li>📞 Live chat, email, and community forums.</li>
          <li>🕒 Response time within minutes, day or night.</li>
          <li>💬 Multilingual support for international learners.</li>
        </ul>
        <p>
          With StudyStudio, you’re never alone — our experts are just a message away.
        </p>
      `,
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=60",
    },
  };

  // get topic data
  const data = topics[topic];

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page not found 😢
        </h2>
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 p-6 md:p-10">
      {/* 🏠 Home Icon */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
      >
        <Home className="w-5 h-5 text-gray-700" />
      </button>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <img
          src={data.image}
          alt={data.title}
          className="rounded-lg mb-6 w-full object-cover h-64"
        />
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-500 mb-6">{data.subtitle}</p>
        <div
          className="prose prose-gray max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </div>
  );
}
