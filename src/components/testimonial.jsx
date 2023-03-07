import React from 'react'
import OwlCarousel from 'react-owl-carousel';

export default function Testimonial() {
    const setting = {
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        stagePadding: 10,
        animateOut: true,
        autoplay: true,
    }

    return (
        <>
            <div className="feature">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6">
                            <div className="heading text-center">
                                <span>TESTIMONIAL</span>
                                <h2>What Our Student Says</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <OwlCarousel className='testimonial_slider owl-carousel' {...setting}>
                            <div className="testimonial_items text-center item">
                                <blockquote>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio
                                    aliquid, culpa facilis veritatis quisquam maiores sequi amet ea,
                                    iure suscipit impedit mollitia! Nam sit repellat voluptatem nulla
                                    quia est!
                                </blockquote>
                                <div className="client_box">
                                    <div className="cl_img">
                                        <img src="./assets/img/client-01.png" alt="" />
                                    </div>
                                    <div className="cl_info">
                                        <h4>Geraldine D. Anspach</h4>
                                        <span>SEO experts</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_items text-center item">
                                <blockquote>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio
                                    aliquid, culpa facilis veritatis quisquam maiores sequi amet ea,
                                    iure suscipit impedit mollitia! Nam sit repellat voluptatem nulla
                                    quia est!
                                </blockquote>
                                <div className="client_box">
                                    <div className="cl_img">
                                        <img src="./assets/img/client-01.png" alt="" />
                                    </div>
                                    <div className="cl_info">
                                        <h4>Geraldine D. Anspach</h4>
                                        <span>SEO experts</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial_items text-center">
                                <blockquote>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, odio
                                    aliquid, culpa facilis veritatis quisquam maiores sequi amet ea,
                                    iure suscipit impedit mollitia! Nam sit repellat voluptatem nulla
                                    quia est!
                                </blockquote>
                                <div className="client_box">
                                    <div className="cl_img">
                                        <img src="./assets/img/client-01.png" alt="" />
                                    </div>
                                    <div className="cl_info">
                                        <h4>Geraldine D. Anspach</h4>
                                        <span>SEO experts</span>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        </>
    )
}
