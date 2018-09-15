import React, { Component } from "react";
import axios from "axios";
import Recipe from "./Recipe";

class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("/api/recipes")
      .then(res => res.data)
      .then(recipes =>
        recipes.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase())
      )
      .then(sortedRecipes => this.setState({ recipes: sortedRecipes }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.recipes &&
          this.state.recipes.map(recipe => {
            return <Recipe key={recipe.id} recipe={recipe} />;
          })}
      </div>
    );
  }
}

export default Recipes;
