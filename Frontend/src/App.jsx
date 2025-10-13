import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Documentation from "./Documentation/Documentation";
import Intro from "./Documentation/Intro";
import HowItWorks from "./Documentation/HowItWorks";
import BuyingGuide from "./Documentation/BuyingGuide";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Nested routes inside Documentation */}
        <Route path="/documentation/*" element={<Documentation />}>
          <Route index element={<Intro />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="buying-guide" element={<BuyingGuide />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
