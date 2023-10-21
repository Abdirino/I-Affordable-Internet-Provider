import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import About from "./Pages/About/About";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Services/Service";

import Loader from "./Components/Loader/Loader";
import Service1 from "./Pages/ServicesInfo/Service1";
import Service2 from "./Pages/ServicesInfo/Service2";
import Service3 from "./Pages/ServicesInfo/Service3";
import FAQs from "./Components/FAQs/FAQs";

function App() {

  // on-scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => observer.observe(el));
  // end on-scroll animation

  // on-scroll animation
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  const hiddenElements2 = document.querySelectorAll(".hidden2");
  hiddenElements2.forEach((el) => observer2.observe(el));
  // end on-scroll animation

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/package" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/service1" element={<Service1 />} />
            <Route path="/service2" element={<Service2 />} />
            <Route path="/service3" element={<Service3 />} />
            <Route path="/FAQs" element={<FAQs />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
