import React from "react";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestListing from "./pages/RequestListing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

// import components

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jobpost" element={<RequestListing />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
