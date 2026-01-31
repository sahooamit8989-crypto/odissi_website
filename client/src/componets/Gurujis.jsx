import React from "react";
import gurujiImg from "../assets/image12.jpeg";
import SliderImage from "./sliderImage";

const Guruji = () => {
  return (
    <div className="w-full bg-[#FBF6EE] overflow-hidden">

      {/* Slider */}
      <SliderImage />

      {/* ===== HERO ===== */}
      <section className="relative w-full bg-gradient-to-br from-[#7b1e1e] to-[#c44545] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Our Guruji
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-lg opacity-90">
            The guiding light of our Odissi tradition and spiritual journey
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 -rotate-3 bg-[#e6c98f]/40 rounded-3xl"></div>
            <img
              src={gurujiImg}
              alt="Guruji"
              className="relative w-64 sm:w-72 md:w-[420px] rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7b1e1e] mb-5">
           Satya Prakash Sahoo
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Guruji is a devoted torchbearer of the classical Odissi dance
            tradition, nurturing art, discipline, and devotion through decades
            of dedicated teaching.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Trained under esteemed gurus, the teaching emphasizes
            <span className="font-semibold text-[#7b1e1e]">
              {" "}bhava, abhinaya, rhythm, and spiritual depth
            </span>,
            shaping students beyond performance.
          </p>

          <blockquote className="border-l-4 border-[#7b1e1e] pl-4 italic text-[#7b1e1e] bg-[#fff7e1] p-4 rounded-xl">
            “Odissi is not dance alone — it is devotion made visible.”
          </blockquote>
        </div>
      </section>

      {/* ===== EXPERIENCE CARDS ===== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-3xl font-bold text-[#7b1e1e] mb-12">
            Experience & Contributions
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "10+ years of Odissi teaching excellence",
              "National & international performances",
              "Mentored hundreds of disciples",
              "Preserver of classical Odissi repertoire",
              "Cultural workshops & stage productions",
              "Strong Guru–Shishya Parampara values",
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-[#FBF6EE] p-6 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <p className="text-center text-gray-800 font-medium group-hover:text-[#7b1e1e] transition">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA / QUOTE ===== */}
      <section className="relative w-full bg-gradient-to-r from-[#7b1e1e] to-[#b83a3a] text-white py-14">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-lg md:text-2xl italic leading-relaxed">
            Guided by tradition, inspired by devotion, shaping the future of
            Odissi dancers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Guruji;
