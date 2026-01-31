import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(
          `${BACKEND_URL}/api/content/login`,
          { email, password }
        );

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          toast.success("Admin login successful ✅");
          navigate("/admin-dashboard/add-photo");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
          <span className="text-indigo-600">{state}</span> Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="abcd@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-600 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg"
        >
          Login
        </button>

        <p className="text-center text-xs text-slate-400 mt-5">
          Secure {state} Access Only
        </p>
      </form>
    </div>
  );
};

export default AdminLogin;
