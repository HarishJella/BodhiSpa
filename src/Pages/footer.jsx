import hero1 from "../assets/images/hero_1.jpg";
import MSK7467 from "../assets/images/MSK_7467.JPG";

const Footer = () => {
  return (
    <>
      <footer
        className="site-footer bg-image overlay"
        style={{ backgroundImage: `url(${MSK7467})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h3 className="font-weight-bold serif text-white">Bodhi Spa</h3>
            </div>
            <div className="col-12 text-center mb-5">
              <a href="/home" className="">
                Home
              </a>
              <span className="mx-3"></span>
              <a href="#" className="">
                {/* About */}
              </a>
              <span className="mx-3"></span>
              <a href="/gallery" className="">
                Gallery
              </a>
              <span className="mx-3"></span>
              <a href="/contact" className="">
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
                <a href="mailto:bodhispa97@gmail.com">bodhispa97@gmail.com</a>
                <br />
                <a href="tel:+91 8904413935">+91 8904413935</a>
                <br />

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
    </>
  );
};

export default Footer;
