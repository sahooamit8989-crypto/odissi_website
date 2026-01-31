import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Beginner Level",
    desc: "Introduction to Odissi basics including Chowka, Tribhangi, hand gestures, and simple rhythmic patterns.",
    duration: "6 Months",
    level: "Beginner",
  },
  {
    title: "Intermediate Level",
    desc: "Advanced movements, Pallavi, Batu Nrutya, and deeper understanding of rhythm and expression.",
    duration: "1 Year",
    level: "Intermediate",
  },
  {
    title: "Advanced Level",
    desc: "Abhinaya, Moksha, stage performance training, and complete Odissi repertoire.",
    duration: "2 Years",
    level: "Advanced",
  },
];

const Regular = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FBF6EE]">

      {/* ===== HERO SECTION ===== */}
      <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#b83a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Regular Odissi Courses
          </h1>
          <p className="mt-4 text-sm md:text-lg opacity-90 max-w-3xl mx-auto">
            Structured and disciplined Odissi training rooted in tradition,
            designed for students of all levels.
          </p>
        </div>
      </section>

      {/* ===== COURSE CARDS ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => navigate("/contact")}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl 
                         hover:-translate-y-1 transition p-8 text-center 
                         cursor-pointer"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#7b1e1e] mb-4">
                {course.title}
              </h3>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                {course.desc}
              </p>

              <div className="flex justify-center gap-3 flex-wrap mb-6">
                <span className="px-4 py-1 text-sm rounded-full bg-[#7b1e1e]/10 text-[#7b1e1e]">
                  {course.level}
                </span>
                <span className="px-4 py-1 text-sm rounded-full bg-[#f1c40f]/20 text-[#7b1e1e]">
                  Duration: {course.duration}
                </span>
              </div>

              {/* CTA */}
              <button
                className="mt-2 px-6 py-2 rounded-full bg-[#7b1e1e] text-white
                           hover:bg-[#5e1414] transition text-sm font-semibold"
              >
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INFO SECTION ===== */}
      <section className="w-full bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7b1e1e] mb-4">
            Why Choose Regular Training?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Regular Odissi classes build discipline, grace, and deep understanding
            of classical techniques. Students progress step-by-step under Guruji’s
            guidance, preserving the purity of the tradition.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Regular;
