import React, { useEffect, useState } from "react";

import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image11.jpeg";
import img3 from "../assets/image13.jpeg";
import img4 from "../assets/image12.jpeg";
import img5 from "../assets/image2.jpeg";
import img6 from "../assets/image9.jpeg";
import img7 from "../assets/image5.jpeg";
import img8 from "../assets/group-classical-odissi-dancers-performing-dance-stage-konark-temple-odisha-india-also-known-as-orissi-one-eight-155048325.webp";
import img9 from "../assets/Meera-Das-courtesy.jpg";

const SliderImage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[45vh] sm:h-[60vh] lg:h-[75vh] xl:h-[80vh]
      "
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            transition-opacity duration-[2000ms] ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",          // ✅ full width
            backgroundPosition: "center",     // ✅ balanced crop
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-black/25" />
    </section>
  );
};

export default SliderImage;
