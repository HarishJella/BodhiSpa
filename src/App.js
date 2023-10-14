import logo from "./logo.svg";
import "./App.css";
import hero1 from "./assets/images/hero_1.jpg";
import about1 from "./assets/images/about_1.jpg";
import about2 from "./assets/images/about_2.jpg";
import { Helmet } from "react-helmet";
import React from "react";
import "./App.css";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";

import Header from "./Pages/header";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contact from "./Pages/contact";

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
        </Routes>

        <footer
          className="site-footer bg-image overlay"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-5">
                <h3 className="font-weight-bold serif text-white">Bodhi Spa</h3>
              </div>
              <div className="col-12 text-center mb-5">
                <a href="#" className="">
                  Home
                </a>
                <span className="mx-3"></span>
                <a href="#" className="">
                  About
                </a>
                <span className="mx-3"></span>
                <a href="#" className="">
                  Services
                </a>
                <span className="mx-3"></span>
                <a href="#" className="">
                  Contact
                </a>
              </div>
              <div className="col-12">
                <div className="social_29128 white text-center">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                  <a href="#">
                    <span className="icon-linkedin"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <div className="border-top pt-5">
                  <p className="small">
                    Copyright © 2023. Bodhi Spa All rights reserved.
                    {/* <a target="_blank" href="">
                    Bodhi Spa
                  </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

/* existing imports */

export default App;
