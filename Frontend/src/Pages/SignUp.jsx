// src/SignUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validEmail = /(^[^\s@]+@[^\s@]+\.[^\s@]+$)/.test(email);
  const validPassword = password.length >= 8;
  const valid = validEmail && validPassword;

  async function onSubmit(e) {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    try {
      // Simulated signup request — replace with real API call
      await new Promise((r) => setTimeout(r, 800));

      alert("Signed up successfully! Redirecting to home...");
      navigate("/"); // 👈 redirect straight to home after signup
    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden">
          <div className="p-6 sm:p-8">
            <header className="text-center mb-6">
              <h1 className="text-xl font-semibold text-gray-900">
                Create your account
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Welcome! Please fill in the details to get started.
              </p>
            </header>

            {/* Social buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => alert("Facebook signup not implemented")}
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-gray-50"
              >
                <FacebookColor className="h-4 w-4" />
                Facebook
              </button>
              <button
                type="button"
                onClick={() => alert("Google signup not implemented")}
                className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-gray-50"
              >
                <GoogleColor className="h-4 w-4" />
                Google
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-3 text-gray-400">or</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                  required
                />
                {!validEmail && email.length > 0 && (
                  <p className="mt-1 text-xs text-red-500">
                    Please enter a valid email address.
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                </div>
                <div className="relative mt-1">
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 pr-10 text-gray-900 shadow-sm outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((s) => !s)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                    aria-label={showPw ? "Hide password" : "Show password"}
                  >
                    <EyeIcon open={showPw} className="h-5 w-5" />
                  </button>
                </div>

                {/* ✅ Only show password hint when user typed something */}
                {password.length > 0 && (
                  <p
                    className={`mt-1 text-xs ${
                      validPassword ? "text-gray-500" : "text-red-500"
                    }`}
                  >
                    {!validPassword
                      ? "Use at least 8 characters."
                      : "Good — password length is OK."}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!valid || loading}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Please wait…" : "Continue"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-100 bg-gray-50/60 p-4 text-center text-sm text-gray-600">
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="font-medium text-gray-900 hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Colorful SVGs ---------------- */
function FacebookColor({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect width="24" height="24" rx="4" fill="#1877F2" />
      <path
        d="M15.5 8.5h-1.4c-.34 0-.8.17-.8.9v1.1h2.2l-.28 2.2h-1.9V20h-2.3v-6.3h-1.7v-2.2h1.7V9.8c0-1.7 1.04-2.9 2.55-2.9.74 0 1.38.05 1.56.08v2.52z"
        fill="#fff"
      />
    </svg>
  );
}

function GoogleColor({ className = "" }) {
  return (
    <svg viewBox="0 0 533.5 544.3" className={className}>
      <path
        fill="#4285F4"
        d="M533.5 278.4c0-17.8-1.6-35-4.7-51.7H272v97.9h146.9c-6.3 34.1-25 62.9-53.4 82.2v68.2h86.3c50.6-46.6 81.7-115.3 81.7-196.6z"
      />
      <path
        fill="#34A853"
        d="M272 544.3c72.6 0 133.6-24.1 178.2-65.4l-86.3-68.2c-23.9 16-54.5 25.5-91.9 25.5-70.6 0-130.5-47.7-152-111.9H30.9v70.5C75 490.4 167.3 544.3 272 544.3z"
      />
      <path
        fill="#FBBC05"
        d="M120 324.3c-10.6-31.4-10.6-65.4 0-96.8V156.9H30.9c-39.8 79.6-39.8 173.9 0 253.5L120 324.3z"
      />
      <path
        fill="#EA4335"
        d="M272 107.7c39.5 0 75 13.6 102.9 40.3l77.3-77.3C407 25 345.1 0 272 0 167.3 0 75 53.9 30.9 140.1l89.1 70.5C141.5 155.4 201.4 107.7 272 107.7z"
      />
    </svg>
  );
}

/* ---------------- Utility icons ---------------- */
function EyeIcon({ open, className = "" }) {
  if (open)
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M3 12s3.6-6 9-6 9 6 9 6-3.6 6-9 6-9-6-9-6Z" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M3 3l18 18" />
      <path d="M10.6 6.1A9.9 9.9 0 0 1 12 6c5.4 0 9 6 9 6a17.4 17.4 0 0 1-4 4.7" />
      <path d="M6.4 8.3A17.1 17.1 0 0 0 3 12s3.6 6 9 6c.8 0 1.6-.1 2.3-.3" />
    </svg>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

function ShieldLock({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 3l7 3v5c0 5-3.1 8.2-7 10-3.9-1.8-7-5-7-10V6l7-3Z" />
      <rect x="9" y="10.5" width="6" height="5.5" rx="1.2" />
      <circle cx="12" cy="12" r="1.3" />
    </svg>
  );
}
