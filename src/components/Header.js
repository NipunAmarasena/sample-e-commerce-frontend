import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import images from '../assets/images_exports';
import { setIsAuthenticated } from '../state/reducers/users';

const Header = ( { toggleCartVisibility }) => {

    const test = "header animated header-6";
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = ()=> {
        localStorage.clear();
        dispatch(setIsAuthenticated(false));
        history.push("/");
    }

    return (
        <header className={test}> 
        <div className="d-flex align-items-center">
            <div className="container">        
                <div className="row">
                    <div className="col-4 col-sm-4 col-md-4 d-block d-lgne mobile-icons">
                        <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                            <i className="icon anm anm-times-l"></i>
                            <i className="anm anm-bars-r"></i>
                        </button>
                        <div className="site-search iconset">
                            <i className="icon anm anm-search-l"></i>
                        </div>
                    </div>
                    
                    <div className="col-4 col-sm-4 col-md-4 col-lg-5 align-self-center d-none d-lg-block">
                        <p><b>24/7 HOTLINE</b> </p>
                    </div>
                    <div className="logo col-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
                        <img src={images.logo}  />
                    </div>
                    <div className="col-4 col-sm-4 col-md-4 col-lg-5 align-self-center icons-col text-right">
                        <div className="site-search iconset">
                            <i className="icon anm anm-search-l"></i>
                        </div>
                        <div className="search-drawer">
                            <div className="container">
                                <span className="closeSearch anm anm-times-l"></span>
                                <h3 className="title">What are you looking for?</h3>
                                <div className="block block-search">
                                    <div className="block block-content">
                                        <form className="form minisearch" id="header-search" action="#" method="get">
                                            <label for="search" className="label"><span>Search</span></label>
                                            <div className="control">
                                                <div className="searchField">
                                                        <div className="search-category">
                                                            <select id="rgsearch-category">
                                                                <option value="0">All Categories</option>
                                                                <option value="4">Shop</option>
                                                                <option value="6">- All</option>
                                                                <option value="8">- Men</option>
                                                                <option value="10">- Women</option>
                                                                <option value="12">- Shoes</option>
                                                                <option value="14">- Blouses</option>
                                                                <option value="16">- Pullovers</option>
                                                                <option value="18">- Bags</option>
                                                                <option value="20">- Accessories</option>
                                                            </select>
                                                        </div>
                                                    <div className="input-box">
                                                        <input id="search" type="text" name="q" value="" placeholder="Search for products, brands..." className="input-text" />
                                                        <button type="submit" title="Search" className="action search" disabled=""><i className="icon anm anm-search-l"></i></button>
                                                    </div>
                                                </div>
                                          </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setting-link iconset">
                            <i className="icon icon-settings"></i>
                        </div>
                        <div id="settingsBox">
                            <div className="customer-links">
                                <p><a href="login.html" className="btn">Login</a></p>
                                <p className="text-center">New User? <a href="register.html" className="register">Create an Account</a></p>
                                <p className="text-center">Default welcome msg!</p>
                            </div>
                            <div className="currency-picker">
                                <span className="ttl">Select Currency</span>
                                <ul id="currencies" className="cnrLangList">
                                <li className="selected"><a href="#;">INR</a></li><li><a href="#;">GBP</a></li><li><a href="#;">CAD</a></li><li><a href="#;">USD</a></li><li><a href="#;">AUD</a></li><li><a href="#;">EUR</a></li><li><a href="#;">JPY</a></li></ul>
                            </div>
                            <div className="language-picker">
                                <span className="ttl">SELECT LANGUAGE</span>
                                <ul id="language" className="cnrLangList">
                                    <li><a href="#">English</a></li><li><a href="#">French</a></li><li><a>German</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="wishlist-link iconset">
                            <i className="icon anm anm-heart-l"></i>
                            <span className="wishlist-count">0</span>
                        </div>
                        <div className="header-cart iconset">
                            <a href="#" className="site-header__cart btn-minicart" data-toggle="modal" data-target="#minicart-drawer" onClick={() => {toggleCartVisibility("show")}}>
                                <i className="icon anm anm-bag-l"></i>
                                <span className="site-cart-count">2</span>
                            </a>
                        </div><div className="header-cart iconset">
                            <a href="#" className="site-header__cart btn-minicart" data-toggle="modal" data-target="#minicart-drawer" onClick={() => {logOut()}}>
                                <i className="icon anm anm-bag-l"></i>
                                <span className="site-cart-count">2</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-outer">
            <div className="container">
            <div className="row">
                <div className="col-1 col-sm-12 col-md-12 col-lg-12 align-self-center d-menu-col">
                    <nav className="grid__item" id="AccessibleNav">
                        <ul id="siteNav" className="site-nav medium center hidearrow">
                            <li className="lvl1 parent megamenu mdropdown"><a href="#;">Home <i className="anm anm-angle-down-l"></i></a>
                                <div className="megamenu style1">
                                    <ul className="grid mmWrapper">
                                        <li className="grid__item large-up--one-whole">
                                            <ul className="grid">
                                                <li className="grid__item lvl-1 col-md-4 col-lg-4">
                                                	<a href="#" className="site-nav lvl-1 menu-title">Homepages</a>
                                                    <ul className="subLinks">
                                                      <li className="lvl-2"><a href="index.html" className="site-nav lvl-2">Home 01 <span className="lbl nm_label3">Popular</span></a></li>
                                                      <li className="lvl-2"><a href="index-demo2.html" className="site-nav lvl-2">Home 02 <span className="lbl nm_label3">Popular</span></a></li>
                                                      <li className="lvl-2"><a href="index-demo3.html" className="site-nav lvl-2">Home 03</a></li>
                                                      <li className="lvl-2"><a href="index-demo4.html" className="site-nav lvl-2">Home 04</a></li>
                                                      <li className="lvl-2"><a href="index-demo5.html" className="site-nav lvl-2">Home 05</a></li>
                                                      <li className="lvl-2"><a href="index-demo6.html" className="site-nav lvl-2">Home 06</a></li>
                                                      <li className="lvl-2"><a href="index-demo7.html" className="site-nav lvl-2">Home 07</a></li>
                                                      <li className="lvl-2"><a href="index-demo8.html" className="site-nav lvl-2">Home 08</a></li>
                                                      <li className="lvl-2"><a href="index-demo9.html" className="site-nav lvl-2">Home 09</a></li>
                                                    </ul>
                                                  </li>
                                                <li className="grid__item lvl-1 col-md-4 col-lg-4">
                                                	<a href="#" className="site-nav lvl-1 menu-title">Homepages</a>
                                                    <ul className="subLinks">
                                                    	<li className="lvl-2"><a href="index-demo10.html" className="site-nav lvl-2">Home 10</a></li>
                                                        <li className="lvl-2"><a href="index-demo11.html" className="site-nav lvl-2">Home 11</a></li>
                                                        <li className="lvl-2"><a href="index-demo12.html" className="site-nav lvl-2">Home 12</a></li>
                                                        <li className="lvl-2"><a href="index-demo13.html" className="site-nav lvl-2">Home 13</a></li>
                                                        <li className="lvl-2"><a href="index-demo14.html" className="site-nav lvl-2">Home 14</a></li>
                                                        <li className="lvl-2"><a href="index-demo15.html" className="site-nav lvl-2">Home 15</a></li>
                                                        <li className="lvl-2"><a href="index-demo16.html" className="site-nav lvl-2">Home 16</a></li>
                                                        <li className="lvl-2"><a href="index-demo17.html" className="site-nav lvl-2">Home 17</a></li>
                                                        <li className="lvl-2"><a href="index-yoga-shop.html" className="site-nav lvl-2">Yoga Shop</a></li>
                                                    </ul>
                                                </li>
                                                <li className="grid__item lvl-1 col-md-4 col-lg-4">
                                                	<a href="#" className="site-nav lvl-1 menu-title">Homeskin</a>
                                                    <ul className="subLinks">
                                                    	<li className="lvl-2"><a href="index-jewelry-store.html" className="site-nav lvl-2">Jewelry Store</a></li>
                                                        <li className="lvl-2"><a href="index-pet-store.html" className="site-nav lvl-2">Pet Store <span className="lbl nm_label4">Hot</span></a></li>
                                                    	<li className="lvl-2"><a href="index-medical-demo.html" className="site-nav lvl-2">Medical</a></li>
                                                        <li className="lvl-2"><a href="index-demo18.html" className="site-nav lvl-2">Furniture Store <span className="lbl nm_label4">Hot</span></a></li>
                                                        <li className="lvl-2"><a href="index-christmas-1.html" className="site-nav lvl-2">Christmas 1</a></li>
                                                        <li className="lvl-2"><a href="index-christmas-2.html" className="site-nav lvl-2">Christmas 2</a></li>
                                                        <li className="lvl-2"><a href="index-bags-store.html" className="site-nav lvl-2">Bags Store <span className="lbl nm_label2">New</span></a></li>
                                                        <li className="lvl-2"><a href="index-digital-store.html" className="site-nav lvl-2">Digital Store <span className="lbl nm_label2">New</span></a></li>
                                                        <li className="lvl-2"><a href="index-beachwear.html" className="site-nav lvl-2">Beachwear <span className="lbl nm_label2">New</span></a></li>
                                                        <li className="lvl-2"><a href="index-bike-store.html" className="site-nav lvl-2">Bike Store <span className="lbl nm_label2">New</span></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <ul className="grid mm-Banners">
                                                <li className="grid__item large-up--one-half imageCol">
                                                    <a href="#" /><img className="lazyload" src="assets/images/megamenu-banner7.jpg" data-src="assets/images/megamenu-banner7.jpg" alt="" />
                                                </li>
                                                <li className="grid__item large-up--one-half imageCol">
                                                    <a href="#" /><img className="lazyload" src="assets/images/megamenu-banner8.jpg" data-src="assets/images/megamenu-banner8.jpg" alt="" />
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="lvl1 parent megamenu"><a href="#" />Shop <i className="anm anm-angle-down-l" />
                                <div className="megamenu style4">
                                    <ul className="grid grid--uniform mmWrapper">
                                        <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1 menu-title">Category Page</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><a href="category-2columns.html" className="site-nav lvl-2">2 Columns with style1</a></li>
                                                <li className="lvl-2"><a href="category-3columns.html" className="site-nav lvl-2">3 Columns with style2</a></li>
                                                <li className="lvl-2"><a href="category-4columns.html" className="site-nav lvl-2">4 Columns with style3</a></li>
                                                <li className="lvl-2"><a href="category-5columns.html" className="site-nav lvl-2">5 Columns with style4</a></li>
                                                <li className="lvl-2"><a href="category-6columns.html" className="site-nav lvl-2">6 Columns with Fullwidth</a></li>
                                                <li className="lvl-2"><a href="category-7columns.html" className="site-nav lvl-2">7 Columns</a></li>
                                                <li className="lvl-2"><a href="category-empty.html" className="site-nav lvl-2">Category Empty</a></li>
                                            </ul>
                                        </li>
                                        <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1 menu-title">Shop Page</a>
                                            <ul className="subLinks">
                                            	<li className="lvl-2"><a href="shop-list-view.html" className="site-nav lvl-2">List View</a></li>
                                                <li className="lvl-2"><a href="shop-category-slideshow.html" className="site-nav lvl-2">Category Slideshow</a></li>
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Left Sidebar</a></li>
                                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav lvl-2">Right Sidebar</a></li>
                                                <li className="lvl-2"><a href="shop-fullwidth.html" className="site-nav lvl-2">Fullwidth/No Sidebar</a></li>
                                                <li className="lvl-2"><a href="shop-no-sidebar.html" className="site-nav lvl-2">No Sidebar/No Filter</a></li>
                                                <li className="lvl-2"><a href="shop-category-slideshow.html" className="site-nav lvl-2">With category description</a></li>
                                            </ul>
                                        </li>
                                        <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1 menu-title">Shop Page</a>
                                            <ul className="subLinks">
                                                <li className="lvl-2"><a href="shop-left-sidebar.html" className="site-nav lvl-2">Simple Heading</a></li>
                                                <li className="lvl-2"><a href="shop-small-heading.html" className="site-nav lvl-2">Small Heading</a></li>
                                                <li className="lvl-2"><a href="shop-no-sidebar.html" className="site-nav lvl-2">Big Heading With Image</a></li>
                                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav lvl-2">Headings With Banner#1</a></li>
                                                <li className="lvl-2"><a href="shop-heading-with-banner2.html" className="site-nav lvl-2">Headings With Banner#2</a></li>
                                                <li className="lvl-2"><a href="swatches-style.html" className="site-nav lvl-2">Swatches Style</a></li>
                                                <li className="lvl-2"><a href="shop-right-sidebar.html" className="site-nav lvl-2">classNameic Pagination</a></li>
                                            </ul>
                                        </li>
                                        <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1 menu-title">Shop Other Page</a>
                                            <ul className="subLinks">
                                              <li className="lvl-2"><a href="my-wishlist.html" className="site-nav lvl-2">My Wishlist</a></li>
                                              <li className="lvl-2"><a href="cart-style1.html" className="site-nav lvl-2">Cart Page Style1</a></li>
                                              <li className="lvl-2"><a href="cart-style2.html" className="site-nav lvl-2">Cart Page Style2</a></li>
                                              <li className="lvl-2"><a href="checkout-style1.html" className="site-nav lvl-2">Checkout Page Style1</a></li>
                                              <li className="lvl-2"><a href="checkout-style2.html" className="site-nav lvl-2">Checkout Page Style2</a></li>
                                              <li className="lvl-2"><a href="compare-style1.html" className="site-nav lvl-2">Compare Page Style1</a></li>
                                              <li className="lvl-2"><a href="compare-style2.html" className="site-nav lvl-2">Compare Page Style2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="row clear">
                                    	<div className="col-md-4 col-lg-4">
                                        	<a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                        </div>
                                        <div className="col-md-4 col-lg-4">
                                        	<a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                        </div>
										<div className="col-md-4 col-lg-4">
                                        	<a href="#;"><img src="assets/images/megamenu-banner4.jpg" data-src="assets/images/megamenu-banner4.jpg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        <li className="lvl1 parent megamenu"><a href="#">Features <i className="anm anm-angle-down-l"></i></a>
                            <div className="megamenu style2">
                                <ul className="grid mmWrapper">
                                    <li className="grid__item one-whole">
                                        <ul className="grid">
                                            <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1 menu-title">Product Page</a>
                                                <ul className="subLinks">
                                                    <li className="lvl-2"><a href="product-layout1.html" className="site-nav lvl-2">Product Layout1</a></li>
                                                    <li className="lvl-2"><a href="product-layout2.html" className="site-nav lvl-2">Product Layout2</a></li>
                                                    <li className="lvl-2"><a href="product-layout3.html" className="site-nav lvl-2">Product Layout3</a></li>
                                                    <li className="lvl-2"><a href="product-layout4.html" className="site-nav lvl-2">Product Layout4</a></li>
                                                    <li className="lvl-2"><a href="product-layout5.html" className="site-nav lvl-2">Product Layout5</a></li>
                                                    <li className="lvl-2"><a href="product-layout6.html" className="site-nav lvl-2">Product Layout6</a></li>
                                                    <li className="lvl-2"><a href="product-layout7.html" className="site-nav lvl-2">Product Layout7</a></li>
                                                    <li className="lvl-2"><a href="product-accordian.html" className="site-nav lvl-2">Product Accordian</a></li>
                                                    <li className="lvl-2"><a href="product-tabs-left.html" className="site-nav lvl-2">Product Tabs Left</a></li>
                                                    <li className="lvl-2"><a href="product-tabs-center.html" className="site-nav lvl-2">Product Tabs Center</a></li>
                                                </ul>
                                            </li>
                                            <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1 menu-title">Product Page Types</a>
                                                <ul className="subLinks">
                                                  	<li className="lvl-2"><a href="product-standard.html" className="site-nav lvl-2">Standard Product</a></li>
                                                    <li className="lvl-2"><a href="product-variable.html" className="site-nav lvl-2">Variable Product</a></li>
                                                    <li className="lvl-2"><a href="product-grouped.html" className="site-nav lvl-2">Grouped Product</a></li>
                                                    <li className="lvl-2"><a href="product-layout1.html" className="site-nav lvl-2">New Product</a></li>
                                                    <li className="lvl-2"><a href="product-layout2.html" className="site-nav lvl-2">Sale Product</a></li>
                                                    <li className="lvl-2"><a href="product-outofstock.html" className="site-nav lvl-2">Out Of Stock Product</a></li>
                                                    <li className="lvl-2"><a href="product-external-affiliate.html" className="site-nav lvl-2">External / Affiliate Product</a></li>
                                                    <li className="lvl-2"><a href="product-layout1.html" className="site-nav lvl-2">Variable Image</a></li>
                                                    <li className="lvl-2"><a href="product-layout4.html" className="site-nav lvl-2">Variable Select</a></li>
                                                    <li className="lvl-2"><a href="prodcut-360-degree-view.html" className="site-nav lvl-2">360 Degree view</a></li>
                                                </ul>
                                              </li>
                                            <li className="grid__item lvl-1 col-md-3 col-lg-3"><a href="#" className="site-nav lvl-1 menu-title">Top Brands</a>
                                            	<div className="menu-brand-logo">
                                                    <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                    <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                    <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                </div>
                                                <div className="menu-brand-logo">
                                                    <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                    <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                    <a href="#;"><img src="assets/images/logo/brandlogo1.png" alt=""/></a>
                                                </div>
                                            </li>
                                            <li className="grid__item lvl-1 col-md-3 col-lg-3 p-0">
                                            	<a href="#"><img src="assets/images/megamenu-banner3.jpg" alt=""/></a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="lvl1 parent dropdown"><a href="#">Lookbook <i className="anm anm-angle-down-l"></i></a>
                        	<ul className="dropdown">
                            	<li><a href="lookbook-2columns.html" className="site-nav">2 Columns</a></li>
                                <li><a href="lookbook-3columns.html" className="site-nav">3 Columns</a></li>
                                <li><a href="lookbook-4columns.html" className="site-nav">4 Columns</a></li>
                                <li><a href="lookbook-5columns.html" className="site-nav">5 Columns + Fullwidth</a></li>
                                <li><a href="lookbook-shop.html" className="site-nav">Lookbook Shop</a></li>
                            </ul>
                        </li>
                        <li className="lvl1 parent dropdown"><a href="#">Pages <i className="anm anm-angle-down-l"></i></a>
                          <ul className="dropdown">
                          								<li><a href="brands-page.html" className="site-nav">Brands Page</a></li>
                            <li><a href="login.html" className="site-nav">Login</a></li>
                            <li><a href="my-account.html" className="site-nav">My Account</a></li>
                            <li><a href="aboutus-style1.html" className="site-nav">About Us <i className="anm anm-angle-right-l"></i></a>
                            	<ul className="dropdown">
                                    <li><a href="aboutus-style1.html" className="site-nav">About Us Style1</a></li>
                                    <li><a href="aboutus-style2.html" className="site-nav">About Us Style2</a></li>
                                </ul>
                            </li>
                            <li><a href="contact-style1.html" className="site-nav">Contact Us <i className="anm anm-angle-right-l"></i></a>
                            	<ul className="dropdown">
                                    <li><a href="contact-style1.html" className="site-nav">Contact Us Style1</a></li>
                                    <li><a href="contact-style2.html" className="site-nav">Contact Us Style2</a></li>
                                </ul>
                            </li>
                            <li><a href="faqs-style1.html" className="site-nav">FAQs <i className="anm anm-angle-right-l"></i></a>
                            	<ul className="dropdown">
                                    <li><a href="faqs-style1.html" className="site-nav">FAQs Style1</a></li>
                                    <li><a href="faqs-style2.html" className="site-nav">FAQs Style2</a></li>
                                </ul>
                            </li>
                            <li><a href="cms.html" className="site-nav">CMS</a></li>
                            <li><a href="error-404.html" className="site-nav">Error 404</a></li>
                            <li><a href="coming-soon.html" className="site-nav">Coming soon <span className="lbl nm_label1">New</span> </a></li>
                          </ul>
                        </li>
                        <li className="lvl1 parent dropdown"><a href="#">Blog <i className="anm anm-angle-down-l"></i></a>
                          <ul className="dropdown">
                            <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
                            <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
                            <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
                            <li><a href="blog-2columns.html" className="site-nav">2 Columns</a></li>
                            <li><a href="blog-3columns.html" className="site-nav">3 Columns</a></li>
                            <li><a href="blog-4columns.html" className="site-nav">4 Columns</a></li>
                            <li><a href="blog-single-post.html" className="site-nav">Single Post</a></li>
                          </ul>
                        </li>
                        
                      </ul>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </header>
    )
}

export default Header;