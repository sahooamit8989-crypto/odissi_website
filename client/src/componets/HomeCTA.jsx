import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="px-5 md:px-20 py-20">
      <div className="bg-[#7A1F2B] rounded-3xl text-center text-white p-10 md:p-16 max-w-5xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Begin Your Journey with MANTRAH
        </h2>

        <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto mb-8">
          Join our Odissi classes, attend workshops, or invite MANTRAH Performing
          Arts for cultural performances and events.
        </p>

        <Link
          to="/contact"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 bg-white text-[#7A1F2B] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contact Us <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
};

export default HomeCTA;
