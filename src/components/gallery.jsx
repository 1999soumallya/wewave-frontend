import React, { useState } from 'react'
// import $ from 'jquery'
import IsoTopeGrid from "react-isotope";
import cardsLayout from "./cardsLayout.json";
import filtersList from "./filters.json";

export default function Gallery() {
    // Local state for managing filtering logic
    const [filters, updateFilters] = useState(filtersList);

    // Filter change handler
    const onFilter = (event) => {
        const { target: { value, checked } } = event;
        updateFilters((state) =>
            state.map((f) => {
                if (f.isChecked === true) {
                    return { ...f, isChecked: false };
                }
                return f;
            })
        );

        updateFilters((state) =>
            state.map((f) => {
                if (f.label === value) {
                    return {
                        ...f,
                        isChecked: checked
                    };
                }
                return f;
            })
        );
    };

    return (
        <>
            {/* <section className="gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="heading text-center">
                                <span>Our Gallery</span>
                                <h2>creating a community of life long learners</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                    omnis? Nobis asperiores natus aperiam? Aperiam, asperiores eligendi.
                                    Quaerat numquam alias ex voluptatem soluta. Animi nesciunt nulla ad
                                    dolores veniam voluptas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="gallery_menu">
                                <ul>
                                    <li className="filterButton active" data-filter="*" id='all'> all </li>
                                    <li className='filterButton' data-filter=".populer" id='populer'>Popular</li>
                                    <li className='filterButton' data-filter=".ternding" id='ternding'>Trending</li>
                                    <li className='filterButton' data-filter=".features" id='features'>Features</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row grid-fliter">
                        <div className="col-lg-4 col-md-6 col-sm-6 col gallery_items ternding features all">
                            <div className="gallery_img">
                                <img
                                    src="./assets/img/course-01.jpg"
                                    alt="img1"
                                    className="img-fluid"
                                />
                                <div className="gallery_overley">
                                    <div className="gallery_content">
                                        <h4>Gallery Title</h4>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Voluptatem, ullam?
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col gallery_items ternding populer all">
                            <div className="gallery_img">
                                <img
                                    src="./assets/img/course-02.jpg"
                                    alt="img2"
                                    className="img-fluid"
                                />
                                <div className="gallery_overley">
                                    <div className="gallery_content">
                                        <h4>Gallery Title</h4>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Voluptatem, ullam?
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col gallery_items populer features all">
                            <div className="gallery_img">
                                <img
                                    src="./assets/img/course-03.jpg"
                                    alt="img3"
                                    className="img-fluid"
                                />
                                <div className="gallery_overley">
                                    <div className="gallery_content">
                                        <h4>Gallery Title</h4>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Voluptatem, ullam?
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col gallery_items populer ternding all">
                            <div className="gallery_img">
                                <img
                                    src="./assets/img/course-04.jpg"
                                    alt="img4"
                                    className="img-fluid"
                                />
                                <div className="gallery_overley">
                                    <div className="gallery_content">
                                        <h4>Gallery Title</h4>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Voluptatem, ullam?
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col gallery_items populer features all">
                            <div className="gallery_img">
                                <img
                                    src="./assets/img/course-05.jpg"
                                    alt="img5"
                                    className="img-fluid"
                                />
                                <div className="gallery_overley">
                                    <div className="gallery_content">
                                        <h4>Gallery Title</h4>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Voluptatem, ullam?
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col gallery_items ternding all">
                            <div className="gallery_img">
                                <img
                                    src="./assets/img/course-06.jpg"
                                    alt="img6"
                                    className="img-fluid"
                                />
                                <div className="gallery_overley">
                                    <div className="gallery_content">
                                        <h4>Gallery Title</h4>
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                            Voluptatem, ullam?
                                        </p>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-linkedin-in" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="center_btn">
                        <a href="#" className="custom_btn">
                            Know about us <i className="fa-solid fa-arrow-right" />
                        </a>
                    </div>
                </div>
            </section> */}
            <section className="gallery">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="heading text-center">
                                <span>Our Gallery</span>
                                <h2>creating a community of life long learners</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                                    omnis? Nobis asperiores natus aperiam? Aperiam, asperiores eligendi.
                                    Quaerat numquam alias ex voluptatem soluta. Animi nesciunt nulla ad
                                    dolores veniam voluptas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <div className="gallery_menu">
                                <div className='filterbuttongroup'>
                                    {filters.map((f) => (
                                        <div className={`filterButton ${f.isChecked === true ? "active" : ""}`} key={`${f.label}_key`}>
                                            <input id={f.label} type="checkbox" value={f.label} onChange={onFilter} checked={f.isChecked} hidden />
                                            <label htmlFor={f.label}>{f.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row grid-fliter" style={{ "minHeight": "527px"}}>
                        <IsoTopeGrid gridLayout={cardsLayout} noOfCols={3} filters={filters} unitWidth={416} unitHeight={304}>
                            {cardsLayout.map((card) => (
                                <div key={card.id} className="col-lg-4 col-md-6 col-sm-6 col gallery_items ternding features all">
                                    <div className="gallery_img">
                                        <img src={card.image} alt="img1" className="img-fluid" />
                                        <div className="gallery_overley">
                                            <div className="gallery_content">
                                                <h4>{card.title}</h4>
                                                <p>{card.content}</p>
                                                <ul>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-facebook-f" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-instagram" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </IsoTopeGrid>
                    </div>
                </div>
            </section>
        </>
    )
}
