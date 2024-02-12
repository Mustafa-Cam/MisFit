import React from "react";

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <header>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
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
                      <li className="nav-item active">
                        <a className="nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="service.html">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="news.html">
                          News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="trainer.html">
                          Trainer
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
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

      {/* About Section */}
      <div className="back_re">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title">
                <h2>About Fitness</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="titlepage">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using{" "}
                </p>
                <a className="read_more" href="Javascript:void(0)">
                  Raed More
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure>
                  <img src="images/about.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End About Section */}

      {/* Footer */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h3>Link Menu</h3>
                <ul className="link_menu">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="about.html"> About</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="news.html">News</a>
                  </li>
                  <li>
                    <a href="trainer.html">Trainer</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className=" col-md-5">
                <h3>Contact US</h3>
                <ul className="conta">
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    Address : Lorem Ipsum is <br />
                    simply dummy
                  </li>
                  <li>
                    <i className="fa fa-mobile" aria-hidden="true"></i> Phone :
                    +(1234) 567 890
                  </li>
                  <li>
                    {" "}
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <a href="#">Email : demo@gmail.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>News letter</h3>
                <form className="bottom_form">
                  <input
                    className="enter"
                    placeholder="Enter your email"
                    type="text"
                    name="Enter your email"
                  />
                  <button className="sub_btn">subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p>
                    © 2019 All Rights Reserved. Design by{" "}
                    <a href="https://html.design/"> Free Html Templates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
      <script>baguetteBox.run('.tz-gallery');</script>
    </div>
  );
}

export default AboutPage;
