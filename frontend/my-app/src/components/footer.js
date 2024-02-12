import react from 'react';

function footer() {
    return (
        <div>
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
                    <a href="about.jsx"> About</a>
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
                    simply dummy{" "}
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
                <h3>Newsletter</h3>
                <form className="bottom_form">
                  <input
                    className="enter"
                    placeholder="Enter your email"
                    type="text"
                    name="Enter your email"
                  />
                  <button className="sub_btn">Subscribe</button>
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
        </div>
    )
}

export default footer