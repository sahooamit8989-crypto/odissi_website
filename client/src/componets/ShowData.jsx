import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import cleanYoutubeUrl from "../utils/cleanYoutubeUrl";

const ShowData = () => {
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH ALL DATA =================
  const fetchAll = async () => {
    try {
      const [photoRes, videoRes, eventRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/content/all`),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/content/video/all`),
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/content/event`),
      ]);

      setPhotos(Array.isArray(photoRes?.data?.data) ? photoRes.data.data : []);
      setVideos(Array.isArray(videoRes?.data?.data) ? videoRes.data.data : []);
      setEvents(Array.isArray(eventRes?.data?.events) ? eventRes.data.events : []);
    } catch (error) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE PHOTO =================
  const deletePhoto = async (id) => {
    if (!window.confirm("Delete this photo?")) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/delete/${id}`
      );
      setPhotos((prev) => prev.filter((item) => item._id !== id));
      toast.success("Photo deleted");
    } catch {
      toast.error("Failed to delete photo");
    }
  };

  // ================= DELETE VIDEO =================
  const deleteVideo = async (id) => {
    if (!window.confirm("Delete this video?")) return;
    try {
      await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/video/delete/${id}`
      );
      setVideos((prev) => prev.filter((item) => item._id !== id));
      toast.success("Video deleted");
    } catch {
      toast.error("Failed to delete video");
    }
  };

  // ================= DELETE EVENT =================
const deleteEvent = async (id) => {
  if (!window.confirm("Delete this event?")) return;

  try {
    await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/content/deletes/${id}`
    );

    setEvents((prev) => prev.filter((item) => item._id !== id));
    toast.success("Event deleted successfully ✅");

  } catch (error) {
    console.error("DELETE EVENT ERROR 👉", error.response?.data || error);
    toast.error(error.response?.data?.message || "Failed to delete event ❌");
  }
};


  useEffect(() => {
    fetchAll();
  }, []);

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 space-y-16">

      {/* ================= PHOTOS ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">📸 Photos</h2>

        {photos.length === 0 ? (
          <p>No photos found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((item) => (
              <div key={item._id} className="bg-white shadow rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.about}</p>
                  <button
                    onClick={() => deletePhoto(item._id)}
                    className="text-red-500 flex items-center gap-2 text-sm hover:text-red-600"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================= VIDEOS ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">🎥 Videos</h2>

        {videos.length === 0 ? (
          <p>No videos found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => {
              const embedUrl = cleanYoutubeUrl(video.videoUrl);

              return (
                <div key={video._id} className="bg-white shadow rounded-xl p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>

                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      className="w-full h-48 rounded"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : (
                    <div className="h-48 flex items-center justify-center bg-gray-200 rounded">
                      Invalid video URL
                    </div>
                  )}

                  <button
                    onClick={() => deleteVideo(video._id)}
                    className="mt-3 text-red-500 flex items-center gap-2 text-sm hover:text-red-600"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ================= EVENTS ================= */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">📅 Events</h2>

        {events.length === 0 ? (
          <p>No events found</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event._id} className="bg-white shadow rounded-xl overflow-hidden">
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-4 space-y-1">
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <p className="text-xs text-gray-500">📍 {event.location}</p>
                  <p className="text-xs text-gray-500">
                    📅 {new Date(event.date).toDateString()} | ⏰ {event.time}
                  </p>

                  <button
                    onClick={() => deleteEvent(event._id)}
                    className="mt-3 text-red-500 flex items-center gap-2 text-sm hover:text-red-600"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default ShowData;
