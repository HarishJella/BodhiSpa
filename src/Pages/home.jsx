import React from "react";
import hero1 from "../assets/images/hero_1.jpg";
import about1 from "../assets/images/about_1.jpg";
import about2 from "../assets/images/about_2.jpg";
import MSK7444 from "../assets/images/MSK_7444.JPG";
import MSK7428 from "../assets/images/MSK_7428.JPG";
import MSK7459 from "../assets/images/MSK_7459.JPG";
import banner from "../assets/images/budha_banner1.jpg"

import MSK7433 from "../assets/images/MSK_7433.JPG";
import MSK7465 from "../assets/images/MSK_7465.JPG";
import { Routes, Route, useNavigate } from "react-router-dom";
import "/node_modules/video-react/dist/video-react.css"; // import css
import { Player } from "video-react";

const Home = () => {
  const navigate = useNavigate();

  const navigateToContacts = (e) => {
    e.preventDefault();
    navigate("/contact");
  };
  return (
    <>
      <div className="ftco-blocks-cover-1">
        <div
          className="site-section-cover overlay"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: `url(${banner})`,backgroundSize:"contain" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="mb-3">Spa which you Love</h1>
                <p>
                  BODHI SPA is a sanctuary where you can relax and rejuvenate.
                  We offer a variety of treatments, including massages, facials,
                  and body wraps, to help you feel your best, both inside and
                  out.
                </p>
                <p>
                  <a
                    href="#"
                    onClick={navigateToContacts}
                    className="btn btn-primary"
                  >
                    Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mr-auto">
              <h2 className="serif font-weight-bold mb-3">
                Bodhi Spa &amp; Wellness
              </h2>
              <p>
                We believe that everyone deserves to feel pampered and cared
                for. That is why we offer a wide range of services, all designed
                to help you relax and de-stress. Whether you are looking for a
                quick pick-me-up or a full-day of pampering, we have the perfect
                treatment for you.
                <br /> Our spa is a place where you can escape the hustle and
                bustle of everyday life. Our friendly and experienced staff will
                make you feel welcome and comfortable. We want you to feel like
                you are in your own personal oasis.
              </p>
              <p className="font-weight-bold">
                Why wait!??? Come and relax at our spa. We promise you will
                leave feeling refreshed and rejuvenated.
              </p>

              <div className="social_29128">
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
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <Player
                  playsInline
                  poster={require("../assets/images/MSK_7444.JPG")}
                  src={require("../assets/video/bodhi_spa.mp4")}
                />
                {/* <div
                  className="bg-img-1 mr-md-4 mt-md-5"
                  style={{
                    backgroundImage: `url(${MSK7444})`,
                  }}
                ></div>
                <div
                  className="bg-img-1"
                  style={{
                    backgroundImage: `url(${MSK7428})`,
                  }}
                ></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="heading-border-bottom font-weight-bold serif text-black mb-5 text-center">
                Our Services
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="service_13987">
                <a href="#" className="mb-3 d-block">
                  <img
                    src={require("../assets/images/swedish_massage.jpg")}
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="text">
                  <h3 className="serif mb-3">Swedish Massage</h3>
                  <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione eius recusandae, porro ipsa necessitatibus autem! */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="service_13987">
                <a href="#" className="mb-3 d-block">
                  <img
                    src={require("../assets/images/aroma_massage.jpg")}
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="text">
                  <h3 className="serif mb-3">Aroma Massage</h3>
                  <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione eius recusandae, porro ipsa necessitatibus autem! */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="service_13987">
                <a href="#" className="mb-3 d-block">
                  <img
                    src={require("../assets/images/deep_tissue_massage.jpg")}
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="text">
                  <h3 className="serif mb-3">Deep tissue Massage</h3>
                  <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione eius recusandae, porro ipsa necessitatibus autem! */}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="service_13987">
                <a href="#" className="mb-3 d-block">
                  <img
                    src={require("../assets/images/thai_massage.jpg")}
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
                <div className="text">
                  <h3 className="serif mb-3">Thai Massage</h3>
                  <p>
                    {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ratione eius recusandae, porro ipsa necessitatibus autem! */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section services_294491" style={{display:"none"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="serif text-white font-weight-bold text-primary">
                Get 10% discount{" "}
              </h2>
              <p className="lead">
                Lorem ipsum doltnor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <a href="/contact" className="btn btn-primary">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="site-section bg-image overlay features_75651"
        style={{ backgroundImage: `url(${hero1})`, display: "none" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="heading-border-bottom font-weight-bold serif text-white mb-5">
                Spa Features
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
              <div className="block_75651">
                <div className="wrap-icon">
                  <span className="flaticon-towel"></span>
                </div>
                <div className="text">
                  <h3>Relaxing Massage</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, neque, et!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
              <div className="block_75651">
                <div className="wrap-icon">
                  <span className="flaticon-candle"></span>
                </div>
                <div className="text">
                  <h3>Candle</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, neque, et!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
              <div className="block_75651">
                <div className="wrap-icon">
                  <span className="flaticon-bathrobe"></span>
                </div>
                <div className="text">
                  <h3>Bathrobe</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, neque, et!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-lg-0 col-lg-3">
              <div className="block_75651">
                <div className="wrap-icon">
                  <span className="flaticon-hot-stones"></span>
                </div>
                <div className="text">
                  <h3>Hot Stones</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Soluta, neque, et!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section" style={{ display: "none" }}>
        <div className="text-center">
          <h2 className="heading-border-bottom font-weight-bold serif text-black mb-5 text-center">
            Testimonials
          </h2>
        </div>

        <div className="nonloop-block-13 owl-carousel d-flex">
          <div>
            <div className="testimonial-2">
              <div className="d-flex v-card align-items-center mb-4">
                <img
                  src={require("../assets/images/person_1.jpg")}
                  alt="Image"
                  className="img-fluid mr-3"
                />
                <span>Mike Fisher</span>
              </div>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="testimonial-2">
              <div className="d-flex v-card align-items-center mb-4">
                <img
                  src={require("../assets/images/person_2.jpg")}
                  alt="Image"
                  className="img-fluid mr-3"
                />
                <span>Mike Fisher</span>
              </div>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="testimonial-2">
              <div className="d-flex v-card align-items-center mb-4">
                <img
                  src={require("../assets/images/person_3.jpg")}
                  alt="Image"
                  className="img-fluid mr-3"
                />
                <span>Mike Fisher</span>
              </div>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="testimonial-2">
              <div className="d-flex v-card align-items-center mb-4">
                <img
                  src={require("../assets/images/person_4.jpg")}
                  alt="Image"
                  className="img-fluid mr-3"
                />
                <span>Mike Fisher</span>
              </div>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
            </div>
          </div>

          <div>
            <div className="testimonial-2">
              <div className="d-flex v-card align-items-center mb-4">
                <img
                  src={require("../assets/images/person_3.jpg")}
                  alt="Image"
                  className="img-fluid mr-3"
                />
                <span>Mike Fisher</span>
              </div>
              <blockquote>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#" className="btn btn-primary custom-prev">
            Prev
          </a>
          <a href="#" className="btn btn-primary custom-next">
            Next
          </a>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mr-auto">
              <blockquote className="testimonial_38201">
                <p className="serif h3 font-weight-bold testimonial_38201">
                  <span className="text-primary">“</span>BODHI SPA is a
                  sanctuary where you can relax and rejuvenate.
                  <span className="text-primary">”</span>
                </p>
                <p>
                  — Bharath, <span className="text-muted">Spa Customer</span>
                </p>
              </blockquote>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div
                  className="bg-img-1 mr-md-4 mt-md-5"
                  style={{
                    backgroundImage: `url(${MSK7433})`,
                  }}
                ></div>
                <div
                  className="bg-img-1"
                  style={{
                    backgroundImage: `url(${MSK7465})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
