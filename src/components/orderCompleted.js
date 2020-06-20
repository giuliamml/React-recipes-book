import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import styles from "./orderDetails";
import background from "../images/background-nav.jpg";

const OrderCompleted = () => {
  localStorage.clear()
  return (
    <div>
      <img src={background} alt="background" />
      <Navigation />
      <div className="order-complete">
        <h1>Thank you for your order</h1>
      </div>

      <Footer />
    </div>
  );
};
export default OrderCompleted;
