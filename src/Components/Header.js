import React, { Component } from 'react';
import LOGOIMAGE from '../images/Saylani.PNG';
import '../App.css';
class Logo extends React.Component {
    render() {
        return (
            <div>
                <img className='setting' src={LOGOIMAGE} alt="" width="150px" height="50px" />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light float">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Logo />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Introducation</a></li>
                                    <li><a className="dropdown-item" href="#">Chairman Message</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Saylani Annual Report</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Saylani Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Education</a></li>
                                    <li><a className="dropdown-item" href="#">Medical</a></li>
                                    <li><a className="dropdown-item" href="#">Welfare</a></li>
                                    <li><a className="dropdown-item" href="#">Hajj Application Form</a></li>
                                    <li><a className="dropdown-item" href="#">Saylani Dastrkhawan</a></li>
                                    <li><a className="dropdown-item" href="#">Saylani RO Plant</a></li>
                                    <li><a className="dropdown-item" href="#">Online Sadqah</a></li>
                                    <li><a className="dropdown-item" href="#">Online Taweezat/Istekhara </a></li>
                                    <li><a className="dropdown-item" href="#">Saylani Job Bank</a></li>
                                    <li><a className="dropdown-item" href="#">Online Quran Academy</a></li>
                                    <li><a className="dropdown-item" href="#">Books </a></li>
                                    <li><a className="dropdown-item" href="#">Saylani Online Masajid</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Saylani Ehsass
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Saylani Langarkhana</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Future Project
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Saylani University</a></li>
                                    <li><a className="dropdown-item" href="#">Saylani City</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Media</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">News</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Donation
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Bank Details</a></li>
                                    <li><a className="dropdown-item" href="#">Sadqa</a></li>
                                    <li><a className="dropdown-item" href="#">Aqiqa</a></li>
                                    <li><a className="dropdown-item" href="#">Other Donation</a></li>
                                    <li><a className="dropdown-item" href="#">Corona Effets</a></li>
                                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        )
    }
}

export {
    Header,
    Logo
}