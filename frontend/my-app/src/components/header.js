import React from "react";
import { useEffect } from "react";
function Header() {
  useEffect(() => {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function (link) {
      const href = link.getAttribute("href");

      // Check if the href is "/" and current location is also "/"
      if (href === "/" && currentLocation === href) {
        link.classList.add("active");
      } else {
        // Remove active class from all links
        link.classList.remove("active");

        // Check if the current location includes the href
        if (currentLocation.includes(href) && href !== "/") {
          link.classList.add("active");
        }
      }
    });
  }, []);
  return (
    <div>
      {/* Header */}
      <header>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="icon" href="images/fevicon.png" type="image/gif" />
        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
        <link
          rel="stylesheet"
          href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
          media="screen"
        />
        <link
          rel="stylesheet"
          href="https://rawgit.com/LeshikJanz/libraries/master/Bootstrap/baguetteBox.min.css"
        />

        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <a href="index.html">
                        <img src="images/logo.png" alt="#" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarsExample04"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                        <a className="nav-link" href="/">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="service">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="news">
                          News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="trainer">
                          Trainer
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="gallery">
                          Gallery
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* End Header */}
    </div>
  );
}

export default Header;
