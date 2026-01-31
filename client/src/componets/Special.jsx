import React from "react";
import { useNavigate } from "react-router-dom";

const specialClasses = [
  {
    title: "Workshop Programs",
    desc: "Intensive Odissi workshops focusing on technique, expression, and choreography, conducted periodically.",
    highlight: "Short-term",
  },
  {
    title: "Performance Training",
    desc: "Special coaching for stage performances, festivals, competitions, and cultural events.",
    highlight: "Stage Ready",
  },
  {
    title: "Abhinaya Special",
    desc: "Exclusive training on facial expressions, storytelling, and emotional depth in Odissi.",
    highlight: "Expression",
  },
  {
    title: "Online Classes",
    desc: "Structured online Odissi training for students outside the city or country.",
    highlight: "Global",
  },
];

const Special = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FBF6EE]">

      {/* ===== HERO SECTION ===== */}
      <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#d35454] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Special Odissi Classes
          </h1>
          <p className="mt-4 text-sm md:text-lg opacity-90 max-w-3xl mx-auto">
            Advanced and focused Odissi training programs designed for
            performers, learners, and enthusiasts.
          </p>
        </div>
      </section>

      {/* ===== SPECIAL CLASS CARDS ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {specialClasses.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("/contact")}
              className="bg-white rounded-3xl p-7 shadow-md 
                         hover:shadow-xl hover:-translate-y-1 
                         transition text-center cursor-pointer"
            >
              <div className="mb-4 inline-block px-4 py-1 rounded-full bg-[#7b1e1e]/10 text-[#7b1e1e] text-sm font-medium">
                {item.highlight}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-[#7b1e1e] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* CTA */}
              <button
                className="px-5 py-2 text-sm rounded-full bg-[#7b1e1e] text-white
                           hover:bg-[#5e1414] transition font-semibold"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY SPECIAL CLASSES ===== */}
      <section className="w-full bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7b1e1e] mb-4">
            Why Special Odissi Classes?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Special classes provide focused learning beyond regular training.
            These sessions help students refine artistry, prepare for performances,
            and deepen their connection with Odissi’s spiritual and expressive roots.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Special;
