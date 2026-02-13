import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const register = async () => {
    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await api.post("/auth/register", form);

      // Navigate to the root (Login) and pass the 'registered' state
      navigate("/", { state: { registered: true } });

    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow w-80 space-y-4 border">
        <h2 className="text-xl font-semibold text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="button"
          onClick={register}
          disabled={loading}
          className="bg-blue-800 text-white w-full p-2 rounded disabled:opacity-60"
        >
          {loading ? "Creating..." : "Register"}
        </button>
      </div>
    </div>
  );
}
