import React from 'react'

export default function Feature() {
    return (
        <>
            <section className="testimonial">
                <div className="container">
                    <div className="row content_row">
                        <div className="col-sm-12 col-md-6">
                            <div className="heading">
                                <span>Get A Quote</span>
                                <h2>Fill Out This Form Now</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                    omnis? Nobis asperiores natus aperiam? Aperiam, asperiores eligendi.
                                    Quaerat numquam alias ex voluptatem soluta. Animi nesciunt nulla ad
                                    dolores veniam voluptas.
                                </p>
                            </div>
                            <div className="contact_content">
                                <form>
                                    <div className="row align-items-center">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="E-mail ID"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Contact No"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    rows={5}
                                                    className="form-control"
                                                    placeholder="Type Your Message Here"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <button />
                                            <button className="custom_btn">
                                                Submit <i className="fa-solid fa-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="booking-img">
                                <img src="assets/img/booking-1.jpg" alt="image" className="img-fluid" />
                                <div className="booking-shape">
                                    <img src="assets/img/shape3.png" alt="shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
