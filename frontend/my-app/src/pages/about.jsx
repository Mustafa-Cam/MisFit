import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
function AboutPage() {
  return (
    <div>
      <Header/>

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

     <Footer/>
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
