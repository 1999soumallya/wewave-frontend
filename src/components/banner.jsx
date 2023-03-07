import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bannercontentAction } from '../Redux/Actions/action'
import { ToastContainer, toast } from 'react-toastify';
import { setting } from '../tostsetting';

export default function Banner() {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="banner_container">
                                <h5>IT Design, Development &amp; Consulting</h5>
                                <h1>Developing Powerful Brands &amp; Business Identities</h1>
                                <p>
                                    We’re Providing the Best Innovative Website Solutions for your All
                                    Businesses Better Growth &amp; Futures.
                                </p>
                                <Link to={"#"} className="custom_btn">
                                    Get Started today <i className="fa-solid fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="banner_img">
                                <img
                                    src="./assets/img/banner-hero1.webp"
                                    alt="banner_img1"
                                    className="img-fluid banner_img1"
                                />
                                <img
                                    src="./assets/img/girl-bg.png"
                                    alt="banner_bg"
                                    className="img_bg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* wave section */}
                <div className="waves">
                    <div className="wave" id="wave1" />
                    <div className="wave" id="wave2" />
                    <div className="wave" id="wave3" />
                    <div className="wave" id="wave4" />
                </div>
                {/* wave section */}
                <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            </section>

        </>
    )
}
