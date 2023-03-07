import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_wiget">
                                <div className="logo">
                                    <a href="#"><img src="./assets/img/we-wave_logo_white.png" alt="" /></a>
                                </div>
                                <p>
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum.
                                </p>
                                <ul className="social_link">
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_content">
                                <h3 className="footer_title">explore</h3>
                                <ul className="links">
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-angles-right"></i>
                                            <p>about us</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-angles-right"></i>
                                            <p>upcoming events</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-angles-right"></i>
                                            <p>blogs & news</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-angles-right"></i>
                                            <p><span>faq</span> question</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-angles-right"></i>
                                            <p>testimonial</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa-solid fa-angles-right"></i>
                                            <p>privacy policy</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_content newsletter_arae">
                                <h3 className="footer_title">Newsletter</h3>

                                <p>Stay always in touch! Subscribe to our newsletter.</p>
                                <form>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Your Email" className="form-control" />
                                    </div>
                                    <button className="custom_btn">
                                        Submit <i className="fa-regular fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-3">
                            <div className="footer_content">
                                <h3 className="footer_title">Our Gallery</h3>
                                <ul className="fblog_area">
                                    <li>
                                        <img src="./assets/img/course-01.jpg" alt="img1" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src="./assets/img/course-02.jpg" alt="img2" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src="./assets/img/course-03.jpg" alt="img3" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src="./assets/img/course-04.jpg" alt="img4" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src="./assets/img/course-05.jpg" alt="img5" className="img-fluid" />
                                    </li>
                                    <li>
                                        <img src="./assets/img/course-06.jpg" alt="img6" className="img-fluid" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy_right_bar">
                    <div className="row">
                        <div className="col-sm-12">
                            <span className="copy_right">© 2022-23 WeWave. All Rights Reserved.</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
