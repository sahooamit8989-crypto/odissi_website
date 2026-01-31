import React from "react";

const milestonesData = [
  {
    year: "2005",
    title: "Foundation Laid",
    desc: "The journey of Odissi began with devotion, discipline, and a vision to preserve classical tradition.",
  },
  {
    year: "2010",
    title: "First Stage Performance",
    desc: "Students performed Odissi on a national platform, marking a proud milestone.",
  },
  {
    year: "2015",
    title: "100+ Students Trained",
    desc: "A growing family of dedicated Odissi dancers under Guruji’s guidance.",
  },
  {
    year: "2018",
    title: "National Recognition",
    desc: "Participation in major cultural festivals across India.",
  },
  {
    year: "2022",
    title: "International Exposure",
    desc: "Odissi performances showcased on global stages.",
  },
  {
    year: "2025",
    title: "Legacy Continues",
    desc: "Carrying forward the Guru–Shishya Parampara with pride.",
  },
];

const Milestones = () => {
  return (
    <div className="w-full bg-[#FBF6EE]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#b83a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Our Milestones
          </h1>
          <p className="mt-4 text-sm md:text-lg opacity-90">
            A journey of dedication, discipline, and divine art
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#e6c98f] -translate-x-1/2"></div>

          <div className="space-y-12">
            {milestonesData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0
                    ? "md:flex-row-reverse"
                    : ""
                }`}
              >
                {/* Empty Space */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Card */}
                <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 border-t-4 border-[#b83a3a]">
                  <span className="inline-block bg-[#7b1e1e] text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-[#7b1e1e] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-[#7b1e1e] text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-lg md:text-2xl italic">
            “Every step, every rhythm, every expression marks a milestone in our Odissi journey.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default Milestones;
