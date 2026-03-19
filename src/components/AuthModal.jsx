import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AuthModal = () => {
  const { showAuthModal, closeAuthModal, login, register } = useAuth();
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!showAuthModal) return null;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const switchTab = tab => {
    setActiveTab(tab);
    setError("");
    setSuccess("");
    setFormData({ name: "", phone: "", password: "" });
  };

  const handleLogin = async e => {
    e.preventDefault();
    if (!formData.phone || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await login({
        phone: formData.phone,
        password: formData.password,
      });
      if (!res.status) {
        setError(res.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleRegister = async e => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await register({
        name: formData.name,
        phone: formData.phone,
        password: formData.password,
      });
      if (res.status) {
        setSuccess("Registration successful! Please login.");
        setActiveTab("login");
        setFormData({ name: "", phone: formData.phone, password: "" });
      } else {
        setError(res.message || "Registration failed.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-100 transition-opacity"
        onClick={closeAuthModal}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-101 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[fadeInUp_0.3s_ease-out]">
          {/* Header */}
          <div className="relative bg-linear-to-r from-green-700 to-emerald-600 px-6 py-8 text-white">
            <button
              onClick={closeAuthModal}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-2xl leading-none cursor-pointer"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold font-[Montserrat]">
              {activeTab === "login" ? "Welcome Back!" : "Create Account"}
            </h2>
            <p className="text-green-100 text-sm mt-1">
              {activeTab === "login"
                ? "Sign in to continue shopping"
                : "Join us for a healthy organic lifestyle"}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => switchTab("login")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors cursor-pointer
                ${
                  activeTab === "login"
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Login
            </button>
            <button
              onClick={() => switchTab("register")}
              className={`flex-1 py-3 text-sm font-semibold transition-colors cursor-pointer
                ${
                  activeTab === "register"
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <div className="p-6">
            {error && (
              <div className="mb-4 px-4 py-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 px-4 py-2.5 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
                {success}
              </div>
            )}

            {activeTab === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
                <p className="text-center text-sm text-gray-500">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchTab("register")}
                    className="text-green-700 font-semibold hover:underline cursor-pointer"
                  >
                    Register
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </button>
                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => switchTab("login")}
                    className="text-green-700 font-semibold hover:underline cursor-pointer"
                  >
                    Login
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default AuthModal;
