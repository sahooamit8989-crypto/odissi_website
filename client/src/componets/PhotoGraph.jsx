// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const PhotoGraph = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
 
//  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await axios.get(`${BACKEND_URL}/api/content/all`);

//         if (res.data.success) {
//           setBlogs(res.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="w-full bg-[#FBF6EE]">

//       {/* ===== HERO ===== */}
//       <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#d35454] text-white">
//         <div className="max-w-7xl mx-auto px-4 py-16 text-center">
//           <h1 className="text-3xl md:text-5xl font-bold">
//             Odissi Through the Lens
//           </h1>
//           <p className="mt-4 text-sm md:text-lg opacity-90 max-w-3xl mx-auto">
//             Stories of devotion, expression, and tradition captured in moments.
//           </p>
//         </div>
//       </section>

//       {/* ===== CONTENT ===== */}
//       <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">

//         {loading && (
//           <p className="text-center text-gray-500 animate-pulse">
//             Loading content...
//           </p>
//         )}

//         {!loading && blogs.length === 0 && (
//           <p className="text-center text-gray-500">
//             No content available
//           </p>
//         )}

//         {blogs.map((blog, index) => (
//           <div
//             key={blog._id}
//             className="grid gap-8 items-center md:grid-cols-2"
//           >

//             {/* IMAGE */}
//             <div className={index % 2 !== 0 ? "md:order-2" : ""}>
//               <div className="relative">
//                 <div className="absolute -top-3 -left-3 w-full h-full bg-[#7b1e1e]/10 rounded-2xl"></div>
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] object-cover rounded-2xl shadow-md"
//                 />
//               </div>
//             </div>

//             {/* TEXT */}
//             <div>
//               <h2 className="text-2xl md:text-3xl font-semibold text-[#7b1e1e] mb-4">
//                 {blog.title}
//               </h2>
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//                 {blog.about}
//               </p>
//             </div>

//           </div>
//         ))}
//       </section>

//       {/* ===== QUOTE ===== */}
//       <section className="w-full bg-white py-16">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <p className="text-lg md:text-xl italic text-[#7b1e1e]">
//             “Every Odissi photograph is a frozen moment of devotion,
//             rhythm, and timeless beauty.”
//           </p>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default PhotoGraph;





import React, { useEffect, useState } from "react";
import axios from "axios";

const PhotoGraph = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/content/all`);
        if (res.data.success) {
          setBlogs(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="w-full bg-[#FBF6EE]">

      {/* ===== HERO ===== */}
      <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#d35454] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
            Odissi Through the Lens
          </h1>
          <p className="text-sm md:text-lg opacity-90 max-w-3xl mx-auto">
            Stories of devotion, expression, and tradition captured in moments.
          </p>

          {!loading && blogs.length > 0 && (
            <p className="mt-6 inline-block bg-white/20 px-6 py-2 rounded-full text-sm">
              {blogs.length} Captured Moments
            </p>
          )}
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="w-full h-20 bg-gradient-to-b from-[#d35454]/30 to-transparent"></div>

      {/* ===== CONTENT ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-24">

        {loading && (
          <p className="text-center text-gray-500 animate-pulse">
            Loading content...
          </p>
        )}

        {!loading && blogs.length === 0 && (
          <p className="text-center text-gray-500">
            No content available
          </p>
        )}

        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="grid gap-10 items-center md:grid-cols-2 group"
          >

            {/* IMAGE */}
            <div className={index % 2 !== 0 ? "md:order-2" : ""}>
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute -top-3 -left-3 w-full h-full bg-[#7b1e1e]/10 rounded-2xl"></div>

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="relative w-full h-[260px] sm:h-[320px] md:h-[380px]
                             object-cover rounded-2xl shadow-md
                             transition-transform duration-700
                             group-hover:scale-105"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#7b1e1e]">
                {blog.title}
              </h2>

              <div className="w-16 h-1 bg-[#7b1e1e] rounded"></div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {blog.about}
              </p>
            </div>

          </div>
        ))}
      </section>

      {/* ===== QUOTE ===== */}
      <section className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-5xl text-[#7b1e1e]">❝</span>
          <p className="text-lg md:text-xl italic text-[#7b1e1e] leading-relaxed">
            Every Odissi photograph is a frozen moment of devotion,
            rhythm, and timeless beauty.
          </p>
          <span className="text-5xl text-[#7b1e1e]">❞</span>
        </div>
      </section>

    </div>
  );
};

export default PhotoGraph;
