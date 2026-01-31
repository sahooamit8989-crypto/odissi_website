import React from "react";
import image1 from "../assets/WhatsApp Image 2026-01-29 at 6.25.18 PM.jpeg";

const Hero = () => {
  return (
    <section className="bg-[#FBF6EE] px-6 md:px-20 py-16">
      <div className="max-w-5xl mx-auto text-center">

        {/* LOGO / IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={image1}
            alt="Mantrah Performing Arts"
            className="h-24 md:h-28 object-contain"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-wide text-[#6B0F1A]">
          MANTRAH
        </h1>
        <p className="mt-1 text-sm md:text-base uppercase tracking-[0.35em] text-[#8E1B2C]">
          Performing Arts
        </p>

        {/* DIVIDER */}
        <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto my-6"></div>

        {/* DESCRIPTION */}
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
          Mantrah Performing Arts is a dedicated institution committed to
          preserving and promoting the rich heritage of Indian classical
          dance, with special emphasis on Odissi. Rooted in tradition and
          discipline, the institution nurtures artistic excellence and
          cultural values.
        </p>
      </div>
    </section>
  );
};

export default Hero;
