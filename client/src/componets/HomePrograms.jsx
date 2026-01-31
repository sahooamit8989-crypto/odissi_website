import React from "react";
import { BookOpen, Users, Sparkles } from "lucide-react";

const HomePrograms = () => {
  return (
    <section className="px-5 md:px-20 py-16 bg-[#F8F5F0]">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#7A1F2B] mb-12">
        What We Offer
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        
        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <BookOpen size={40} className="mx-auto text-[#C89B3C] mb-4" />
          <h3 className="text-xl font-semibold text-[#7A1F2B] mb-3">
            Odissi Training
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Systematic classical Odissi training for beginners and advanced
            students following traditional Gurukul values.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <Users size={40} className="mx-auto text-[#C89B3C] mb-4" />
          <h3 className="text-xl font-semibold text-[#7A1F2B] mb-3">
            Workshops & Classes
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Regular workshops, summer intensives, and special sessions for
            national & international students.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <Sparkles size={40} className="mx-auto text-[#C89B3C] mb-4" />
          <h3 className="text-xl font-semibold text-[#7A1F2B] mb-3">
            Performances
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Stage performances, cultural festivals, choreographies, and
            institutional presentations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HomePrograms;
