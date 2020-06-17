import React from "react";
import styles from "./navigation.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//media-files
import cart from "../images/cart.svg";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation-sections">
        <li id="navigation">
          menu
          <Link to="/menu" />{" "}
        </li>
        <li id="navigation">
          recipes
          <Link to="/recipes" />
        </li>
        <li id="navigation">wine</li>
        <li id="navigation">gifts</li>
        <li id="navigation">market</li>
        <li id="navigation">
          <img src={cart} />
        </li>{" "}
      </ul>
    </div>
  );
};

export default Navigation;
