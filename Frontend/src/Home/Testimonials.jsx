import React from "react";

const testimonials = [
  {
    id: 1,
    company: "Sass",
    logo: "/assets/logos/sass.svg", // replace with your path
    quote: "StudyStudio has improved the learning experience of our students.",
    rating: 5,
  },
  {
    id: 2,
    company: "Business Insider",
    logo: "/assets/logos/business-insider.svg",
    quote: "The grades of our students have improved significantly with StudyStudio's help.",
    rating: 4.5,
  },
  {
    id: 3,
    company: "Airbnb",
    logo: "/assets/logos/airbnb.svg",
    quote: "We can't imagine studying without StudyStudio now. Nice experience.",
    rating: 5,
  },
  {
    id: 4,
    company: "Capsule",
    logo: "/assets/logos/capsule.svg",
    quote: "The AI tutor is like having a personal tutor 24/7. A must to have.",
    rating: 5,
  },
  {
    id: 5,
    company: "Fitbit",
    logo: "/assets/logos/fitbit.svg",
    quote: "StudyStudio is the study companion our students needed. Now they are having fun.",
    rating: 4.5,
  },
];

function Star({ filled = true }) {
  // Filled (green) star or outline star with same shape
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill={filled ? "#16A34A" : "none"}
      stroke={filled ? "#16A34A" : "#9CA3AF"}
      strokeWidth="1"
      className="inline-block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 15.77 4.82 18.42l.99-5.77L1.62 8.57l5.79-.84L10 1.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HalfStar() {
  // half-filled star: left half filled, right half stroked
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 20 20"
      className="inline-block"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="halfGrad">
          <stop offset="50%" stopColor="#16A34A" />
          <stop offset="50%" stopColor="transparent" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 15.77 4.82 18.42l.99-5.77L1.62 8.57l5.79-.84L10 1.5z"
        fill="url(#halfGrad)"
        stroke="#16A34A"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Our <span className="text-emerald-600">Testimonials</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-500">
          Don't just take our word for it. Take theirs. What our customers say about our work.
        </p>

        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex flex-col items-center text-center px-4"
                aria-labelledby={`testimonial-${t.id}-title`}
              >
                {/* Logo */}
                <div className="h-10 mb-4 flex items-center justify-center">
                  <img
                    src={t.logo}
                    alt={`${t.company} logo`}
                    className="h-8 object-contain"
                    onError={(e) => {
                      // fallback if image missing
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* Quote */}
                <blockquote className="text-sm text-gray-700 mb-3">
                  “{t.quote}”
                </blockquote>

                {/* Stars */}
                <div className="flex items-center gap-1 mt-1">
                  {renderStars(t.rating)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* helper to render full/half/empty stars */
function renderStars(rating = 5) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5 && fullStars < 5;
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`s-full-${i}`} filled={true} />);
  }
  if (hasHalf) {
    stars.push(<HalfStar key="s-half" />);
  }
  const remaining = 5 - stars.length;
  for (let i = 0; i < remaining; i++) {
    stars.push(<Star key={`s-empty-${i}`} filled={false} />);
  }
  return stars.map((s, idx) => <span key={idx} className="inline-block">{s}</span>);
}
