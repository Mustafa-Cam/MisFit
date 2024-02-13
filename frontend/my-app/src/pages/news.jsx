import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function LatestNews() {
    return (
        <div className="main-layout">
            {/* loader */}
            {/* <div className="loader_bg">
                <div className="loader"><img src="images/loading.gif" alt="#" /></div>
            </div> */}
            {/* end loader */}
            {/* header */}
            <header>
                {/* header inner */}
               <Header/>
            </header>
            {/* end header inner */}
            {/* end header */}
            <div className="back_re">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>Latest News</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* latest news */}
            <div className="latest">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <p>The point of using Lorem Ipsum is that it has a more-or-less</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="news_img">
                                <figure><img src="images/nes.jpg" alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end latest news */}
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

export default LatestNews;
