import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddVideo = () => {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !videoUrl) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/video/add`,
        { title, videoUrl }
      );

      if (res.data.success) {
        toast.success("Video added successfully");
        setTitle("");
        setVideoUrl("");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add Video</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Video Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="text"
          placeholder="Video URL (YouTube / Cloudinary)"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            background: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {loading ? "Adding..." : "Add Video"}
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
