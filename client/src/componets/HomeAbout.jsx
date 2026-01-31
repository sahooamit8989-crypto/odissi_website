import React from "react";
import image1 from "../assets/WhatsApp Image 2026-01-29 at 6.25.18 PM.jpeg";

const HomeAbout = () => {
  return (
    <section className="px-5 md:px-20 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#7A1F2B] mb-4">
            MANTRAH <span className="text-[#C89B3C]">PERFORMING ARTS</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-4">
            MANTRAH Performing Arts is dedicated to preserving and promoting the
            timeless beauty of Indian classical dance, especially the sacred
            tradition of Odissi.
          </p>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            Rooted in discipline, devotion, and artistry, MANTRAH nurtures
            students through structured training, performances, workshops, and
            cultural programs.
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full bg-[#7A1F2B]/10 rounded-2xl"></div>
          <img
            src={image1}
            alt="Mantrah Performing Arts"
            className="
                relative 
                rounded-2xl 
                shadow-md 
                w-full 
                h-[260px] 
                sm:h-[320px] 
                md:h-[460px] 
                lg:h-[520px]
                object-cover
            "
            />

        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
