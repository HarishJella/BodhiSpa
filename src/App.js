import "./App.css";
import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Header from "./Pages/header";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import GalleryComponent from "./Pages/gallery";
import Footer from "./Pages/footer";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrap" id="home-section">
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<GalleryComponent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
