import React, { useState } from "react";
import hero from "../assets/images/hero_1.jpg";
import img1 from "../assets/images/img_1.jpg";
import img2 from "../assets/images/img_2.jpg";
import img3 from "../assets/images/img_3.jpg";
import img4 from "../assets/images/img_4.jpg";
import Lightbox from "yet-another-react-lightbox";
import { Gallery } from "react-grid-gallery";
import "yet-another-react-lightbox/styles.css";
import { images } from "./images";
import MSK7444 from "../assets/images/MSK_7444.JPG";
import banner from "../assets/images/home_banner.jpg"

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const GalleryComponent = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);

  return (
    <>
      <div class="ftco-blocks-cover-1">
        <div
          class="site-section-cover overlay"
          data-stellar-background-ratio="0.5"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h1 class="mb-3">Gallery</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Soluta veritatis in tenetur doloremque, maiores doloribus
                  officia iste. Dolores.
                </p>
                <p>
                  <a href="#" class="btn btn-primary">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="heading-border-bottom font-weight-bold serif text-black mb-5 text-center">
                See Our galleries
              </h2>
            </div>
          </div>
          <div>
            <Gallery
              images={images}
              onClick={handleClick}
              enableImageSelection={false}
            />
            <Lightbox
              slides={slides}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
            />
          </div>
          <div class="row" style={{ display: "none" }}>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_1.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_1.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_2.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_2.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_3.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_3.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_4.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_4.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_2.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_2.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_3.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_3.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_4.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_4.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 col-md-6 mb-5 mb-lg-5">
              <a href="images/img_1.jpg" data-fancybox="gal" class="">
                <img
                  src={require("../assets/images/img_1.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section services_294491">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="serif text-white font-weight-bold text-primary">
                Get 20% discount{" "}
              </h2>
              <p class="lead">
                Lorem ipsum doltnor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <a href="#" class="btn btn-primary">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryComponent;
