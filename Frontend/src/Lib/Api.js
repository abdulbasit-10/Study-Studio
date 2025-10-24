// src/lib/api.js
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function request(path, options = {}) {
  const token = options.token || localStorage.getItem("token");
  const headers = { "Content-Type": "application/json", ...(options.headers || {}) };

  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
    credentials: "include",
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
}
