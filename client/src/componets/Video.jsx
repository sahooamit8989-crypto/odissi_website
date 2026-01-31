import React, { useEffect, useState } from "react";
import axios from "axios";
import cleanYoutubeUrl from "../utils/cleanYoutubeUrl";

const Video = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH VIDEOS =================
  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/video/all`
      );

      if (res.data.success) {
        setVideos(res.data.data);
      }
    } catch (error) {
      console.error("FETCH VIDEO ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  // ================= LOADING =================
  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading videos...
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FBF6EE]">

      {/* ===== HERO ===== */}
      <section className="w-full bg-gradient-to-r from-[#7b1e1e] to-[#d35454] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Odissi in Motion
          </h1>
          <p className="mt-4 text-sm md:text-lg opacity-90 max-w-3xl mx-auto">
            Experience rhythm, devotion, and expression through movement.
          </p>
        </div>
      </section>

      {/* ===== VIDEOS ===== */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {videos.length === 0 ? (
          <p className="text-center text-gray-500">
            No videos available
          </p>
        ) : (
          videos.map((video) => {
            const embedUrl = cleanYoutubeUrl(video.videoUrl);

            return (
              <div
                key={video._id}
                className="grid gap-8 items-center md:grid-cols-2"
              >
                {/* VIDEO */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md">
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                      Invalid video URL
                    </div>
                  )}
                </div>

                {/* TEXT */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#7b1e1e] mb-4">
                    {video.title}
                  </h2>

                  {video.description && (
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })
        )}

      </section>

      {/* ===== QUOTE ===== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl italic text-[#7b1e1e]">
            “Odissi is poetry written on the body and spoken through rhythm.”
          </p>
        </div>
      </section>

    </div>
  );
};

export default Video;
