import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("upcoming"); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/content/event`
        );
        setEvents(Array.isArray(res.data.events) ? res.data.events : []);
      } catch (error) {
        console.error("FETCH EVENTS ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // 🔎 filter + search logic
  const filteredEvents = useMemo(() => {
    const now = new Date();

    return events
      .filter((e) => {
        if (filter === "upcoming") return new Date(e.date) >= now;
        if (filter === "past") return new Date(e.date) < now;
        return true;
      })
      .filter(
        (e) =>
          e.title.toLowerCase().includes(search.toLowerCase()) ||
          e.location.toLowerCase().includes(search.toLowerCase())
      );
  }, [events, search, filter]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-lg text-gray-600">
        Loading events...
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ===== HERO ===== */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h1 className="text-4xl font-bold">Events & Programs</h1>
          <p className="text-indigo-100 max-w-2xl mx-auto">
            Discover our upcoming performances, workshops, and cultural events
          </p>
        </div>
      </div>

      {/* ===== CONTROLS ===== */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow p-4 md:p-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Search by title or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-80 border border-gray-300 rounded-lg px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* FILTER */}
          <div className="flex gap-2">
            {["upcoming", "past", "all"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    filter === type
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== EVENTS LIST ===== */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredEvents.length === 0 ? (
          <p className="text-center text-gray-500">
            No events found matching your criteria
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-2xl shadow hover:-translate-y-1
                           hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover"
                  />
                )}

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="text-sm text-gray-500 space-y-1 pt-2">
                    <p>📍 {event.location}</p>
                    <p>
                      📅 {new Date(event.date).toDateString()} | ⏰ {event.time}
                    </p>
                    <p>👤 {event.organizer}</p>
                  </div>

                  {/* CTA */}
                  <button
                    className="mt-3 w-full bg-indigo-50 text-indigo-600
                               font-medium py-2 rounded-lg hover:bg-indigo-100 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
