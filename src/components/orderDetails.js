import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./orderDetails.scss";
import background from "../images/background-nav.jpg";

const OrderDetails = () => {
  let storage = window.localStorage;

  let recipesId = Object.keys(storage);
  console.log(recipesId);

 
//fetch data given the ids

  const [userInfo, setUserInfo] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: 0,
    postcode: "",
  });


  const handleChange = (event) => {
    event.preventDefault();
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postUser(userInfo);

  };

  const postUser = async (user) => {

    return await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())

      .then((data) => data)
      .catch((error) => console.log("Oops something went wrong!"));
  };

  return (
    <div>
      <img src={background} alt="background" />
      <div className="order-details-wrapper">
        <div class="user-form">
          <label>your details</label>
          <form onChange={handleChange} onSubmit={handleSubmit}>
            <select name="title" required>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Mr">Mr</option>
            </select>
            <input
              type="text"
              placeholder="first name"
              name="firstName"
              required
            ></input>
            <input
              type="text"
              placeholder="last name"
              name="lastName"
              required
            ></input>
            <input
              type="text"
              placeholder="email"
              name="email"
              required
            ></input>
            <input
              type="password"
              placeholder="password"
              name="password"
              required
            ></input>
            <label>contact number</label>
            <input
              type="number"
              placeholder="mobile number"
              name="mobileNumber"
              required
            ></input>
            <label>delivery address</label>
            <input
              type="text"
              placeholder="post code"
              name="postcode"
              required
            ></input>
            <button type="submit">submit</button>
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
