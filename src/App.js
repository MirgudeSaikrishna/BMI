import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BMILandingPage from "./bmical";
import BMICalculator from "./bmi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BMILandingPage />} />
        <Route path="/calculator" element={<BMICalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
