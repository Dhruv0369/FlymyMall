import React, { useEffect } from 'react'
import Header from './Header';
import roundedtitle from '../assets/images/round-title.jpg';
import cat1 from '../assets/images/blog-cat/cat-1.svg';
import blog1 from '../assets/images/blog-img/blog-1.jpg';
import blog2 from '../assets/images/blog-img/blog-2.jpg';
import blog3 from '../assets/images/blog-img/blog-3.jpg';
import newsletter from '../assets/images/newsletter.png';
import Footer from './Footer';



const Blog = () => {
    useEffect(() => {
        const scripts = [
            'src/assets/js/jquery-3.6.0.min.js',
            'src/assets/js/popper.min.js',
            'src/assets/js/bootstrap.min.js',
            'src/assets/js/select2.min.js',
            'src/assets/js/owl.carousel.min.js', // Ensure this is included
            'src/assets/build/js/countrySelect.js',
            'src/assets/js/custom.js'
        ];
    
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Script load error: ${src}`));
                document.body.appendChild(script);
            });
        };
    
        const loadAllScripts = async () => {
            for (let src of scripts) {
                try {
                    await loadScript(src);
                } catch (error) {
                    console.error(error);
                }
            }
    
            $(document).ready(() => {
                if (typeof $.fn.owlCarousel === 'function') {
                    $('.your-carousel-class').owlCarousel({
                        items: 1,
                        loop: true,
                        autoplay: true
                    });
                } else {
                    console.error('owlCarousel is not a function');
                }
            });
        };
    
        loadAllScripts();
    
        return () => {
            scripts.forEach((src) => {
                const script = document.querySelector(`script[src="${src}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
    
    
    return (
        <>
            <Header />
            <div className="main">
                <section>
                    <div className="container">
                        <div className="inner-page-header round">
                            <div className="inner-area">
                                <img src={roundedtitle} alt="logo" />
                                <div className="content-area">
                                    <h1>Blog &amp; News</h1>
                                    <div className="breadcrumb-section">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="index.html">
                                                        <svg
                                                            width={15}
                                                            height={15}
                                                            viewBox="0 0 15 15"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <g clipPath="url(#clip0_226_6816)">
                                                                <path
                                                                    d="M8.20935 0.966666C7.99157 0.78 7.72713 0.686666 7.41602 0.686666C7.1049 0.686666 6.84046 0.78 6.62268 0.966666L0.416016 6.56667V12.6333C0.416016 13.1622 0.594905 13.6056 0.952682 13.9633C1.31046 14.3211 1.75379 14.5 2.28268 14.5H12.5493C13.0782 14.5 13.5216 14.3211 13.8793 13.9633C14.2371 13.6056 14.416 13.1622 14.416 12.6333V6.56667L8.20935 0.966666ZM9.18935 13.3333H5.68935V10.3933C5.68935 9.92667 5.85268 9.52222 6.17935 9.18C6.50602 8.83778 6.91824 8.66667 7.41602 8.66667C7.91379 8.66667 8.33379 8.83778 8.67602 9.18C9.01824 9.52222 9.18935 9.92667 9.18935 10.3933V13.3333ZM13.2493 12.6333C13.2493 12.8511 13.1793 13.0222 13.0393 13.1467C12.8993 13.2711 12.736 13.3333 12.5493 13.3333H10.356V10.3933C10.3249 9.61556 10.0293 8.93889 9.46935 8.36333C8.90935 7.78778 8.2249 7.5 7.41602 7.5C6.60713 7.5 5.92268 7.78778 5.36268 8.36333C4.80268 8.93889 4.52268 9.63111 4.52268 10.44V13.3333H2.28268C2.09602 13.3333 1.93268 13.2711 1.79268 13.1467C1.65268 13.0222 1.58268 12.8511 1.58268 12.6333V7.08L7.41602 1.85333L13.2493 7.08V12.6333Z"
                                                                    fill="#FFBE2E"
                                                                />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_226_6816">
                                                                    <rect
                                                                        width={14}
                                                                        height={14}
                                                                        fill="white"
                                                                        transform="matrix(1 0 0 -1 0.416016 14.5)"
                                                                    />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        Home
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item active" aria-current="page">
                                                    Blog &amp; News
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="blog-main">
                        <div className="container">
                            <div className="fillter-area">
                                <h2>
                                    <img src={cat1} alt="cat-1" /> Recips
                                    Articles
                                </h2>
                                <div className="short-filter">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className="sort-by">
                                                <span>
                                                    <svg
                                                        width={14}
                                                        height={14}
                                                        viewBox="0 0 14 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_229_7243)">
                                                            <path
                                                                d="M6.44 6.39333H0V1.72667C0 1.26 0.171111 0.855556 0.513333 0.513333C0.855556 0.171111 1.27556 0 1.77333 0H6.44V6.39333ZM1.16667 5.22667H5.27333V1.16667H1.77333C1.58667 1.16667 1.43889 1.22111 1.33 1.33C1.22111 1.43889 1.16667 1.57111 1.16667 1.72667V5.22667ZM14 6.39333H7.60667V0H12.2733C12.74 0 13.1444 0.171111 13.4867 0.513333C13.8289 0.855556 14 1.27556 14 1.77333V6.39333ZM8.77333 5.22667H12.8333V1.72667C12.8333 1.57111 12.7789 1.43889 12.67 1.33C12.5611 1.22111 12.4289 1.16667 12.2733 1.16667H8.77333V5.22667ZM6.44 14H1.77333C1.27556 14 0.855556 13.8289 0.513333 13.4867C0.171111 13.1444 0 12.74 0 12.2733V7.56H6.44V14ZM1.16667 8.72667V12.2267C1.16667 12.4133 1.22111 12.5611 1.33 12.67C1.43889 12.7789 1.58667 12.8333 1.77333 12.8333H5.27333V8.72667H1.16667ZM12.2733 14H7.60667V7.56H14V12.2267C14 12.7244 13.8289 13.1444 13.4867 13.4867C13.1444 13.8289 12.7244 14 12.2267 14H12.2733ZM8.77333 12.8333H12.2733C12.4289 12.8333 12.5611 12.7789 12.67 12.67C12.7789 12.5611 12.8333 12.4133 12.8333 12.2267V8.72667H8.77333V12.8333Z"
                                                                fill="#231F20"
                                                                fillOpacity="0.34"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_229_7243">
                                                                <rect
                                                                    width={14}
                                                                    height={14}
                                                                    fill="white"
                                                                    transform="matrix(1 0 0 -1 0 14)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                {" "}Show:
                                            </div>
                                            <div className="dropdown-wrap">
                                                <span>50</span>
                                                <i className="fas fa-angle-down" />
                                            </div>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    50
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item active" href="#">
                                                    100
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    200
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    300
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    400
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    500
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <div className="sort-by">
                                                <span>
                                                    <svg
                                                        width={15}
                                                        height={14}
                                                        viewBox="0 0 15 14"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g clipPath="url(#clip0_226_6876)">
                                                            <path
                                                                d="M0.800781 1.72667V6.39333H7.24078V0H2.57411C2.07634 0 1.65634 0.171111 1.31411 0.513333C0.971892 0.855556 0.800781 1.27556 0.800781 1.77333V1.72667ZM6.07411 5.22667H1.96745V1.72667C1.96745 1.57111 2.02189 1.43889 2.13078 1.33C2.23967 1.22111 2.37189 1.16667 2.52745 1.16667H6.07411V5.22667ZM0.800781 12.2267C0.800781 12.7244 0.971892 13.1444 1.31411 13.4867C1.65634 13.8289 2.06078 14 2.52745 14H7.24078V7.56H0.800781V12.2267ZM1.96745 8.72667H6.07411V12.8333H2.57411C2.38745 12.8333 2.23967 12.7789 2.13078 12.67C2.02189 12.5611 1.96745 12.4133 1.96745 12.2267V8.72667ZM12.4674 12.5067V1.49333L13.9608 3.03333L14.8008 2.19333L13.1208 0.513333C12.7786 0.171111 12.3663 0 11.8841 0C11.4019 0 10.9897 0.171111 10.6474 0.513333L8.96745 2.19333L9.80745 3.03333L11.3008 1.49333V12.5067L9.80745 10.9667L8.96745 11.8067L10.6474 13.4867C10.9897 13.8289 11.4019 14 11.8841 14C12.3663 14 12.7786 13.8289 13.1208 13.4867L14.8008 11.8067L13.9608 10.9667L12.4674 12.5067Z"
                                                                fill="#231F20"
                                                                fillOpacity="0.34"
                                                            />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_226_6876">
                                                                <rect
                                                                    width={14}
                                                                    height={14}
                                                                    fill="white"
                                                                    transform="matrix(1 0 0 -1 0.800781 14)"
                                                                />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                {" "}Short:
                                            </div>
                                            <div className="dropdown-wrap">
                                                <span>Featured </span>
                                                <i className="fas fa-angle-down" />
                                            </div>
                                        </button>
                                        <ul
                                            className="dropdown-menu"
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Featured
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item active" href="#">
                                                    Featured
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Featured
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Featured
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Featured
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Featured
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="search-form">
                                        <form action="#">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search…"
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-list">
                                <div className="row">
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog1} alt="blog" />
                                                {/* <div > */}
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                            {/* </div> */}
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog2} alt="" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog3} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="fas fa-link" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog1} alt="blog" />
                                                {/* <div > */}
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                            {/* </div> */}
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog2} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog3} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="fas fa-link" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog1} alt="blog" />
                                                {/* <div > */}
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                            {/* </div> */}
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog2} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog3} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="fas fa-link" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog1} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog2} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog3} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="fas fa-link" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog1} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="fas fa-play" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog2} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="far fa-heart" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="col-xl-3 col-lg-6 col-md-6 text-center">
                                        <a href="#"></a>
                                        <div className="post-img">
                                            <a href="#">
                                                <img src={blog3} alt="blog" />
                                            </a>
                                            <a href="#" className="entry-icon">
                                                <i className="fas fa-link" />
                                            </a>
                                        </div>
                                        <div className="content">
                                            <div className="blog-cat">Side Dish</div>
                                            <div className="blog-title">
                                                <a href="#">The Intermediate Guide to Healthy Food</a>
                                            </div>
                                            <div className="blog-info">
                                                <span>25 April 2024</span>
                                                <span>126k Views</span>
                                                <span>4 mins read</span>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">
                                                    <i className="fas fa-arrow-left" />
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link dot" href="#">
                                                ...
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                6
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">
                                                    <i className="fas fa-arrow-right" />
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
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

export default Blog
