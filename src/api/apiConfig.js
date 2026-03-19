import axios from "axios";

const API = axios.create({
  baseURL: "https://spectrumms.in/taurus_organic/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Bearer token to authenticated requests
API.interceptors.request.use(config => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
