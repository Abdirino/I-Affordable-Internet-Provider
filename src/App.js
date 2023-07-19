import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Packages from "./Pages/Packages/Packages";
import About from "./Pages/About/About";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/package" element={<Packages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
