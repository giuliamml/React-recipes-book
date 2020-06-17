import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import RecipesPage from './components/recipesPage.js'
import Navigation from './components/navigation'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Route exact path='/home' component={Homepage}></Route>
        <Route exact path='/recipes' component={RecipesPage}></Route>

      </Router>
    </div>
  );
}

export default App;
