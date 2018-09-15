import React, { Component } from "react";
import "./public/css/style.css";
import "./public/css/bootstrap.css";
import "./public/js/bootstrap.js";
// import $ from "jquery";

import AddRecipe from "./components/AddRecipe";
import Recipes from "./components/Recipes";

// window.jQuery = $;

class App extends Component {
  render() {
    return (
      <div className="mt-10 bg-food">
        <div className="container">
          <AddRecipe />
          <Recipes />
        </div>
      </div>
    );
  }
}

export default App;
