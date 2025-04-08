// src/App.js

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Complaint from "./pages/complaint";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import Progress from "./pages/progress";

import ComplaintForm from "./pages/ComplaintForm"; // Import ComplaintForm component

function App() {
  return (
    <div className="App">
      <img
        src="https://asett.cms.gov/resource/1549656663000/Images/all-purpose-banner-v3.jpg"
        alt="Logo"
        width="816"
      />
      <Header />
      <Progress />

      {/* Define routes without Router */}
      <Routes>
        <Route path="/" element={<Complaint />} /> {/* Default Route */}
        <Route path="/complaint-form" element={<ComplaintForm />} />{" "}
        {/* Route to ComplaintForm */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
