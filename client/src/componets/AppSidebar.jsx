





import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaImage,
  FaVideo,
  FaTable,
  FaSignOutAlt,
  FaCalendarPlus,   // ✅ ADDED
} from "react-icons/fa";

const AppSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/adminlogin");
  };

  /* ================= LINK STYLES ================= */
  const desktopLinkClass = ({ isActive }) =>
    `flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition
     ${
       isActive
         ? "bg-indigo-600 text-white"
         : "text-slate-300 hover:bg-slate-800"
     }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex flex-col items-center text-xs transition
     ${isActive ? "text-indigo-400" : "text-slate-400"}`;

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden md:flex fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-slate-900 border-r border-slate-800 z-40">
        <ul className="flex flex-col gap-2 p-4 w-full">

          <NavLink to="/admin-dashboard/add-photo" className={desktopLinkClass}>
            <FaImage className="text-lg" />
            Add Photo
          </NavLink>

          <NavLink to="/admin-dashboard/add-video" className={desktopLinkClass}>
            <FaVideo className="text-lg" />
            Add Video
          </NavLink>

          {/* ✅ ADD EVENT */}
          <NavLink to="/admin-dashboard/add-event" className={desktopLinkClass}>
            <FaCalendarPlus className="text-lg" />
            Add Event
          </NavLink>

          <NavLink to="/admin-dashboard/show-data" className={desktopLinkClass}>
            <FaTable className="text-lg" />
            Show Data
          </NavLink>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-4 px-4 py-3 rounded-lg
                       text-sm font-medium text-red-400 hover:bg-red-500/10 transition"
          >
            <FaSignOutAlt className="text-lg" />
            Logout
          </button>
        </ul>
      </aside>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 md:hidden z-40">
        <div className="flex justify-around py-2">

          <NavLink to="/admin-dashboard/add-photo" className={mobileLinkClass}>
            {({ isActive }) => (
              <>
                <FaImage className={`text-lg mb-1 ${isActive ? "text-indigo-400" : ""}`} />
                Photo
              </>
            )}
          </NavLink>

          <NavLink to="/admin-dashboard/add-video" className={mobileLinkClass}>
            {({ isActive }) => (
              <>
                <FaVideo className={`text-lg mb-1 ${isActive ? "text-indigo-400" : ""}`} />
                Video
              </>
            )}
          </NavLink>

          {/* ✅ ADD EVENT */}
          <NavLink to="/admin-dashboard/add-event" className={mobileLinkClass}>
            {({ isActive }) => (
              <>
                <FaCalendarPlus className={`text-lg mb-1 ${isActive ? "text-indigo-400" : ""}`} />
                Event
              </>
            )}
          </NavLink>

          <NavLink to="/admin-dashboard/show-data" className={mobileLinkClass}>
            {({ isActive }) => (
              <>
                <FaTable className={`text-lg mb-1 ${isActive ? "text-indigo-400" : ""}`} />
                Data
              </>
            )}
          </NavLink>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="flex flex-col items-center text-xs text-red-400"
          >
            <FaSignOutAlt className="text-lg mb-1 cursor-pointer" />
            Logout
          </button>

        </div>
      </nav>
    </>
  );
};

export default AppSidebar;
