import React from 'react'
import Modal from './modal'
import { Link } from 'react-router-dom'

export default function Header() {

    const handleShow = (id) => {
        document.getElementById("modal-container").removeAttribute('class')
        document.getElementById("modal-container").classList.add(id)
        document.body.classList.add('modal-active')
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to={"#"}>
                            <img src="./assets/img/we-wave_logo.png" alt="" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to={"#"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"#"}>
                                        About us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"#"}>
                                        Pages <i className="fa-solid fa-angle-down" />
                                    </Link>
                                    <ul className="submenu">
                                        <li>
                                            <Link to={"#"}>HTML</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>CSS</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"} className="tls_plus"> JavaScript <i className="fa-solid fa-plus" /> </Link>
                                            <ul className="submenu">
                                                <li>
                                                    <Link to={"#"}>HTML</Link>
                                                </li>
                                                <li>
                                                    <Link to={"#"}>CSS</Link>
                                                </li>
                                                <li>
                                                    <Link to={"#"}>JavaScript</Link>
                                                </li>
                                                <li>
                                                    <Link to={"#"}>Jquery</Link>
                                                </li>
                                                <li>
                                                    <Link to={"#"}>Wordpress</Link>
                                                </li>
                                                <li>
                                                    <Link to={"#"}>React</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to={"#"}>Jquery</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>Wordpress</Link>
                                        </li>
                                        <li>
                                            <Link to={"#"}>React</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"#"}> Blogs </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"#"}> Contact us </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right_area">
                            <button className="custom_btn button" id="one" onClick={() => handleShow("one")}> Get a Quote </button>
                        </div>
                    </nav>
                </div>
            </header>
            <Modal />
        </>
    )
}
