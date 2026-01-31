import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddPhoto = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !about || !image) {
      toast.error("Title, About and Image are required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("about", about);
      formData.append("image", image);

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/add`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        toast.success("Photo added successfully 🎉");
        setTitle("");
        setAbout("");
        setImage(null);
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-slate-800 mb-6">
        Add Photo Content
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* TITLE */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* ABOUT */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About
          </label>
          <textarea
            rows="4"
            placeholder="Enter description"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full cursor-pointer"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Add Photo"}
        </button>
      </form>
    </div>
  );
};

export default AddPhoto;

