// server.js
require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/auth");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const authMiddleware = require("./src/middleware/authMiddleware");
const errorHandler = require("./src/middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

connectDB(process.env.MONGO_URI);

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// CORS - allow frontend origin and credentials
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  credentials: true,
}));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60, // max requests per minute
});
app.use(limiter);

// attach user (optional) for all routes
app.use(authMiddleware);

// routes
app.use("/api/auth", authRoutes);

// example protected route
app.get("/api/protected", (req, res) => {
  if (!req.user) return res.status(401).json({ message: "Unauthorized" });
  res.json({ message: `Hello ${req.user.email}` });
});

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


