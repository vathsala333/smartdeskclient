import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const register = async () => {
    await api.post("/auth/register", form);
    nav("/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-80 space-y-4">
        <h2 className="text-xl font-bold">Register</h2>

        <input
          placeholder="Name"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={register}
          className="bg-blue-800 text-white w-full p-2 rounded"
        >
          Register
        </button>
      </div>
    </div>
  );
}
