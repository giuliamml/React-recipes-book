import React from "react";
import OrderDetails from "./orderDetails.js";
import Footer from "./footer";
import CartCount from './cartCount'

const Cart = () => {
  return (
    <div>
        <CartCount/>
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default Cart;
