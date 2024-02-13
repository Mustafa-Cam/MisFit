import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
const App = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const previousSlide = () => {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  return (
    <div>
      <Header />



      {/* Banner Section */}
      <section className="banner_main">
        <div
          id="myCarousel"
          className="carousel slide banner"
          data-ride="carousel"
        >
          {/* Carousel Indicators */}
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className={currentSlide === 0 ? "active" : ""}
            ></li>
            <li data-target="#myCarousel" 
            data-slide-to="1"
               className={currentSlide === 1 ? "active" : ""}>
            </li>
            <li data-target="#myCarousel" 
            data-slide-to="2"
            className={currentSlide === 2 ? "active" : ""}
            ></li>
          </ol>

          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}>

              <img
                className="first-slide"
                src="images/banner1.jpg"
                alt="First slide"
              />

              <div className="container"></div>
            </div>
            <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}> {/* currentslide 1 e eşitse active yap değilse yapma diyor*/}
              <img
                className="second-slide"
                src="images/banner2.jpg"
                alt="Second slide"
              />
            </div>
            <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
              <img
                className="third-slide"
                src="images/banner3.jpg"
                alt="Third slide"
              />
            </div>
          </div>

          {/* Carousel Controls */}
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
            onClick={previousSlide}
          >
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
            <span className="sr-only">Previous</span>
          </a> 
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
            onClick={nextSlide}
          >
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            <span className="sr-only">Next</span>
          </a> 

        </div>
        <div className="banner_text">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="stewart">
                  <span>construction</span>
                  <h1>Stewart Fitness </h1>
                  <p>
                    {" "}
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some.
                  </p>
                  <a className="read_more" href="contact.html">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Section */}







      {/* About Section */}
      <div className="about">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>About Fitness</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using{" "}
                </p>
                <a className="read_more" href="Javascript:void(0)">
                  Read More
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

      {/* Services Section */}
      <div className="services">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Services</h2>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="se_img">
                <figure>
                  <img src="images/service1.jpg" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-4">
              <div className="se_img">
                <figure>
                  <img src="images/service2.jpg" alt="#" />
                </figure>
              </div>
            </div>
            <div className="col-md-4">
              <div className="se_img">
                <figure>
                  <img src="images/service3.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Services Section */}

      {/* Latest News Section */}
      <div className="latest">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Latest News</h2>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="news_img">
                <figure>
                  <img src="images/nes.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Latest News Section */}

      {/* Trainers Section */}
      <div className="trainers">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Trainers</h2>
                <p>Lorem Ipsum available, but the majority have suffered </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div id="trai" className="trainer_box">
                <div className="trainer_img">
                  <figure>
                    <img src="images/tra.jpg" alt="#" />
                  </figure>
                </div>
                <div className="trainer">
                  <h3>sandy Mark </h3>
                  <p>architecture</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div id="trai" className="trainer_box">
                <div className="trainer_img">
                  <figure>
                    <img src="images/tra0.jpg" alt="#" />
                  </figure>
                </div>
                <div className="trainer">
                  <h3>limijack </h3>
                  <p>Maping</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div id="trai" className="trainer_box">
                <div className="trainer_img">
                  <figure>
                    <img src="images/tra1.jpg" alt="#" />
                  </figure>
                </div>
                <div className="trainer">
                  <h3>smith den </h3>
                  <p>Metarial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Trainers Section */}

      {/* Gallery Section */}
      <div className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Gallery</h2>
                <p>
                  The point of using Lorem Ipsum is that it has a more-or-less
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tz-gallery">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <a className="gallery_img" href="images/gallery1.jpg">
                      <img src="images/gallery1.jpg" alt="Bridge" />
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <a className="gallery_img" href="images/gallery2.jpg">
                      <img src="images/gallery2.jpg" alt="Bridge" />
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <a className="gallery_img" href="images/gallery3.jpg">
                      <img src="images/gallery3.jpg" alt="Bridge" />
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <a className="gallery_img" href="images/gallery4.jpg">
                      <img src="images/gallery4.jpg" alt="Bridge" />
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <a className="gallery_img" href="images/gallery5.jpg">
                      <img src="images/gallery5.jpg" alt="Bridge" />
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <a className="gallery_img" href="images/gallery6.jpg">
                      <img src="images/gallery6.jpg" alt="Bridge" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Gallery Section */}

      {/* Contact Section */}
      <div id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Request A Call for You</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Your Name"
                      type="type"
                      name="Your Name"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Email"
                      type="type"
                      name="Email"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Phone Number"
                      type="type"
                      name="Phone Number"
                    />
                  </div>
                  <div className="col-md-12">
                    <input
                      className="contactus"
                      placeholder="Subject"
                      type="type"
                      name="Subject"
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      className="textarea"
                      placeholder="Message"
                      type="type"
                      Message="Name"
                    >
                      Message
                    </textarea>
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                    width="600"
                    height="425"
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact Section */}

     <Footer/> 

      {/* Javascript files */}
      <script src="js/jquery.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      {/* Sidebar */}
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
      <script>baguetteBox.run('.tz-gallery');</script>
    </div>
  );
};

export default App;
