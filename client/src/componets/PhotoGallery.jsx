import React from "react";

import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image11.jpeg";
import img3 from "../assets/image13.jpeg";
import img4 from "../assets/image12.jpeg";
import img5 from "../assets/image2.jpeg";
import img6 from "../assets/image9.jpeg";
import img7 from "../assets/image5.jpeg";
import img8 from "../assets/image8.jpeg";
import img9 from "../assets/image10.jpeg";

const PhotoGallery = () => {
  return (
    <div className="w-full bg-[#FBF6EE]">

      {/* ===== HERO SECTION ===== */}
      <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#b83a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Guruji Photo Gallery
          </h1>
          <p className="mt-4 text-sm md:text-lg opacity-90 max-w-3xl mx-auto">
            A visual journey through Guruji’s dedication, expressions,
            performances, and timeless Odissi tradition.
          </p>
        </div>
      </section>

      {/* ===== GALLERY GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {/* Image 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img1}
              alt="Guruji in Abhinaya"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Guruji in Abhinaya
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img2}
              alt="Stage Performance"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Stage Performance
              </p>
            </div>
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img3}
              alt="Graceful Pose"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Graceful Pose
              </p>
            </div>
          </div>

          {/* Image 4 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img4}
              alt="Classical Expression"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Classical Expression
              </p>
            </div>
          </div>

          {/* Image 5 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img5}
              alt="Teaching Odissi"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Teaching Odissi
              </p>
            </div>
          </div>

          {/* Image 6 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img6}
              alt="Traditional Movement"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Traditional Movement
              </p>
            </div>
          </div>

          {/* Image 7 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img7}
              alt="Spiritual Expression"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Spiritual Expression
              </p>
            </div>
          </div>

          {/* Image 8 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img8}
              alt="Guruji on Stage"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Guruji on Stage
              </p>
            </div>
          </div>

          {/* Image 9 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
            <img
              src={img9}
              alt="Odissi Legacy"
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-[#7b1e1e]/70 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white font-medium text-center px-3">
                Odissi Legacy
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== QUOTE SECTION ===== */}
      <section className="w-full bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-[#7b1e1e] text-lg md:text-xl italic font-medium">
            “Through every movement, Guruji preserves the soul of Odissi.”
          </p>
        </div>
      </section>

    </div>
  );
};

export default PhotoGallery;
