import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"

function Gallery() {
    return (
        <div className="main-layout">
            {/* loader */}
            {/* <div className="loader_bg">
                <div className="loader"><img src="images/loading.gif" alt="#" /></div>
            </div> */}
            {/* end loader */}
            {/* header */}
            <Header/>
                {/* end header inner */}
                {/* end header */}
                <div className="back_re">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h2>Gallery</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* gallery */}
                <div className="gallery">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                    <p>The point of using Lorem Ipsum is that it has a more-or-less</p>
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
                {/* end gallery */}
                {/*  footer */}
                <Footer/>
                {/* end footer */}
                {/* Javascript files*/}
                <script src="js/jquery.min.js"></script>
                <script src="js/bootstrap.bundle.min.js"></script>
                <script src="js/jquery-3.0.0.min.js"></script>
                {/* sidebar */}
                <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
                <script src="js/custom.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js"></script>
                <script>
                    baguetteBox.run('.tz-gallery');
                </script>
            
        </div>
    );
}

export default Gallery;
