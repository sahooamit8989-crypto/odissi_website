import React from "react";

const compositions = [
  {
    title: "Mangalacharan",
    desc: "An auspicious opening piece invoking Lord Jagannath, expressing devotion and gratitude before the performance begins.",
    color: "border-[#7b1e1e]",
  },
  {
    title: "Batu Nrutya",
    desc: "A pure dance item highlighting strength, rhythm, and sculpturesque poses inspired by temple architecture.",
    color: "border-[#c0392b]",
  },
  {
    title: "Pallavi",
    desc: "A lyrical and graceful composition that explores raga, tala, and expressive movement patterns.",
    color: "border-[#a84300]",
  },
  {
    title: "Abhinaya",
    desc: "Expressive storytelling through facial expressions and gestures, often depicting stories of Lord Krishna and Radha.",
    color: "border-[#6d214f]",
  },
  {
    title: "Moksha",
    desc: "The concluding piece symbolizing liberation of the soul, blending joy, rhythm, and spiritual fulfillment.",
    color: "border-[#1e8449]",
  },
];

const Composition = () => {
  return (
    <div className="w-full bg-[#FBF6EE]">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#b83a3a] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Odissi Compositions
          </h1>
          <p className="mt-4 text-sm md:text-lg opacity-90 max-w-3xl mx-auto">
            A traditional Odissi recital follows a structured sequence of compositions,
            each revealing devotion, rhythm, and expression.
          </p>
        </div>
      </section>

      {/* Composition Cards */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {compositions.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border-t-4 ${item.color}`}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#7b1e1e] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="w-full bg-white py-14">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#7b1e1e] mb-4">
              Structure of an Odissi Recital
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Each Odissi performance is carefully designed to take the audience
              on a spiritual and artistic journey — from invocation to liberation.
              Rhythm (Tala), melody (Raga), and expression (Abhinaya) merge to
              create divine storytelling.
            </p>
          </div>

          <div className="bg-[#7b1e1e]/10 rounded-3xl p-8 text-center">
            <p className="text-[#7b1e1e] text-lg italic font-medium">
              “Odissi is not just dance, it is meditation in motion.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Composition;
