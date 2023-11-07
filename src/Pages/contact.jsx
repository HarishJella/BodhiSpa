import hero1 from "../assets/images/hero_1.jpg";
import Axios from "axios";
import React, { useState } from "react";
import MSK7437 from "../assets/images/MSK_7437.JPG";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <div class="ftco-blocks-cover-1">
        <div
          class="site-section-cover overlay"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: `url(${MSK7437})` }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h1 class="mb-3">Contact Us</h1>
                <p></p>
                <p>
                  {/* <a href="#" class="btn btn-primary">
                    Learn More
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section bg-light" id="contact-section">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-7 text-center mb-5">
              <h2>Get in Touch</h2>
              <p>Get in Touch</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mb-5">
              <ContactForm />
            </div>
            <div class="col-lg-4 ml-auto">
              <div class="bg-white p-3 p-md-5">
                <h3 class="text-black mb-4">Contact Info</h3>
                <ul class="list-unstyled footer-link">
                  <li class="d-block mb-3">
                    <span class="d-block text-black">Address:</span>
                    <span>
                      3rd Floor, Chinnappa Complex, Whitefield - Hoskote Rd,
                      Chaitanya Ananya, Krishnarajapura, Bengaluru, Karnataka
                      560067
                    </span>
                  </li>
                  <li class="d-block mb-3">
                    <span class="d-block text-black">Phone:</span>
                    <span>
                      <a href="tel:+91 8904413935">+91 8904413935</a>
                    </span>
                  </li>
                  <li class="d-block mb-3">
                    <span class="d-block text-black">Email:</span>
                    <span>
                      <a href="mailto:bodhispa97@gmail.com">
                        bodhispa97@gmail.com
                      </a>

                      {/* <a
                        href="/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="a8c1c6cec7e8d1c7dddaccc7c5c9c1c686cbc7c5"
                      >
                 
                                          [email&#160;protected]
                      </a> */}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
