// src/utils/axios.js
import axios from "axios";

// Access backend URL using import.meta.env
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || "https://sensible-production-4915.up.railway.app",  // Use VITE_ prefix
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;