import React from "react";
import historyImg from "../assets/30_6771.jpg";
import dancerImg from "../assets/Meera-Das-courtesy.jpg";
import SliderImage from "./sliderImage";

const History = () => {
  return (
    <>
   
    <section className="w-full bg-gradient-to-b from-[#FFF6E5] via-[#F8EFE3] to-[#F3E8D6] pt-24 pb-28">

      {/* ===== CONTAINER (ONLY CONTENT CENTERED) ===== */}
      <div className="w-full px-5 md:px-24">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-20">
          <span className="text-[#C58B2C] text-sm uppercase tracking-widest">
            Indian Classical Heritage
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#7A1F2B] mt-4">
            The Legacy of Odissi
          </h1>

          <p className="mt-6 text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
            Odissi is a sacred classical dance of Odisha, blending devotion,
            sculpture, rhythm, and storytelling—passed down through centuries
            as a living spiritual art.
          </p>
        </div>

        {/* ===== SECTION 1 ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#C58B2C]/40 rounded-3xl"></div>
            <img
              src={historyImg}
              alt="Odissi Temple Dance"
              className="relative rounded-3xl shadow-xl w-full h-[300px] sm:h-[360px] md:h-[460px] object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold text-[#7A1F2B] mb-6">
              Sacred Origins
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              Odissi originated in the temples of Odisha, where Mahari dancers
              performed ritual dances as offerings to Lord Jagannath.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5">
              The hallmark posture <strong>Tribhangi</strong> reflects the
              sculptural elegance seen on temple walls—symbolizing harmony,
              devotion, and beauty.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through Abhinaya, Mudras, and lyrical music, Odissi narrates divine
              love—especially the stories of Radha and Krishna.
            </p>
          </div>
        </div>

        {/* ===== FEATURES (FULL WIDTH GRID) ===== */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-28">

          {[
            { title: "🪷 Devotion", desc: "Rooted in temple worship and spirituality." },
            { title: "🎭 Abhinaya", desc: "Expressive storytelling and emotions." },
            { title: "🦚 Tribhangi", desc: "Graceful three-fold posture unique to Odissi." },
            { title: "🥁 Classical Music", desc: "Odissi ragas and traditional talas." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur p-8 rounded-3xl shadow-md hover:shadow-xl transition text-center"
            >
              <h3 className="text-xl font-semibold text-[#7A1F2B] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold text-[#7A1F2B] mb-6">
              Revival & Global Reach
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              Odissi faced decline during colonial times. Visionary gurus revived
              it in the 20th century by reconstructing its grammar from temple
              sculptures and ancient texts.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Today, Odissi flourishes worldwide—performed on global stages and
              taught to future generations as a proud cultural heritage of India.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#7A1F2B]/10 rounded-3xl"></div>
            <img
              src={dancerImg}
              alt="Odissi Performance"
              className="relative rounded-3xl shadow-xl w-full h-[300px] sm:h-[360px] md:h-[460px] object-cover"
            />
          </div>
        </div>

        {/* ===== QUOTE ===== */}
        <div className="mt-28 text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-[#7A1F2B] max-w-5xl mx-auto">
            “Odissi is not merely a dance form — it is devotion carved in motion.”
          </p>
          <span className="block mt-4 text-[#C58B2C]">
            — Indian Classical Wisdom
          </span>
        </div>

      </div>
    </section>
    </>
  );
};

export default History;
