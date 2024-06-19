import React from "react";
import './Details.css';
import Blogs from "../Blogs/Blogs";
import imagelogo from './logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="container12 footer_container">
                <div className="row12 footer_padding">
                    <div className="col-md-4">
                        <p className="contact_us">Contact Us</p>
                        <p><a href="tel:+919913816941">+91 9913816941</a></p>
                        <p><a href="mailto:ecoraddi1@gmail.com">ecoraddi1@gmail.com</a></p>
                        <p style={{ fontWeight: '700' }}>Customer Support available <br />from 10am - 7pm</p>
                        <p className="find_us">Find Us Here</p>
                        <ul className="find_us_ul">
                            <li><a href="/" target="_blank" rel="noreferrer"><img src="https://ikp.edgekit.net/y8s2vhk66ef/image_2_Bi5cqcyBFNT.png?updatedAt=1628624823915" alt="instagram" /></a></li>
                            <li><a href="/" target="_blank" rel="noreferrer"><img src="https://ikp.edgekit.net/y8s2vhk66ef/image_3_yByOZld4XFh.png?updatedAt=1628624824789" alt="twitter" /></a></li>
                            <li><a href="/" target="_blank" rel="noreferrer"><img src="https://ikp.edgekit.net/y8s2vhk66ef/image_6_zHp_XCLcq9Z.png?updatedAt=1628624826605" alt="linkedin" /></a></li>
                            <li><a href="/" target="_blank" rel="noreferrer"><img src="https://ikp.edgekit.net/y8s2vhk66ef/image_5_3EElSEX6sCW.png?updatedAt=1628624825705" alt="facebook" /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="contact_us">A Project By DS and AI Team</p>
                        <a href="https://play.google.com/store/apps/details?id=com.swapeco.app" target="_blank" rel="noreferrer">
                            <img style={{ height: '13%', width: '50%' }} src="https://capsource-bucket.s3.us-west-2.amazonaws.com/wp-content/uploads/2021/04/02172234/DPU-Logo-1.png" alt="playstore" />
                        </a>
                        <p className="company"><a href="/"><Link to="/price">Scrap Rates</Link></a></p>
                        <p className="cursor-pointer"><a href="/" target="_blank" rel="noreferrer"><Link to={"/blogs"}>Blogs</Link></a></p>
                    </div>
                    <div className="col-md-4 footer-address">
                        <img className="logo_class" src={imagelogo} alt="Scrapuncle" />
                        <p className="swapeco"><b>rockingUT Solutions Fun. Limited </b></p>
                        <p style={{ display: 'block' }}>
                            <b>Regd. Address:</b> <br />Dr. D.Y. Patil Instiute of technology, Sant Tukaram Nagar, Pimpri Pune-411018
                        </p>
                        <p style={{ display: 'block' }}>
                            <br /><b>Corr Address:</b><br />Dr. D.Y. Patil Instiute of technology, Sant Tukaram Nagar, Pimpri Pune-411018
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
