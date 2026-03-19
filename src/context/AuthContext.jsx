import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { loginUser, registerUser } from "../api/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token");
    const savedUser = localStorage.getItem("auth_user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = useCallback(async ({ phone, password }) => {
    const res = await loginUser({ phone, password });
    if (res.status) {
      const { token: authToken, ...userData } = res.data;
      setToken(authToken);
      setUser(userData);
      localStorage.setItem("auth_token", authToken);
      localStorage.setItem("auth_user", JSON.stringify(userData));
      setShowAuthModal(false);
    }
    return res;
  }, []);

  const register = useCallback(async ({ name, phone, password }) => {
    const res = await registerUser({ name, phone, password });
    return res;
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  }, []);

  const openAuthModal = useCallback(() => setShowAuthModal(true), []);
  const closeAuthModal = useCallback(() => setShowAuthModal(false), []);

  const isLoggedIn = !!token;

  const value = useMemo(
    () => ({
      user,
      token,
      isLoggedIn,
      loading,
      showAuthModal,
      login,
      register,
      logout,
      openAuthModal,
      closeAuthModal,
    }),
    [
      user,
      token,
      isLoggedIn,
      loading,
      showAuthModal,
      login,
      register,
      logout,
      openAuthModal,
      closeAuthModal,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
