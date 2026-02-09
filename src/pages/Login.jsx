import { useState } from "react";
import api from "../api";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;

    try {
      setLoading(true);

      const res = await api.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // ✅ store BOTH tokens (matches api.js interceptor)
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white w-80 p-8 rounded-xl shadow-lg space-y-5 border">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          SmartDesk Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-800 hover:bg-gray-900 text-white py-3 rounded-md transition disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => (window.location.href = "/register")}
            className="font-semibold cursor-pointer hover:underline"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}
