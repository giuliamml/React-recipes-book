import React, { useState } from "react";
import styles from "./orderDetails.scss";
import background from "../images/background-nav.jpg";

const OrderDetails = () => {
  let storage = window.localStorage;

  let recipesId = Object.keys(storage);
  console.log(recipesId);

  const [userInfo, setUserInfo] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: 0,
    postcode: "",
  });

  //storage.getItem(recipesId)
  //fetch data

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

  const postUser = (event) => {
    event.preventDefault();
    let newUser = {
      title: userInfo.title,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password,
      mobileNumber: userInfo.mobileNumber,
      postcode: userInfo.postcode,
    };
    return fetch(`http://localhost:3001/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return "Oops we couldn't update that!";
        }
      })

      .catch((error) => {
        return "Oops we couldn't update that!";
      });
  };

  console.log(userInfo);
  return (
    <div>
      <img src={background} alt="background" />
      <div className="order-details-wrapper">
        <div class="user-form">
          <label>your details</label>
          <form onChange={handleChange}>
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
            <button type="submit" onSubmit={handleSubmit}>
              submit
            </button>
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
