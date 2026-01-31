import React from "react";
import { Music, Users, BookOpen, Palette, Drum } from "lucide-react";

const unitsData = [
  {
    title: "Odissi Dance Training",
    desc: "Systematic training in Odissi dance focusing on body posture, grace, expressions, and traditional repertoire.",
    icon: <Users className="w-10 h-10 text-pink-600" />,
    bg: "bg-pink-50",
  },
  {
    title: "Rhythm & Tala",
    desc: "Understanding Indian rhythm patterns (Tala) essential for Odissi performance and footwork.",
    icon: <Drum className="w-10 h-10 text-orange-600" />,
    bg: "bg-orange-50",
  },
  {
    title: "Odissi Music",
    desc: "Training in traditional Odissi music, ragas, bhajans, and abhinaya-based compositions.",
    icon: <Music className="w-10 h-10 text-purple-600" />,
    bg: "bg-purple-50",
  },
  {
    title: "Costume & Makeup",
    desc: "Learning traditional Odissi costume design, jewelry, makeup, and stage presentation.",
    icon: <Palette className="w-10 h-10 text-green-600" />,
    bg: "bg-green-50",
  },
  {
    title: "Dance Theory",
    desc: "Study of Odissi history, mudras, shastras, and classical dance literature.",
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    bg: "bg-blue-50",
  },
];

const Units = () => {
  return (
    <section className="w-full bg-[#FBF6EE] py-14">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#7B341E]">
            Our Training Units
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Our academy follows a holistic approach to Odissi dance education,
            blending tradition, discipline, and creativity.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {unitsData.map((unit, index) => (
            <div
              key={index}
              className={`${unit.bg} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="mb-4">{unit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {unit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {unit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Units;
