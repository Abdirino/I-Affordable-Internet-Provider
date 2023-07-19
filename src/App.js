import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import About from "./Pages/About/About";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Services/Service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/package" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
