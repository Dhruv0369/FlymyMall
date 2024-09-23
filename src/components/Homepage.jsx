import React from 'react'
import topbanner from '../assets/images/top-banner.png';
import homebg from '../assets/images/home-bg.jpg';
import golddress from '../assets/images/what-we-2.png'
import goldcoin from '../assets/images/what-we-1.png'
import laptop from '../assets/images/control-img.png'
import cart1 from '../assets/images/cat-1.png'
import cart2 from '../assets/images/cat-2.png'
import cart3 from '../assets/images/cat-3.png'
import cart4 from '../assets/images/cat-4.png'
import cart5 from '../assets/images/cat-5.png'
import cart6 from '../assets/images/cat-6.png'
import cart7 from '../assets/images/cat-7.png'
import cart8 from '../assets/images/cat-8.png'
import cart9 from '../assets/images/cat-9.png'
import cart10 from '../assets/images/cat-10.png'
import proimg from '../assets/images/pro-img.jpg'
import amazon from '../assets/images/amazon.svg'
import buy from '../assets/images/buy.svg'
import banner1 from '../assets/images/pro-img-banner-1.jpg'
import banner2 from '../assets/images/pro-img-banner-2.jpg'
import banner3 from '../assets/images/pro-img-banner-3.jpg'
import pricingimg from '../assets/images/pricing-img.png'
import pricingicon1 from '../assets/images/pricing-icon-1.png'
import pricingicon2 from '../assets/images/pricing-icon-2.png'
import pricingicon3 from '../assets/images/pricing-icon-3.png'
import pricingicon4 from '../assets/images/pricing-icon-4.png'
import pricingicon5 from '../assets/images/pricing-icon-5.png'
import pricingicon6 from '../assets/images/pricing-icon-6.png'
import pricingicon7 from '../assets/images/pricing-icon-7.png'
import pricingicon8 from '../assets/images/pricing-icon-8.png'
import makeus from '../assets/images/make-us.png'
import homebottom from '../assets/images/home-bottom.png'



const Homepage = () => {
    return (
        <>
            <div className="main">

                {/* Millions of Products */}
                <section>
                    <div className="banner-area">
                        <img className="top-banner" src={topbanner} alt="" />
                        <img className="home-bg" src={homebg} alt="" />
                        <div className="container">
                            <div className="info-content">
                                <h1>
                                    Millions of Products from US, UK &amp; China <br />{" "}
                                    <span> Shop from Africa, Pay in </span>
                                    <span
                                        className="clr txt-type txt"
                                        style={{ color: '#FFBE2E' }}
                                        data-wait={2000}
                                        data-words='["Naira", "Crypto", "USD"]'>
                                    </span>

                                </h1>
                                <p>
                                    We bring together different international stores and malls <br />
                                    in one platform to make your shopping experience fun
                                </p>
                                <div className="search-area">
                                    <form action="#">
                                        <select className="select-active">
                                            <option>All Categories</option>
                                            <option>Milks and Dairies</option>
                                            <option>Wines &amp; Alcohol</option>
                                            <option>Clothing &amp; Beauty</option>
                                            <option>Pet Foods &amp; Toy</option>
                                            <option>Fast food</option>
                                            <option>Baking material</option>
                                            <option>Vegetables</option>
                                            <option>Fresh Seafood</option>
                                            <option>Noodles &amp; Rice</option>
                                            <option>Ice cream</option>
                                        </select>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search for items..."
                                        />
                                        <a href="#" className="btn">
                                            Search
                                        </a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do? */}
                <section>
                    <div className="what-we-do">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-11 m-auto">
                                    <div className="coin-img">
                                    </div>
                                    <h5>What We Do?</h5>
                                    <h2>
                                        The service we offer is specifically <br />
                                        designed to meet your needs.
                                    </h2>
                                    <div className="in-flex">
                                        <div className="left-content">
                                            <div className="content">
                                                <div className="top-img">
                                                    <img src={goldcoin} alt="" />
                                                </div>
                                                <h3>Shop for Me</h3>
                                                <p>
                                                    Cum sociis natoque penatibus et magnis dis parturient montes,
                                                    nascetur ridiculus mus.
                                                </p>
                                                <ul className="list">
                                                    <li>Aenean quam ornare curabitur blandit.</li>
                                                    <li>Nullam quis risus eget urna mollis ornare leo.</li>
                                                    <li>Etiam porta euismod mollis natoque ornare.</li>
                                                </ul>
                                                <div className="btn-content">
                                                    <a
                                                        href="#"
                                                        className="btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#splash"
                                                    >
                                                        Shop now
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="round">
                                                <div className="in-shap"></div>
                                            </div>
                                        </div>
                                        <div className="right-content">
                                            <div className="round-1">
                                                <div className="in-shap">
                                                    <div className="or-text">OR</div>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="top-img">
                                                    <img src={golddress} alt="" />
                                                </div>
                                                <h3>DIY Shopping</h3>
                                                <p>
                                                    Cum sociis natoque penatibus et magnis dis parturient montes,
                                                    nascetur ridiculus mus.
                                                </p>
                                                <ul className="list">
                                                    <li>Aenean quam ornare curabitur blandit.</li>
                                                    <li>Nullam quis risus eget urna mollis ornare leo.</li>
                                                    <li>Etiam porta euismod mollis natoque ornare.</li>
                                                </ul>
                                                <div className="btn-content">
                                                    <a
                                                        href="#"
                                                        className="btn"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#sorry"
                                                    >
                                                        Sign Up
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Shop with us */}
                <section>
                    <div className="control-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 col-lg-10 m-auto">
                                    <div className="in-flex">
                                        <div className="left-image">
                                            <img src={laptop} alt="control-img" />
                                        </div>
                                        <div className="right-content">
                                            <h5>Why Shop with us</h5>
                                            <h2>Easy-to-use interface and cost-saving AI features.</h2>
                                            <p>
                                                From our AI-enabled lowest price search to payment in local
                                                currency, our system ensures there are no barriers to your
                                                shopping experience. We simplify shopping in the US, UK &amp;
                                                China from Africa Find out our best features to give you the
                                                best experience.
                                            </p>
                                            <ul>
                                                <li>Aenean quam ornare. Curabitur blandit.</li>
                                                <li>Aenean quam ornare. Curabitur blandit.</li>
                                                <li>Aenean quam ornare. Curabitur blandit.</li>
                                                <li>Aenean quam ornare. Curabitur blandit.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="slider-area">
                                <h2>Shop Categories</h2>
                                <div
                                    className="owl-carousel owl-theme owl-loaded owl-drag"
                                    id="categories-slider"
                                >
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#F2FCE4" }}>
                                            <a href="#">
                                                <img src={cart1} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Amzon
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#F4F6FA" }}>
                                            <a href="#">
                                                <img src={cart2} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    ebay
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#ECFFEC" }}>
                                            <a href="#">
                                                <img src={cart3} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Nike
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#FEEFEA" }}>
                                            <a href="#">
                                                <img src={cart4} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Addidas
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#FFF3EB" }}>
                                            <a href="#">
                                                <img src={cart5} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Shein
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#FFF3FF" }}>
                                            <a href="#">
                                                <img src={cart6} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    AliXpress
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#F2FCE4" }}>
                                            <a href="#">
                                                <img src={cart7} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Victoria
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#FEEFEA" }}>
                                            <a href="#">
                                                <img src={cart8} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Crocs
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#FFFCEB" }}>
                                            <a href="#">
                                                <img src={cart9} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Zappos
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="box" style={{ backgroundColor: "#FEEFEA" }}>
                                            <a href="#">
                                                <img src={cart10} alt="cat-img" />
                                            </a>
                                            <h5>
                                                <a href="#" className="cat-name">
                                                    Fashionova
                                                </a>
                                            </h5>
                                            <div className="no-of-item">26 items</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* Daily Best Sells */}
                <section>
                    <div className="product-section">
                        <div className="container">
                            <div className="list-area">
                                <div className="list-title">
                                    <h2>Daily Best Sells</h2>
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-featured-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-featured"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-featured"
                                                aria-selected="true"
                                            >
                                                Featured
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-popular-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-popular"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-popular"
                                                aria-selected="false"
                                            >
                                                Popular
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-new-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-new"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-new"
                                                aria-selected="false"
                                            >
                                                New added
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-featured"
                                        role="tabpanel"
                                        aria-labelledby="pills-featured-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img
                                                                src={banner1}
                                                                alt="Trust & Co."
                                                            />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-popular"
                                        role="tabpanel"
                                        aria-labelledby="pills-popular-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img src={proimg} alt="Trust & Co." />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-new"
                                        role="tabpanel"
                                        aria-labelledby="pills-new-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img src={proimg} alt="Trust & Co." />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-area">
                                <div className="list-title">
                                    <h2>Daily Best Sells</h2>
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-featured2-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-featured2"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-featured2"
                                                aria-selected="true"
                                            >
                                                Featured
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-popular2-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-popular2"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-popular2"
                                                aria-selected="false"
                                            >
                                                Popular
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-new2-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-new2"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-new2"
                                                aria-selected="false"
                                            >
                                                New added
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-featured2"
                                        role="tabpanel"
                                        aria-labelledby="pills-featured2-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img
                                                                src={banner2}
                                                                alt="Trust & Co."
                                                            />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-popular2"
                                        role="tabpanel"
                                        aria-labelledby="pills-popular2-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img src={proimg} alt="Trust & Co." />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-new2"
                                        role="tabpanel"
                                        aria-labelledby="pills-new2-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img src={proimg} alt="Trust & Co." />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-area">
                                <div className="list-title">
                                    <h2>Daily Best Sells</h2>
                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-featured3-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-featured3"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-featured3"
                                                aria-selected="true"
                                            >
                                                Featured
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-popular3-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-popular3"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-popular3"
                                                aria-selected="false"
                                            >
                                                Popular
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link"
                                                id="pills-new3-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-new3"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-new3"
                                                aria-selected="false"
                                            >
                                                New added
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content" id="pills-tabContent">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-featured3"
                                        role="tabpanel"
                                        aria-labelledby="pills-featured3-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img
                                                                src={banner3}
                                                                alt="Trust & Co."
                                                            />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-popular3"
                                        role="tabpanel"
                                        aria-labelledby="pills-popular3-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img src={proimg} alt="Trust & Co." />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-new3"
                                        role="tabpanel"
                                        aria-labelledby="pills-new3-tab"
                                    >
                                        <div className="in-flex">
                                            <div className="offer-box">
                                                <div className="card-inner">
                                                    <div className="box">
                                                        <div className="imgBox">
                                                            <img
                                                                src="assets/images/pro-img-banner-3.jpg"
                                                                alt="Trust & Co."
                                                            />
                                                        </div>
                                                        <div className="icon">
                                                            <a href="#" className="iconBox">
                                                                {" "}
                                                                <span className="material-symbols-outlined">
                                                                    <img src={amazon} alt="" />
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <h3>Bring nature into your home</h3>
                                                    <a href="#" className="btn">
                                                        Shop Now{" "}
                                                        <span>
                                                            <svg
                                                                width={10}
                                                                height={9}
                                                                viewBox="0 0 10 9"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.39708 3.19841L6.33711 0.19511L5.31712 1.15843L7.6971 3.48175H0.613831V4.8984H7.6971L5.31712 7.27838L6.33711 8.2417L9.39708 5.23839C9.66152 4.93618 9.79374 4.59618 9.79374 4.2184C9.79374 3.84063 9.66152 3.50063 9.39708 3.19841Z"
                                                                    fill="#231F20"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product-flex">
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro-card">
                                                    <div className="card-inner">
                                                        <div className="box">
                                                            <div className="off-lable">Hot</div>
                                                            <div className="imgBox">
                                                                <a href="#">
                                                                    <img
                                                                        src={proimg}
                                                                        alt="Trust & Co."
                                                                    />
                                                                </a>
                                                            </div>
                                                            <div className="icon">
                                                                <a href="#" className="iconBox">
                                                                    {" "}
                                                                    <span className="material-symbols-outlined">
                                                                        <img src={buy} alt="" />
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <h3>
                                                            <a href="#">Adidas Sport Rubber sole sneakers</a>
                                                        </h3>
                                                        <div className="inflex">
                                                            <div className="price">
                                                                $39.99
                                                                <span> ₦ 50000</span>
                                                            </div>
                                                            <a href="#" className="btn">
                                                                Buy Now
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-area">
                                <a href="#" className="btn">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Clients */}
                <section>
                    <div className="price-main">
                        <div className="container">
                            <div className="price-flex">
                                <div className="left-side">
                                    <h6>Our Clients</h6>
                                    <h2>
                                        We Ship to 200+ <br /> Countries
                                    </h2>
                                    <p>We bring solutions to make life easier for our customers.</p>
                                    <div className="icon-list">
                                        <div className="icon">
                                            <img src={pricingicon1} alt="pricing-icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={pricingicon2} alt="pricing-icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={pricingicon3} alt="pricing-icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={pricingicon4} alt="pricing-icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={pricingicon5} alt="pricing-icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={pricingicon6} alt="pricing-icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={pricingicon7} alt="pricing-icon" />
                                        </div>
                                        <div className="icon">
                                            <img src={pricingicon8} alt="pricing-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="right-side">
                                    <div className="title">
                                        PRICING <span>shipping Cost Calculator:</span>
                                    </div>
                                    <div className="inner-content">
                                        <p>
                                            choose your country, Enter the weight/dimensions of your shipment
                                            and select pick up/delivery to determine shipping cost
                                        </p>
                                        <div className="img-area">
                                            <img src={pricingimg} alt="pricing-img" />
                                        </div>
                                        <form action="">
                                            <div className="form-area">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                    <label htmlFor="">Lenght</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                    <label htmlFor="">Width</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                    <label htmlFor="">Height</label>
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        id="country_selector"
                                                        type="text"
                                                        className="form-control"
                                                    />
                                                    <label htmlFor="">Country</label>
                                                </div>
                                                <div className="form-group">
                                                    <div className="check-flex">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckChecked"
                                                                defaultChecked={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <label htmlFor="">Pick up/Delivery</label>
                                                </div>
                                                <div className="form-group">
                                                    <div className="check-flex">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckDefault"
                                                            />
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                defaultValue=""
                                                                id="flexCheckChecked"
                                                                defaultChecked={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <label htmlFor="">Lagos/Other States</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                    <label htmlFor="">Customs</label>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control" />
                                                    <label htmlFor="">Cost</label>
                                                </div>
                                            </div>
                                            <div className="btn-area">
                                                <a href="#" className="btn">
                                                    Calculate Cost
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes Us Different? */}
                <section>
                    <div className="make-us">
                        <div className="container">
                            {/* <div class="row"> */}
                            {/* <div class="col-lg-11 m-auto"> */}
                            <div className="in-flex">
                                <div className="left-side">
                                    <img src={makeus} alt="make-us" />
                                </div>
                                <div className="right-side">
                                    <h5>What Makes Us Different?</h5>
                                    <h2>We make spending stress free so you have the perfect control.</h2>
                                    <div className="make-feature">
                                        <div className="m-box">
                                            <div className="icon">
                                                <svg
                                                    width={37}
                                                    height={37}
                                                    viewBox="0 0 37 37"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_510_8833)">
                                                        <path
                                                            d="M18.2059 5.54477C17.9076 5.54477 17.6214 5.42624 17.4104 5.21526C17.1995 5.00428 17.0809 4.71813 17.0809 4.41977V1.48633C17.0809 1.18796 17.1995 0.901811 17.4104 0.690833C17.6214 0.479855 17.9076 0.361328 18.2059 0.361328C18.5043 0.361328 18.7905 0.479855 19.0014 0.690833C19.2124 0.901811 19.3309 1.18796 19.3309 1.48633V4.41977C19.3309 4.71813 19.2124 5.00428 19.0014 5.21526C18.7905 5.42624 18.5043 5.54477 18.2059 5.54477ZM28.0637 9.62852C27.8416 9.62841 27.6244 9.56253 27.4396 9.43917C27.2548 9.31581 27.1107 9.1405 27.0254 8.93534C26.9402 8.73019 26.9175 8.50437 26.9604 8.28638C27.0033 8.06838 27.1098 7.86796 27.2664 7.71039L29.3434 5.63336C29.4469 5.5245 29.571 5.43744 29.7086 5.37732C29.8462 5.3172 29.9945 5.28524 30.1446 5.28332C30.2948 5.2814 30.4438 5.30955 30.5829 5.36613C30.722 5.4227 30.8483 5.50655 30.9545 5.61273C31.0607 5.71891 31.1446 5.84527 31.2011 5.98437C31.2577 6.12347 31.2859 6.27248 31.2839 6.42263C31.282 6.57278 31.2501 6.72102 31.1899 6.85863C31.1298 6.99623 31.0428 7.1204 30.9339 7.22383L28.8569 9.30086C28.6462 9.51058 28.361 9.62838 28.0637 9.62852ZM35.0809 19.4863H32.1475C31.8491 19.4863 31.563 19.3678 31.352 19.1568C31.141 18.9458 31.0225 18.6597 31.0225 18.3613C31.0225 18.063 31.141 17.7768 31.352 17.5658C31.563 17.3549 31.8491 17.2363 32.1475 17.2363H35.0809C35.3793 17.2363 35.6655 17.3549 35.8764 17.5658C36.0874 17.7768 36.2059 18.063 36.2059 18.3613C36.2059 18.6597 36.0874 18.9458 35.8764 19.1568C35.6655 19.3678 35.3793 19.4863 35.0809 19.4863ZM30.138 31.4184C29.8392 31.418 29.5526 31.2998 29.3406 31.0893L27.265 29.0123C27.0629 28.7996 26.9519 28.5164 26.9557 28.223C26.9594 27.9296 27.0776 27.6494 27.2851 27.4419C27.4926 27.2344 27.7728 27.1162 28.0662 27.1125C28.3596 27.1087 28.6428 27.2197 28.8555 27.4218L30.9325 29.4988C31.1433 29.7098 31.2617 29.9958 31.2617 30.2941C31.2617 30.5923 31.1433 30.8783 30.9325 31.0893C30.8285 31.1941 30.7047 31.2771 30.5683 31.3336C30.4319 31.3901 30.2856 31.4189 30.138 31.4184ZM6.2739 31.4184C6.05156 31.4183 5.83423 31.3523 5.64936 31.2287C5.4645 31.1052 5.32038 30.9297 5.23522 30.7243C5.15005 30.5189 5.12766 30.2929 5.17086 30.0748C5.21407 29.8567 5.32093 29.6562 5.47796 29.4988L7.555 27.4218C7.76769 27.2197 8.05091 27.1087 8.34426 27.1125C8.63762 27.1162 8.91791 27.2344 9.12536 27.4419C9.33281 27.6494 9.45101 27.9296 9.45477 28.223C9.45853 28.5164 9.34754 28.7996 9.14546 29.0123L7.06843 31.0893C6.96437 31.194 6.84055 31.277 6.70416 31.3335C6.56777 31.39 6.42153 31.4188 6.2739 31.4184ZM4.26437 19.4863H1.33093C1.03256 19.4863 0.746416 19.3678 0.535437 19.1568C0.324459 18.9458 0.205933 18.6597 0.205933 18.3613C0.205933 18.063 0.324459 17.7768 0.535437 17.5658C0.746416 17.3549 1.03256 17.2363 1.33093 17.2363H4.26437C4.56274 17.2363 4.84889 17.3549 5.05986 17.5658C5.27084 17.7768 5.38937 18.063 5.38937 18.3613C5.38937 18.6597 5.27084 18.9458 5.05986 19.1568C4.84889 19.3678 4.56274 19.4863 4.26437 19.4863ZM8.34812 9.62852C8.04986 9.62912 7.76357 9.51127 7.55218 9.30086L5.47515 7.22383C5.36629 7.1204 5.27923 6.99623 5.21911 6.85863C5.159 6.72102 5.12703 6.57278 5.12511 6.42263C5.12319 6.27248 5.15135 6.12347 5.20792 5.98437C5.2645 5.84527 5.34834 5.71891 5.45452 5.61273C5.5607 5.50655 5.68707 5.4227 5.82616 5.36613C5.96526 5.30955 6.11427 5.2814 6.26442 5.28332C6.41457 5.28524 6.56282 5.3172 6.70042 5.37732C6.83802 5.43744 6.96219 5.5245 7.06562 5.63336L9.14265 7.71039C9.29912 7.86779 9.40553 8.06795 9.44851 8.28569C9.49148 8.50342 9.46909 8.72901 9.38416 8.93405C9.29923 9.13909 9.15554 9.31443 8.97119 9.438C8.78684 9.56158 8.57006 9.62786 8.34812 9.62852Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M22.706 31.8615V33.736C22.7026 34.4313 22.4249 35.0971 21.9333 35.5888C21.4416 36.0804 20.7758 36.3581 20.0805 36.3615H16.33C15.0644 36.3615 13.706 35.401 13.706 33.3015V31.8615H22.706ZM24.8153 10.2052C23.5904 9.2134 22.1586 8.50903 20.6253 8.14396C19.092 7.7789 17.4964 7.76245 15.956 8.09583C11.9805 8.92692 8.75596 12.174 7.93049 16.141C7.50985 18.1022 7.6592 20.1428 8.36089 22.0219C9.06259 23.901 10.2873 25.54 11.8905 26.7455C12.8047 27.4482 13.4163 28.4732 13.6005 29.6115V29.6283C13.6342 29.616 13.67 29.6103 13.706 29.6115H22.706C22.7318 29.6091 22.7577 29.6145 22.7805 29.6269V29.6115C22.99 28.471 23.665 27.4219 24.7 26.6119C25.9369 25.6362 26.9385 24.3948 27.6308 22.9796C28.3231 21.5644 28.6883 20.0117 28.6993 18.4363C28.7104 16.8609 28.3671 15.3032 27.6948 13.8784C27.0225 12.4536 26.0384 11.1983 24.8153 10.2052ZM23.831 19.1152C23.5333 19.113 23.2484 18.9938 23.0379 18.7833C22.8274 18.5728 22.7082 18.2879 22.706 17.9902C22.7067 17.4482 22.6005 16.9113 22.3936 16.4103C22.1866 15.9093 21.8829 15.4541 21.4998 15.0706C21.1167 14.6871 20.6618 14.3829 20.161 14.1754C19.6602 13.968 19.1235 13.8613 18.5814 13.8615C18.2831 13.8615 17.9969 13.7429 17.7859 13.5319C17.575 13.321 17.4564 13.0348 17.4564 12.7365C17.4564 12.4381 17.575 12.1519 17.7859 11.941C17.9969 11.73 18.2831 11.6115 18.5814 11.6115C20.2709 11.6152 21.8901 12.288 23.0848 13.4826C24.2794 14.6773 24.9522 16.2965 24.956 17.986C24.9537 18.2837 24.8345 18.5685 24.624 18.779C24.4135 18.9895 24.1286 19.1088 23.831 19.111V19.1152Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M13.6005 29.6114H13.7059C13.6701 29.609 13.6341 29.6143 13.6005 29.6269V29.6114Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M22.7805 29.6114V29.6268C22.7577 29.6144 22.7318 29.609 22.7059 29.6114H22.7805Z"
                                                            fill="#FDC040"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_510_8833">
                                                            <rect
                                                                width={36}
                                                                height={36}
                                                                fill="white"
                                                                transform="translate(0.205933 0.361328)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="contant">
                                                <div className="title">Creativity</div>
                                                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
                                            </div>
                                        </div>
                                        <div className="m-box">
                                            <div className="icon">
                                                <svg
                                                    width={37}
                                                    height={37}
                                                    viewBox="0 0 37 37"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_510_8840)">
                                                        <path
                                                            d="M8.45642 25.8594C10.9417 25.8594 12.9564 23.8447 12.9564 21.3594C12.9564 18.8741 10.9417 16.8594 8.45642 16.8594C5.97114 16.8594 3.95642 18.8741 3.95642 21.3594C3.95642 23.8447 5.97114 25.8594 8.45642 25.8594Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M12.5809 28.8604H4.33046C3.23643 28.8615 2.18756 29.2968 1.41422 30.0706C0.640882 30.8445 0.206305 31.8937 0.205933 32.9877L0.205933 35.2377C0.205933 35.5361 0.324459 35.8222 0.535437 36.0332C0.746416 36.2442 1.03256 36.3627 1.33093 36.3627H15.5805C15.8788 36.3627 16.165 36.2442 16.376 36.0332C16.5869 35.8222 16.7055 35.5361 16.7055 35.2377V32.9877C16.7051 31.8937 16.2705 30.8445 15.4972 30.0706C14.7238 29.2968 13.675 28.8615 12.5809 28.8604Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M27.9554 25.8594C30.4407 25.8594 32.4554 23.8447 32.4554 21.3594C32.4554 18.8741 30.4407 16.8594 27.9554 16.8594C25.4702 16.8594 23.4554 18.8741 23.4554 21.3594C23.4554 23.8447 25.4702 25.8594 27.9554 25.8594Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M32.0814 28.8604H23.831C22.7369 28.8615 21.688 29.2968 20.9147 30.0706C20.1414 30.8445 19.7068 31.8937 19.7064 32.9877V35.2377C19.7064 35.5361 19.8249 35.8222 20.0359 36.0332C20.2469 36.2442 20.5331 36.3627 20.8314 36.3627H35.081C35.3793 36.3627 35.6655 36.2442 35.8764 36.0332C36.0874 35.8222 36.206 35.5361 36.206 35.2377V32.9877C36.2056 31.8937 35.771 30.8445 34.9977 30.0706C34.2243 29.2968 33.1755 28.8615 32.0814 28.8604Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M21.2659 15.6175V16.6975C21.2637 17.1411 21.0854 17.5656 20.7703 17.8778C20.4552 18.1901 20.029 18.3644 19.5854 18.3625H16.825C16.015 18.3625 15.1375 17.762 15.1375 16.4275V15.6175H21.2659ZM24.9559 7.06751C24.9584 8.06279 24.7372 9.04591 24.3089 9.94428C23.8805 10.8427 23.2558 11.6333 22.4809 12.258C21.8847 12.7217 21.4706 13.3802 21.3109 14.1184H15.1122C14.9903 13.4048 14.5979 12.7656 14.0167 12.3339C13.1968 11.6973 12.5379 10.8769 12.0931 9.93894C11.6483 9.00099 11.43 7.97166 11.4559 6.93391C11.5304 3.36344 14.5159 0.408913 18.1004 0.362507C19.0004 0.342364 19.8951 0.504953 20.7305 0.840442C21.5658 1.17593 22.3244 1.67735 22.9604 2.31438C23.5957 2.93169 24.0998 3.67082 24.4427 4.48753C24.7856 5.30425 24.9601 6.18175 24.9559 7.06751Z"
                                                            fill="#FDC040"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_510_8840">
                                                            <rect
                                                                width={36}
                                                                height={36}
                                                                fill="white"
                                                                transform="translate(0.205933 0.361328)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="contant">
                                                <div className="title">Innovative Thinking</div>
                                                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
                                            </div>
                                        </div>
                                        <div className="m-box">
                                            <div className="icon">
                                                <svg
                                                    width={37}
                                                    height={37}
                                                    viewBox="0 0 37 37"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_510_8848)">
                                                        <path
                                                            d="M31.4071 12.938C30.2259 12.941 29.0862 12.5021 28.2121 11.7075V17.3621H24.3871C24.7356 16.5782 24.9144 15.7294 24.9116 14.8716C24.9093 13.9378 24.6993 13.0163 24.297 12.1736C23.8948 11.3309 23.3102 10.5882 22.5856 9.99923C21.8611 9.41022 21.0147 8.98964 20.1076 8.76792C19.2005 8.5462 18.2555 8.52888 17.341 8.71722C16.4264 8.90556 15.5651 9.29484 14.8195 9.8569C14.0738 10.419 13.4624 11.1398 13.0296 11.9671C12.5967 12.7945 12.3531 13.7077 12.3165 14.6408C12.2799 15.5738 12.4512 16.5033 12.8179 17.3621H8.20259V1.75268C8.20185 1.54143 8.24279 1.33211 8.32308 1.13671C8.40337 0.941308 8.52141 0.763669 8.67046 0.613966C8.81951 0.464263 8.99664 0.345438 9.19168 0.264298C9.38673 0.183158 9.59587 0.141297 9.80712 0.141113L26.6076 0.141113C27.033 0.141486 27.4409 0.310654 27.7417 0.611481C28.0426 0.912308 28.2117 1.32021 28.2121 1.74564V4.56518C28.7918 4.04776 29.4885 3.67896 30.2424 3.49052C30.9962 3.30208 31.7845 3.29964 32.5395 3.48342C33.2945 3.6672 33.9935 4.03169 34.5763 4.54551C35.1592 5.05933 35.6085 5.7071 35.8855 6.43306C36.1625 7.15902 36.259 7.94143 36.1666 8.71293C36.0742 9.48444 35.7957 10.2219 35.3551 10.8619C34.9145 11.502 34.3249 12.0253 33.6372 12.3869C32.9494 12.7486 32.1841 12.9377 31.4071 12.938Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M20.2879 25.6292C20.1532 26.3245 20.1741 27.0409 20.349 27.7271C20.5238 28.4133 20.8484 29.0523 21.2993 29.5983C21.7503 30.1443 22.3165 30.5838 22.9573 30.8851C23.5981 31.1865 24.2977 31.3423 25.0059 31.3414C26.1889 31.3446 27.3303 30.9046 28.2051 30.1081V34.5406C28.204 34.9645 28.0352 35.3707 27.7356 35.6705C27.4361 35.9703 27.03 36.1395 26.6062 36.141H9.80992C9.38583 36.1398 8.97943 35.9709 8.67956 35.671C8.37968 35.3711 8.21072 34.9647 8.20961 34.5406V30.1081C7.63049 30.6285 6.93346 31.0001 6.17866 31.1909C5.42386 31.3817 4.63397 31.3859 3.87716 31.2033C3.12034 31.0207 2.41934 30.6566 1.83464 30.1425C1.24995 29.6285 0.799125 28.9799 0.521079 28.2527C0.243034 27.5255 0.146118 26.7415 0.238696 25.9685C0.331274 25.1955 0.610565 24.4566 1.05247 23.8156C1.49437 23.1747 2.0856 22.6509 2.77515 22.2894C3.4647 21.928 4.23185 21.7397 5.01039 21.741C6.19332 21.7385 7.33443 22.1784 8.20961 22.9742V18.868H15.958C15.0997 18.2978 14.4478 17.4664 14.0987 16.4969C13.7496 15.5273 13.7219 14.4712 14.0197 13.4847C14.3175 12.4982 14.925 11.6338 15.7522 11.0194C16.5795 10.405 17.5826 10.0732 18.613 10.0732C19.6435 10.0732 20.6466 10.405 21.4739 11.0194C22.3011 11.6338 22.9086 12.4982 23.2064 13.4847C23.5042 14.4712 23.4765 15.5273 23.1274 16.4969C22.7783 17.4664 22.1264 18.2978 21.268 18.868H28.2107V22.9742C27.5796 22.4054 26.8088 22.0145 25.977 21.8416C25.1452 21.6686 24.2824 21.7198 23.4769 21.99C22.6714 22.2601 21.9521 22.7394 21.3928 23.3789C20.8334 24.0183 20.4541 24.795 20.2935 25.6292H20.2879Z"
                                                            fill="#FDC040"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_510_8848">
                                                            <rect
                                                                width={36}
                                                                height={36}
                                                                fill="white"
                                                                transform="translate(0.205933 0.141113)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="contant">
                                                <div className="title">Rapid Solutions</div>
                                                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
                                            </div>
                                        </div>
                                        <div className="m-box">
                                            <div className="icon">
                                                <svg
                                                    width={37}
                                                    height={37}
                                                    viewBox="0 0 37 37"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_510_8853)">
                                                        <path
                                                            d="M5.229 13.9554C5.229 10.5137 6.59621 7.21299 9.02984 4.77935C11.4635 2.34572 14.7642 0.978516 18.2059 0.978516C21.6476 0.978516 24.9483 2.34572 27.3819 4.77935C29.8156 7.21299 31.1828 10.5137 31.1828 13.9554V20.6534C31.1828 20.9864 31.0504 21.3058 30.8149 21.5413C30.5794 21.7768 30.26 21.9091 29.927 21.9091C29.5939 21.9091 29.2745 21.7768 29.039 21.5413C28.8035 21.3058 28.6712 20.9864 28.6712 20.6534V13.9554C28.6712 11.1798 27.5686 8.51792 25.606 6.5553C23.6433 4.59267 20.9815 3.49008 18.2059 3.49008C15.4303 3.49008 12.7684 4.59267 10.8058 6.5553C8.84316 8.51792 7.74057 11.1798 7.74057 13.9554V20.6534C7.74057 20.9864 7.60826 21.3058 7.37276 21.5413C7.13725 21.7768 6.81784 21.9091 6.48479 21.9091C6.15173 21.9091 5.83232 21.7768 5.59681 21.5413C5.36131 21.3058 5.229 20.9864 5.229 20.6534V13.9554ZM29.927 22.7459C30.26 22.7459 30.5794 22.8782 30.8149 23.1137C31.0504 23.3492 31.1828 23.6686 31.1828 24.0016V29.0248C31.1828 30.2462 30.6975 31.4176 29.8338 32.2813C28.9701 33.145 27.7987 33.6302 26.5773 33.6302H21.5542C21.2282 33.6193 20.9192 33.4822 20.6925 33.2477C20.4658 33.0133 20.339 32.6999 20.339 32.3738C20.339 32.0476 20.4658 31.7342 20.6925 31.4998C20.9192 31.2653 21.2282 31.1282 21.5542 31.1173H26.5773C26.8522 31.1175 27.1244 31.0635 27.3785 30.9584C27.6325 30.8533 27.8634 30.6992 28.0578 30.5049C28.2523 30.3106 28.4065 30.0798 28.5118 29.8259C28.617 29.5719 28.6712 29.2997 28.6712 29.0248V24.0016C28.6712 23.8367 28.7037 23.6734 28.7668 23.5211C28.8299 23.3687 28.9224 23.2303 29.039 23.1137C29.1556 22.9971 29.294 22.9046 29.4464 22.8414C29.5988 22.7783 29.7621 22.7459 29.927 22.7459Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M15.2753 32.3745C15.2753 31.5972 15.584 30.8518 16.1336 30.3022C16.6832 29.7526 17.4286 29.4438 18.2059 29.4438H19.8807C20.6467 29.4606 21.3756 29.7767 21.9114 30.3243C22.4472 30.872 22.7472 31.6076 22.7472 32.3738C22.7472 33.1399 22.4472 33.8756 21.9114 34.4232C21.3756 34.9709 20.6467 35.2869 19.8807 35.3037H18.2059C17.4289 35.3037 16.6837 34.9951 16.1341 34.4458C15.5846 33.8965 15.2756 33.1515 15.2753 32.3745ZM18.2059 31.9526C18.1464 31.9449 18.0859 31.9499 18.0286 31.9674C17.9712 31.9849 17.9182 32.0144 17.8731 32.054C17.828 32.0936 17.7919 32.1424 17.7672 32.197C17.7425 32.2517 17.7297 32.311 17.7297 32.371C17.7297 32.4309 17.7425 32.4902 17.7672 32.5449C17.7919 32.5996 17.828 32.6483 17.8731 32.6879C17.9182 32.7275 17.9712 32.757 18.0286 32.7745C18.0859 32.792 18.1464 32.797 18.2059 32.7893H19.8807C19.9824 32.7761 20.0757 32.7264 20.1433 32.6494C20.211 32.5724 20.2483 32.4734 20.2483 32.371C20.2483 32.2685 20.211 32.1695 20.1433 32.0925C20.0757 32.0155 19.9824 31.9658 19.8807 31.9526H18.2059Z"
                                                            fill="#FDC040"
                                                        />
                                                        <path
                                                            d="M4.81 16.0479C4.20526 16.0479 3.60645 16.167 3.04777 16.3984C2.48909 16.6299 1.98148 16.9692 1.55393 17.3968C1.12639 17.8245 0.787286 18.3322 0.555993 18.891C0.324699 19.4497 0.205748 20.0486 0.205933 20.6533V24.0016C0.205933 25.2228 0.690957 26.394 1.55435 27.2577C2.41774 28.1213 3.58879 28.6067 4.81 28.6071H6.48484C6.64987 28.6071 6.81328 28.5745 6.96573 28.5113C7.11818 28.4481 7.25668 28.3555 7.37331 28.2388C7.48994 28.122 7.58241 27.9834 7.64543 27.8309C7.70846 27.6784 7.74081 27.5149 7.74062 27.3499V17.3036C7.74062 17.1387 7.70814 16.9754 7.64503 16.8231C7.58192 16.6707 7.48942 16.5323 7.37281 16.4157C7.2562 16.2991 7.11776 16.2066 6.96541 16.1434C6.81305 16.0803 6.64975 16.0479 6.48484 16.0479H4.81ZM31.6019 16.0479C32.2066 16.0479 32.8054 16.167 33.3641 16.3984C33.9228 16.6299 34.4304 16.9692 34.8579 17.3968C35.2855 17.8245 35.6246 18.3322 35.8559 18.891C36.0872 19.4497 36.2061 20.0486 36.2059 20.6533V24.0016C36.2059 25.2228 35.7209 26.394 34.8575 27.2577C33.9941 28.1213 32.8231 28.6067 31.6019 28.6071H29.927C29.762 28.6071 29.5986 28.5745 29.4461 28.5113C29.2937 28.4481 29.1552 28.3555 29.0386 28.2388C28.9219 28.122 28.8295 27.9834 28.7664 27.8309C28.7034 27.6784 28.6711 27.5149 28.6712 27.3499V17.3036C28.6712 17.1387 28.7037 16.9754 28.7668 16.8231C28.8299 16.6707 28.9224 16.5323 29.0391 16.4157C29.1557 16.2991 29.2941 16.2066 29.4465 16.1434C29.5988 16.0803 29.7621 16.0479 29.927 16.0479H31.6019Z"
                                                            fill="#FDC040"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_510_8853">
                                                            <rect
                                                                width={36}
                                                                height={36}
                                                                fill="white"
                                                                transform="translate(0.205933 0.141113)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="contant">
                                                <div className="title">Top-Notch Support</div>
                                                <p>Curabitur blandit lacus porttitor ridiculus mus.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </section>

                {/* Join Our Community */}
                <section>
                    <div className="counter-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-lg-7 m-auto">
                                    <div className="count-content">
                                        <h5>Join Our Community</h5>
                                        <h2>
                                            We are trusted by over 5000+ customers Join them now and shop
                                            &amp; save.
                                        </h2>
                                        <div className="item-grid">
                                            <div className="counter-item">
                                                <span className="counter" data-count={150}>
                                                    0{" "}
                                                </span>
                                                +<div className="info">Completed Projects</div>
                                            </div>
                                            <div className="counter-item">
                                                <span className="counter" data-count={150}>
                                                    0{" "}
                                                </span>
                                                k+
                                                <div className="info">Happy Customers</div>
                                            </div>
                                            <div className="counter-item">
                                                <span className="counter" data-count={150}>
                                                    0{" "}
                                                </span>
                                                x<div className="info">Revenue Growth</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* bottom-img */}
                <section>
                    <div className="bottom-img">
                        <div className="container">
                            <div className="img-main">
                                <img src={homebottom} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Homepage
