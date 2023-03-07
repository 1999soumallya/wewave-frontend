import React from 'react'

export default function About() {
    return (
        <>
            <section className="about_section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="about_img">
                                <img
                                    src="./assets/img/about-image-01.jpg"
                                    alt="about_img"
                                    className="img-fluid"
                                />
                                <img
                                    src="./assets/img/about-image-02.jpg"
                                    alt="about_img2"
                                    className="front_img"
                                />
                                <img
                                    src="./assets/img/shape-04-01.png"
                                    alt="shape"
                                    className="shape_img"
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <div className="about_content">
                                <div className="heading text-left">
                                    <span>about us</span>
                                    <h2>We Execute Our Ideas From The Start To Finish</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form, by
                                        injected humour, or randomised words which don’t look even
                                        slightly believable.
                                    </p>
                                </div>
                                <ul className="list">
                                    <li>
                                        <div className="icon">
                                            <img src="./assets/img/rocket-about.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>Manage Tech Services</h4>
                                            <p>
                                                Managing tech services involves overseeing technical aspects,
                                                providing support, ensuring security, developing strategy,
                                                managing budgets, and integrating new tech.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <img src="./assets/img/technical-support-about.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4>Technical Support</h4>
                                            <p>
                                                Our tech team oversees all technical aspects for smooth
                                                business operations: maintenance, support, security, strategy,
                                                budgets, and new tech integration.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className="custom_btn">
                                    Know about us <i className="fa-solid fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
