import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://sensible-production-4915.up.railway.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;