const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { isEmail, isStrongPassword } = require("../Utils/Validatior.js");

const jwtSecret = process.env.JWT_SECRET;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "30d";

function generateToken(payload) {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpiresIn });
}

async function signup(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!isEmail(email)) return res.status(400).json({ message: "Invalid email." });
    if (!isStrongPassword(password)) return res.status(400).json({ message: "Password too weak (min 8 chars)." });

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "Email already in use." });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });

    // create token
    const token = generateToken({ id: user._id });

    // Option A: return token (client stores)
    return res.status(201).json({ token, user: { id: user._id, email: user.email } });

    // Option B (alternative): set httpOnly cookie
    // res.cookie("token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
    // res.status(201).json({ user: { id: user._id, email: user.email } });
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Provide email and password." });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials." });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: "Invalid credentials." });

    const token = generateToken({ id: user._id });
    return res.json({ token, user: { id: user._id, email: user.email } });

  } catch (err) {
    next(err);
  }
}

async function logout(req, res, next) {
  try {
    // if using cookies: clear cookie
    // res.clearCookie("token");
    // return res.json({ message: "Logged out" });

    // if using tokens: client just deletes token; optionally blacklist on server
    return res.json({ message: "Logged out" });
  } catch (err) {
    next(err);
  }
}

async function me(req, res, next) {
  try {
    // Expect Authorization: Bearer <token>
    const auth = req.headers.authorization;
    if (!auth) return res.status(401).json({ message: "No token provided." });

    const token = auth.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Invalid token." });

    const payload = jwt.verify(token, jwtSecret);
    const user = await User.findById(payload.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found." });

    return res.json({ user });
  } catch (err) {
    // token verification error -> 401
    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Invalid or expired token." });
    }
    next(err);
  }
}

module.exports = { signup, login, logout, me };
