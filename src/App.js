import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./components/cart";

//components
import Homepage from "./components/homepage";
import ProductsListingPage from "./components/ProductsListingPage.js";
import Navigation from "./components/navigation.js";
import ProductPage from "./components/productPage.js";
import OrderCompleted from "./components/orderCompleted";
import CartCount from "./components/cartCount";

function App() {
  let id = window.location.pathname.split("/").slice(-1)[0];
  const [cart, setCart] = useState({ stateComponent: true });

  return (
    <div className="App">
      <Router>
        <Navigation>
          {cart.stateComponent ? (
            <CartCount />
          ) : null}
        </Navigation>
        <Route exact path="/home" component={Homepage}></Route>
        <Route exact path="/recipes" component={ProductsListingPage}></Route>
        <Route
          exact
          path="/recipe/:id"
          component={ProductPage}
          id={id}
          cart={cart}
          setCart={setCart}
        ></Route>
        <Route exact path="/cart" component={Cart} id={id}></Route>
        <Route
          exact
          path="/thankyou"
          component={OrderCompleted}
          id={id}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
