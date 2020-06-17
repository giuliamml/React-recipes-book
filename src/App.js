import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Homepage from "./components/homepage";
import ProductsListingPage from "./components/ProductsListingPage.js";
import Navigation from "./components/navigation.js";
import ProductPage from "./components/ProductPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/home" component={Homepage}></Route>
        <Route exact path="/recipes" component={ProductsListingPage}></Route>
        <Route exact path="/recipe/:id" component={ProductPage}></Route>
      </Router>
    </div>
  );
}

export default App;
