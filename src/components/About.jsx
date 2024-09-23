import React, { useEffect } from 'react'
import Headerwhite from './Headerwhite'
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/select2.min.css';
import '../assets/build/css/countrySelect.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';
import abouttop from '../assets/images/about_top_bg.png';
import commanbg from '../assets/images/comman-bg.jpg';
import welcomimg from '../assets/images/welcom-img.png';
import provide1bg from '../assets/images/provide-1.svg';
import provide2bg from '../assets/images/provide-2.svg';
import provide3bg from '../assets/images/provide-3.svg';
import provide4bg from '../assets/images/provide-4.svg';
import provide5bg from '../assets/images/provide-5.svg';
import provide6bg from '../assets/images/provide-6.svg';
import performance1 from '../assets/images/performance-1.jpg';
import performance2 from '../assets/images/performance-2.jpg';
import roundtitle from '../assets/images/round-title.jpg';
import member from '../assets/images/member.jpg';
import newsletter from '../assets/images/newsletter.png';
import Footer from './Footer';


const About = () => {
    useEffect(() => {
        const scripts = [
            'src/assets/js/jquery-3.6.0.min.js',
            'src/assets/js/popper.min.js',
            'src/assets/js/bootstrap.min.js',
            'src/assets/js/owl.carousel.min.js',
            'src/assets/js/select2.min.js',
            'src/assets/build/js/countrySelect.js',
            'src/assets/js/custom.js'
        ];

        const loadScript = (src, callback) => {
            const script = document.createElement("script");
            script.src = src;
            script.async = false; // Load scripts in order
            script.onload = callback;
            script.onerror = () => console.error(`Error loading script: ${src}`); // Error handling
            document.body.appendChild(script);
        };

        const loadScriptsSequentially = (index) => {
            if (index < scripts.length) {
                loadScript(scripts[index], () => loadScriptsSequentially(index + 1));
            } else {
                // All scripts loaded, initialize select2 and other functionalities
                if (typeof $ !== 'undefined' && $.fn.select2) {
                    $(".select-active").select2();
                    $(".Billing-address").select2();
                } else {
                    console.error('Select2 is not available.');
                }
            }
        };

        // Start loading scripts
        loadScriptsSequentially(0);

        // Cleanup function to remove scripts
        return () => {
            scripts.forEach(src => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);



    return (
        <>
            <Headerwhite />
            <>
                <div className="main">
                    <section>
                        <div className="inner-page-header">
                            <div className="inner-area">
                                <img
                                    className="page-banner"
                                    src={abouttop}
                                    alt=""
                                />
                                <img className="comman-bg" src={commanbg} alt="" />
                                <div className="container">
                                    <div className="content-area">
                                        <h1>
                                            Shop Tax-from US Stores, <br />
                                            Pay with <span>Crypto</span>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* welcome-area */}
                    <section>
                        <div className="welcome-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-10 col-lg-12 m-auto">
                                        <div className="in-flex">
                                            <div className="left-img">
                                                <img src={welcomimg} alt="" />
                                            </div>
                                            <div className="right-content">
                                                <h2>Welcome to FlymyMall</h2>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                    Duis aute irure dolor in reprehenderit in voluptate id est
                                                    laborum.
                                                </p>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna
                                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* provider */}
                    <section>
                        <div className="provider">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-10 col-lg-12 m-auto">
                                        <h2>What We Provide?</h2>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="provide-card">
                                                    <div className="icon">
                                                        <img src={provide1bg} alt="provide" />
                                                    </div>
                                                    <h4>Best Prices &amp; Offers</h4>
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form
                                                    </p>
                                                    <a href="#">Read more</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="provide-card">
                                                    <div className="icon">
                                                        <img src={provide2bg} alt="provide" />
                                                    </div>
                                                    <h4>Wide Assortment</h4>
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form
                                                    </p>
                                                    <a href="#">Read more</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="provide-card">
                                                    <div className="icon">
                                                        <img src={provide3bg} alt="provide" />
                                                    </div>
                                                    <h4>Free Delivery</h4>
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form
                                                    </p>
                                                    <a href="#">Read more</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="provide-card">
                                                    <div className="icon">
                                                        <img src={provide4bg} alt="provide" />
                                                    </div>
                                                    <h4>Easy Returns</h4>
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form
                                                    </p>
                                                    <a href="#">Read more</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="provide-card">
                                                    <div className="icon">
                                                        <img src={provide5bg} alt="provide" />
                                                    </div>
                                                    <h4>100% Satisfaction-</h4>
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form
                                                    </p>
                                                    <a href="#">Read more</a>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="provide-card">
                                                    <div className="icon">
                                                        <img src={provide6bg} alt="provide" />
                                                    </div>
                                                    <h4>Great Daily Deals</h4>
                                                    <p>
                                                        There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in
                                                        some form
                                                    </p>
                                                    <a href="#">Read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* performance */}
                    <section>
                        <div className="perfomance">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-10 col-lg-12 m-auto">
                                        <div className="in-flex">
                                            <div className="left">
                                                <img
                                                    className="small"
                                                    src={performance1}
                                                    alt=""
                                                />
                                                <img
                                                    className="large"
                                                    src={performance2}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="right">
                                                <h4>Our performance</h4>
                                                <h2>Your Partner for e- commerce grocery solution</h2>
                                                <p>
                                                    Ed ut perspiciatis unde omnis iste natus error sit
                                                    voluptatem accusantium doloremque laudantium, totam rem
                                                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                                                    quasi architecto
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mission-flex">
                                            <div className="box">
                                                <h3>Who we are</h3>
                                                <p>
                                                    Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                                                    mattis enim ut tellus eros donec
                                                </p>
                                            </div>
                                            <div className="box">
                                                <h3>Our History</h3>
                                                <p>
                                                    Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                                                    mattis enim ut tellus eros donec
                                                </p>
                                            </div>
                                            <div className="box">
                                                <h3>Our Mission</h3>
                                                <p>
                                                    Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                                                    mattis enim ut tellus eros donec
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="about-counter"
                                    style={{
                                        background: `url(${roundtitle}) center center no-repeat`,
                                        backgroundSize: "cover"
                                    }}
                                >
                                    <div className="item-grid">
                                        <div className="counter-item">
                                            <span className="counter" data-count={10}>
                                                0{" "}
                                            </span>
                                            <div className="info">Glorious years</div>
                                        </div>
                                        <div className="counter-item">
                                            <span className="counter" data-count={200}>
                                                0{" "}
                                            </span>
                                            k+
                                            <div className="info">Happy clients</div>
                                        </div>
                                        <div className="counter-item">
                                            <span className="counter" data-count={1000}>
                                                0{" "}
                                            </span>
                                            <div className="info">Projects complete</div>
                                        </div>
                                        <div className="counter-item">
                                            <span className="counter" data-count={5}>
                                                0{" "}
                                            </span>
                                            <div className="info">Team advisor</div>
                                        </div>
                                        <div className="counter-item">
                                            <span className="counter" data-count={1}>
                                                0{" "}
                                            </span>
                                            M<div className="info">Products Sale</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Our Team */}
                    <section>
                        <div className="team">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-10 col-lg-12 m-auto">
                                        <h2 className="title">Our Team</h2>
                                        <div className="inner-area">
                                            <div className="left-info">
                                                <h4>Our Team</h4>
                                                <h2>Meet Our Expert Team</h2>
                                                <p>
                                                    Proin ullamcorper pretium orci. Donec necscele risque leo.
                                                    Nam massa dolor imperdiet neccon sequata congue idsem.
                                                    Maecenas malesuada faucibus finibus.
                                                </p>
                                                <a href="#" className="btn">
                                                    View All Members
                                                </a>
                                            </div>
                                            <div className="right-info">
                                                <div className="team-flex">
                                                    <div className="team-card">
                                                        <img src={member} alt="team" />
                                                        <div className="content">
                                                            <h4>
                                                                Adrian Omeh <span>CEO &amp; Founder</span>
                                                            </h4>
                                                            <ul className="social list-unstyled">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-facebook-f" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-twitter" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-instagram" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-youtube" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="team-card">
                                                        <img src={member} alt="team" />
                                                        <div className="content">
                                                            <h4>
                                                                Adrian Omeh <span>CEO &amp; Founder</span>
                                                            </h4>
                                                            <ul className="social list-unstyled">
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-facebook-f" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-twitter" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-instagram" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <i className="fab fa-youtube" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
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
            </>
            <Footer />
        </>
    )
}

export default About
