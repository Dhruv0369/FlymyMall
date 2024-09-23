import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logowhite from '../assets/images/logo-wh.png';
import logo from '../assets/images/logo-cl.png';
import menu from '../assets/images/menu-bars-dark.svg';
import menuwhite from '../assets/images/menu-bars-white.svg';
import logocl from '../assets/images/logo-cl.png';

const Headerwhite = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header>
        <div className="header-main">
          <div className="container">
            <div className="menu-flex d-flex align-items-center justify-content-between">
              <div className="logo">
                <NavLink to="/">
                  <img className="logo-white" src={logowhite} alt="" />
                  <img className="logo-color" src={logo} alt="" />
                </NavLink>
              </div>
              <ul className="menu-list d-flex list-unstyled">
                <li>
                  <NavLink to="/" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/shop" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cars" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    Cars
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ordertracking" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                    Order Tracking
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex align-items-center right">
                <div className="cart">
                  <a href="#">
                    {/* SVG Cart Icon */}
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.75 3H20.3643C19.8546 3 19.4086 3.34265 19.2773 3.83513L18.8941 5.27209M16.5 14.25C18.1569 14.25 19.5 15.5931 19.5 17.25H3.75M16.5 14.25H5.28175C4.16063 11.9494 3.1823 9.56635 2.35827 7.1125C7.11995 5.89646 12.1095 5.25 17.25 5.25C17.7998 5.25 18.3479 5.2574 18.8941 5.27209M16.5 14.25L18.8941 5.27209M18 20.25C18 20.6642 18.3358 21 18.75 21C19.1642 21 19.5 20.6642 19.5 20.25C19.5 19.8358 19.1642 19.5 18.75 19.5C18.3358 19.5 18 19.8358 18 20.25ZM5.25 20.25C5.25 20.6642 5.58579 21 6 21C6.41421 21 6.75 20.6642 6.75 20.25C6.75 19.8358 6.41421 19.5 6 19.5C5.58579 19.5 5.25 19.8358 5.25 20.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <Link to="/login" data-bs-toggle="modal" data-bs-target="#log-in" className="btn">
                  Login/Sign up
                </Link>
              </div>
              <div className="btn-menu">
                <img className="menu-bars-white" src={menuwhite} alt="" />
                <img className="menu-bars-dark" src={menu} alt="" />
              </div>
            </div>
            {/* mobile-menu */}
            <div className="mobile-sidebar">
              <div className="mobile-menu-bg" />
              <div className="mobile-menu">
                <div className="top">
                  <div className="close-menu">
                    {/* SVG Close Icon */}
                  </div>
                  <div className="logo">
                    <NavLink to="/">
                      <img className="logo-mobile" src={logocl} alt="" />
                    </NavLink>
                  </div>
                  <ul className="menu-items list-unstyled">
                    <li>
                      <NavLink to="/" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Shop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/cars" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Cars
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/ordertracking" onClick={handleScrollToTop} className={({ isActive }) => (isActive ? "active" : undefined)}>
                        Order Tracking
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="bottom">
                  <div className="cart">
                    <a href="#">
                      {/* SVG Cart Icon */}
                      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.9375 2.75H18.6673C18.2001 2.75 17.7912 3.0641 17.6709 3.51553L17.3196 4.83275M15.125 13.0625C16.6438 13.0625 17.875 14.2937 17.875 15.8125H3.4375M15.125 13.0625H4.8416C3.81392 10.9536 2.91711 8.76916 2.16175 6.51979C6.52662 5.40508 11.1004 4.8125 15.8125 4.8125C16.3165 4.8125 16.8189 4.81928 17.3196 4.83275M15.125 13.0625L17.3196 4.83275M16.5 18.5625C16.5 18.9422 16.8078 19.25 17.1875 19.25C17.5672 19.25 17.875 18.9422 17.875 18.5625C17.875 18.1828 17.5672 17.875 17.1875 17.875C16.8078 17.875 16.5 18.1828 16.5 18.5625ZM5.5 18.5625C5.5 18.9422 5.80782 19.25 6.1875 19.25C6.56718 19.25 6.875 18.9422 6.875 18.5625C6.875 18.1828 6.56718 17.875 6.1875 17.875C5.80782 17.875 5.5 18.1828 5.5 18.5625Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                  <Link to="/login" data-bs-toggle="modal" data-bs-target="#log-in" className="btn">
                    Login/Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headerwhite;
