import React from "react";
//components
import Navigation from "./navigation";
import Header from "./header";
import Offers from "./offers";
import Footer from "./footer";
//media-files
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import pasta from "../images/Shape1.svg";
import groceries from "../images/Shape2.svg";
import snack from "../images/Shape3.svg";
import cheese from "../images/Shape4.svg";
import fruit from "../images/Shape5.svg";
import carrot from "../images/Shape6.svg";

function Homepage() {


  const Content = () => {
    return (
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
    );
  };


  return (
    <div className="landing-page-wrapper">
      <Header />
      <Content />
      <Offers />
      <Footer />
    </div>
  );
}

export default Homepage;
