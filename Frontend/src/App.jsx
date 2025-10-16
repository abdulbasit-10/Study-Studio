// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Documentation from "./Pages/Documentation";
import Intro from "./Pages/Intro";
import HowItWorks from "./Pages/HowItWorks";
import BuyingGuide from "./Pages/BuyingGuide";
import LocalEnvironment from "./Pages/LocalEnvironment";
import GetStarted from "./Pages/GetStarted";
import EnvironmentVariables from "./Pages/EnvironmentVariables";
import Gemini from "./Pages/Gemini";
import Authentication from "./Pages/Authentication";
import PaymentGateways from "./Pages/PaymentGateways";
import DatabaseORM from "./Pages/DatabaseORM";
import Storage from "./Pages/Storage";
import Database from "./Pages/Database";
import StartingServer from "./Pages/StartingServer";

import StoppingServer from "./Pages/StoppingServer";

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
          <Route path="getting-started" element={<GetStarted />} />
          <Route path="environment-variables" element={<EnvironmentVariables />} />
          <Route path="gemini" element={<Gemini />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="payment-gateways" element={<PaymentGateways />} />
          <Route path="database-orm" element={<DatabaseORM />} />
          <Route path="storage" element={<Storage />} />
          <Route path="database" element={<Database />} />
          <Route path="starting-server" element={<StartingServer />} />
          <Route path="stopping-server" element={<StoppingServer />} />
          {/* add more nested doc routes here */}
        </Route>

        {/* optional: redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
