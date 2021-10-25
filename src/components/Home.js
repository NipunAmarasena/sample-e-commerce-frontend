import React from 'react'
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'; 

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import MiniCart from "./MiniCart";
import Backdrop from "./Backdrop";

const Home = ( {toggleCartVisibility, showCart} )=> {

    const element = <div className="page-wrapper">
    <Header
      toggleCartVisibility={toggleCartVisibility}
    />
    <Content />
    <Footer />
    <MiniCart
      toggleCartVisibility={toggleCartVisibility}
      showCart={showCart}
    />
    <Backdrop show={showCart}/>
  </div>

  const hasToken = localStorage.getItem("token");
  const isAuthenticated = useSelector((state) => state.users.isAuthenticated);

    return (
        (hasToken &&  isAuthenticated )? element : <Redirect to="/" />
        
    )
}

export default Home;