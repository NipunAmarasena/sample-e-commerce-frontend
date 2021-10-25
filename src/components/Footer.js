import React from 'react'

import footerLogo from '../assets/images_exports';

const Footer = () => {
    return (
        <div className="footer footer-1">
        	<div className="footer-top clearfix">
        		<div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 about-us-col">
                            <img src={footerLogo} alt="Avone"/>
                            <p>55 Gallaxy Enque,<br />2568 steet, 23568 NY</p>
                            <p><b>Phone</b>: (440) 000 000 0000</p>
                            <p><b>Email</b>: <a href="mailto:sales@yousite.com">sales@yousite.com</a></p>
                            <ul className="list--inline social-icons">
                                <li><a href="#" target="_blank"><i className="icon icon-facebook"></i></a></li>
                                <li><a href="#" target="_blank"><i className="icon icon-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="icon icon-pinterest"></i></a></li>
                                <li><a href="#" target="_blank"><i className="icon icon-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i className="icon icon-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 footer-links">
                            <h4 className="h4">Quick Shop</h4>
                            <ul>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Men</a></li>
                                <li><a href="#">Kids</a></li>
                                <li><a href="#">Sportswear</a></li>
                                <li><a href="#">Sale</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 footer-links">
                            <h4 className="h4">Informations</h4>
                            <ul>
                                <li><a href="aboutus-style1.html">About us</a></li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Terms &amp; condition</a></li>
                                <li><a href="my-account.html">My Account</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 footer-links">
                            <h4 className="h4">Customer Services</h4>
                            <ul>
                                <li><a href="#">Request Personal Data</a></li>
                                <li><a href="faqs-style1.html">FAQ's</a></li>
                                <li><a href="contact-style1.html">Contact Us</a></li>
                                <li><a href="#">Orders and Returns</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3 newsletter-col">
                            <div className="display-table">
                                <div className="display-table-cell footer-newsletter">
                                    <form action="#" method="post">
                                        <label className="h4">Newsletter</label>
                                        <p>Enter your email to receive daily news and get 20% off coupon for all items.</p>
                                        <div className="input-group">
                                            <input type="email" className="input-group__field newsletter-input" name="EMAIL" value="" placeholder="Email address" required />
                                            <span className="input-group__btn">
                                                <button type="submit" className="btn newsletter__submit" name="commit" id="Subscribe"><span className="newsletter__submit-text--large">Subscribe</span></button>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            	</div>
            </div>
            <div className="footer-bottom clearfix">
            	<div className="container">
                	<ul className="payment-icons list--inline">
                    	<li><i className="anm anm-cc-visa" aria-hidden="true"></i></li>
                        <li><i className="anm anm-cc-mastercard" aria-hidden="true"></i></li>
                        <li><i className="anm anm-cc-amex" aria-hidden="true"></i></li>
                        <li><i className="anm anm-cc-paypal" aria-hidden="true"></i></li>
                        <li><i className="anm anm-cc-discover" aria-hidden="true"></i></li>
                        <li><i className="anm anm-cc-stripe" aria-hidden="true"></i></li>
                        <li><i className="anm anm-cc-jcb" aria-hidden="true"></i></li>
                    </ul>
                    <div className="copytext">
                    	&copy; 2020 Avone. All Rights Reserved.
                    </div>
                </div>
            </div>
		</div>
    )
}

export default Footer;