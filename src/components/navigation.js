import React, { useState } from "react";
import styles from "./navigation.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartCount from "./cartCount";
//media-files
import cart from "../images/cart.svg";

const Navigation = () => {
  const [cart, setCart] = useState({ stateComponent: false });

  return (
    <div className="navigation">
      <ul className="navigation-sections">
        <li id="navigation">
          <Link to="/home">Menu</Link>
        </li>
        <li id="navigation">
          <Link to="/recipes">Recipes</Link>
        </li>
        <li id="navigation">wine</li>
        <li id="navigation">gifts</li>
        <li id="navigation">market</li>
        <li id="navigation" className="cart">
          <CartCount cart={cart} setCart={setCart} />
          <Link to="/cart">
            <img src={cart} />
          </Link>
        </li>{" "}
      </ul>
    </div>
  );
};

export default Navigation;
