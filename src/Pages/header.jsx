import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const [path, setPath] = useState("home");

  useEffect(() => {
    console.log("location", location);
    const pathName = location.pathname.slice(1);
    setPath(pathName || 'home');
  }, [location.pathname]);

  return (
    <>
      <header className="site-navbar site-navbar-target" role="banner">
        <div className="container">
          <div className="row align-items-center position-relative">
            <div className="col-3 ">
              <div className="site-logo serif">
                {/* <a href="">Bodhi Spa</a> */}
                <a href="">
                  <img className="logo" alt="logo" src={logo} />
                </a>
              </div>
            </div>

            <div className="col-9  text-right">
              <span className="d-inline-block d-lg-none">
                <a
                  href="#"
                  className="text-white site-menu-toggle js-menu-toggle py-5 text-white"
                >
                  <span className="icon-menu h3 text-white"></span>
                </a>
              </span>

              <nav
                className="site-navigation text-right ml-auto d-none d-lg-block"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                  <li className={path === "home" ? "active" : ""}>
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li>
                    {/* <Link className="nav-link" to="/about">
                      About
                    </Link> */}
                    {/* <a href="about.html" className="nav-link">
                      About
                    </a> */}
                  </li>
                  <li>
                    {/* <a href="services.html" className="nav-link">
                      Services
                    </a> */}
                  </li>
                  <li className={path === "gallery" ? "active" : ""}>
                    <Link className="nav-link" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                  {/* <li>
                    <a href="blog.html" className="nav-link">
                      Blog
                    </a>
                  </li>  */}
                  <li className={path === "contact" ? "active" : ""}>
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
