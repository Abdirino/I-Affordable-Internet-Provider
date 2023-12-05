import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Loader from "./Components/Loader/Loader";
import Privacy from "./Pages/PrivacyPolicy/Privacy";

const Home = lazy(() => import("./Pages/Home/Home")); 
const About = lazy(() => import("./Pages/About/About"));
const Service = lazy(() => import("./Pages/Services/Service"));
const FAQs = lazy(() => import("./Components/FAQs/FAQs"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Packages = lazy(() => import("./Pages/Packages/Packages"));

const Service1 = lazy(() => import("./Pages/ServicesInfo/Service1"));
const Service2 = lazy(() => import("./Pages/ServicesInfo/Service2"));
const Service3 = lazy(() => import("./Pages/ServicesInfo/Service3"));

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
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
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
