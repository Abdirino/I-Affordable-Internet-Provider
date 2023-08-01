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

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3300);
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

            <Route path="/service1" element={<Service1 />}/>
            <Route path="/service2" element={<Service2 />}/>
            <Route path="/service3" element={<Service3 />}/>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
