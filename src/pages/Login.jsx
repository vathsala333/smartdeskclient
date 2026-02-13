import React, { useState, useEffect } from "react";
import api from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if the registration state was passed
    if (location.state?.registered) {
      toast.success("Registration successful! Please login.");
      
      // Clear the state by replacing the current history entry with NO state
      // This prevents the toast from showing again if the user refreshes
      navigate("/", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      // Note: Use your api instance or the full URL. 
      // Using 'api.post' is better if you configured base URLs in your api.js
      const res = await api.post("/auth/login", { email, password });

      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      toast.success("Welcome back!");
      navigate("/dashboard");

    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid credentials");
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
          className="w-full border border-gray-300 p-3 rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-md"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-800 text-white py-3 rounded-md disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="font-semibold cursor-pointer hover:underline"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}
