import React from "react";
import styles from "./orderDetails.scss";
import background from "../images/background-nav.jpg";

const OrderDetails = () => {
  let storage = window.localStorage;
  console.log(storage);

  let recipesId = Object.keys(storage);
  console.log(recipesId);

  return (
    <div>
      <img src={background} alt="background" />
      <div className="order-details-wrapper">
        <div class="user-form">
            <label>your details</label>
          <form>
            <select name="title" required>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Mr">Mr</option>
            </select>
            <input type="text" placeholder="first name" required></input>
            <input type="text" placeholder="last name" required></input>
            <input type="text" placeholder="email" required></input>
            <input type="password" placeholder="password" required></input>
            <label>contact number</label>
            <input type="number" placeholder="mobile number" required></input>
            <label>delivery address</label>
            <input type="text" placeholder="post code" required></input>
            <input type="submit"></input>
          </form>
        </div>
        <div className="order-summary">
          <p>Lore ipsum sdfghj</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
