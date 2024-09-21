import React from 'react'
import logowh from '../assets/images/logo-wh.png'
import appstore from '../assets/images/app-store.jpg'
import googleplay from '../assets/images/google-play.jpg'
import hotline from '../assets/images/hot-line.svg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-main">
                    <div className="container">
                        <div className="in-flex">
                            <div className="about">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src={logowh} alt="logo-wh" />
                                    </a>
                                </div>
                                <p>Awesome grocery store website template</p>
                                <ul className="contact-info">
                                    <li>
                                        <svg
                                            width={16}
                                            height={17}
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <mask
                                                id="mask0_1577_5217"
                                                style={{ maskType: "luminance" }}
                                                maskUnits="userSpaceOnUse"
                                                x={0}
                                                y={0}
                                                width={16}
                                                height={17}
                                            >
                                                <path d="M16 0.750977H0V16.751H16V0.750977Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_1577_5217)">
                                                <path
                                                    d="M8.00078 16.7564L7.53411 16.3564C6.89078 15.8178 1.27344 10.9664 1.27344 7.41776C1.27344 5.63356 1.98222 3.92244 3.24383 2.66082C4.50545 1.3992 6.21658 0.69043 8.00078 0.69043C9.78498 0.69043 11.4961 1.3992 12.7578 2.66082C14.0194 3.92244 14.7281 5.63356 14.7281 7.41776C14.7281 10.9664 9.11078 15.8178 8.47011 16.3591L8.00078 16.7564ZM8.00078 2.1451C6.60287 2.14668 5.26267 2.70271 4.27419 3.69118C3.28572 4.67965 2.7297 6.01985 2.72811 7.41776C2.72811 9.6471 6.18411 13.2084 8.00078 14.8384C9.81744 13.2078 13.2735 9.64443 13.2735 7.41776C13.2719 6.01985 12.7159 4.67965 11.7274 3.69118C10.7389 2.70271 9.39869 2.14668 8.00078 2.1451Z"
                                                    fill="#FDC040"
                                                />
                                                <path
                                                    d="M8.00065 10.0843C7.47323 10.0843 6.95766 9.92791 6.51913 9.6349C6.0806 9.34188 5.73881 8.9254 5.53697 8.43813C5.33514 7.95086 5.28233 7.41469 5.38522 6.8974C5.48812 6.38012 5.74209 5.90497 6.11503 5.53203C6.48797 5.15909 6.96313 4.90511 7.48041 4.80222C7.99769 4.69932 8.53387 4.75213 9.02114 4.95397C9.50841 5.1558 9.92489 5.49759 10.2179 5.93612C10.5109 6.37465 10.6673 6.89023 10.6673 7.41764C10.6673 8.12489 10.3863 8.80317 9.88627 9.30326C9.38617 9.80336 8.7079 10.0843 8.00065 10.0843ZM8.00065 6.08431C7.73694 6.08431 7.47916 6.16251 7.25989 6.30902C7.04063 6.45553 6.86973 6.66377 6.76881 6.9074C6.6679 7.15103 6.64149 7.41912 6.69294 7.67776C6.74438 7.93641 6.87137 8.17398 7.05784 8.36045C7.24431 8.54692 7.48189 8.67391 7.74053 8.72536C7.99917 8.77681 8.26726 8.7504 8.5109 8.64948C8.75453 8.54857 8.96277 8.37767 9.10928 8.1584C9.25579 7.93914 9.33399 7.68135 9.33399 7.41764C9.33399 7.06402 9.19351 6.72488 8.94346 6.47484C8.69341 6.22479 8.35427 6.08431 8.00065 6.08431Z"
                                                    fill="#FDC040"
                                                />
                                            </g>
                                        </svg>
                                        <strong>Address:</strong>
                                        <span>
                                            5171 W Campbell Ave undefined Kent, Utah 53127 United States
                                        </span>
                                    </li>
                                    <li>
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1577_5225)">
                                                <g clipPath="url(#clip1_1577_5225)">
                                                    <mask
                                                        id="mask0_1577_5225"
                                                        style={{ maskType: "luminance" }}
                                                        maskUnits="userSpaceOnUse"
                                                        x={0}
                                                        y={0}
                                                        width={16}
                                                        height={16}
                                                    >
                                                        <path
                                                            d="M15.3733 0.409424H0.314453V15.4682H15.3733V0.409424Z"
                                                            fill="white"
                                                        />
                                                    </mask>
                                                    <g mask="url(#mask0_1577_5225)">
                                                        <path
                                                            d="M13.4913 8.20511V7.31161C13.4913 5.81392 12.8964 4.37757 11.8374 3.31854C10.7783 2.25952 9.34195 1.66455 7.84425 1.66455C6.34656 1.66455 4.91021 2.25952 3.85118 3.31854C2.79215 4.37757 2.1972 5.81392 2.1972 7.31161V8.20511C1.5391 8.49488 1.00052 9.00193 0.671625 9.64135C0.342729 10.2808 0.243478 11.0139 0.390488 11.7177C0.537497 12.4216 0.921844 13.0536 1.47918 13.508C2.03653 13.9623 2.73304 14.2114 3.45209 14.2136H4.707V7.93906H3.45209V7.31161C3.45209 6.14674 3.91484 5.02958 4.73853 4.20589C5.56222 3.3822 6.67938 2.91946 7.84425 2.91946C9.00913 2.91946 10.1263 3.3822 10.95 4.20589C11.7736 5.02958 12.2364 6.14674 12.2364 7.31161V7.93906H10.9815V12.9587H8.47171V14.2136H12.2364C12.9555 14.2114 13.6519 13.9623 14.2093 13.508C14.7667 13.0536 15.151 12.4216 15.2981 11.7177C15.4451 11.0139 15.3458 10.2808 15.0168 9.64135C14.688 9.00193 14.1494 8.49488 13.4913 8.20511ZM3.45209 12.9587C2.95287 12.9587 2.47408 12.7603 2.12107 12.4074C1.76807 12.0543 1.56974 11.5756 1.56974 11.0764C1.56974 10.5771 1.76807 10.0983 2.12107 9.74526C2.47408 9.39229 2.95287 9.19396 3.45209 9.19396V12.9587ZM12.2364 12.9587V9.19396C12.7356 9.19396 13.2144 9.39229 13.5674 9.74526C13.9205 10.0983 14.1188 10.5771 14.1188 11.0764C14.1188 11.5756 13.9205 12.0543 13.5674 12.4074C13.2144 12.7603 12.7356 12.9587 12.2364 12.9587Z"
                                                            fill="#FDC040"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1577_5225">
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_1577_5225">
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <strong>Call Us:</strong>
                                        <span>
                                            <a href="tel:(+91)-540-025-124553">(+91)-540-025-124553</a>
                                        </span>
                                    </li>
                                    <li>
                                        <svg
                                            width={16}
                                            height={17}
                                            viewBox="0 0 16 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1577_5234)">
                                                <g clipPath="url(#clip1_1577_5234)">
                                                    <g clipPath="url(#clip2_1577_5234)">
                                                        <mask
                                                            id="mask0_1577_5234"
                                                            style={{ maskType: "luminance" }}
                                                            maskUnits="userSpaceOnUse"
                                                            x={0}
                                                            y={0}
                                                            width={16}
                                                            height={17}
                                                        >
                                                            <path
                                                                d="M16 0.634277H0V16.6343H16V0.634277Z"
                                                                fill="white"
                                                            />
                                                        </mask>
                                                        <g mask="url(#mask0_1577_5234)">
                                                            <path
                                                                d="M0.963115 5.08044C0.739887 5.14422 0.537181 5.26518 0.375056 5.43136C0.212931 5.59754 0.0970051 5.80317 0.0387506 6.0279C-0.019504 6.25264 -0.0180687 6.48869 0.0429143 6.7127C0.103898 6.93671 0.222315 7.14091 0.386449 7.3051L2.66112 9.5771V13.9678H7.05645L9.34645 16.2544C9.46927 16.3785 9.61546 16.4771 9.77657 16.5443C9.93768 16.6116 10.1106 16.6463 10.2852 16.6464C10.3999 16.6462 10.5141 16.6314 10.6252 16.6024C10.8498 16.5459 11.0556 16.4311 11.2218 16.2697C11.3879 16.1083 11.5087 15.906 11.5718 15.6831L15.9945 0.648438L0.963115 5.08044ZM1.33378 6.36244L12.6858 3.01577L3.99578 11.6918V9.0251L1.33378 6.36244ZM10.2938 15.3118L7.60912 12.6344H4.94245L13.6312 3.9531L10.2938 15.3118Z"
                                                                fill="#FDC040"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1577_5234">
                                                    <rect width={16} height={17} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_1577_5234">
                                                    <rect width={16} height={17} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip2_1577_5234">
                                                    <rect width={16} height={17} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <strong>Email:</strong>
                                        <span>
                                            <a href="mailto:sale@Nest.com">sale@Nest.com</a>
                                        </span>
                                    </li>
                                    <li>
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0_1577_5243)">
                                                <g clipPath="url(#clip1_1577_5243)">
                                                    <g clipPath="url(#clip2_1577_5243)">
                                                        <mask
                                                            id="mask0_1577_5243"
                                                            style={{ maskType: "luminance" }}
                                                            maskUnits="userSpaceOnUse"
                                                            x={0}
                                                            y={0}
                                                            width={16}
                                                            height={16}
                                                        >
                                                            <path
                                                                d="M15.7444 0.818359H0.685547V15.8772H15.7444V0.818359Z"
                                                                fill="white"
                                                            />
                                                        </mask>
                                                        <g mask="url(#mask0_1577_5243)">
                                                            <path
                                                                d="M6.96005 15.8772H0.685547V14.6223H6.96005V15.8772ZM5.70516 12.1125H0.685547V13.3674H5.70516V12.1125ZM4.45026 9.60271H0.685547V10.8576H4.45026V9.60271ZM8.21496 0.818359C6.2187 0.820518 4.30482 1.61448 2.89325 3.02606C1.48167 4.43763 0.687706 6.35151 0.685547 8.34777H1.94045C1.94045 7.10679 2.30844 5.89368 2.9979 4.86184C3.68735 3.83 4.66729 3.02579 5.8138 2.55088C6.96033 2.07598 8.22192 1.95172 9.43909 2.19382C10.6562 2.43593 11.7742 3.03351 12.6517 3.91102C13.5293 4.78853 14.1268 5.90654 14.3689 7.12368C14.611 8.34081 14.4867 9.60243 14.0119 10.749C13.537 11.8954 12.7327 12.8754 11.7009 13.5649C10.669 14.2543 9.45594 14.6223 8.21496 14.6223V15.8772C10.2119 15.8772 12.127 15.0839 13.539 13.6719C14.9511 12.2598 15.7444 10.3447 15.7444 8.34777C15.7444 6.35085 14.9511 4.43572 13.539 3.02367C12.127 1.61163 10.2119 0.818359 8.21496 0.818359ZM7.58751 5.21052V8.60754L9.65368 10.6738L10.5409 9.78652L8.84241 8.08801V5.21052H7.58751Z"
                                                                fill="#FDC040"
                                                            />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1577_5243">
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip1_1577_5243">
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                                <clipPath id="clip2_1577_5243">
                                                    <rect width={16} height={16} fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <strong>Hours:</strong>
                                        <span>10:00 - 18:00, Mon - Sat</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link">
                                <h4 className="title">Company</h4>
                                <ul className="link-list">
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivery Information</a>
                                    </li>
                                    <li>
                                        <a href="privacy_policy.html">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="term_and_condition.html">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Support Center</a>
                                    </li>
                                    <li>
                                        <a href="career.html">Careers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link">
                                <h4 className="title">Account</h4>
                                <ul className="link-list">
                                    <li>
                                        <a href="login.html">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="#">View Cart</a>
                                    </li>
                                    <li>
                                        <a href="track_my_order.html">Track My Order</a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping Details</a>
                                    </li>
                                    <li>
                                        <a href="#">Compare product</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-link">
                                <h4 className="title">Popular</h4>
                                <ul className="link-list">
                                    <li>
                                        <a href="tutorials.html">Tutorials</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="knowledge_based.html">Knowledge Based</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="download">
                                <h4 className="title">Install App</h4>
                                <div className="download-app">
                                    <a href="#">
                                        <img src={appstore} alt="app-store" />
                                    </a>
                                    <a href="#">
                                        <img src={googleplay} alt="google-play" />
                                    </a>
                                </div>
                                <p>Secured Payment Gateways</p>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <div className="copyright">
                                        © 2024, <a href="#"> FlymyMall</a> All rights reserved
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="hotline-flex">
                                        <div className="hotline">
                                            <img src={hotline} alt="hot-line" />
                                            <p>
                                                <a href="tel:1900-6666">1900 - 6666</a>Working 8:00 - 22:00
                                            </p>
                                        </div>
                                        <div className="hotline">
                                            <img src={hotline} alt="hot-line" />
                                            <p>
                                                <a href="tel:1900-8888">1900 - 8888</a>24/7 Support Center
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="mobile-social-icon">
                                        <h6>Follow Us</h6>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-pinterest-p" />
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-youtube" />
                                        </a>
                                    </div>
                                    <p className="offer">Up to 15% discount on your first subscribe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
