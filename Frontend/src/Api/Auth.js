// src/api/auth.js
import { request } from "../Lib/Api.js";

/**
 * NOTE:
 * - API_BASE in src/lib/api.js should include the base path (e.g. "http://localhost:4000/api" or "http://localhost:4000")
 * - request(path, { method, body }) will automatically include token from localStorage under key "token"
 */

export function signup({ email, password }) {
  return request("/signup", { method: "POST", body: { email, password } });
}

export function login({ email, password }) {
  return request("/login", { method: "POST", body: { email, password } });
}

export function logout() {
  return request("/logout", { method: "POST" });
}

export function me() {
  return request("/me", { method: "GET" });
}
