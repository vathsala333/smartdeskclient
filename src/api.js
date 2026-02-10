import axios from "axios";
import { toast } from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_API_URL; // ⭐ env based

const api = axios.create({
  baseURL: BASE_URL,
});


// ===============================
// LOGOUT
// ===============================
export const logoutUser = () => {
  localStorage.clear();

  toast.error("Logged out");

  setTimeout(() => {
    window.location.href = "/login";
  }, 800);
};


// ===============================
// Attach ACCESS token
// ===============================
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});


// ===============================
// Auto refresh on 401
// ===============================
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;

    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        // ⭐ use SAME baseURL (not localhost)
        const res = await axios.post(
          `${BASE_URL}/auth/refresh`,
          { refreshToken }
        );

        const newAccess = res.data.accessToken;

        localStorage.setItem("accessToken", newAccess);

        original.headers.Authorization = `Bearer ${newAccess}`;

        return api(original);
      } catch {
        logoutUser();
      }
    }

    return Promise.reject(err);
  }
);

export default api;
