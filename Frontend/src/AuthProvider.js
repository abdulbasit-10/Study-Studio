// src/AuthProvider.jsx
import React, { createContext, useEffect, useState } from "react";
import { me as apiMe, logout as apiLogout } from "./Api/Auth";

export const AuthContext = createContext({
  user: null,
  token: null,
  loading: false,
  setAuth: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(Boolean(token));

  // Sync token -> localStorage
  function setAuth({ token: newToken, user: newUser } = {}) {
    if (newToken) {
      localStorage.setItem("token", newToken);
      setToken(newToken);
    } else {
      localStorage.removeItem("token");
      setToken(null);
    }

    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
    } else {
      localStorage.removeItem("user");
      setUser(null);
    }
  }

  // Attempt to validate token & fetch user on mount (if token present)
  useEffect(() => {
    let mounted = true;
    async function init() {
      if (!token) {
        setLoading(false);
        return;
      }
      setLoading(true);
      try {
        // apiMe() will use token from localStorage via lib/request
        const data = await apiMe();
        // allow backends that return either { user } or user object
        const fetchedUser = data?.user ?? data ?? null;
        if (mounted) {
          setUser(fetchedUser || null);
          if (fetchedUser) localStorage.setItem("user", JSON.stringify(fetchedUser));
        }
      } catch (err) {
        // token invalid or network error -> clear auth
        console.warn("AuthProvider: me() failed:", err);
        if (mounted) setAuth({ token: null, user: null });
      } finally {
        if (mounted) setLoading(false);
      }
    }
    init();
    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function logout() {
    try {
      // attempt server-side logout (optional)
      await apiLogout();
    } catch (err) {
      console.warn("logout error:", err);
    } finally {
      setAuth({ token: null, user: null });
    }
  }

  return (
    <AuthContext.Provider value={{ user, token, loading, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
