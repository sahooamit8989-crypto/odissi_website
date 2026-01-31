import React from "react";
import visionImg from "../assets/Srjan.jpg";
import missionImg from "../assets/image5.jpeg";

const VisonMission = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#FDF3E6] via-[#F8EFE3] to-[#F2E4D5] pt-24 pb-28">

      <div className="w-full px-5 md:px-24">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-20">
          <span className="text-[#C58B2C] uppercase tracking-widest text-sm">
            Our Purpose
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#7A1F2B] mt-4">
            Vision & Mission
          </h1>

          <p className="mt-6 text-gray-700 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
            Rooted in tradition and guided by devotion, our vision and mission
            are dedicated to preserving, nurturing, and sharing the timeless
            beauty of Odissi dance with the world.
          </p>
        </div>

        {/* ===== VISION ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold text-[#7A1F2B] mb-6">
              🌺 Our Vision
            </h2>

            <p className="text-gray-700 leading-relaxed mb-5">
              To be a beacon of classical excellence in Odissi dance by preserving
              its spiritual depth, artistic purity, and cultural significance
              for generations to come.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We envision a future where Odissi continues to inspire devotion,
              discipline, and grace—transcending borders while remaining deeply
              rooted in the sacred traditions of Odisha.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-full h-full bg-[#7A1F2B]/10 rounded-3xl"></div>
            <img
              src={visionImg}
              alt="Odissi Vision"
              className="relative rounded-3xl shadow-xl w-full h-[300px] sm:h-[360px] md:h-[460px] object-cover"
            />
          </div>
        </div>

        {/* ===== MISSION ===== */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-28">

          {/* IMAGE */}
          <div className="relative md:order-1 order-2">
            <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#C58B2C]/40 rounded-3xl"></div>
            <img
              src={missionImg}
              alt="Odissi Mission"
              className="relative rounded-3xl shadow-xl w-full h-[300px] sm:h-[360px] md:h-[460px] object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="md:order-2 order-1">
            <h2 className="text-3xl font-semibold text-[#7A1F2B] mb-6">
              🎭 Our Mission
            </h2>

            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>🪷 To provide authentic Gurukul-style Odissi training</li>
              <li>🎶 To preserve traditional repertoire, music, and rhythm</li>
              <li>📖 To educate students about Odissi history and philosophy</li>
              <li>🌍 To represent Odissi on national and international stages</li>
              <li>🤍 To nurture discipline, devotion, and artistic integrity</li>
            </ul>
          </div>
        </div>

        {/* ===== STATEMENT ===== */}
        <div className="bg-[#7A1F2B] text-white rounded-3xl p-10 md:p-16 text-center max-w-6xl mx-auto">
          <p className="text-xl md:text-2xl font-serif italic leading-relaxed">
            “Through rhythm, expression, and devotion, we strive to keep the
            soul of Odissi alive — not just as a performance, but as a way of life.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default VisonMission;
