import React, { Component } from "react";
import axios from "axios";

class Recipe extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleDelete = this.handleDelete.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
  }

  handleDelete() {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const id = this.props.recipe.id;
      axios.delete(`/api/delete/${id}`);
    }
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleIngredientsChange(event) {
    this.setState({ ingredients: event.target.value });
  }

  handleDirectionsChange(event) {
    this.setState({ directions: event.target.value });
  }

  componentDidMount() {
    this.setState({
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients,
      directions: this.props.recipe.directions
    });
  }
  render() {
    const recipe = this.props.recipe;
    let hrefLocation = "#" + recipe.id;
    // console.log("-----------", this.props.recipe);
    return (
      <div className="well">
        <h1>
          {recipe.name}
          <button
            className="btn btn-default pull-right"
            data-toggle="collapse"
            href={hrefLocation}
            aria-expanded="false"
            aria-controls={recipe.id}
          >
            <span
              class="glyphicon glyphicon-triangle-bottom"
              aria-hidden="true"
            />
          </button>
        </h1>

        <div className="collapse" id={recipe.id}>
          <br />
          <br />
          <p>
            <strong>Ingredients: </strong>
            {recipe.ingredients}
          </p>
          <p>
            <strong>Directions: </strong>
            {recipe.directions}
          </p>
          <br />
          <hr />
          <button
            className="btn btn-default edit-recipe"
            data-toggle="modal"
            data-target="#editFormModal"
            onClick={() => console.log(this.state.id)}
          >
            <span class="glyphicon glyphicon-edit" aria-hidden="true" />
          </button>
          <button
            className="btn btn-danger remove-recipe"
            onClick={this.handleDelete}
          >
            <span class="glyphicon glyphicon-remove" aria-hidden="true" />
          </button>
        </div>

        {/* <!-- Edit Form Modal --> */}
        <div
          class="modal fade"
          id="editFormModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="editFormModalLabel"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form onSubmit={this.handleSubmit}>
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h4 class="modal-title" id="myModalLabel">
                    Edit Recipe
                  </h4>
                </div>
                <div class="modal-body">
                  <div className="form-group">
                    <label>Recipe Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.handleNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ingredients</label>
                    <textarea
                      className="form-control"
                      value={this.state.ingredients}
                      onChange={this.handleIngredientsChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Directions</label>
                    <textarea
                      className="form-control"
                      value={this.state.directions}
                      onChange={this.handleDirectionsChange}
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <input type="submit" class="btn btn-primary" value="Save" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
