const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./Routes/Auth");
const errorHandler = require("./Middleware/ErrorHandler");

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  credentials: true, // set true if using cookies
}));

// routes
app.use("/api", authRoutes);

// error handler (your file)
app.use(errorHandler);

module.exports = app;
