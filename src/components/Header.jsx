import React from 'react'
import logo from '../assets/images/logo-cl.png';
import logowhite from '../assets/images/logo-wh.png';
import menu from '../assets/images/menu-bars-dark.svg';
import menuwhite from '../assets/images/menu-bars-white.svg';
const Header = () => {
    return (
        <>
            <header>
                <div className="header-main white">
                    <div className="container">
                        <div className="menu-flex d-flex align-items-center justify-content-between">
                            <div className="logo">
                                <a href="index.html">
                                    <img
                                        className="logo-white"
                                        src={logowhite}
                                        alt=""
                                    />
                                    <img
                                        className="logo-color"
                                        src={logo}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <ul className="menu-list d-flex list-unstyled">
                                <li>
                                    <a className="active" href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="shop.html">Shop</a>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                    <a href="cars.html">Cars</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                                <li>
                                    <a href="order-traking.html">Order Tracking</a>
                                </li>
                            </ul>
                            <div className="d-flex align-items-center right">
                                <div className="cart">
                                    <a href="#">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M21.75 3H20.3643C19.8546 3 19.4086 3.34265 19.2773 3.83513L18.8941 5.27209M16.5 14.25C18.1569 14.25 19.5 15.5931 19.5 17.25H3.75M16.5 14.25H5.28175C4.16063 11.9494 3.1823 9.56635 2.35827 7.1125C7.11995 5.89646 12.1095 5.25 17.25 5.25C17.7998 5.25 18.3479 5.2574 18.8941 5.27209M16.5 14.25L18.8941 5.27209M18 20.25C18 20.6642 18.3358 21 18.75 21C19.1642 21 19.5 20.6642 19.5 20.25C19.5 19.8358 19.1642 19.5 18.75 19.5C18.3358 19.5 18 19.8358 18 20.25ZM5.25 20.25C5.25 20.6642 5.58579 21 6 21C6.41421 21 6.75 20.6642 6.75 20.25C6.75 19.8358 6.41421 19.5 6 19.5C5.58579 19.5 5.25 19.8358 5.25 20.25Z"
                                                stroke="white"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className="count">03</span>
                                    </a>
                                </div>
                                <a
                                    href="/#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#log-in"
                                    className="btn"
                                >
                                    Login/Sign up
                                </a>
                            </div>
                            <div className="btn-menu">
                                <img
                                    className="menu-bars-white"
                                    src={menuwhite}
                                    alt=""
                                />
                                <img
                                    className="menu-bars-dark"
                                    src={menu}
                                    alt=""
                                />
                            </div>
                        </div>
                        {/* mobile-menu */}
                        
                        <div className="mobile-sidebar">
                            <div className="mobile-menu-bg" />
                            <div className="mobile-menu">
                                <div className="top">
                                    <div className="close-menu">
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.75 9.75L14.25 14.25M14.25 9.75L9.75 14.25M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="#231F20"
                                                strokeOpacity="0.56"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div className="logo">
                                        <a href="index.html">
                                            <img
                                                className="logo-mobile"
                                                src={logo}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <ul className="menu-items list-unstyled">
                                        <li>
                                            <a className="active" href="index.html">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="shop.html">Shop</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="cars.html">Cars</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li>
                                            <a href="order-traking.html">Order Tracking</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bottom">
                                    <div className="cart">
                                        <a href="#">
                                            <svg
                                                width={22}
                                                height={22}
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M19.9375 2.75H18.6673C18.2001 2.75 17.7912 3.0641 17.6709 3.51553L17.3196 4.83275M15.125 13.0625C16.6438 13.0625 17.875 14.2937 17.875 15.8125H3.4375M15.125 13.0625H4.8416C3.81392 10.9536 2.91711 8.76916 2.16175 6.51979C6.52662 5.40508 11.1004 4.8125 15.8125 4.8125C16.3165 4.8125 16.8189 4.81928 17.3196 4.83275M15.125 13.0625L17.3196 4.83275M16.5 18.5625C16.5 18.9422 16.8078 19.25 17.1875 19.25C17.5672 19.25 17.875 18.9422 17.875 18.5625C17.875 18.1828 17.5672 17.875 17.1875 17.875C16.8078 17.875 16.5 18.1828 16.5 18.5625ZM4.8125 18.5625C4.8125 18.9422 5.12031 19.25 5.5 19.25C5.8797 19.25 6.1875 18.9422 6.1875 18.5625C6.1875 18.1828 5.8797 17.875 5.5 17.875C5.12031 17.875 4.8125 18.1828 4.8125 18.5625Z"
                                                    stroke="#231F20"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            Add to cart <span className="count">03</span>
                                        </a>
                                    </div>
                                    <a
                                        href="/#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#log-in"
                                        className="btn"
                                    >
                                        Login/Sign up
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
