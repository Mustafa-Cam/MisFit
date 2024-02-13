import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function TrainerPage() {
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
                                <h2>Our Trainers</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* trainers */}
            <div className="trainers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <p>Lorem Ipsum available, but the majority have suffered </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div id="trai" className="trainer_box">
                                <div className="trainer_img">
                                    <figure><img src="images/tra.jpg" alt="#" /></figure>
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
                                    <figure><img src="images/tra0.jpg" alt="#" /></figure>
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
                                    <figure><img src="images/tra1.jpg" alt="#" /></figure>
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
            {/* end trainers */}
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

export default TrainerPage;
