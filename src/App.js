import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import MiniCart from "./components/MiniCart";
import Login from "./components/Login";
import Backdrop from "./components/Backdrop";
import Home from './components/Home';

import { setCartVisibility } from "./state/reducers/cart";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);

  const toggleCartVisibility = (isVisible) => {
    dispatch(setCartVisibility(isVisible));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <div className="page-wrapper">
            <Home
              toggleCartVisibility={toggleCartVisibility}
              showCart={showCart}
            />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default App;
