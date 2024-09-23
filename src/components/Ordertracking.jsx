import React from 'react'
import Headerwhite from './Headerwhite'
import newsletter from '../assets/images/newsletter.png';
import topbanner from '../assets/images/inner-top-banner.jpg';
import Footer from './Footer';


const Ordertracking = () => {
    return (
        <>
            <Headerwhite />
            <div className="main">
                <section>
                    <div className="inner-page-header">
                        <div className="inner-area">
                            <img
                                className="comman-banner"
                                src={topbanner}
                                alt="comman-banner"
                            />
                            <div className="container">
                                {/* <div class="content-area">
                      <h1>Shop Tax-from US Stores <br>Pay with <span>Crypto</span></h1>
                  </div> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* traking-main */}
                <section>
                    <div className="traking-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-9 col-lg-9 m-auto">
                                    <div className="wrapper">
                                        <div className="form-area">
                                            <form action="">
                                                <label htmlFor="">Tracking Number</label>
                                                <div className="form-flex">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="TYTR2343676"
                                                    />
                                                    <a href="#" className="btn">
                                                        TRACK
                                                    </a>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="progress-area">
                                            <ul className="steps">
                                                <li className="is-active is-done">
                                                    <div className="left">
                                                        <div className="info">
                                                            Mon, Jan. 6, 2024
                                                            <span>10:04 pm.</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress-line" />
                                                    <div className="right">
                                                        <div className="info">
                                                            ITEM ARRIVED AT OUR WAREHOUSE
                                                            <span>
                                                                Your order has been delivered at our warehouse.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="left">
                                                        <div className="info">
                                                            Mon, Jan. 6, 2024
                                                            <span>10:04 pm.</span>
                                                        </div>
                                                    </div>
                                                    <div className="progress-line" />
                                                    <div className="right">
                                                        <div className="info">
                                                            ITEM ARRIVED AT OUR WAREHOUSE
                                                            <span>
                                                                Your order has been delivered at our warehouse.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="left">
                                                        <div className="info"></div>
                                                    </div>
                                                    <div className="progress-line" />
                                                    <div className="right">
                                                        <div className="info">
                                                            ITEM ARRIVED AT OUR WAREHOUSE
                                                            <span>
                                                                Your order has been delivered at our warehouse.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="left">
                                                        <div className="info"></div>
                                                    </div>
                                                    <div className="progress-line" />
                                                    <div className="right">
                                                        <div className="info">
                                                            ITEM ARRIVED AT OUR WAREHOUSE
                                                            <span>
                                                                Your order has been delivered at our warehouse.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="left">
                                                        <div className="info"></div>
                                                    </div>
                                                    <div className="progress-line" />
                                                    <div className="right">
                                                        <div className="info">
                                                            ITEM ARRIVED AT OUR WAREHOUSE
                                                            <span>
                                                                Your order has been delivered at our warehouse.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="left">
                                                        <div className="info"></div>
                                                    </div>
                                                    <div className="progress-line" />
                                                    <div className="right">
                                                        <div className="info">
                                                            ITEM ARRIVED AT OUR WAREHOUSE
                                                            <span>
                                                                Your order has been delivered at our warehouse.{" "}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* newsletter */}
                <section>
                    <div className="newsletter">
                        <div className="container">
                            <div className="newsletter-inner">
                                <div className="newsletter-content">
                                    <h2>
                                        Stay home &amp; get your daily <br /> needs from our shop{" "}
                                    </h2>
                                    <p>
                                        Start You'r Daily Shopping with <span> Nest Mart </span>
                                    </p>
                                    <form action="" className="form-subcriber d-flex">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your emaill address"
                                        />
                                        <a href="#" className="btn">
                                            Subscribe
                                        </a>
                                    </form>
                                </div>
                                <img src={newsletter} alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Ordertracking
