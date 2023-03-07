import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

export default function Service() {

    const setting = {
        loop: true,
        margin: 25,
        nav: false,
        dots: true,
        items: 4,
        stagePadding: 10,
        animateOut: true,
        autoplay: true,
    }

    return (
        <>
            <section className="services_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="heading text-center">
                                <span>Our Services</span>
                                <h2>We Are Dedicated To Serve You All Time.</h2>
                            </div>
                        </div>
                        <OwlCarousel className='service_slider owl-carousel' {...setting}>
                            <div className="service_item item">
                                <div className="service_icon_area">
                                    <div className="service_icon">
                                        <img src="assets/img/ui.png" alt="" />
                                    </div>
                                </div>
                                <div className="service_title">UI/UX Design</div>
                                <div className="service_des">
                                    We’re wildly passionate about our purpose, and it has us
                                    transforming everything.
                                </div>
                                <div className="read_btn">
                                    <Link to="" className="btn service_read">
                                        read more{" "} <span> <i className="fa-solid fa-angle-right" /> </span>
                                    </Link>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" style={{ fill: "#fff" }} >
                                    <path strokeWidth={0} d="M0 0 C50 100 50 100 100 0  L100 100 0 100" />
                                </svg>
                            </div>
                            <div className="service_item item">
                                <div className="service_icon_area">
                                    <div className="service_icon">
                                        <img src="assets/img/ui.png" alt="" />
                                    </div>
                                </div>
                                <div className="service_title">UI/UX Design</div>
                                <div className="service_des">
                                    We’re wildly passionate about our purpose, and it has us
                                    transforming everything.
                                </div>
                                <div className="read_btn">
                                    <Link to="" className="btn service_read">
                                        read more{" "}
                                        <span>
                                            <i className="fa-solid fa-angle-right" />
                                        </span>
                                    </Link>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" style={{ fill: "#fff" }}>
                                    <path strokeWidth={0} d="M0 0 C50 100 50 100 100 0  L100 100 0 100" />
                                </svg>
                            </div>
                            <div className="service_item item">
                                <div className="service_icon_area">
                                    <div className="service_icon">
                                        <img src="assets/img/ui.png" alt="" />
                                    </div>
                                </div>
                                <div className="service_title">UI/UX Design</div>
                                <div className="service_des">
                                    We’re wildly passionate about our purpose, and it has us
                                    transforming everything.
                                </div>
                                <div className="read_btn">
                                    <Link to="" className="btn service_read">
                                        read more{" "}
                                        <span>
                                            <i className="fa-solid fa-angle-right" />
                                        </span>
                                    </Link>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" style={{ fill: "#fff" }}>
                                    <path strokeWidth={0} d="M0 0 C50 100 50 100 100 0  L100 100 0 100" />
                                </svg>
                            </div>
                            <div className="service_item item">
                                <div className="service_icon_area">
                                    <div className="service_icon">
                                        <img src="assets/img/ui.png" alt="" />
                                    </div>
                                </div>
                                <div className="service_title">UI/UX Design</div>
                                <div className="service_des">
                                    We’re wildly passionate about our purpose, and it has us
                                    transforming everything.
                                </div>
                                <div className="read_btn">
                                    <Link to="" className="btn service_read">
                                        read more{" "}
                                        <span>
                                            <i className="fa-solid fa-angle-right" />
                                        </span>
                                    </Link>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" style={{ fill: "#fff" }} >
                                    <path strokeWidth={0} d="M0 0 C50 100 50 100 100 0  L100 100 0 100" />
                                </svg>
                            </div>
                            <div className="service_item item">
                                <div className="service_icon_area">
                                    <div className="service_icon">
                                        <img src="assets/img/ui.png" alt="" />
                                    </div>
                                </div>
                                <div className="service_title">UI/UX Design</div>
                                <div className="service_des">
                                    We’re wildly passionate about our purpose, and it has us
                                    transforming everything.
                                </div>
                                <div className="read_btn">
                                    <Link to="" className="btn service_read">
                                        read more
                                    </Link>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 100 100" version="1.1" preserveAspectRatio="none" height="32px" style={{ fill: "#fff" }}>
                                    <path strokeWidth={0} d="M0 0 C50 100 50 100 100 0  L100 100 0 100" />
                                </svg>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}
