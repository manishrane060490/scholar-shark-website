import React from 'react'; 
import {Link} from "react-router-dom";
import './index.css';

function Footer() {
    return (
        <footer className="footer-s3 footer-s1">
            <div className="footer-container">
                {/* <div className="row">
                    <div className="col-12">
                        <div className="footer-cta">
                            <div className="p-left">
                                <span>For IT Company</span>
                                <h2>Join IT Solution Our Community</h2>
                            </div>
                            <div className="p-right">
                                <form action="#">
                                    <div className="f-subs-form">
                                        <input type="text" placeholder="Enter your email address"/>
                                        <button type="submit">Subscribe Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="row f-main">
                    <div className="col-xl-4 col-lg-4">
                        <div className="f-widget widget-1">
                            <div className="logo">
                                <Link to="/home">
                                    <img src="/assets/images/logos/shark.png" alt="" style={{width: '150px'}} />
                                </Link>
                                <p className="desc">A PANTH INFINITY LIMITED initiative</p>
                            </div>
                            <p className="desc">
                                Ignite the spark in you through Scholar Sharks
                            </p>
                            <ul className="social-icons-s1">
                                <li>
                                    <a href="https://www.instagram.com/scholar_sharks/" target='_blank'
                                    ><i className="fa-brands fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/scholar-sharks-llp/?view" target='_blank'
                                    ><i className="fa-brands fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="f-widget widget-2">
                            <h3 className="f-title">Quick Links</h3>
                            <ul className="f-menu">
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/about">About Company</Link></li>
                                <li><Link to="/refund">Refund Policy</Link></li>
                                {/* <li><Link href="/blogs">Business Support</Link></li>
                                <li><Link href="/contact">Apps Development</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    {/* <div className="col-xl-3 col-lg-6">
                        <div className="f-widget widget-3">
                            <h3 className="f-title">Latest News</h3>
                            <div className="recent-posts">
                                <div className="rp-single">
                                    <div className="thumb">
                                        <img
                                            src="/assets/images/blog-post/post-thumb-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/blog-details">Thoughtful man using laptop pondering </Link>
                                        </h4>
                                        <span
                                        ><i className="fa-solid fa-calendar-days"></i>23 May
                      2022</span
                                        >
                                    </div>
                                </div>
                                <div className="rp-single">
                                    <div className="thumb">
                                        <img
                                            src="/assets/images/blog-post/post-thumb-2.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <Link href="/blog-details">Young man with a lap top in a business</Link>
                                        </h4>
                                        <span
                                        ><i className="fa-solid fa-calendar-days"></i>23 May
                      2022</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-xl-4 col-lg-4">
                        <div className="widget-4">
                            <h3 className="f-title">Contact Us</h3>
                            <ul className="info-list">
                                <li>
                                    <a href="tel:8369155455"
                                    ><i className="fa-solid fa-phone"></i>+(91) 8369155455</a>
                                </li>
                                <li>
                                    <a href="mailto:founder@scholarsharks.in"
                                    ><i className="fa-solid fa-location-dot"></i>founder@scholarsharks.in</a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415"
                                    ><i className="fa-solid fa-envelope"></i>104 Shri Pawan Society, Dadasaheb Phalke Road, Dadar East, Mumbai-400014</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-cr">
                <div className="container">
                    <div className="footer-cr-container">
                        <div className="p-left">
                            <p>2023 © All rights reserved by CoffeeTech</p>
                        </div>
                        <div className="p-right">
                            <ul className="cr-menu">
                                {/* <li><Link to={"/home"}>Privacy Policy</Link></li>
                                <li><Link to={"/home"}>Terms & Conditions</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;