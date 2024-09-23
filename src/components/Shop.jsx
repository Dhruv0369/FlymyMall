import React, { useEffect } from 'react'
import Headerwhite from './Headerwhite'
import topbanner from '../assets/images/inner-top-banner.jpg';
import proimg from '../assets/images/pro-img.jpg';
import buy from '../assets/images/buy.svg';
import newsletter from '../assets/images/newsletter.png';
import Footer from './Footer';

const Shop = () => {
    useEffect(() => {
        // Load scripts
        const scripts = [
            'src/assets/js/jquery-3.6.0.min.js',
            'src/assets/js/popper.min.js',
            'src/assets/js/bootstrap.min.js',
            'src/assets/js/owl.carousel.min.js',
            'src/assets/js/select2.min.js',
            'src/assets/build/js/countrySelect.js',
            'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js',
            'src/assets/js/custom.js'
        ];

        const loadScript = (scriptUrl) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = scriptUrl;
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`${scriptUrl} failed to load`));
                document.body.appendChild(script);
            });
        };

        const loadAllScripts = async () => {
            for (const scriptUrl of scripts) {
                try {
                    await loadScript(scriptUrl);
                } catch (error) {
                    console.error(error);
                }
            }

            // Initialize the range slider
            $(document).ready(() => {
                const initializeSlider = () => {
                    if (window.$) {
                        window.$(".js-range-slider").ionRangeSlider({
                            skin: "big",
                            min: 0,
                            max: 1000,
                            from: 500,
                            to: 1000,
                            type: "double",
                            drag_interval: true,
                            min_interval: null,
                            max_interval: null,
                            prefix: "$"
                        });
                    }
                };

                initializeSlider();
            });

        };

        loadAllScripts();

        // Cleanup scripts on component unmount
        return () => {
            scripts.forEach((scriptUrl) => {
                const script = document.querySelector(`script[src="${scriptUrl}"]`);
                if (script) {
                    document.body.removeChild(script);
                }
            });
        };
    }, []);
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
                                <div className="content-area">
                                    <h1>
                                        Shop Tax-from US Stores <br />
                                        Pay with <span>Crypto</span>
                                    </h1>
                                    <div className="search-area">
                                        <form action="#">
                                            <select className="select-active">
                                                <option>Amazon</option>
                                                <option>flipcart</option>
                                            </select>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Paste an item link"
                                            />
                                            <a href="#" className="btn">
                                                Search
                                            </a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* shop-main */}
                <section>
                    <div className="shop-main">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1-5">
                                    <div className="widget-area">
                                        <div className="sidebar-widget price" id="price-filter">
                                            <h5>Fill by price</h5>
                                            <div className="close-filter">
                                                <svg
                                                    width={32}
                                                    height={32}
                                                    viewBox="0 0 32 32"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13 13L19 19M19 13L13 19M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                                                        stroke="#231F20"
                                                        strokeOpacity="0.56"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="price-filter">
                                                <input
                                                    type="text"
                                                    className="js-range-slider"
                                                    name="my_range"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="list-group">
                                                <label htmlFor="">Color</label>
                                                <div className="checkbox">
                                                    <input
                                                        id="Remember"
                                                        className="checkbox-custom"
                                                        name="Remember"
                                                        type="checkbox"
                                                        defaultChecked={true}
                                                    />
                                                    <label htmlFor="Remember" className="checkbox-custom-label">
                                                        Red (56)
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <input
                                                        id="Remember"
                                                        className="checkbox-custom"
                                                        name="Remember"
                                                        type="checkbox"
                                                    />
                                                    <label htmlFor="Remember" className="checkbox-custom-label">
                                                        Green (78)
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <input
                                                        id="Remember"
                                                        className="checkbox-custom"
                                                        name="Remember"
                                                        type="checkbox"
                                                    />
                                                    <label htmlFor="Remember" className="checkbox-custom-label">
                                                        Blue (54)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="list-group">
                                                <label htmlFor="">Item Condition</label>
                                                <div className="checkbox">
                                                    <input
                                                        id="Remember"
                                                        className="checkbox-custom"
                                                        name="Remember"
                                                        type="checkbox"
                                                        defaultChecked={true}
                                                    />
                                                    <label htmlFor="Remember" className="checkbox-custom-label">
                                                        New (1506)
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <input
                                                        id="Remember"
                                                        className="checkbox-custom"
                                                        name="Remember"
                                                        type="checkbox"
                                                    />
                                                    <label htmlFor="Remember" className="checkbox-custom-label">
                                                        Refurbished (27)
                                                    </label>
                                                </div>
                                                <div className="checkbox">
                                                    <input
                                                        id="Remember"
                                                        className="checkbox-custom"
                                                        name="Remember"
                                                        type="checkbox"
                                                    />
                                                    <label htmlFor="Remember" className="checkbox-custom-label">
                                                        Used (45)
                                                    </label>
                                                </div>
                                            </div>
                                            <a
                                                href="#"
                                                className="btn filter d-inline-flex align-items-center gap-2"
                                            >
                                                <svg
                                                    width={13}
                                                    height={13}
                                                    viewBox="0 0 13 13"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clipPath="url(#clip0_1_3800)">
                                                        <path
                                                            d="M7 12.5L4 10.26V7.7L0 3.18V1.98C0 1.58 0.14 1.23333 0.42 0.940001C0.7 0.646667 1.05333 0.5 1.48 0.5H9.48C9.90667 0.5 10.2667 0.646667 10.56 0.940001C10.8533 1.23333 11 1.59333 11 2.02V3.18L7 7.7V12.5ZM5 9.74L6 10.5V7.3L10 2.82V1.98C10 1.84667 9.94667 1.73333 9.84 1.64C9.73333 1.54667 9.61333 1.5 9.48 1.5H1.48C1.34667 1.5 1.23333 1.54667 1.14 1.64C1.04667 1.73333 1 1.84667 1 1.98V2.82L5 7.3V9.74Z"
                                                            fill="#231F20"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_3800">
                                                            <rect
                                                                width="12.5"
                                                                height={12}
                                                                fill="white"
                                                                transform="matrix(1 0 0 -1 0 12.5)"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>{" "}
                                                Fillter
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4-5">
                                    <div className="fillter-area price">
                                        <div className="no-of-pro">
                                            We found <span>29</span> items for you!
                                        </div>
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
                                                        {' '}Show:
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
                                                        {' '}Short:
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
                                            <div className="filter-btn">
                                                <svg
                                                    width={30}
                                                    height={30}
                                                    viewBox="0 0 30 30"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13.5 9L23.25 9M13.5 9C13.5 9.82843 12.8284 10.5 12 10.5C11.1716 10.5 10.5 9.82843 10.5 9M13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9M6.75 9H10.5M13.5 21H23.25M13.5 21C13.5 21.8284 12.8284 22.5 12 22.5C11.1716 22.5 10.5 21.8284 10.5 21M13.5 21C13.5 20.1716 12.8284 19.5 12 19.5C11.1716 19.5 10.5 20.1716 10.5 21M6.75 21L10.5 21M19.5 15L23.25 15M19.5 15C19.5 15.8284 18.8284 16.5 18 16.5C17.1716 16.5 16.5 15.8284 16.5 15M19.5 15C19.5 14.1716 18.8284 13.5 18 13.5C17.1716 13.5 16.5 14.1716 16.5 15M6.75 15H16.5"
                                                        stroke="#231F20"
                                                        strokeOpacity="0.24"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-section">
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

export default Shop
