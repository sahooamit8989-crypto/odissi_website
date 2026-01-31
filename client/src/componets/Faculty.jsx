import React from "react";
import guruImg from "../assets/image11.jpeg";
import assistantImg from "../assets/30_6771.jpg";

const Faculty = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FFF4E3] via-[#F8EFE3] to-[#F2E2D2] pt-24 pb-28">

      <div className="px-5 md:px-24">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">
          <span className="text-[#C58B2C] uppercase tracking-widest text-sm">
            Our Gurus
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#7A1F2B] mt-4">
            Faculty & Mentors
          </h1>

          <p className="mt-6 text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
            Our faculty consists of dedicated gurus and mentors who uphold the
            purity, discipline, and spiritual essence of Odissi dance through
            years of training and performance.
          </p>
        </div>

        {/* ===== MAIN GURU ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#C58B2C]/40 rounded-3xl"></div>
            <img
              src={guruImg}
              alt="Principal Guru"
              className="relative rounded-3xl shadow-xl w-full h-[320px] sm:h-[380px] md:h-[460px] object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold text-[#7A1F2B] mb-4">
              Guru Satya Prakash Sahoo
            </h2>

            <p className="text-[#C58B2C] font-medium mb-4">
              Founder & Principal Odissi Guru
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Trained under legendary Odissi masters, Guru Meera Das follows the
              traditional Gurukul parampara. Her artistry reflects deep devotion,
              sculptural precision, and expressive storytelling.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With performances across India and abroad, she is committed to
              nurturing the next generation of Odissi dancers with discipline,
              grace, and humility.
            </p>
          </div>
        </div>

        {/* ===== OTHER FACULTY ===== */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {[
            {
              name: "Assistant Guru",
              role: "Technique & Abhinaya",
              img: assistantImg,
              desc: "Specializes in foundational technique, tribhangi training, and expressive abhinaya.",
            },
            {
              name: "Rhythm Instructor",
              role: "Tala & Pakhawaj",
              img: assistantImg,
              desc: "Guides students in rhythm patterns, talas, and coordination essential to Odissi.",
            },
            {
              name: "Music Mentor",
              role: "Odissi Raga",
              img: assistantImg,
              desc: "Teaches classical Odissi music and its relationship with dance expression.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur rounded-3xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={f.img}
                alt={f.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#7A1F2B]">
                  {f.name}
                </h3>

                <p className="text-[#C58B2C] text-sm mb-3">
                  {f.role}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CLOSING ===== */}
        <div className="mt-28 text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-[#7A1F2B] max-w-5xl mx-auto">
            “A true guru does not just teach movement — they awaken devotion,
            discipline, and inner grace.”
          </p>

          <span className="block mt-4 text-[#C58B2C]">
            — Odissi Gurukul Tradition
          </span>
        </div>

      </div>
    </section>
  );
};

export default Faculty;
