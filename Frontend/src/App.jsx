// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Documentation from "./Pages/Documentation";
import Intro from "./Pages/Intro";
import HowItWorks from "./Pages/HowItWorks";
import BuyingGuide from "./Pages/BuyingGuide";
import LocalEnvironment from "./Pages/LocalEnvironment";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Documentation layout route with nested pages */}
        <Route path="/documentation" element={<Documentation />}>
          <Route index element={<Intro />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="buying-guide" element={<BuyingGuide />} />
          <Route path="local" element={<LocalEnvironment />} />
          {/* add more nested doc routes here */}
        </Route>

        {/* optional: redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
