import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

function Contact() {
    return (
        <div>
            <Header />
            <div className="back_re">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>Requst A call for You</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact" className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <form id="request" className="main_form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <input className="contactus" placeholder="Your Name" type="text" name="Your Name" />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="contactus" placeholder="Email" type="text" name="Email" />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="contactus" placeholder="Phone Number" type="text" name="Phone Number" />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="contactus" placeholder="Subject" type="text" name="Subject" />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="textarea" placeholder="Message" name="Message"></textarea>
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
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&amp;q=Eiffel+Tower+Paris+France" width="600" height="425" frameBorder="0" style={{ border: "0", width: "100%" }} allowFullScreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <script src="js/jquery.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/jquery-3.0.0.min.js"></script>
            <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
            <script src="js/custom.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
            <script>
                baguetteBox.run('.tz-gallery');
            </script>
        </div>
    );
}

export default Contact;
