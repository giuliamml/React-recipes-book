import React from "react";
import img1 from "../images/image1.svg";
import cart from "../images/cart.svg";
import img2 from "../images/image2.svg";
import img3 from "../images/image3.svg";
import img4 from "../images/image4.svg";
import pasta from "../images/Shape1.svg";
import groceries from "../images/Shape2.svg";
import snack from "../images/Shape3.svg";
import cheese from "../images/Shape4.svg";
import fruit from "../images/Shape5.svg";
import carrot from "../images/Shape6.svg";
import img5 from "../images/image5.svg";

function Homepage() {
  return (
    <div className="landing-page-wrapper">
      <div className="hero-wrapper">
        <img src={img1} />
        <div className="navigation">
          <ul className="navigation-sections">
            <li id="navigation">
              <a>{"on the menu"}</a>
            </li>
            <li id="navigation">
              <a>{"recipes"}</a>
            </li>
            <li id="navigation">
              <a>{"wine"}</a>
            </li>
            <li id="navigation">
              <a>{"gifts"}</a>
            </li>
            <li id="navigation">
              <a>{"market"}</a>
            </li>
            <li id="navigation">
              <img src={cart} />
            </li>{" "}
          </ul>
        </div>
        <div className="hero-text">
          <h1>{"Order our top-rated recipes today!"}</h1>
          <button className="cta">{"get started"}</button>
        </div>
      </div>

      <div className="content-wrapper">
        <div class="content-sections">
          <div className="content-text">
            <img src={pasta} />
            <h1>{"Choose your meal"}</h1>
            <p>
              {
                "Our chef-designed recipes include balanced Mediterranean meals, quick one-pan dinners, and top-rated customer favorites."
              }
            </p>
            <img src={groceries} />
          </div>
          <div className="content-image">
            <img src={img2} />
          </div>
        </div>
        <div class="content-sections">
          <div className="content-text">
            <img src={snack} />
            <h1>{"Unpack your box"}</h1>
            <p>
              {
                "We guarantee the freshness of all our ingredients and deliver them in an insulated box right to your door."
              }
            </p>
            <img src={cheese} />
          </div>
          <div className="content-image">
            <img src={img3} />
          </div>
        </div>
        <div class="content-sections">
          <div className="content-text">
            <img src={fruit} />
            <h1>{"Create magic"}</h1>
            <p>
              {
                "Following our step-by-step instructions you’ll experience the magic of cooking recipes that our chefs create with your family’s tastes in mind."
              }
            </p>
            <img src={carrot} />
          </div>
          <div className="content-image">
            <img src={img4} />
          </div>
        </div>
      </div>

      <div className="offer-wrapper">
        <img src={img5} />
        <div className="offer-text">
          <h1>{"homemade burger"}</h1>
          <button id="offer">{"get started"}</button>
        </div>
      </div>

      <div className="footer">
        <ul id='categories'>
            <li>{"Categories"}</li>
            <li>{"About us"}</li>
            <li>{"Testimonial"}</li>
            <li>{"Contact"}</li>
            <li>{"Journal"}</li>
            <li>{"Privacy Policy"}</li>
        </ul>
        <ul id='partners'>
            <li>{'Partners'}</li>
            <li>{"Support"}</li>
            <li>{"Shipping & Returns"}</li>
            <li>{"Size Guide"}</li>
            <li>{"Product Care"}</li>
        </ul>
        <ul id='contacts'>
            <li>{'Contact Us'}</li>
            <li>{"26A Pagoda St, TANGS, Singapore, 058187"}</li>
            <li>{"+65 62215462"}</li>
        </ul>
        <ul id='socials'>
            <li>{'Follow Us'}</li>
            <li>{'facebook'}</li>
            <li>{'instagram'}</li>
            <li>{'twitter'}</li>
            <li>{'whatsapp'}</li>
        </ul>

      </div>
    </div>
  );
}

export default Homepage;
