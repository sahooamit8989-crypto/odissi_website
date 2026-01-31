import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    organizer: "",
    image: null,
  });

  // used to reset file input
  const [fileKey, setFileKey] = useState(Date.now());

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/content/create`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (res.data.success) {
        toast.success("Event added successfully 🎉");

        // reset form
        setFormData({
          title: "",
          description: "",
          date: "",
          time: "",
          location: "",
          organizer: "",
          image: null,
        });

        // reset file input
        setFileKey(Date.now());
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Upload failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
          Add Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* TITLE */}
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Event Title"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* DESCRIPTION */}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Event Description"
            rows="4"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 resize-none
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* DATE & TIME */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="Event Time"
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5
                         focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* LOCATION */}
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* ORGANIZER */}
          <input
            name="organizer"
            value={formData.organizer}
            onChange={handleChange}
            placeholder="Organizer Name"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          {/* IMAGE */}
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center">
            <input
              key={fileKey}
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-sm text-slate-600 file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white
                         hover:file:bg-indigo-700 cursor-pointer"
              required
            />
            <p className="text-xs text-slate-500 mt-2">
              Upload event image (JPG, PNG)
            </p>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white
                       font-semibold py-3 rounded-lg transition duration-200 shadow-md"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
